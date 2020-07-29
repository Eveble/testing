---
id: "types.scenario"
title: "@eveble/testing"
sidebar_label: "Scenario"
---

## Hierarchy

* **Scenario**

## Implemented by

* [Scenario](../classes/scenario.md)

## Index

### Methods

* [expect](types.scenario.md#expect)
* [expectToFailWith](types.scenario.md#expecttofailwith)
* [expectToInclude](types.scenario.md#expecttoinclude)
* [getApp](types.scenario.md#getapp)
* [getAsserter](types.scenario.md#getasserter)
* [getSUT](types.scenario.md#getsut)
* [given](types.scenario.md#given)
* [schedules](types.scenario.md#schedules)
* [test](types.scenario.md#test)
* [throws](types.scenario.md#throws)
* [unschedules](types.scenario.md#unschedules)
* [verify](types.scenario.md#verify)
* [when](types.scenario.md#when)

## Methods

###  expect

▸ **expect**(`events`: EvebleTypes.Event[]): *this*

**Parameters:**

Name | Type |
------ | ------ |
`events` | EvebleTypes.Event[] |

**Returns:** *this*

▸ **expect**(`events`: EvebleTypes.Event[]): *this*

**Parameters:**

Name | Type |
------ | ------ |
`events` | EvebleTypes.Event[] |

**Returns:** *this*

___

###  expectToFailWith

▸ **expectToFailWith**(`error`: any, `errorMessage?`: string): *this*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`errorMessage?` | string |

**Returns:** *this*

▸ **expectToFailWith**(`error`: any, `errorMessage?`: string): *this*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`errorMessage?` | string |

**Returns:** *this*

___

###  expectToInclude

▸ **expectToInclude**(`includedEvents`: EvebleTypes.Event[]): *this*

**Parameters:**

Name | Type |
------ | ------ |
`includedEvents` | EvebleTypes.Event[] |

**Returns:** *this*

▸ **expectToInclude**(`includedEvents`: EvebleTypes.Event[]): *this*

**Parameters:**

Name | Type |
------ | ------ |
`includedEvents` | EvebleTypes.Event[] |

**Returns:** *this*

___

###  getApp

▸ **getApp**(): *EvebleTypes.App*

**Returns:** *EvebleTypes.App*

▸ **getApp**(): *EvebleTypes.App*

**Returns:** *EvebleTypes.App*

___

###  getAsserter

▸ **getAsserter**(): *[EventSourceableBDDAsserterType](types.eventsourceablebddassertertype.md)*

**Returns:** *[EventSourceableBDDAsserterType](types.eventsourceablebddassertertype.md)*

▸ **getAsserter**(): *EventSourceableBDDAsserterType*

**Returns:** *EventSourceableBDDAsserterType*

___

###  getSUT

▸ **getSUT**(): *EvebleTypes.EventSourceableType*

**Returns:** *EvebleTypes.EventSourceableType*

▸ **getSUT**(): *EvebleTypes.EventSourceableType*

**Returns:** *EvebleTypes.EventSourceableType*

___

###  given

▸ **given**(`messages`: EvebleTypes.Message[]): *this*

**Parameters:**

Name | Type |
------ | ------ |
`messages` | EvebleTypes.Message[] |

**Returns:** *this*

▸ **given**(`messages`: EvebleTypes.Message[]): *this*

**Parameters:**

Name | Type |
------ | ------ |
`messages` | EvebleTypes.Message[] |

**Returns:** *this*

___

###  schedules

▸ **schedules**(`commands`: EvebleTypes.Command[]): *this*

**Parameters:**

Name | Type |
------ | ------ |
`commands` | EvebleTypes.Command[] |

**Returns:** *this*

▸ **schedules**(`commands`: EvebleTypes.Command[]): *this*

**Parameters:**

Name | Type |
------ | ------ |
`commands` | EvebleTypes.Command[] |

**Returns:** *this*

___

###  test

▸ **test**(`sut`: EvebleTypes.EventSourceableType): *this*

**Parameters:**

Name | Type |
------ | ------ |
`sut` | EvebleTypes.EventSourceableType |

**Returns:** *this*

▸ **test**(`sut`: EvebleTypes.EventSourceableType): *this*

**Parameters:**

Name | Type |
------ | ------ |
`sut` | EvebleTypes.EventSourceableType |

**Returns:** *this*

___

###  throws

▸ **throws**(`error`: any, `errorMessage?`: string): *this*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`errorMessage?` | string |

**Returns:** *this*

▸ **throws**(`error`: any, `errorMessage?`: string): *this*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`errorMessage?` | string |

**Returns:** *this*

___

###  unschedules

▸ **unschedules**(`commands`: EvebleTypes.Command[]): *this*

**Parameters:**

Name | Type |
------ | ------ |
`commands` | EvebleTypes.Command[] |

**Returns:** *this*

▸ **unschedules**(`commands`: EvebleTypes.Command[]): *this*

**Parameters:**

Name | Type |
------ | ------ |
`commands` | EvebleTypes.Command[] |

**Returns:** *this*

___

###  verify

▸ **verify**(`config`: [TestConfig](../classes/testconfig.md)): *Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [TestConfig](../classes/testconfig.md) |

**Returns:** *Promise‹boolean›*

▸ **verify**(`config`: TestConfig): *Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`config` | TestConfig |

**Returns:** *Promise‹boolean›*

___

###  when

▸ **when**(`messages`: EvebleTypes.Message[]): *this*

**Parameters:**

Name | Type |
------ | ------ |
`messages` | EvebleTypes.Message[] |

**Returns:** *this*

▸ **when**(`messages`: EvebleTypes.Message[]): *this*

**Parameters:**

Name | Type |
------ | ------ |
`messages` | EvebleTypes.Message[] |

**Returns:** *this*
