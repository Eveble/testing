import { ExtendableError, validate, Command, Event, kernel, BINDINGS, Assignment, ScheduleCommand, UnscheduleCommand, CommitReceiver, Guid, Commit, Config, define, EventSourceable, App } from '@eveble/eveble';
import { isEqual, some, omit, isFunction, isEmpty } from 'lodash';
import delay from 'delay';
import chai, { expect, assert } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { inspect } from 'util';
import { getTypeName } from '@eveble/helpers';

class TestError extends ExtendableError {
}
class InvalidAppError extends TestError {
    constructor() {
        super('Application was not provided for the test');
    }
}
class InvalidSUTError extends TestError {
    constructor(got) {
        super(`System Under Test(SUT) must be a valid subclass(constructor type) of EventSourceable like Aggregate or Process, got ${got}`);
    }
}
class InvalidExpectationError extends TestError {
    constructor() {
        super(`Provided scenario must have defined expectation with 'expect', 'expectToInclude'  or 'expectToFail' methods(only one!)`);
    }
}
class InvalidMessageError extends TestError {
    constructor(got) {
        super(`Provided item must be a valid domain message: Command or Event, got ${got}`);
    }
}

class ProcessedAssertion {
    constructor(actual, expected, actualReadable, expectedReadable) {
        this.actual = actual;
        this.expected = expected;
        this.actualReadable = actualReadable;
        this.expectedReadable = expectedReadable;
    }
}
const chaiStructAssertion = (chai, utils) => {
    const Assertion = chai.Assertion;
    function property(name, asserter) {
        utils.addProperty(Assertion.prototype, name, function () {
            asserter.apply(this, arguments);
        });
    }
    function method(name, asserter) {
        utils.addMethod(Assertion.prototype, name, function () {
            asserter.apply(this, arguments);
        });
    }
    function stringifyStruct(originalStruct, processedStruct) {
        return `${getTypeName(originalStruct)} ${inspect(processedStruct, {
            colors: true,
            depth: 10,
        })}\n`;
    }
    function processAssertion(actual, expected, untestedProps = []) {
        const processedActual = [];
        const processedExpected = [];
        const processedActualString = [];
        const processedExpectedString = [];
        for (const [index, actualStruct] of Object.entries(actual)) {
            processedActual[index] = omit(JSON.parse(JSON.stringify(actualStruct)), untestedProps);
            processedActualString[index] = stringifyStruct(actualStruct, processedActual[index]);
            const expectedStruct = expected[index];
            if (expectedStruct === undefined) {
                continue;
            }
            for (const key of Object.keys(actualStruct.getPropTypes())) {
                if (isFunction(expectedStruct[key])) {
                    validate(actualStruct[key], expectedStruct[key]);
                }
            }
        }
        for (const [index, expectedStruct] of Object.entries(expected)) {
            processedExpected[index] = omit(JSON.parse(JSON.stringify(expectedStruct)), untestedProps);
            processedExpectedString[index] = stringifyStruct(expectedStruct, processedExpected[index]);
        }
        return new ProcessedAssertion(processedActual, processedExpected, processedActualString, processedExpectedString);
    }
    method('structs', function (expected, untestedProps) {
        const have = utils.flag(this, 'have') || false;
        const include = utils.flag(this, 'include') || false;
        const negate = utils.flag(this, 'negate') || false;
        const actual = this._obj;
        const processed = processAssertion(actual, expected, untestedProps);
        const actualStringified = inspect(actual, {
            colors: true,
            depth: 10,
        });
        const expectedStringified = inspect(expected, {
            colors: true,
            depth: 10,
        });
        if (have) {
            if (negate) {
                return this.assert(isEqual(processed.actual, processed.expected), null, `expected ${actualStringified} to not have ${expectedStringified}`, processed.actualReadable.join(''), processed.expectedReadable.join(''), true);
            }
            return this.assert(isEqual(processed.actual, processed.expected), `expected ${actualStringified} to have ${expectedStringified}`, null, processed.actualReadable.join(''), processed.expectedReadable.join(''), true);
        }
        if (include) {
            for (const [index, struct] of Object.entries(processed.expected)) {
                const structStringified = inspect(struct, {
                    colors: true,
                    depth: 10,
                });
                const structName = getTypeName(expected[index]);
                this.assert(some(processed.actual, (actualStruct) => {
                    return isEqual(actualStruct, struct);
                }), `Expected struct \n ${structName} ${structStringified} to be includeed in ${actualStringified}`, `Expected struct \n ${structName} ${structStringified} to not be includeed in ${actualStringified}`, struct, processed.actualReadable.join(''));
            }
        }
    });
    property('have', function () {
        utils.flag(this, 'have', true);
        return this;
    });
    property('include', function () {
        utils.flag(this, 'include', true);
        return this;
    });
    chai.assert.haveArrayOfStructs = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.have.structs(expected, untestedProps);
    };
    chai.assert.notHaveArrayOfStructs = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.not.have.structs(expected, untestedProps);
    };
    chai.assert.includeArrayOfStructs = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.include.structs(expected, untestedProps);
    };
    chai.assert.notIncludeArrayOfStructs = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.not.include.structs(expected, untestedProps);
    };
};

