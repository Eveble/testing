import { ExtendableError, Type, Config, validate, Command, Event, kernel, BINDINGS, Assignment, ScheduleCommand, UnscheduleCommand, CommitReceiver, Guid, Commit, EventSourceable, App } from '@eveble/eveble';
import { isEqual, some, omit, isFunction } from 'lodash';
import delay from 'delay';
import * as chai from 'chai';
import chai__default from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { METADATA_KEY } from '@parisholley/inversify-async';
import { inspect } from 'util';
import { getTypeName } from '@eveble/helpers';

class TestError extends ExtendableError {
}
class InvalidScenarioError extends TestError {
    constructor() {
        super('Please define testing scenario in valid, behavior driven form');
    }
}
class InvalidAppError extends TestError {
    constructor() {
        super('Application was not provided for the test');
    }
}
class InvalidEventSourceableError extends TestError {
    constructor(got) {
        super(`System Under Test(SUT) must be a valid subclass(constructor type) of EventSourceable like Aggregate or Process, got ${got}`);
    }
}
class EventSourceableFeatureMappingsNotFoundError extends TestError {
    constructor(eventSourceableName) {
        super(`Mapping for event sourceable '${eventSourceableName}' not found`);
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

class BaseChain {
    constructor(scenario) {
        this.scenario = scenario;
    }
}
class BaseThenChain extends BaseChain {
    async throws(_description, throwsFn) {
        this.scenario.throwsFn = throwsFn;
        await this.scenario.verify();
    }
}
class WhenThenChain extends BaseThenChain {
    schedules(_description, scheduledFn) {
        this.scenario.scheduledFn = scheduledFn;
        return this;
    }
    unschedules(_description, unscheduledFn) {
        this.scenario.unscheduledFn = unscheduledFn;
        return this;
    }
    async then(_description, thenFnOrOptions, thenFn) {
        if (typeof thenFnOrOptions === 'function') {
            this.scenario.thenFn = thenFnOrOptions;
        }
        else {
            this.scenario.thenFn = thenFn;
            this.scenario.setRuntimeOptions(thenFnOrOptions);
        }
        await this.scenario.verify();
    }
}
class GivenWhenThenChain extends BaseThenChain {
    schedules(_description, scheduledFn) {
        this.scenario.scheduledFn = scheduledFn;
        return this;
    }
    unschedules(_description, unscheduledFn) {
        this.scenario.unscheduledFn = unscheduledFn;
        return this;
    }
    async then(_description, thenFnOrOptions, thenFn) {
        if (typeof thenFnOrOptions === 'function') {
            this.scenario.thenFn = thenFnOrOptions;
        }
        else {
            this.scenario.thenFn = thenFn;
            this.scenario.setRuntimeOptions(thenFnOrOptions);
        }
        await this.scenario.verify();
    }
}
class GivenWhenChain extends BaseChain {
    when(_description, whenFn) {
        this.scenario.whenFn = whenFn;
        return new GivenWhenThenChain(this.scenario);
    }
}

/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

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
    Type()({ kind: 19, name: "TestConfig", properties: { "untestedProperties": { kind: 18, initializer: () => [
                    'timestamp',
                    'version',
                    'metadata',
                    'schemaVersion',
                ], type: Array, arguments: [{ kind: 2 }] } }, extends: { kind: 18, type: Config, arguments: [] } }),
    __metadata("design:paramtypes", [Object])
], TestConfig);

