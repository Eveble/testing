'use strict';

var eveble = require('@eveble/eveble');
var lodash = require('lodash');
var delay = require('delay');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var inversifyAsync = require('@parisholley/inversify-async');
var util = require('util');
var helpers = require('@eveble/helpers');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var chai__namespace = /*#__PURE__*/_interopNamespaceDefault(chai);

class TestError extends eveble.ExtendableError {
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

exports.TestConfig = class TestConfig extends eveble.Config {
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
exports.TestConfig = __decorate([
    eveble.Type()({ kind: 19, name: "TestConfig", properties: { "untestedProperties": { kind: 18, initializer: () => [
                    'timestamp',
                    'version',
                    'metadata',
                    'schemaVersion',
                ], type: Array, arguments: [{ kind: 2 }] } }, extends: { kind: 18, type: eveble.Config, arguments: [] } }),
    __metadata("design:paramtypes", [Object])
], exports.TestConfig);

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
        return `${helpers.getTypeName(originalStruct)} ${util.inspect(processedStruct, {
            colors: true,
            depth: 10,
        })}\n`;
    }
    function processAssertion(actual, expected, untestedProps = [
        'timestamp',
        'version',
        'metadata',
        'schemaVersion',
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
            processedActual[index] = lodash.omit(JSON.parse(JSON.stringify(actualStruct)), untestedProps);
            processedActualString[index] = stringifyStruct(actualStruct, processedActual[index]);
            const expectedStruct = expectedTarget[index];
            if (expectedStruct === undefined) {
                continue;
            }
            for (const key of Object.keys(actualStruct.getPropTypes())) {
                if (lodash.isFunction(expectedStruct[key])) {
                    eveble.validate(actualStruct[key], expectedStruct[key]);
                }
            }
        }
        for (const [index, expectedStruct] of Object.entries(expectedTarget)) {
            processedExpected[index] = lodash.omit(JSON.parse(JSON.stringify(expectedStruct)), untestedProps);
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
        const actualStringified = util.inspect(actual, {
            colors: true,
            depth: 10,
        });
        const expectedStringified = util.inspect(expected, {
            colors: true,
            depth: 10,
        });
        if (have) {
            if (negate) {
                return this.assert(lodash.isEqual(processed.actual, processed.expected), null, `expected ${actualStringified} to not have ${expectedStringified}`, processed.actualReadable.join(''), processed.expectedReadable.join(''), true);
            }
            return this.assert(lodash.isEqual(processed.actual, processed.expected), `expected ${actualStringified} to have ${expectedStringified}`, null, processed.actualReadable.join(''), processed.expectedReadable.join(''), true);
        }
        if (include) {
            for (const [index, struct] of Object.entries(processed.expected)) {
                const structStringified = util.inspect(struct, {
                    colors: true,
                    depth: 10,
                });
                const structName = helpers.getTypeName(expected[index]);
                this.assert(lodash.some(processed.actual, (actualStruct) => lodash.isEqual(actualStruct, struct)), `Expected struct \n ${structName} ${structStringified} to be includeed in ${actualStringified}`, `Expected struct \n ${structName} ${structStringified} to not be includeed in ${actualStringified}`, struct, processed.actualReadable.join(''));
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
    chai__namespace.assert.haveState = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.have.state(expected, untestedProps);
    };
    chai__namespace.assert.haveArrayOfStructs = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.have.structs(expected, untestedProps);
    };
    chai__namespace.assert.notHaveArrayOfStructs = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.not.have.structs(expected, untestedProps);
    };
    chai__namespace.assert.includeArrayOfStructs = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.include.structs(expected, untestedProps);
    };
    chai__namespace.assert.notIncludeArrayOfStructs = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.not.include.structs(expected, untestedProps);
    };
    chai__namespace.assert.haveArrayOfMessages = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.have.messages(expected, untestedProps);
    };
    chai__namespace.assert.notHaveArrayOfMessages = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.not.have.messages(expected, untestedProps);
    };
    chai__namespace.assert.includeArrayOfMessages = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.include.messages(expected, untestedProps);
    };
    chai__namespace.assert.notIncludeArrayOfMessages = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.not.include.messages(expected, untestedProps);
    };
    chai__namespace.assert.haveArrayOfCommands = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.have.commands(expected, untestedProps);
    };
    chai__namespace.assert.notHaveArrayOfCommands = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.not.have.commands(expected, untestedProps);
    };
    chai__namespace.assert.includeArrayOfCommands = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.include.commands(expected, untestedProps);
    };
    chai__namespace.assert.notIncludeArrayOfCommands = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.not.include.commands(expected, untestedProps);
    };
    chai__namespace.assert.haveArrayOfEvents = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.have.events(expected, untestedProps);
    };
    chai__namespace.assert.notHaveArrayOfEvents = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.not.have.events(expected, untestedProps);
    };
    chai__namespace.assert.includeArrayOfEvents = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.include.events(expected, untestedProps);
    };
    chai__namespace.assert.notIncludeArrayOfEvents = function (actual, expected, untestedProps, message) {
        return new chai__namespace.Assertion(actual, message).to.not.include.events(expected, untestedProps);
    };
};

