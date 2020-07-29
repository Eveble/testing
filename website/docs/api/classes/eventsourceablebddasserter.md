---
id: "eventsourceablebddasserter"
title: "EventSourceableBDDAsserter"
sidebar_label: "EventSourceableBDDAsserter"
---

## Hierarchy

* **EventSourceableBDDAsserter**

## Implements

* [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)
* EventSourceableBDDAsserter

## Index

### Constructors

* [constructor](eventsourceablebddasserter.md#constructor)

### Methods

* [createCommit](eventsourceablebddasserter.md#createcommit)
* [delay](eventsourceablebddasserter.md#delay)
* [expect](eventsourceablebddasserter.md#expect)
* [expectState](eventsourceablebddasserter.md#expectstate)
* [expectToFailWith](eventsourceablebddasserter.md#expecttofailwith)
* [expectToInclude](eventsourceablebddasserter.md#expecttoinclude)
* [getApp](eventsourceablebddasserter.md#getapp)
* [getConfig](eventsourceablebddasserter.md#getconfig)
* [getExpectedEvents](eventsourceablebddasserter.md#getexpectedevents)
* [getExpectedScheduledCommands](eventsourceablebddasserter.md#getexpectedscheduledcommands)
* [getExpectedUnscheduledCommands](eventsourceablebddasserter.md#getexpectedunscheduledcommands)
* [getPublishedEvents](eventsourceablebddasserter.md#getpublishedevents)
* [getQueue](eventsourceablebddasserter.md#getqueue)
* [getSUT](eventsourceablebddasserter.md#getsut)
* [getScheduledCommands](eventsourceablebddasserter.md#getscheduledcommands)
* [getUnscheduledCommands](eventsourceablebddasserter.md#getunscheduledcommands)
* [given](eventsourceablebddasserter.md#given)
* [hasExpectedScheduledCommands](eventsourceablebddasserter.md#hasexpectedscheduledcommands)
* [onPublishedEvent](eventsourceablebddasserter.md#onpublishedevent)
* [onScheduleCommandSend](eventsourceablebddasserter.md#onschedulecommandsend)
* [onUnscheduleCommandSend](eventsourceablebddasserter.md#onunschedulecommandsend)
* [schedules](eventsourceablebddasserter.md#schedules)
* [throws](eventsourceablebddasserter.md#throws)
* [unschedules](eventsourceablebddasserter.md#unschedules)
* [when](eventsourceablebddasserter.md#when)

## Constructors

###  constructor

\+ **new EventSourceableBDDAsserter**(`sut`: EvebleTypes.EventSourceableType, `app`: EvebleTypes.App, `config`: [TestConfig](testconfig.md)): *[EventSourceableBDDAsserter](eventsourceablebddasserter.md)*

Creates an instance of EventSourceableBDDAsserter.
Creates an instance of EventSourceableBDDAsserter.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sut` | EvebleTypes.EventSourceableType | **S**ystem **U**nder **T**est as `EventSourceable` type constructor. |
`app` | EvebleTypes.App | Instance implementing `App` interface. |
`config` | [TestConfig](testconfig.md) | Instance of `TestConfig`.  |

**Returns:** *[EventSourceableBDDAsserter](eventsourceablebddasserter.md)*

## Methods

###  createCommit

▸ **createCommit**(`eventSourceableId`: string | EvebleTypes.Stringifiable, `version`: number, `events`: EvebleTypes.Event[]): *Promise‹EvebleTypes.Commit›*

Handles creation of `Commit` for `EventSourceable`.

**`async`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`eventSourceableId` | string &#124; EvebleTypes.Stringifiable | Identifier as string or `Guid` instance. |
`version` | number | Version of `EventSourceable`. |
`events` | EvebleTypes.Event[] | List of instances implementing `Event` interface. |

**Returns:** *Promise‹EvebleTypes.Commit›*

Instance implementing `Commit` interface.

___

###  delay

▸ **delay**(`timeInMs`: number): *Promise‹any›*

Adds synchronous delay.

**`remarks`** 
Public for easier stubbing.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`timeInMs` | number | Time of delay in milliseconds. |

**Returns:** *Promise‹any›*

Promise of delay instance.

___

###  expect

▸ **expect**(`expectedEvents?`: EvebleTypes.Event[] | Function): *Promise‹void›*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Creates test expectation describing the changes you exactly expect due to the specified
behavior(all events published must match).

**`async`** 

**`throws`** {AssertionError}
Thrown if assertion does match all expectation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`expectedEvents?` | EvebleTypes.Event[] &#124; Function | List of all expected `Events` that should be published on app. |

**Returns:** *Promise‹void›*

___

###  expectState

▸ **expectState**(`expectedState`: EvebleTypes.Props): *this*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Creates state expectation describing of the subject's properties after test.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`expectedState` | EvebleTypes.Props | Object with properties matching expected state. |

**Returns:** *this*

Promise of `this` instance.

___

###  expectToFailWith

▸ **expectToFailWith**(`error`: any, `errorMessage?`: string): *Promise‹void›*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Creates exception expectation.

**`async`** 

**`throws`** {Error}
Re-throws if catched error is not instance of `DomainError`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error` | any | Expected error type as subclass of `DomainError` type constructor. |
`errorMessage?` | string | Optional expected error message that should be thrown. |

**Returns:** *Promise‹void›*

___

###  expectToInclude

▸ **expectToInclude**(`expectedEvents?`: EvebleTypes.Event[] | Function): *Promise‹void›*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Creates test expectation describing the changes you partially expect due to the specified
behavior(only part of events published can match).

**`async`** 

**`throws`** {AssertionError}
Thrown if assertion does not include expectation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`expectedEvents?` | EvebleTypes.Event[] &#124; Function | List of partially expected `Events` that should be published on app. |

**Returns:** *Promise‹void›*

___

###  getApp

▸ **getApp**(): *EvebleTypes.App*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Returns application instance against which test is performed.

**Returns:** *EvebleTypes.App*

Instance implementing `App` interface.

___

###  getConfig

▸ **getConfig**(): *[TestConfig](testconfig.md)*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Returns testing configuration.

**Returns:** *[TestConfig](testconfig.md)*

Instance of `TestConfig`.

___

###  getExpectedEvents

▸ **getExpectedEvents**(): *EvebleTypes.Event[]*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Returns array of expected Events.

**Returns:** *EvebleTypes.Event[]*

List of expected instances of `Event`.

___

###  getExpectedScheduledCommands

▸ **getExpectedScheduledCommands**(): *EvebleTypes.Command[]*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Returns array of expected scheduled commands.

**Returns:** *EvebleTypes.Command[]*

List of expected scheduled commands.

___

###  getExpectedUnscheduledCommands

▸ **getExpectedUnscheduledCommands**(): *EvebleTypes.Command[]*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Returns array of expected unscheduled commands.

**Returns:** *EvebleTypes.Command[]*

List of expected unscheduled commands.

___

###  getPublishedEvents

▸ **getPublishedEvents**(): *EvebleTypes.Event[]*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Returns array of published Events.

**Returns:** *EvebleTypes.Event[]*

List of actually published instances of `Event`.

___

###  getQueue

▸ **getQueue**(): *EvebleTypes.Message[]*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Returns queue as array of `Messages` that will be send to application.

**Returns:** *EvebleTypes.Message[]*

List of queued instances of `Message`.

___

###  getSUT

▸ **getSUT**(): *EvebleTypes.EventSourceableType*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Returns system under test.

**Returns:** *EvebleTypes.EventSourceableType*

`EventSourceable` type constructor.

___

###  getScheduledCommands

▸ **getScheduledCommands**(): *EvebleTypes.Command[]*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Returns array of scheduled commands.

**Returns:** *EvebleTypes.Command[]*

List of actually scheduled commands.

___

###  getUnscheduledCommands

▸ **getUnscheduledCommands**(): *EvebleTypes.Command[]*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Returns array of unscheduled commands.

**Returns:** *EvebleTypes.Command[]*

List of actually unscheduled commands.

___

###  given

▸ **given**(`messages?`: EvebleTypes.Message[]): *Promise‹this›*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Describes the state **before** testing the behavior specified in this scenario(i.e.
**pre-conditions** to the test).

**`async`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`messages?` | EvebleTypes.Message[] | List of instances implementing `Message` interface. |

**Returns:** *Promise‹this›*

Promise of `this` instance.

___

###  hasExpectedScheduledCommands

▸ **hasExpectedScheduledCommands**(): *boolean*

Evaluates if test includes any expected scheduled commands.

**Returns:** *boolean*

Returns `true` if test includes scheduled commands, else `false`.

___

###  onPublishedEvent

▸ **onPublishedEvent**(`actualPublishedEvent`: EvebleTypes.Event): *void*

Callback for published events on `EventBus`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actualPublishedEvent` | EvebleTypes.Event | Instance implementing `Event` interface that was published on application through `EventBus`.  |

**Returns:** *void*

___

###  onScheduleCommandSend

▸ **onScheduleCommandSend**(`actualSendCommand`: EvebleTypes.Command): *void*

Hook for making scheduled command deliverable instantly on CommandBus.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actualSendCommand` | EvebleTypes.Command | Instance implementing `Command` interface.  |

**Returns:** *void*

___

###  onUnscheduleCommandSend

▸ **onUnscheduleCommandSend**(`actualSendCommand`: EvebleTypes.Command): *void*

Hook for adding unscheduled commands on system under test.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actualSendCommand` | EvebleTypes.Command | Instance implementing `Command` interface.  |

**Returns:** *void*

___

###  schedules

▸ **schedules**(`commands?`: EvebleTypes.Command[]): *Promise‹this›*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Adds scheduled commands that will be resolved immediately with application.

**`async`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`commands?` | EvebleTypes.Command[] | Instances implementing `Command` interface that should be scheduled in testing scenario. |

**Returns:** *Promise‹this›*

Promise of `this` instance.

___

###  throws

▸ **throws**(`error`: any, `errorMessage`: string): *Promise‹void›*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

**`alias`** expectToFailWith

**`async`** 

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`errorMessage` | string |

**Returns:** *Promise‹void›*

___

###  unschedules

▸ **unschedules**(`commands?`: EvebleTypes.Command[]): *Promise‹this›*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

Adds commands types that will be removed from scheduled queue thus will never be
send to application.

**`async`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`commands?` | EvebleTypes.Command[] | Instances implementing `Command` interface that should be unscheduled in testing scenario. |

**Returns:** *Promise‹this›*

Promise of `this` instance.

___

###  when

▸ **when**(`messages?`: EvebleTypes.Message[]): *Promise‹this›*

*Implementation of [EventSourceableBDDAsserter](../interfaces/types.eventsourceablebddasserter.md)*

The behavior that test scenario specifies. Adds message(s) that will be send
to application.

**`async`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`messages?` | EvebleTypes.Message[] | List of instances implementing `Message` interface. |

**Returns:** *Promise‹this›*

Promise of `this` instance.