class ProcessedAssertion {
    constructor(actual, expected, actualReadable, expectedReadable) {
        this.actual = actual;
        this.expected = expected;
        this.actualReadable = actualReadable;
        this.expectedReadable = expectedReadable;
    }
}
const evebleChai = (chaiInstance, utils) => {
    const Assertion = chaiInstance.Assertion;
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
    function removeUnwantedProps(obj, untestedProps) {
        for (const key in obj) {
            if (untestedProps.includes(key)) {
                delete obj[key];
            }
            else if (typeof obj[key] === 'object') {
                removeUnwantedProps(obj[key], untestedProps);
            }
            else if (Array.isArray(obj[key])) {
                obj[key].forEach((item) => {
                    removeUnwantedProps(item, untestedProps);
                });
            }
        }
    }
    function processAssertion(actual, expected, untestedProps = [
        'timestamp',
        'version',
        'metadata',
        'schemaVersion',
        'createdAt',
        'updatedAt',
        'deletedAt',
    ]) {
        const processedActual = [];
        const processedExpected = [];
        const processedActualString = [];
        const processedExpectedString = [];
        let actualTarget = actual;
        if (Array.isArray(actual) === false) {
            actualTarget = [actual];
        }
        let expectedTarget = expected;
        if (Array.isArray(expected) === false) {
            expectedTarget = [expected];
        }
        for (const [index, actualStruct] of Object.entries(actualTarget)) {
            processedActual[index] = omit(JSON.parse(JSON.stringify(actualStruct)), untestedProps);
            removeUnwantedProps(processedActual, untestedProps);
            processedActualString[index] = stringifyStruct(actualStruct, processedActual[index]);
            const expectedStruct = expectedTarget[index];
            if (expectedStruct === undefined) {
                continue;
            }
            for (const key of Object.keys(actualStruct.getPropTypes())) {
                if (isFunction(expectedStruct[key])) {
                    validate(actualStruct[key], expectedStruct[key]);
                }
            }
        }
        for (const [index, expectedStruct] of Object.entries(expectedTarget)) {
            processedExpected[index] = omit(JSON.parse(JSON.stringify(expectedStruct)), untestedProps);
            removeUnwantedProps(processedExpected, untestedProps);
            processedExpectedString[index] = stringifyStruct(expectedStruct, processedExpected[index]);
        }
        return new ProcessedAssertion(processedActual, processedExpected, processedActualString, processedExpectedString);
    }
    function validateStructs(expected, untestedProps) {
        const have = utils.flag(this, 'have') || false;
        const include = utils.flag(this, 'include') || false;
        const negate = utils.flag(this, 'negate') || false;
        const actual = this._obj;
        const processed = processAssertion(actual, expected, untestedProps);
        const inspectOptions = { depth: 10, colors: true };
        const actualStringified = inspect(actual, inspectOptions);
        const expectedStringified = inspect(expected, inspectOptions);
        if (have) {
            if (negate) {
                return this.assert(isEqual(processed.actual, processed.expected), null, `expected ${actualStringified} to not have ${expectedStringified}`, processed.actualReadable.join(''), processed.expectedReadable.join(''), true);
            }
            return this.assert(isEqual(processed.actual, processed.expected), `expected ${actualStringified} to have ${expectedStringified}`, null, processed.actualReadable.join(''), processed.expectedReadable.join(''), true);
        }
        if (include) {
            for (const [index, struct] of Object.entries(processed.expected)) {
                const structStringified = inspect(struct, inspectOptions);
                const structName = getTypeName(expected[index]);
                this.assert(some(processed.actual, (actualStruct) => isEqual(actualStruct, struct)), `Expected struct \n ${structName} ${structStringified} to be included in ${actualStringified}`, `Expected struct \n ${structName} ${structStringified} to not be included in ${actualStringified}`, struct, processed.actualReadable.join(''));
            }
        }
    }
    method('events', validateStructs);
    method('structs', validateStructs);
    method('messages', validateStructs);
    method('commands', validateStructs);
    method('state', validateStructs);
    property('have', function () {
        utils.flag(this, 'have', true);
        return this;
    });
    property('include', function () {
        utils.flag(this, 'include', true);
        return this;
    });
    chai.assert.haveState = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.have.state(expected, untestedProps);
    };
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
    chai.assert.haveArrayOfMessages = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.have.messages(expected, untestedProps);
    };
    chai.assert.notHaveArrayOfMessages = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.not.have.messages(expected, untestedProps);
    };
    chai.assert.includeArrayOfMessages = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.include.messages(expected, untestedProps);
    };
    chai.assert.notIncludeArrayOfMessages = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.not.include.messages(expected, untestedProps);
    };
    chai.assert.haveArrayOfCommands = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.have.commands(expected, untestedProps);
    };
    chai.assert.notHaveArrayOfCommands = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.not.have.commands(expected, untestedProps);
    };
    chai.assert.includeArrayOfCommands = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.include.commands(expected, untestedProps);
    };
    chai.assert.notIncludeArrayOfCommands = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.not.include.commands(expected, untestedProps);
    };
    chai.assert.haveArrayOfEvents = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.have.events(expected, untestedProps);
    };
    chai.assert.notHaveArrayOfEvents = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.not.have.events(expected, untestedProps);
    };
    chai.assert.includeArrayOfEvents = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.include.events(expected, untestedProps);
    };
    chai.assert.notIncludeArrayOfEvents = function (actual, expected, untestedProps, message) {
        return new chai.Assertion(actual, message).to.not.include.events(expected, untestedProps);
    };
};