chai.use(chaiStructAssertion);
chai.use(chaiAsPromised);
class EventSourceableBDDAsserter {
    constructor(sut, app, config) {
        this.sut = sut;
        this.app = app;
        this.config = config;
        this.queue = [];
        this.actual = {
            events: [],
            scheduledCommands: [],
            unscheduledCommands: [],
        };
        this.expected = {
            events: [],
            scheduledCommands: [],
            unscheduledCommands: [],
        };
        this.overrideExtendableErrorFillErrorPropsMethod();
    }
    getSUT() {
        return this.sut;
    }
    getApp() {
        return this.app;
    }
    getConfig() {
        return this.config;
    }
    getQueue() {
        return this.queue;
    }
    getExpectedEvents() {
        return this.expected.events;
    }
    getPublishedEvents() {
        return this.actual.events;
    }
    getScheduledCommands() {
        return this.actual.scheduledCommands;
    }
    getExpectedScheduledCommands() {
        return this.expected.scheduledCommands;
    }
    getUnscheduledCommands() {
        return this.actual.unscheduledCommands;
    }
    getExpectedUnscheduledCommands() {
        return this.expected.unscheduledCommands;
    }
    async given(messages = []) {
        if (messages === undefined) {
            return this;
        }
        const normalizedMessages = Array.isArray(messages) ? messages : [messages];
        const commands = [];
        const events = [];
        for (const message of normalizedMessages) {
            if (message instanceof Command) {
                commands.push(message);
            }
            else if (message instanceof Event) {
                events.push(message);
            }
            else {
                throw new InvalidMessageError(kernel.describer.describe(message));
            }
        }
        if (events.length > 0) {
            const eventSourceableId = events[0].sourceId;
            const version = events[0].version !== undefined ? events[0].version : 1;
            const commit = await this.createCommit(eventSourceableId, version, events);
            const commitStore = await this.app.injector.getAsync(BINDINGS.CommitStore);
            await commitStore.save(commit);
        }
        if (commands.length > 0) {
            this.queue = this.queue.concat(commands);
        }
        return this;
    }
    async when(messages = []) {
        this.queue = this.queue.concat(messages);
        return this;
    }
    async expect(expectedEvents = []) {
        await this.assertIsValid(expectedEvents, 'have');
    }
    async expectToInclude(expectedEvents = []) {
        await this.assertIsValid(expectedEvents, 'include');
    }
    async expectToFailWith(error, errorMessage) {
        this.test = async () => {
            if (errorMessage === undefined) {
                await expect(this.sendMessagesThroughApp()).to.eventually.be.rejectedWith(error);
            }
            else {
                await expect(this.sendMessagesThroughApp()).to.eventually.be.rejectedWith(error, errorMessage);
            }
        };
        await this.run();
    }
    async throws(error, errorMessage) {
        await this.expectToFailWith(error, errorMessage);
    }
    async schedules(commands = []) {
        const normalizedCommands = Array.isArray(commands) ? commands : [commands];
        for (const command of normalizedCommands) {
            const assignment = new Assignment({
                assignmentId: command.targetId,
                deliverAt: new Date(),
                assignerId: command.targetId,
                assignerType: this.sut.getTypeName(),
            });
            command.schedule(assignment);
        }
        this.expected.scheduledCommands = this.expected.scheduledCommands.concat(normalizedCommands);
        const commandBus = await this.app.injector.getAsync(BINDINGS.CommandBus);
        const boundHandler = this.onScheduleCommandSend.bind(this);
        boundHandler.original = this.onScheduleCommandSend;
        commandBus.onSend('on-scheduled-command', boundHandler, true);
        return this;
    }
    async unschedules(commands = []) {
        const normalizedCommands = Array.isArray(commands) ? commands : [commands];
        for (const command of normalizedCommands) {
            this.expected.unscheduledCommands.push(command);
        }
        const commandBus = await this.app.injector.getAsync(BINDINGS.CommandBus);
        const boundHandler = this.onUnscheduleCommandSend.bind(this);
        boundHandler.original = this.onUnscheduleCommandSend;
        commandBus.onSend('on-unschedule-command', boundHandler, true);
        return this;
    }
    expectState(expectedState) {
        this.expected.state = expectedState;
        return this;
    }
    async assertIsValid(expectedEvents, assertionType) {
        if (isFunction(expectedEvents)) {
            this.expected.events = expectedEvents();
        }
        else {
            this.expected.events = expectedEvents;
        }
        this.test = async () => {
            await this.sendMessagesThroughApp();
            if (this.hasExpectedScheduledCommands()) {
                const commandScheduler = await this.app.injector.getAsync(BINDINGS.CommandScheduler);
                const interval = commandScheduler.getInterval();
                await this.delay(interval * 2 + 500);
            }
            const untestedProps = this.config.get('untestedProperties');
            let asserter;
            if (assertionType === 'have') {
                asserter = assert.haveArrayOfStructs;
            }
            else {
                asserter = assert.includeArrayOfStructs;
            }
            asserter(this.actual.events, this.expected.events, untestedProps, 'List of actual published event does not match the expected ones');
            asserter(this.actual.unscheduledCommands, this.expected.unscheduledCommands, untestedProps, 'List of actual unscheduled commands does not match the expected ones');
            if (this.expected.state !== undefined) {
                const repository = this.app.injector.get(BINDINGS.EventSourceableRepository);
                const sutInstance = await repository.find(this.getSUT(), this.expected.state.id);
                assert.haveArrayOfStructs([sutInstance], [this.expected.state], untestedProps, 'Actual state does not match expected one ');
            }
        };
        await this.run();
    }
    hasExpectedScheduledCommands() {
        return this.getExpectedScheduledCommands().length > 0;
    }
    onPublishedEvent(actualPublishedEvent) {
        if (!this.ignoreNextEvent) {
            this.actual.events.push(actualPublishedEvent);
        }
        else {
            this.ignoreNextEvent = false;
        }
    }
    onScheduleCommandSend(actualSendCommand) {
        for (const expectedCommand of this.getExpectedScheduledCommands()) {
            if (actualSendCommand instanceof ScheduleCommand) {
                const actualScheduleCommand = actualSendCommand;
                const actualCommand = actualScheduleCommand.command;
                const assignment = actualCommand.getAssignment();
                if (this.isSameMessage(actualCommand, expectedCommand)) {
                    const deliverAt = new Date(new Date().getTime() - 1000);
                    assignment.deliverAt = deliverAt;
                    this.actual.scheduledCommands.push(actualCommand);
                }
            }
        }
    }
    onUnscheduleCommandSend(actualSendCommand) {
        if (actualSendCommand instanceof UnscheduleCommand) {
            this.actual.unscheduledCommands.push(actualSendCommand);
        }
    }
    async delay(timeInMs) {
        return delay(timeInMs);
    }
    overrideExtendableErrorFillErrorPropsMethod() {
        const originalFillErrorProps = ExtendableError.prototype.fillErrorProps;
        this.originalFillErrorProps = originalFillErrorProps;
        ExtendableError.prototype.fillErrorProps = function (...args) {
            const errorProps = originalFillErrorProps.apply(this, args);
            errorProps.stack = undefined;
            return errorProps;
        };
    }
    async createCommit(eventSourceableId, version, events) {
        const appId = this.app.config.get('appId');
        const versionedEvents = [];
        for (const event of events) {
            versionedEvents.push(new event.constructor({ ...event, version }));
        }
        const commitReceiver = new CommitReceiver({
            appId,
            receivedAt: new Date(),
            state: 'received',
        });
        const props = {
            id: new Guid().toString(),
            sourceId: eventSourceableId.toString(),
            version,
            eventSourceableType: this.sut.getTypeName(),
            commands: [],
            events: versionedEvents,
            insertedAt: new Date(),
            sentBy: appId,
            receivers: [commitReceiver],
        };
        const commitStore = await this.app.injector.getAsync(BINDINGS.CommitStore);
        const commitId = await commitStore.generateId();
        if (commitId !== undefined) {
            props.id = commitId.toString();
        }
        return new Commit(props);
    }
    setEventVersion(event, version) {
        event.version = version;
    }
    async run() {
        try {
            const eventBus = await this.app.injector.getAsync(BINDINGS.EventBus);
            const boundHandler = this.onPublishedEvent.bind(this);
            boundHandler.original = this.onPublishedEvent;
            eventBus.onPublish('on-publishing-events', boundHandler, true);
            if (this.test !== undefined) {
                await this.test();
            }
        }
        finally {
            await this.cleanup();
        }
    }
    async cleanup() {
        ExtendableError.prototype.fillErrorProps = this.originalFillErrorProps;
    }
    async sendMessagesThroughApp() {
        for (const message of this.queue) {
            if (message instanceof Command) {
                await this.app.send(message);
            }
            else {
                this.ignoreNextEvent = true;
                await this.app.publish(message);
            }
        }
    }
    isSameMessage(actualMessage, expectedMessage) {
        const untestedProps = this.config.get('untestedProperties');
        const processedActual = omit(JSON.parse(JSON.stringify(actualMessage)), untestedProps);
        const processedExpected = omit(JSON.parse(JSON.stringify(expectedMessage)), untestedProps);
        return isEqual(processedActual, processedExpected);
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

let TestConfig = class TestConfig extends Config {
    constructor(props) {
        super();
        this.untestedProperties = [
            'timestamp',
            'version',
            'metadata',
            'schemaVersion',
        ];
        if (props)
            Object.assign(this, this.processProps(props));
    }
};
TestConfig = __decorate([
    define()({ kind: 19, name: "TestConfig", properties: { "untestedProperties": { kind: 18, initializer: () => [
                    'timestamp',
                    'version',
                    'metadata',
                    'schemaVersion',
                ], type: Array, arguments: [{ kind: 2 }] } }, extends: { kind: 18, type: Config, arguments: [] } }),
    __metadata("design:paramtypes", [Object])
], TestConfig);

class Scenario {
    constructor(app, options = {}) {
        if (app === undefined) {
            throw new InvalidAppError();
        }
        this.app = app;
        this.asserter = options.asserter || EventSourceableBDDAsserter;
        this.config = options.config || new TestConfig();
        this.givenMessages = [];
        this.whenMessages = [];
        this.expected = {};
    }
    getApp() {
        return this.app;
    }
    getAsserter() {
        return this.asserter;
    }
    getSUT() {
        return this.sut;
    }
    test(sut) {
        if (sut === undefined ||
            sut.prototype === undefined ||
            !(sut.prototype instanceof EventSourceable)) {
            throw new InvalidSUTError(kernel.describer.describe(sut));
        }
        this.sut = sut;
        return this;
    }
    given(messages = []) {
        this.givenMessages = this.givenMessages.concat(messages);
        return this;
    }
    when(messages = []) {
        this.whenMessages = this.whenMessages.concat(messages);
        return this;
    }
    expect(events = []) {
        if (!isEmpty(this.expected.includedEvents) ||
            this.expected.error !== undefined) {
            throw new InvalidExpectationError();
        }
        if (this.expected.events === undefined)
            this.expected.events = [];
        this.expected.events = this.expected.events.concat(events);
        return this;
    }
    expectToInclude(includedEvents = []) {
        if (!isEmpty(this.expected.events) || this.expected.error !== undefined) {
            throw new InvalidExpectationError();
        }
        if (this.expected.includedEvents === undefined)
            this.expected.includedEvents = [];
        this.expected.includedEvents = this.expected.includedEvents.concat(includedEvents);
        return this;
    }
    expectToFailWith(error, errorMessage) {
        if (!isEmpty(this.expected.includedEvents) ||
            !isEmpty(this.expected.events)) {
            throw new InvalidExpectationError();
        }
        this.expected.error = error;
        if (errorMessage)
            this.expected.errorMessage = errorMessage;
        return this;
    }
    throws(error, errorMessage) {
        return this.expectToFailWith(error, errorMessage);
    }
    schedules(commands = []) {
        if (this.expected.scheduledCommands === undefined)
            this.expected.scheduledCommands = [];
        this.expected.scheduledCommands = this.expected.scheduledCommands.concat(commands);
        return this;
    }
    unschedules(commands = []) {
        if (this.expected.unscheduledCommands === undefined)
            this.expected.unscheduledCommands = [];
        this.expected.unscheduledCommands = this.expected.unscheduledCommands.concat(commands);
        return this;
    }
    async verify(expectedState) {
        if (this.sut === undefined) {
            throw new InvalidSUTError(kernel.describer.describe(this.sut));
        }
        if (this.app.isInState(App.STATES.constructed)) {
            await this.app.initialize();
        }
        await this.app.reset();
        if (!this.app.isInState(App.STATES.running)) {
            await this.app.start();
        }
        const asserter = new this.asserter(this.sut, this.app, this.config);
        await asserter.given(this.givenMessages);
        await asserter.when(this.whenMessages);
        if (this.expected.scheduledCommands) {
            await asserter.schedules(this.expected.scheduledCommands);
        }
        if (this.expected.unscheduledCommands) {
            await asserter.unschedules(this.expected.unscheduledCommands);
        }
        if (this.expected.error) {
            await asserter.expectToFailWith(this.expected.error, this.expected.errorMessage);
            return false;
        }
        if (expectedState !== undefined) {
            asserter.expectState(expectedState);
        }
        if (this.expected.includedEvents !== undefined &&
            !isEmpty(this.expected.includedEvents)) {
            await asserter.expectToInclude(this.expected.includedEvents);
        }
        else if (this.expected.events !== undefined) {
            await asserter.expect(this.expected.events);
        }
        else {
            throw new InvalidExpectationError();
        }
        return true;
    }
}

function on(app, options) {
    return new Scenario(app, options);
}

export { EventSourceableBDDAsserter, InvalidAppError, InvalidExpectationError, InvalidMessageError, InvalidSUTError, Scenario, TestConfig, TestError, chaiStructAssertion, on };
