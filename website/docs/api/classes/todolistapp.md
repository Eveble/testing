---
id: "todolistapp"
title: "TodoListApp"
sidebar_label: "TodoListApp"
---

## Type parameters

▪ **T**: *SuperConstructor*

## Hierarchy

* App

  ↳ **TodoListApp**

## Implements

* Stateful
* Stateful
* Module
* BaseApp

## Index

### Constructors

* [constructor](todolistapp.md#constructor)

### Properties

* [app](todolistapp.md#optional-app)
* [config](todolistapp.md#config)
* [envFilePath](todolistapp.md#readonly-envfilepath)
* [injector](todolistapp.md#injector)
* [log](todolistapp.md#log)
* [modules](todolistapp.md#modules)
* [state](todolistapp.md#state)
* [STATES](todolistapp.md#static-states)

### Methods

* [afterShutdown](todolistapp.md#aftershutdown)
* [configure](todolistapp.md#configure)
* [debug](todolistapp.md#debug)
* [getSelectableStates](todolistapp.md#getselectablestates)
* [getState](todolistapp.md#getstate)
* [hasState](todolistapp.md#hasstate)
* [initialize](todolistapp.md#initialize)
* [invokeAction](todolistapp.md#invokeaction)
* [isCommandScheduling](todolistapp.md#iscommandscheduling)
* [isInDevelopment](todolistapp.md#isindevelopment)
* [isInOneOfStates](todolistapp.md#isinoneofstates)
* [isInProduction](todolistapp.md#isinproduction)
* [isInState](todolistapp.md#isinstate)
* [isSnapshotting](todolistapp.md#issnapshotting)
* [onProcessSignal](todolistapp.md#onprocesssignal)
* [publish](todolistapp.md#publish)
* [reset](todolistapp.md#reset)
* [send](todolistapp.md#send)
* [setState](todolistapp.md#setstate)
* [shutdown](todolistapp.md#shutdown)
* [start](todolistapp.md#start)
* [stop](todolistapp.md#stop)
* [subscribeTo](todolistapp.md#subscribeto)
* [validateState](todolistapp.md#validatestate)

## Constructors

###  constructor

\+ **new TodoListApp**(`props?`: types.ModuleProps & object): *[TodoListApp](todolistapp.md)*

*Inherited from [CustomerApp](customerapp.md).[constructor](customerapp.md#constructor)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`props?` | types.ModuleProps & object |

**Returns:** *[TodoListApp](todolistapp.md)*

## Properties

### `Optional` app

• **app**? : *BaseApp*

*Inherited from [CustomerApp](customerapp.md).[app](customerapp.md#optional-app)*

___

###  config

• **config**: *AppConfig*

*Inherited from [CustomerApp](customerapp.md).[config](customerapp.md#config)*

*Overrides void*

___

### `Readonly` envFilePath

• **envFilePath**: *string*

*Inherited from [CustomerApp](customerapp.md).[envFilePath](customerapp.md#readonly-envfilepath)*

___

###  injector

• **injector**: *EvebleTypes.Injector*

*Overrides void*

___

###  log

• **log**: *Logger*

*Inherited from [CustomerApp](customerapp.md).[log](customerapp.md#log)*

*Overrides void*

___

###  modules

• **modules**: *Module[]*

*Inherited from [CustomerApp](customerapp.md).[modules](customerapp.md#modules)*

*Overrides void*

___

###  state

• **state**: *types.State*

*Inherited from [CustomerApp](customerapp.md).[state](customerapp.md#state)*

___

### `Static` STATES

▪ **STATES**: *typeof STATES*

*Inherited from [CustomerApp](customerapp.md).[STATES](customerapp.md#static-states)*

## Methods

###  afterShutdown

▸ **afterShutdown**(): *Promise‹void›*

*Inherited from [CustomerApp](customerapp.md).[afterShutdown](customerapp.md#aftershutdown)*

**Returns:** *Promise‹void›*

___

###  configure

▸ **configure**(`props`: types.ConfigProps): *void*

*Inherited from [CustomerApp](customerapp.md).[configure](customerapp.md#configure)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | types.ConfigProps |

**Returns:** *void*

___

###  debug

▸ **debug**(): *void*

*Inherited from [CustomerApp](customerapp.md).[debug](customerapp.md#debug)*

**Returns:** *void*

___

###  getSelectableStates

▸ **getSelectableStates**(): *Record‹string, types.State›*

*Inherited from [Customer](customer.md).[getSelectableStates](customer.md#getselectablestates)*

**Returns:** *Record‹string, types.State›*

___

###  getState

▸ **getState**(): *types.State*

*Inherited from [Customer](customer.md).[getState](customer.md#getstate)*

**Returns:** *types.State*

___

###  hasState

▸ **hasState**(): *boolean*

*Inherited from [Customer](customer.md).[hasState](customer.md#hasstate)*

**Returns:** *boolean*

___

###  initialize

▸ **initialize**(): *Promise‹void›*

*Inherited from [CustomerApp](customerapp.md).[initialize](customerapp.md#initialize)*

*Overrides void*

**Returns:** *Promise‹void›*

___

###  invokeAction

▸ **invokeAction**(`actionName`: string, `options?`: types.ActionInvokingOptions): *Promise‹void›*

*Inherited from [CustomerApp](customerapp.md).[invokeAction](customerapp.md#invokeaction)*

**Parameters:**

Name | Type |
------ | ------ |
`actionName` | string |
`options?` | types.ActionInvokingOptions |

**Returns:** *Promise‹void›*

___

###  isCommandScheduling

▸ **isCommandScheduling**(): *boolean*

*Inherited from [CustomerApp](customerapp.md).[isCommandScheduling](customerapp.md#iscommandscheduling)*

**Returns:** *boolean*

___

###  isInDevelopment

▸ **isInDevelopment**(): *boolean*

*Inherited from [CustomerApp](customerapp.md).[isInDevelopment](customerapp.md#isindevelopment)*

**Returns:** *boolean*

___

###  isInOneOfStates

▸ **isInOneOfStates**(`states`: types.State | types.State[]): *boolean*

*Inherited from [Customer](customer.md).[isInOneOfStates](customer.md#isinoneofstates)*

**Parameters:**

Name | Type |
------ | ------ |
`states` | types.State &#124; types.State[] |

**Returns:** *boolean*

___

###  isInProduction

▸ **isInProduction**(): *boolean*

*Inherited from [CustomerApp](customerapp.md).[isInProduction](customerapp.md#isinproduction)*

*Overrides void*

**Returns:** *boolean*

___

###  isInState

▸ **isInState**(`state`: types.State | types.State[]): *boolean*

*Inherited from [Customer](customer.md).[isInState](customer.md#isinstate)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | types.State &#124; types.State[] |

**Returns:** *boolean*

___

###  isSnapshotting

▸ **isSnapshotting**(): *boolean*

*Inherited from [CustomerApp](customerapp.md).[isSnapshotting](customerapp.md#issnapshotting)*

**Returns:** *boolean*

___

###  onProcessSignal

▸ **onProcessSignal**(`code`: NodeJS.Signals): *Promise‹void›*

*Inherited from [CustomerApp](customerapp.md).[onProcessSignal](customerapp.md#onprocesssignal)*

**Parameters:**

Name | Type |
------ | ------ |
`code` | NodeJS.Signals |

**Returns:** *Promise‹void›*

___

###  publish

▸ **publish**(`event`: Event): *Promise‹void›*

*Inherited from [CustomerApp](customerapp.md).[publish](customerapp.md#publish)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event |

**Returns:** *Promise‹void›*

___

###  reset

▸ **reset**(): *Promise‹void›*

*Inherited from [CustomerApp](customerapp.md).[reset](customerapp.md#reset)*

**Returns:** *Promise‹void›*

___

###  send

▸ **send**(`command`: Command): *Promise‹any›*

*Inherited from [CustomerApp](customerapp.md).[send](customerapp.md#send)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | Command |

**Returns:** *Promise‹any›*

___

###  setState

▸ **setState**(`state`: types.State): *void*

*Inherited from [Customer](customer.md).[setState](customer.md#setstate)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | types.State |

**Returns:** *void*

___

###  shutdown

▸ **shutdown**(): *Promise‹void›*

*Inherited from [CustomerApp](customerapp.md).[shutdown](customerapp.md#shutdown)*

*Overrides void*

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Inherited from [CustomerApp](customerapp.md).[start](customerapp.md#start)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Inherited from [CustomerApp](customerapp.md).[stop](customerapp.md#stop)*

**Returns:** *Promise‹void›*

___

###  subscribeTo

▸ **subscribeTo**(`eventType`: MessageType‹Event›, `handler`: types.Handler): *Promise‹void›*

*Inherited from [CustomerApp](customerapp.md).[subscribeTo](customerapp.md#subscribeto)*

**Parameters:**

Name | Type |
------ | ------ |
`eventType` | MessageType‹Event› |
`handler` | types.Handler |

**Returns:** *Promise‹void›*

___

###  validateState

▸ **validateState**(`stateOrStates`: types.State | types.State[], `error?`: Error): *boolean*

*Inherited from [Customer](customer.md).[validateState](customer.md#validatestate)*

**Parameters:**

Name | Type |
------ | ------ |
`stateOrStates` | types.State &#124; types.State[] |
`error?` | Error |

**Returns:** *boolean*