chai__default.use(evebleChai);
chai__default.use(chaiAsPromised);
class EventSourceableBDDAsserter {
    constructor(scenario) {
        this.scenario = scenario;
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
    getScenario() {
        return this.scenario;
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
            const commitStore = await this.scenario
                .getApp()
                .injector.getAsync(BINDINGS.CommitStore);
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
    async schedules(commands = []) {
        const normalizedCommands = Array.isArray(commands) ? commands : [commands];
        for (const command of normalizedCommands) {
            const assignment = new Assignment({
                assignmentId: command.targetId,
                deliverAt: new Date(),
                assignerId: command.targetId,
                assignerType: this.scenario.getSUT().getTypeName(),
            });
            command.schedule(assignment);
        }
        this.expected.scheduledCommands =
            this.expected.scheduledCommands.concat(normalizedCommands);
        const commandBus = await this.scenario
            .getApp()
            .injector.getAsync(BINDINGS.CommandBus);
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
        const commandBus = await this.scenario
            .getApp()
            .injector.getAsync(BINDINGS.CommandBus);
        const boundHandler = this.onUnscheduleCommandSend.bind(this);
        boundHandler.original = this.onUnscheduleCommandSend;
        commandBus.onSend('on-unschedule-command', boundHandler, true);
        return this;
    }
    async execute() {
        var _a;
        this.test = async () => {
            await this.sendMessagesThroughApp();
            if (this.hasExpectedScheduledCommands()) {
                const commandScheduler = await this.scenario
                    .getApp()
                    .injector.getAsync(BINDINGS.CommandScheduler);
                const interval = commandScheduler.getInterval();
                await this.delay(interval * 2 + 500);
            }
        };
        await this.run();
        const result = {
            events: this.actual.events,
            scheduled: this.actual.scheduledCommands,
            unscheduled: this.actual.unscheduledCommands,
        };
        if (((_a = this.scenario.options) === null || _a === void 0 ? void 0 : _a.targetId) !== undefined) {
            result.target = await this.resolveActualTargetState(this.scenario.options.targetId);
        }
        return result;
    }
    async resolveActualTargetState(id) {
        const repository = this.scenario
            .getApp()
            .injector.get(BINDINGS.EventSourceableRepository);
        const foundInstance = await repository.find(this.scenario.getSUT(), id.toString());
        if (foundInstance !== undefined) {
            this.removeDependencies(foundInstance);
            return foundInstance;
        }
        return undefined;
    }
    getEventTypeNameList(events) {
        const list = [];
        for (const event of events) {
            list.push(event.getTypeName());
        }
        return list;
    }
    removeDependencies(sutInstance) {
        const mappings = Reflect.getMetadata(METADATA_KEY.TAGGED_PROP, sutInstance.constructor);
        if (mappings) {
            for (const [key, metadatas] of Object.entries(mappings)) {
                for (const metadata of metadatas) {
                    if (metadata.key === 'inject') {
                        delete sutInstance[key];
                    }
                }
            }
        }
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
        const appId = this.scenario.getApp().config.get('appId');
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
            eventSourceableType: this.scenario.getSUT().getTypeName(),
            commands: [],
            events: versionedEvents,
            insertedAt: new Date(),
            sentBy: appId,
            receivers: [commitReceiver],
        };
        const commitStore = await this.scenario
            .getApp()
            .injector.getAsync(BINDINGS.CommitStore);
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
            const eventBus = await this.scenario
                .getApp()
                .injector.getAsync(BINDINGS.EventBus);
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
        ExtendableError.prototype.fillErrorProps =
            this.originalFillErrorProps;
    }
    async sendMessagesThroughApp() {
        for (const message of this.queue) {
            if (message instanceof Command) {
                await this.scenario.getApp().send(message);
            }
            else {
                this.ignoreNextEvent = true;
                await this.scenario.getApp().publish(message);
            }
        }
    }
    isSameMessage(actualMessage, expectedMessage) {
        const untestedProps = this.scenario.getConfig().get('untestedProperties');
        const processedActual = omit(JSON.parse(JSON.stringify(actualMessage)), untestedProps);
        const processedExpected = omit(JSON.parse(JSON.stringify(expectedMessage)), untestedProps);
        return isEqual(processedActual, processedExpected);
    }
}

class Feature {
    constructor(name, EventSourceableClass) {
        this.name = name;
        this.EventSourceableClass = EventSourceableClass;
    }
    static create(EventSourceableClass) {
        function feature(description, optionsOrCallback, callback) {
            let cb;
            let options = {};
            if (typeof optionsOrCallback === 'function') {
                cb = optionsOrCallback;
            }
            else {
                cb = callback;
                options = optionsOrCallback;
            }
            const instance = new Feature(description, EventSourceableClass);
            instance.setOptions(options);
            const eventSourceableName = EventSourceableClass.name;
            if (Feature.features.has(eventSourceableName) === false) {
                Feature.features.set(eventSourceableName, new Map());
            }
            const esFeatures = Feature.features.get(eventSourceableName);
            if (esFeatures === undefined) {
                throw new EventSourceableFeatureMappingsNotFoundError(eventSourceableName);
            }
            esFeatures.set(new Guid().toString(), instance);
            instance.execute(description, cb);
        }
        return { feature };
    }
    setScenario(scenario) {
        this.scenario = scenario;
    }
    setOptions(options) {
        this.options = options;
    }
    execute(description, callback) {
        it(description, async () => {
            await callback(this.generateApi());
        });
    }
    generateApi() {
        return {
            scenario: this.scenario,
        };
    }
}
Feature.features = new Map();

class Scenario {
    constructor(EventSourceableClass, app, config, asserter) {
        if (EventSourceableClass === undefined ||
            EventSourceableClass.prototype === undefined ||
            !(EventSourceableClass.prototype instanceof EventSourceable)) {
            throw new InvalidEventSourceableError(kernel.describer.describe(EventSourceableClass));
        }
        this.EventSourceableClass = EventSourceableClass;
        if (app === undefined) {
            throw new InvalidAppError();
        }
        this.app = app;
        this.config = config || new TestConfig();
        this.asserter = asserter || EventSourceableBDDAsserter;
    }
    static create(props) {
        const eventSourceableName = props.EventSourceable.name;
        const esFeatures = Feature.features.get(eventSourceableName);
        if (esFeatures === undefined) {
            throw new EventSourceableFeatureMappingsNotFoundError(eventSourceableName);
        }
        const scenario = new Scenario(props.EventSourceable, props.app, props.config);
        for (const feature of esFeatures.values()) {
            feature.setScenario(scenario);
        }
        return { scenario };
    }
    getEventSourceable() {
        return this.EventSourceableClass;
    }
    getApp() {
        return this.app;
    }
    getSUT() {
        return this.EventSourceableClass;
    }
    getAsserter() {
        return this.asserter;
    }
    getConfig() {
        return this.config;
    }
    setRuntimeOptions(options) {
        this.options = options;
    }
    getRuntimeOptions() {
        return this.options;
    }
    hasRuntimeOptions() {
        return this.options !== undefined;
    }
    given(_description, givenFn) {
        this.givenFn = givenFn;
        return new GivenWhenChain(this);
    }
    when(_description, whenFn) {
        this.whenFn = whenFn;
        return new WhenThenChain(this);
    }
    async verify() {
        if (this.isValidScenario() === false) {
            throw new InvalidScenarioError();
        }
        if (this.app.isInState(App.STATES.constructed)) {
            await this.app.initialize();
        }
        if (this.app.isInState(App.STATES.running) === false) {
            await this.app.start();
        }
        const asserter = new this.asserter(this);
        try {
            if (this.givenFn !== undefined) {
                await asserter.given(await this.givenFn());
            }
            if (this.whenFn !== undefined) {
                await asserter.when(await this.whenFn());
            }
            if (this.scheduledFn !== undefined) {
                await asserter.schedules(await this.scheduledFn());
            }
            if (this.unscheduledFn !== undefined) {
                await asserter.unschedules(await this.unscheduledFn());
            }
            const result = await asserter.execute();
            if (this.thenFn !== undefined) {
                await this.thenFn(result);
            }
        }
        catch (e) {
            if (this.throwsFn !== undefined) {
                await this.throwsFn(e);
            }
            else {
                throw e;
            }
        }
        finally {
            await this.reset();
        }
    }
    isValidScenario() {
        return ((this.givenFn !== undefined &&
            this.whenFn !== undefined &&
            this.thenFn !== undefined) ||
            (this.givenFn !== undefined &&
                this.whenFn !== undefined &&
                this.throwsFn !== undefined) ||
            (this.whenFn !== undefined && this.throwsFn !== undefined) ||
            (this.whenFn !== undefined && this.thenFn !== undefined) ||
            (this.whenFn !== undefined && this.throwsFn !== undefined));
    }
    async reset() {
        this.givenFn = undefined;
        this.whenFn = undefined;
        this.thenFn = undefined;
        this.throwsFn = undefined;
        this.scheduledFn = undefined;
        this.unscheduledFn = undefined;
        this.options = undefined;
    }
}

export { BaseChain, BaseThenChain, EventSourceableBDDAsserter, EventSourceableFeatureMappingsNotFoundError, Feature, GivenWhenChain, GivenWhenThenChain, InvalidAppError, InvalidEventSourceableError, InvalidExpectationError, InvalidMessageError, InvalidScenarioError, Scenario, TestConfig, TestError, WhenThenChain, evebleChai };
