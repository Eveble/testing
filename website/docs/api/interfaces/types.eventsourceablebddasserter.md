---
id: "types.eventsourceablebddasserter"
title: "@eveble/testing"
sidebar_label: "EventSourceableBDDAsserter"
---

## Hierarchy

* **EventSourceableBDDAsserter**

## Implemented by

* [EventSourceableBDDAsserter](../classes/eventsourceablebddasserter.md)

## Index

### Methods

* [expect](types.eventsourceablebddasserter.md#expect)
* [expectState](types.eventsourceablebddasserter.md#expectstate)
* [expectToFailWith](types.eventsourceablebddasserter.md#expecttofailwith)
* [expectToInclude](types.eventsourceablebddasserter.md#expecttoinclude)
* [getApp](types.eventsourceablebddasserter.md#getapp)
* [getConfig](types.eventsourceablebddasserter.md#getconfig)
* [getExpectedEvents](types.eventsourceablebddasserter.md#getexpectedevents)
* [getExpectedScheduledCommands](types.eventsourceablebddasserter.md#getexpectedscheduledcommands)
* [getExpectedUnscheduledCommands](types.eventsourceablebddasserter.md#getexpectedunscheduledcommands)
* [getPublishedEvents](types.eventsourceablebddasserter.md#getpublishedevents)
* [getQueue](types.eventsourceablebddasserter.md#getqueue)
* [getSUT](types.eventsourceablebddasserter.md#getsut)
* [getScheduledCommands](types.eventsourceablebddasserter.md#getscheduledcommands)
* [getUnscheduledCommands](types.eventsourceablebddasserter.md#getunscheduledcommands)
* [given](types.eventsourceablebddasserter.md#given)
* [schedules](types.eventsourceablebddasserter.md#schedules)
* [throws](types.eventsourceablebddasserter.md#throws)
* [unschedules](types.eventsourceablebddasserter.md#unschedules)
* [when](types.eventsourceablebddasserter.md#when)

## Methods

###  expect

▸ **expect**(`expectedEvents`: EvebleTypes.Event[] | Function): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`expectedEvents` | EvebleTypes.Event[] &#124; Function |

**Returns:** *Promise‹void›*

▸ **expect**(`expectedEvents`: EvebleTypes.Event[] | Function): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`expectedEvents` | EvebleTypes.Event[] &#124; Function |

**Returns:** *Promise‹void›*

___

###  expectState

▸ **expectState**(`expectedState`: EvebleTypes.Props): *this*

**Parameters:**

Name | Type |
------ | ------ |
`expectedState` | EvebleTypes.Props |

**Returns:** *this*

▸ **expectState**(`expectedState`: EvebleTypes.Props): *this*

**Parameters:**

Name | Type |
------ | ------ |
`expectedState` | EvebleTypes.Props |

**Returns:** *this*

___

###  expectToFailWith

▸ **expectToFailWith**(`error`: any, `errorMessage?`: string): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`errorMessage?` | string |

**Returns:** *Promise‹void›*

▸ **expectToFailWith**(`error`: any, `errorMessage?`: string): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`errorMessage?` | string |

**Returns:** *Promise‹void›*

___

###  expectToInclude

▸ **expectToInclude**(`expectedEvents`: EvebleTypes.Event[] | Function): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`expectedEvents` | EvebleTypes.Event[] &#124; Function |

**Returns:** *Promise‹void›*

▸ **expectToInclude**(`expectedEvents`: EvebleTypes.Event[] | Function): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`expectedEvents` | EvebleTypes.Event[] &#124; Function |

**Returns:** *Promise‹void›*

___

###  getApp

▸ **getApp**(): *EvebleTypes.App*

**Returns:** *EvebleTypes.App*

▸ **getApp**(): *EvebleTypes.App*

**Returns:** *EvebleTypes.App*

___

###  getConfig

▸ **getConfig**(): *[TestConfig](../classes/testconfig.md)*

**Returns:** *[TestConfig](../classes/testconfig.md)*

▸ **getConfig**(): *TestConfig*

**Returns:** *TestConfig*

___

###  getExpectedEvents

▸ **getExpectedEvents**(): *EvebleTypes.Event[]*

**Returns:** *EvebleTypes.Event[]*

▸ **getExpectedEvents**(): *EvebleTypes.Event[]*

**Returns:** *EvebleTypes.Event[]*

___

###  getExpectedScheduledCommands

▸ **getExpectedScheduledCommands**(): *EvebleTypes.Command[]*

**Returns:** *EvebleTypes.Command[]*

▸ **getExpectedScheduledCommands**(): *EvebleTypes.Command[]*

**Returns:** *EvebleTypes.Command[]*

___

###  getExpectedUnscheduledCommands

▸ **getExpectedUnscheduledCommands**(): *EvebleTypes.Command[]*

**Returns:** *EvebleTypes.Command[]*

▸ **getExpectedUnscheduledCommands**(): *EvebleTypes.Command[]*

**Returns:** *EvebleTypes.Command[]*

___

###  getPublishedEvents

▸ **getPublishedEvents**(): *EvebleTypes.Event[]*

**Returns:** *EvebleTypes.Event[]*

▸ **getPublishedEvents**(): *EvebleTypes.Event[]*

**Returns:** *EvebleTypes.Event[]*

___

###  getQueue

▸ **getQueue**(): *EvebleTypes.Message[]*

**Returns:** *EvebleTypes.Message[]*

▸ **getQueue**(): *EvebleTypes.Message[]*

**Returns:** *EvebleTypes.Message[]*

___

###  getSUT

▸ **getSUT**(): *EvebleTypes.EventSourceableType*

**Returns:** *EvebleTypes.EventSourceableType*

▸ **getSUT**(): *EvebleTypes.EventSourceableType*

**Returns:** *EvebleTypes.EventSourceableType*

___

###  getScheduledCommands

▸ **getScheduledCommands**(): *EvebleTypes.Command[]*

**Returns:** *EvebleTypes.Command[]*

▸ **getScheduledCommands**(): *EvebleTypes.Command[]*

**Returns:** *EvebleTypes.Command[]*

___

###  getUnscheduledCommands

▸ **getUnscheduledCommands**(): *EvebleTypes.Command[]*

**Returns:** *EvebleTypes.Command[]*

▸ **getUnscheduledCommands**(): *EvebleTypes.Command[]*

**Returns:** *EvebleTypes.Command[]*

___

###  given

▸ **given**(`messages`: EvebleTypes.Message[]): *Promise‹this›*

**Parameters:**

Name | Type |
------ | ------ |
`messages` | EvebleTypes.Message[] |

**Returns:** *Promise‹this›*

▸ **given**(`messages`: EvebleTypes.Message[]): *Promise‹this›*

**Parameters:**

Name | Type |
------ | ------ |
`messages` | EvebleTypes.Message[] |

**Returns:** *Promise‹this›*

___

###  schedules

▸ **schedules**(`commands`: EvebleTypes.Command[]): *Promise‹this›*

**Parameters:**

Name | Type |
------ | ------ |
`commands` | EvebleTypes.Command[] |

**Returns:** *Promise‹this›*

▸ **schedules**(`commands`: EvebleTypes.Command[]): *Promise‹this›*

**Parameters:**

Name | Type |
------ | ------ |
`commands` | EvebleTypes.Command[] |

**Returns:** *Promise‹this›*

___

###  throws

▸ **throws**(`error`: any, `errorMessage`: string): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`errorMessage` | string |

**Returns:** *Promise‹void›*

▸ **throws**(`error`: any, `errorMessage`: string): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`errorMessage` | string |

**Returns:** *Promise‹void›*

___

###  unschedules

▸ **unschedules**(`commands`: EvebleTypes.Command[]): *Promise‹this›*

**Parameters:**

Name | Type |
------ | ------ |
`commands` | EvebleTypes.Command[] |

**Returns:** *Promise‹this›*

▸ **unschedules**(`commands`: EvebleTypes.Command[]): *Promise‹this›*

**Parameters:**

Name | Type |
------ | ------ |
`commands` | EvebleTypes.Command[] |

**Returns:** *Promise‹this›*

___

###  when

▸ **when**(`messages`: EvebleTypes.Message[]): *Promise‹this›*

**Parameters:**

Name | Type |
------ | ------ |
`messages` | EvebleTypes.Message[] |

**Returns:** *Promise‹this›*

▸ **when**(`messages`: EvebleTypes.Message[]): *Promise‹this›*

**Parameters:**

Name | Type |
------ | ------ |
`messages` | EvebleTypes.Message[] |

**Returns:** *Promise‹this›*