chai.use(evebleChai);
chai.use(chaiAsPromised);
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
            if (message instanceof eveble.Command) {
                commands.push(message);
            }
            else if (message instanceof eveble.Event) {
                events.push(message);
            }
            else {
                throw new InvalidMessageError(eveble.kernel.describer.describe(message));
            }
        }
        if (events.length > 0) {
            const eventSourceableId = events[0].sourceId;
            const version = events[0].version !== undefined ? events[0].version : 1;
            const commit = await this.createCommit(eventSourceableId, version, events);
            const commitStore = await this.scenario
                .getApp()
                .injector.getAsync(eveble.BINDINGS.CommitStore);
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
            const assignment = new eveble.Assignment({
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
            .injector.getAsync(eveble.BINDINGS.CommandBus);
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
            .injector.getAsync(eveble.BINDINGS.CommandBus);
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
                    .injector.getAsync(eveble.BINDINGS.CommandScheduler);
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
            .injector.get(eveble.BINDINGS.EventSourceableRepository);
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
        const mappings = Reflect.getMetadata(inversifyAsync.METADATA_KEY.TAGGED_PROP, sutInstance.constructor);
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
            if (actualSendCommand instanceof eveble.ScheduleCommand) {
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
        if (actualSendCommand instanceof eveble.UnscheduleCommand) {
            this.actual.unscheduledCommands.push(actualSendCommand);
        }
    }
    async delay(timeInMs) {
        return delay(timeInMs);
    }
    overrideExtendableErrorFillErrorPropsMethod() {
        const originalFillErrorProps = eveble.ExtendableError.prototype.fillErrorProps;
        this.originalFillErrorProps = originalFillErrorProps;
        eveble.ExtendableError.prototype.fillErrorProps = function (...args) {
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
        const commitReceiver = new eveble.CommitReceiver({
            appId,
            receivedAt: new Date(),
            state: 'received',
        });
        const props = {
            id: new eveble.Guid().toString(),
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
            .injector.getAsync(eveble.BINDINGS.CommitStore);
        const commitId = await commitStore.generateId();
        if (commitId !== undefined) {
            props.id = commitId.toString();
        }
        return new eveble.Commit(props);
    }
    setEventVersion(event, version) {
        event.version = version;
    }
    async run() {
        try {
            const eventBus = await this.scenario
                .getApp()
                .injector.getAsync(eveble.BINDINGS.EventBus);
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
        eveble.ExtendableError.prototype.fillErrorProps =
            this.originalFillErrorProps;
    }
    async sendMessagesThroughApp() {
        for (const message of this.queue) {
            if (message instanceof eveble.Command) {
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
        const processedActual = lodash.omit(JSON.parse(JSON.stringify(actualMessage)), untestedProps);
        const processedExpected = lodash.omit(JSON.parse(JSON.stringify(expectedMessage)), untestedProps);
        return lodash.isEqual(processedActual, processedExpected);
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
            esFeatures.set(new eveble.Guid().toString(), instance);
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
            !(EventSourceableClass.prototype instanceof eveble.EventSourceable)) {
            throw new InvalidEventSourceableError(eveble.kernel.describer.describe(EventSourceableClass));
        }
        this.EventSourceableClass = EventSourceableClass;
        if (app === undefined) {
            throw new InvalidAppError();
        }
        this.app = app;
        this.config = config || new exports.TestConfig();
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
        if (this.app.isInState(eveble.App.STATES.constructed)) {
            await this.app.initialize();
        }
        if (this.app.isInState(eveble.App.STATES.running) === false) {
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

exports.BaseChain = BaseChain;
exports.BaseThenChain = BaseThenChain;
exports.EventSourceableBDDAsserter = EventSourceableBDDAsserter;
exports.EventSourceableFeatureMappingsNotFoundError = EventSourceableFeatureMappingsNotFoundError;
exports.Feature = Feature;
exports.GivenWhenChain = GivenWhenChain;
exports.GivenWhenThenChain = GivenWhenThenChain;
exports.InvalidAppError = InvalidAppError;
exports.InvalidEventSourceableError = InvalidEventSourceableError;
exports.InvalidExpectationError = InvalidExpectationError;
exports.InvalidMessageError = InvalidMessageError;
exports.InvalidScenarioError = InvalidScenarioError;
exports.Scenario = Scenario;
exports.TestError = TestError;
exports.WhenThenChain = WhenThenChain;
exports.evebleChai = evebleChai;
