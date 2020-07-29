---
id: "scenario"
title: "Scenario"
sidebar_label: "Scenario"
---

## Hierarchy

* **Scenario**

## Implements

* [Scenario](../interfaces/types.scenario.md)
* Scenario

## Index

### Constructors

* [constructor](scenario.md#constructor)

### Methods

* [expect](scenario.md#expect)
* [expectToFailWith](scenario.md#expecttofailwith)
* [expectToInclude](scenario.md#expecttoinclude)
* [getApp](scenario.md#getapp)
* [getAsserter](scenario.md#getasserter)
* [getSUT](scenario.md#getsut)
* [given](scenario.md#given)
* [schedules](scenario.md#schedules)
* [test](scenario.md#test)
* [throws](scenario.md#throws)
* [unschedules](scenario.md#unschedules)
* [verify](scenario.md#verify)
* [when](scenario.md#when)

## Constructors

###  constructor

\+ **new Scenario**(`app`: EvebleTypes.App, `options?`: object): *[Scenario](scenario.md)*

Creates an instance of `Scenario`.
Creates an instance of `Scenario`.

**Parameters:**

▪ **app**: *EvebleTypes.App*

Instance implementing `App` interface.

▪`Optional`  **options**: *object*

Name | Type |
------ | ------ |
`asserter?` | [EventSourceableBDDAsserterType](../interfaces/types.eventsourceablebddassertertype.md) |
`config?` | [TestConfig](testconfig.md) |

**Returns:** *[Scenario](scenario.md)*

## Methods

###  expect

▸ **expect**(`events?`: EvebleTypes.Event[]): *this*

*Implementation of [Scenario](../interfaces/types.scenario.md)*

Creates test expectation describing the changes you exactly expect due to the specified
behavior(all events published must match).

**`throws`** {InvalidExpectationError}
Thrown if expectation for error already exists.

**Parameters:**

Name | Type |
------ | ------ |
`events?` | EvebleTypes.Event[] |

**Returns:** *this*

Instance of `this`.

___

###  expectToFailWith

▸ **expectToFailWith**(`error`: any, `errorMessage?`: string): *this*

*Implementation of [Scenario](../interfaces/types.scenario.md)*

Creates **exception** expectation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error` | any | Expected error type as subclass of `DomainError` type constructor. |
`errorMessage?` | string | Optional expected error message that should be thrown. |

**Returns:** *this*

Instance of `this`.

___

###  expectToInclude

▸ **expectToInclude**(`includedEvents?`: EvebleTypes.Event[]): *this*

*Implementation of [Scenario](../interfaces/types.scenario.md)*

Creates test expectation describing the changes you partially expect due to the specified
behavior(only part of events published can match).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`includedEvents?` | EvebleTypes.Event[] | List of partially expected `Events` that should be published on app. |

**Returns:** *this*

Instance of `this`.

___

###  getApp

▸ **getApp**(): *EvebleTypes.App*

*Implementation of [Scenario](../interfaces/types.scenario.md)*

Returns application instance against which test is performed.

**Returns:** *EvebleTypes.App*

Instance implementing `App` interface.

___

###  getAsserter

▸ **getAsserter**(): *[EventSourceableBDDAsserterType](../interfaces/types.eventsourceablebddassertertype.md)*

*Implementation of [Scenario](../interfaces/types.scenario.md)*

Returns asserter constructor implementing `EventSourceableBDDAsserterType` interface.

**Returns:** *[EventSourceableBDDAsserterType](../interfaces/types.eventsourceablebddassertertype.md)*

Instance implementing `EventSourceableBDDAsserterType` interface.

___

###  getSUT

▸ **getSUT**(): *EvebleTypes.EventSourceableType*

*Implementation of [Scenario](../interfaces/types.scenario.md)*

Returns system under test.

**Returns:** *EvebleTypes.EventSourceableType*

`EventSourceable` type constructor.

___

###  given

▸ **given**(`messages?`: EvebleTypes.Message[]): *this*

*Implementation of [Scenario](../interfaces/types.scenario.md)*

/**
Describes the state **before** testing the behavior specified in this scenario(i.e.
**pre-conditions** to the test).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`messages?` | EvebleTypes.Message[] | List of instances implementing `Message` interface. |

**Returns:** *this*

Instance of `this`.

___

###  schedules

▸ **schedules**(`commands?`: EvebleTypes.Command[]): *this*

*Implementation of [Scenario](../interfaces/types.scenario.md)*

Adds scheduled commands that will be resolved immediately with application.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`commands?` | EvebleTypes.Command[] | Instances implementing `Command` interface that should be scheduled in testing scenario. |

**Returns:** *this*

Instance of `this`.

___

###  test

▸ **test**(`sut`: EvebleTypes.EventSourceableType): *this*

*Implementation of [Scenario](../interfaces/types.scenario.md)*

Sets **S**ystem **U**nder **T**est.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sut` | EvebleTypes.EventSourceableType | Constructor type implementing `EventSourceableType` interface. |

**Returns:** *this*

Instance of `this`.

___

###  throws

▸ **throws**(`error`: any, `errorMessage?`: string): *this*

*Implementation of [Scenario](../interfaces/types.scenario.md)*

**`alias`** expectToFailWith

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`errorMessage?` | string |

**Returns:** *this*

___

###  unschedules

▸ **unschedules**(`commands?`: EvebleTypes.Command[]): *this*

*Implementation of [Scenario](../interfaces/types.scenario.md)*

Adds commands types that will be removed from scheduled queue thus will never be
send to application.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`commands?` | EvebleTypes.Command[] | Instances implementing `Command` interface that should be unscheduled in testing scenario. |

**Returns:** *this*

Instance of `this`.

___

###  verify

▸ **verify**(`expectedState?`: EvebleTypes.Props): *Promise‹boolean›*

*Implementation of [Scenario](../interfaces/types.scenario.md)*

Verify the assertion.

**`throws`** {AssertionError}
Thrown if assertion does not match expectation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`expectedState?` | EvebleTypes.Props | Optional object with properties matching expected state. |

**Returns:** *Promise‹boolean›*

Returns `true` if assertion is truthful, else throws.

___

###  when

▸ **when**(`messages?`: EvebleTypes.Message[]): *this*

*Implementation of [Scenario](../interfaces/types.scenario.md)*

The behavior that test scenario specifies. Adds message(s) that will be send
to application.

**`async`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`messages?` | EvebleTypes.Message[] | List of instances implementing `Message` interface. |

**Returns:** *this*

Instance of `this`.
