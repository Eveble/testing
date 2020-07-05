---
id: "todolist"
title: "TodoList"
sidebar_label: "TodoList"
---

## Type parameters

▪ **T**: *SuperConstructor*

## Hierarchy

* Aggregate

  ↳ **TodoList**

## Implements

* Definable
* Hookable
* Ejsonable
* Stateful
* Statusful
* Entity
* Controller
* EventSourceable

## Index

### Constructors

* [constructor](todolist.md#constructor)

### Properties

* [[COMMANDS_KEY]](todolist.md#[commands_key])
* [[EVENTS_KEY]](todolist.md#[events_key])
* [id](todolist.md#id)
* [maxItems](todolist.md#maxitems)
* [metadata](todolist.md#optional-metadata)
* [schemaVersion](todolist.md#optional-schemaversion)
* [state](todolist.md#state)
* [status](todolist.md#status)
* [title](todolist.md#title)
* [todos](todolist.md#todos)
* [version](todolist.md#version)

### Accessors

* [ableTo](todolist.md#ableto)
* [can](todolist.md#can)
* [ensure](todolist.md#ensure)
* [is](todolist.md#is)

### Methods

* [AddTodo](todolist.md#addtodo)
* [CompleteTodo](todolist.md#completetodo)
* [CreateTodoList](todolist.md#createtodolist)
* [ExpireTodo](todolist.md#expiretodo)
* [TodoAdded](todolist.md#todoadded)
* [TodoCompleted](todolist.md#todocompleted)
* [TodoExpired](todolist.md#todoexpired)
* [TodoListCreated](todolist.md#todolistcreated)
* [[ROLLBACK_STATE_METHOD_KEY]](todolist.md#[rollback_state_method_key])
* [[SAVE_STATE_METHOD_KEY]](todolist.md#[save_state_method_key])
* [assignMetadata](todolist.md#assignmetadata)
* [ensureHandleability](todolist.md#ensurehandleability)
* [equals](todolist.md#equals)
* [eventProps](todolist.md#eventprops)
* [getActions](todolist.md#getactions)
* [getCommands](todolist.md#getcommands)
* [getEvents](todolist.md#getevents)
* [getHandleableTypes](todolist.md#gethandleabletypes)
* [getHandled](todolist.md#gethandled)
* [getHandledCommands](todolist.md#gethandledcommands)
* [getHandledEvents](todolist.md#gethandledevents)
* [getHandledMessages](todolist.md#gethandledmessages)
* [getHandledTypes](todolist.md#gethandledtypes)
* [getHandledTypesNames](todolist.md#gethandledtypesnames)
* [getHandler](todolist.md#gethandler)
* [getHandlerOrThrow](todolist.md#gethandlerorthrow)
* [getHandlers](todolist.md#gethandlers)
* [getHook](todolist.md#gethook)
* [getHookOrThrow](todolist.md#gethookorthrow)
* [getHooks](todolist.md#gethooks)
* [getId](todolist.md#getid)
* [getLegacyTransformer](todolist.md#getlegacytransformer)
* [getLegacyTransformers](todolist.md#getlegacytransformers)
* [getPropTypes](todolist.md#getproptypes)
* [getPropertyInitializers](todolist.md#getpropertyinitializers)
* [getSchemaVersion](todolist.md#getschemaversion)
* [getSelectableStates](todolist.md#getselectablestates)
* [getSelectableStatuses](todolist.md#getselectablestatuses)
* [getState](todolist.md#getstate)
* [getStatus](todolist.md#getstatus)
* [getTypeByHandler](todolist.md#gettypebyhandler)
* [getTypeName](todolist.md#gettypename)
* [getVersion](todolist.md#getversion)
* [handle](todolist.md#handle)
* [handles](todolist.md#handles)
* [hasAction](todolist.md#hasaction)
* [hasHandler](todolist.md#hashandler)
* [hasHook](todolist.md#hashook)
* [hasLegacyTransformer](todolist.md#haslegacytransformer)
* [hasState](todolist.md#hasstate)
* [hasStatus](todolist.md#hasstatus)
* [in](todolist.md#in)
* [incrementVersion](todolist.md#incrementversion)
* [initialize](todolist.md#initialize)
* [isHandleabe](todolist.md#ishandleabe)
* [isInOneOfStates](todolist.md#isinoneofstates)
* [isInOneOfStatuses](todolist.md#isinoneofstatuses)
* [isInState](todolist.md#isinstate)
* [isInStatus](todolist.md#isinstatus)
* [isStateSaved](todolist.md#isstatesaved)
* [on](todolist.md#on)
* [overrideHandler](todolist.md#overridehandler)
* [overrideHook](todolist.md#overridehook)
* [overrideLegacyTransformer](todolist.md#overridelegacytransformer)
* [pickEventProps](todolist.md#pickeventprops)
* [processSerializableList](todolist.md#processserializablelist)
* [record](todolist.md#record)
* [registerHandler](todolist.md#registerhandler)
* [registerHook](todolist.md#registerhook)
* [registerLegacyTransformer](todolist.md#registerlegacytransformer)
* [removeHandler](todolist.md#removehandler)
* [removeHook](todolist.md#removehook)
* [replay](todolist.md#replay)
* [replayHistory](todolist.md#replayhistory)
* [schedule](todolist.md#schedule)
* [setHandleableTypes](todolist.md#sethandleabletypes)
* [setState](todolist.md#setstate)
* [setStatus](todolist.md#setstatus)
* [setVersion](todolist.md#setversion)
* [subscribes](todolist.md#subscribes)
* [toJSONValue](todolist.md#tojsonvalue)
* [toPlainObject](todolist.md#toplainobject)
* [toString](todolist.md#tostring)
* [transformLegacyProps](todolist.md#transformlegacyprops)
* [typeName](todolist.md#typename)
* [unschedule](todolist.md#unschedule)
* [validateProps](todolist.md#validateprops)
* [validateState](todolist.md#validatestate)
* [validateStatus](todolist.md#validatestatus)
* [disableSerializableLists](todolist.md#static-disableserializablelists)
* [enableSerializableLists](todolist.md#static-enableserializablelists)
* [from](todolist.md#static-from)
* [getPropTypes](todolist.md#static-getproptypes)
* [getPropertyInitializers](todolist.md#static-getpropertyinitializers)
* [getTypeName](todolist.md#static-gettypename)
* [resolveInitializingMessage](todolist.md#static-resolveinitializingmessage)
* [resolveRoutedCommands](todolist.md#static-resolveroutedcommands)
* [resolveRoutedEvents](todolist.md#static-resolveroutedevents)
* [resolveRoutedMessages](todolist.md#static-resolveroutedmessages)
* [toString](todolist.md#static-tostring)
* [typeName](todolist.md#static-typename)

## Constructors

###  constructor

\+ **new TodoList**(`arg`: History | Command | types.Props): *[TodoList](todolist.md)*

*Inherited from [Customer](customer.md).[constructor](customer.md#constructor)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | History &#124; Command &#124; types.Props |

**Returns:** *[TodoList](todolist.md)*

## Properties

###  [COMMANDS_KEY]

• **[COMMANDS_KEY]**: *Command[]*

*Inherited from [Customer](customer.md).[[COMMANDS_KEY]](customer.md#[commands_key])*

*Overrides void*

___

###  [EVENTS_KEY]

• **[EVENTS_KEY]**: *Event[]*

*Inherited from [Customer](customer.md).[[EVENTS_KEY]](customer.md#[events_key])*

*Overrides void*

___

###  id

• **id**: *string | Guid*

*Inherited from [Customer](customer.md).[id](customer.md#id)*

*Overrides void*

___

###  maxItems

• **maxItems**: *number*

___

### `Optional` metadata

• **metadata**? : *Record‹string, any›*

*Inherited from [Customer](customer.md).[metadata](customer.md#optional-metadata)*

*Overrides void*

___

### `Optional` schemaVersion

• **schemaVersion**? : *number*

*Inherited from [Customer](customer.md).[schemaVersion](customer.md#optional-schemaversion)*

*Overrides void*

___

###  state

• **state**: *types.State*

*Inherited from [Customer](customer.md).[state](customer.md#state)*

*Overrides void*

___

###  status

• **status**: *types.Status*

*Inherited from [Customer](customer.md).[status](customer.md#status)*

*Overrides void*

___

###  title

• **title**: *[Title](title.md)*

___

###  todos

• **todos**: *[Todo](todo.md)[]*

___

###  version

• **version**: *number*

*Inherited from [Customer](customer.md).[version](customer.md#version)*

*Overrides void*

## Accessors

###  ableTo

• **get ableTo**(): *this*

*Inherited from [Customer](customer.md).[ableTo](customer.md#ableto)*

**Returns:** *this*

___

###  can

• **get can**(): *any*

*Inherited from [Customer](customer.md).[can](customer.md#can)*

**Returns:** *any*

___

###  ensure

• **get ensure**(): *this & object*

*Inherited from [Customer](customer.md).[ensure](customer.md#ensure)*

**Returns:** *this & object*

___

###  is

• **get is**(): *this & object*

*Inherited from [Customer](customer.md).[is](customer.md#is)*

**Returns:** *this & object*

## Methods

###  AddTodo

▸ **AddTodo**(`command`: [AddTodo](addtodo.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`command` | [AddTodo](addtodo.md) |

**Returns:** *void*

___

###  CompleteTodo

▸ **CompleteTodo**(`command`: [CompleteTodo](completetodo.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`command` | [CompleteTodo](completetodo.md) |

**Returns:** *void*

___

###  CreateTodoList

▸ **CreateTodoList**(`command`: [CreateTodoList](createtodolist.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`command` | [CreateTodoList](createtodolist.md) |

**Returns:** *void*

___

###  ExpireTodo

▸ **ExpireTodo**(`command`: [ExpireTodo](expiretodo.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`command` | [ExpireTodo](expiretodo.md) |

**Returns:** *void*

___

###  TodoAdded

▸ **TodoAdded**(`event`: [TodoAdded](todoadded.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [TodoAdded](todoadded.md) |

**Returns:** *void*

___

###  TodoCompleted

▸ **TodoCompleted**(`event`: [TodoCompleted](todocompleted.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [TodoCompleted](todocompleted.md) |

**Returns:** *void*

___

###  TodoExpired

▸ **TodoExpired**(`event`: [TodoExpired](todoexpired.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [TodoExpired](todoexpired.md) |

**Returns:** *void*

___

###  TodoListCreated

▸ **TodoListCreated**(`event`: [TodoListCreated](todolistcreated.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [TodoListCreated](todolistcreated.md) |

**Returns:** *void*

___

###  [ROLLBACK_STATE_METHOD_KEY]

▸ **[ROLLBACK_STATE_METHOD_KEY]**(): *void*

*Inherited from [Customer](customer.md).[[ROLLBACK_STATE_METHOD_KEY]](customer.md#[rollback_state_method_key])*

**Returns:** *void*

___

###  [SAVE_STATE_METHOD_KEY]

▸ **[SAVE_STATE_METHOD_KEY]**(): *void*

*Inherited from [Customer](customer.md).[[SAVE_STATE_METHOD_KEY]](customer.md#[save_state_method_key])*

**Returns:** *void*

___

###  assignMetadata

▸ **assignMetadata**(`metadata`: Record‹string, any›): *void*

*Inherited from [Customer](customer.md).[assignMetadata](customer.md#assignmetadata)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | Record‹string, any› |

**Returns:** *void*

___

###  ensureHandleability

▸ **ensureHandleability**(`messageType`: MessageType‹Message›, `handleableTypes?`: MessageType‹Message› | MessageType‹Message›[]): *boolean*

*Inherited from [Customer](customer.md).[ensureHandleability](customer.md#ensurehandleability)*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |
`handleableTypes?` | MessageType‹Message› &#124; MessageType‹Message›[] |

**Returns:** *boolean*

___

###  equals

▸ **equals**(`otherEntity`: Entity): *boolean*

*Inherited from [Customer](customer.md).[equals](customer.md#equals)*

*Overrides [TestConfig](testconfig.md).[equals](testconfig.md#equals)*

**Parameters:**

Name | Type |
------ | ------ |
`otherEntity` | Entity |

**Returns:** *boolean*

___

###  eventProps

▸ **eventProps**(): *Record‹keyof any, any›*

*Inherited from [Customer](customer.md).[eventProps](customer.md#eventprops)*

**Returns:** *Record‹keyof any, any›*

___

###  getActions

▸ **getActions**(): *types.hooks.Actions*

*Inherited from [TestConfig](testconfig.md).[getActions](testconfig.md#getactions)*

**Returns:** *types.hooks.Actions*

___

###  getCommands

▸ **getCommands**(): *Command[]*

*Inherited from [Customer](customer.md).[getCommands](customer.md#getcommands)*

**Returns:** *Command[]*

___

###  getEvents

▸ **getEvents**(): *Event[]*

*Inherited from [Customer](customer.md).[getEvents](customer.md#getevents)*

**Returns:** *Event[]*

___

###  getHandleableTypes

▸ **getHandleableTypes**(): *MessageType‹Message›[]*

*Inherited from [Customer](customer.md).[getHandleableTypes](customer.md#gethandleabletypes)*

**Returns:** *MessageType‹Message›[]*

___

###  getHandled

▸ **getHandled**(`messageType`: MessageType‹Message›): *MessageType‹Message›[]*

*Inherited from [Customer](customer.md).[getHandled](customer.md#gethandled)*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |

**Returns:** *MessageType‹Message›[]*

___

###  getHandledCommands

▸ **getHandledCommands**(): *MessageType‹Command›[]*

*Inherited from [Customer](customer.md).[getHandledCommands](customer.md#gethandledcommands)*

**Returns:** *MessageType‹Command›[]*

___

###  getHandledEvents

▸ **getHandledEvents**(): *MessageType‹Event›[]*

*Inherited from [Customer](customer.md).[getHandledEvents](customer.md#gethandledevents)*

**Returns:** *MessageType‹Event›[]*

___

###  getHandledMessages

▸ **getHandledMessages**(): *MessageType‹Message›[]*

*Inherited from [Customer](customer.md).[getHandledMessages](customer.md#gethandledmessages)*

**Returns:** *MessageType‹Message›[]*

___

###  getHandledTypes

▸ **getHandledTypes**(): *MessageType‹Message›[]*

*Inherited from [Customer](customer.md).[getHandledTypes](customer.md#gethandledtypes)*

**Returns:** *MessageType‹Message›[]*

___

###  getHandledTypesNames

▸ **getHandledTypesNames**(): *types.TypeName[]*

*Inherited from [Customer](customer.md).[getHandledTypesNames](customer.md#gethandledtypesnames)*

**Returns:** *types.TypeName[]*

___

###  getHandler

▸ **getHandler**(`messageType`: MessageType‹Message›): *types.Handler | undefined*

*Inherited from [Customer](customer.md).[getHandler](customer.md#gethandler)*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |

**Returns:** *types.Handler | undefined*

___

###  getHandlerOrThrow

▸ **getHandlerOrThrow**(`messageType`: MessageType‹Message›): *types.Handler*

*Inherited from [Customer](customer.md).[getHandlerOrThrow](customer.md#gethandlerorthrow)*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |

**Returns:** *types.Handler*

___

###  getHandlers

▸ **getHandlers**(): *Map‹MessageType‹Message›, types.Handler | types.Handler[]›*

*Inherited from [Customer](customer.md).[getHandlers](customer.md#gethandlers)*

**Returns:** *Map‹MessageType‹Message›, types.Handler | types.Handler[]›*

___

###  getHook

▸ **getHook**(`action`: string, `id`: string): *types.Hook | undefined*

*Inherited from [TestConfig](testconfig.md).[getHook](testconfig.md#gethook)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |

**Returns:** *types.Hook | undefined*

___

###  getHookOrThrow

▸ **getHookOrThrow**(`action`: string, `id`: string): *types.Hook*

*Inherited from [TestConfig](testconfig.md).[getHookOrThrow](testconfig.md#gethookorthrow)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |

**Returns:** *types.Hook*

___

###  getHooks

▸ **getHooks**(`action`: string): *types.hooks.Mappings*

*Inherited from [TestConfig](testconfig.md).[getHooks](testconfig.md#gethooks)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |

**Returns:** *types.hooks.Mappings*

___

###  getId

▸ **getId**(): *string | Guid*

*Inherited from [Customer](customer.md).[getId](customer.md#getid)*

**Returns:** *string | Guid*

___

###  getLegacyTransformer

▸ **getLegacyTransformer**(`schemaVersion`: number): *types.Hook*

*Inherited from [RegisterCustomer](registercustomer.md).[getLegacyTransformer](registercustomer.md#getlegacytransformer)*

**Parameters:**

Name | Type |
------ | ------ |
`schemaVersion` | number |

**Returns:** *types.Hook*

___

###  getLegacyTransformers

▸ **getLegacyTransformers**(): *types.LegacyTransformers*

*Inherited from [RegisterCustomer](registercustomer.md).[getLegacyTransformers](registercustomer.md#getlegacytransformers)*

**Returns:** *types.LegacyTransformers*

___

###  getPropTypes

▸ **getPropTypes**(): *types.Props*

*Inherited from [TestConfig](testconfig.md).[getPropTypes](testconfig.md#static-getproptypes)*

**Returns:** *types.Props*

___

###  getPropertyInitializers

▸ **getPropertyInitializers**(): *types.Props*

*Inherited from [TestConfig](testconfig.md).[getPropertyInitializers](testconfig.md#getpropertyinitializers)*

**Returns:** *types.Props*

___

###  getSchemaVersion

▸ **getSchemaVersion**(): *number | undefined*

*Inherited from [RegisterCustomer](registercustomer.md).[getSchemaVersion](registercustomer.md#getschemaversion)*

**Returns:** *number | undefined*

___

###  getSelectableStates

▸ **getSelectableStates**(): *Record‹string, types.State›*

*Inherited from [Customer](customer.md).[getSelectableStates](customer.md#getselectablestates)*

**Returns:** *Record‹string, types.State›*

___

###  getSelectableStatuses

▸ **getSelectableStatuses**(): *Record‹string, types.Status›*

*Inherited from [Customer](customer.md).[getSelectableStatuses](customer.md#getselectablestatuses)*

**Returns:** *Record‹string, types.Status›*

___

###  getState

▸ **getState**(): *types.State*

*Inherited from [Customer](customer.md).[getState](customer.md#getstate)*

**Returns:** *types.State*

___

###  getStatus

▸ **getStatus**(): *types.Status*

*Inherited from [Customer](customer.md).[getStatus](customer.md#getstatus)*

**Returns:** *types.Status*

___

###  getTypeByHandler

▸ **getTypeByHandler**(`handlerReference`: types.Handler): *any | undefined*

*Inherited from [Customer](customer.md).[getTypeByHandler](customer.md#gettypebyhandler)*

**Parameters:**

Name | Type |
------ | ------ |
`handlerReference` | types.Handler |

**Returns:** *any | undefined*

___

###  getTypeName

▸ **getTypeName**(): *types.TypeName*

*Inherited from [RegisterCustomer](registercustomer.md).[getTypeName](registercustomer.md#gettypename)*

**Returns:** *types.TypeName*

___

###  getVersion

▸ **getVersion**(): *number*

*Inherited from [Customer](customer.md).[getVersion](customer.md#getversion)*

**Returns:** *number*

___

###  handle

▸ **handle**(`message`: Command | Event): *Promise‹any›*

*Inherited from [Customer](customer.md).[handle](customer.md#handle)*

*Overrides [EmailSendingService](emailsendingservice.md).[handle](emailsendingservice.md#handle)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | Command &#124; Event |

**Returns:** *Promise‹any›*

___

###  handles

▸ **handles**(): *Map‹MessageType‹Command›, types.Handler›*

*Inherited from [Customer](customer.md).[handles](customer.md#handles)*

**Returns:** *Map‹MessageType‹Command›, types.Handler›*

___

###  hasAction

▸ **hasAction**(`action`: string): *boolean*

*Inherited from [TestConfig](testconfig.md).[hasAction](testconfig.md#hasaction)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |

**Returns:** *boolean*

___

###  hasHandler

▸ **hasHandler**(`messageType`: MessageType‹Message›): *boolean*

*Inherited from [Customer](customer.md).[hasHandler](customer.md#hashandler)*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |

**Returns:** *boolean*

___

###  hasHook

▸ **hasHook**(`action`: string, `id`: string): *boolean*

*Inherited from [TestConfig](testconfig.md).[hasHook](testconfig.md#hashook)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |

**Returns:** *boolean*

___

###  hasLegacyTransformer

▸ **hasLegacyTransformer**(`schemaVersion`: number): *boolean*

*Inherited from [RegisterCustomer](registercustomer.md).[hasLegacyTransformer](registercustomer.md#haslegacytransformer)*

**Parameters:**

Name | Type |
------ | ------ |
`schemaVersion` | number |

**Returns:** *boolean*

___

###  hasState

▸ **hasState**(): *boolean*

*Inherited from [Customer](customer.md).[hasState](customer.md#hasstate)*

**Returns:** *boolean*

___

###  hasStatus

▸ **hasStatus**(): *boolean*

*Inherited from [Customer](customer.md).[hasStatus](customer.md#hasstatus)*

**Returns:** *boolean*

___

###  in

▸ **in**‹**T**›(`listName`: string): *List‹T›*

*Inherited from [RegisterCustomer](registercustomer.md).[in](registercustomer.md#in)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`listName` | string |

**Returns:** *List‹T›*

___

###  incrementVersion

▸ **incrementVersion**(): *void*

*Inherited from [Customer](customer.md).[incrementVersion](customer.md#incrementversion)*

**Returns:** *void*

___

###  initialize

▸ **initialize**(): *Promise‹void›*

*Inherited from [Customer](customer.md).[initialize](customer.md#initialize)*

*Overrides void*

**Returns:** *Promise‹void›*

___

###  isHandleabe

▸ **isHandleabe**(`messageType`: MessageType‹Message›, `handleableTypes?`: MessageType‹Message› | MessageType‹Message›[]): *boolean*

*Inherited from [Customer](customer.md).[isHandleabe](customer.md#ishandleabe)*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |
`handleableTypes?` | MessageType‹Message› &#124; MessageType‹Message›[] |

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

###  isInOneOfStatuses

▸ **isInOneOfStatuses**(`status`: types.Status | types.Status[]): *boolean*

*Inherited from [Customer](customer.md).[isInOneOfStatuses](customer.md#isinoneofstatuses)*

**Parameters:**

Name | Type |
------ | ------ |
`status` | types.Status &#124; types.Status[] |

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

###  isInStatus

▸ **isInStatus**(`status`: types.Status | types.Status[]): *boolean*

*Inherited from [Customer](customer.md).[isInStatus](customer.md#isinstatus)*

**Parameters:**

Name | Type |
------ | ------ |
`status` | types.Status &#124; types.Status[] |

**Returns:** *boolean*

___

###  isStateSaved

▸ **isStateSaved**(): *boolean*

*Inherited from [Customer](customer.md).[isStateSaved](customer.md#isstatesaved)*

**Returns:** *boolean*

___

###  on

▸ **on**(`action`: string | Stringifiable): *this*

*Inherited from [Customer](customer.md).[on](customer.md#on)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string &#124; Stringifiable |

**Returns:** *this*

___

###  overrideHandler

▸ **overrideHandler**(`messageType`: MessageType‹Message›, `handler`: types.Handler): *void*

*Inherited from [Customer](customer.md).[overrideHandler](customer.md#overridehandler)*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |
`handler` | types.Handler |

**Returns:** *void*

___

###  overrideHook

▸ **overrideHook**(`action`: string, `id`: string, `hook`: types.Hook): *void*

*Inherited from [TestConfig](testconfig.md).[overrideHook](testconfig.md#overridehook)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |
`hook` | types.Hook |

**Returns:** *void*

___

###  overrideLegacyTransformer

▸ **overrideLegacyTransformer**(`schemaVersion`: number, `transformer`: types.Hook): *void*

*Inherited from [RegisterCustomer](registercustomer.md).[overrideLegacyTransformer](registercustomer.md#overridelegacytransformer)*

**Parameters:**

Name | Type |
------ | ------ |
`schemaVersion` | number |
`transformer` | types.Hook |

**Returns:** *void*

___

###  pickEventProps

▸ **pickEventProps**(...`sources`: Record‹string, any›[]): *PickableProperties*

*Inherited from [Customer](customer.md).[pickEventProps](customer.md#pickeventprops)*

**Parameters:**

Name | Type |
------ | ------ |
`...sources` | Record‹string, any›[] |

**Returns:** *PickableProperties*

___

###  processSerializableList

▸ **processSerializableList**(`props?`: types.Props): *types.Props*

*Inherited from [RegisterCustomer](registercustomer.md).[processSerializableList](registercustomer.md#processserializablelist)*

**Parameters:**

Name | Type |
------ | ------ |
`props?` | types.Props |

**Returns:** *types.Props*

___

###  record

▸ **record**(`event`: Event): *void*

*Inherited from [Customer](customer.md).[record](customer.md#record)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event |

**Returns:** *void*

___

###  registerHandler

▸ **registerHandler**(`messageType`: MessageType‹Message›, `handler`: types.Handler, `shouldOverride?`: boolean): *void*

*Inherited from [Customer](customer.md).[registerHandler](customer.md#registerhandler)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |
`handler` | types.Handler |
`shouldOverride?` | boolean |

**Returns:** *void*

___

###  registerHook

▸ **registerHook**(`action`: string, `id`: string, `hook`: types.Hook, `shouldOverride?`: boolean): *void*

*Inherited from [TestConfig](testconfig.md).[registerHook](testconfig.md#registerhook)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |
`hook` | types.Hook |
`shouldOverride?` | boolean |

**Returns:** *void*

___

###  registerLegacyTransformer

▸ **registerLegacyTransformer**(`schemaVersion`: number, `transformer`: types.Hook, `shouldOverride?`: boolean): *void*

*Inherited from [RegisterCustomer](registercustomer.md).[registerLegacyTransformer](registercustomer.md#registerlegacytransformer)*

**Parameters:**

Name | Type |
------ | ------ |
`schemaVersion` | number |
`transformer` | types.Hook |
`shouldOverride?` | boolean |

**Returns:** *void*

___

###  removeHandler

▸ **removeHandler**(`messageType`: MessageType‹Message›): *void*

*Inherited from [Customer](customer.md).[removeHandler](customer.md#removehandler)*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |

**Returns:** *void*

___

###  removeHook

▸ **removeHook**(`action`: string, `id`: string): *void*

*Inherited from [TestConfig](testconfig.md).[removeHook](testconfig.md#removehook)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |

**Returns:** *void*

___

###  replay

▸ **replay**(`event`: Event): *void*

*Inherited from [Customer](customer.md).[replay](customer.md#replay)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event |

**Returns:** *void*

___

###  replayHistory

▸ **replayHistory**(`history`: History): *void*

*Inherited from [Customer](customer.md).[replayHistory](customer.md#replayhistory)*

**Parameters:**

Name | Type |
------ | ------ |
`history` | History |

**Returns:** *void*

___

###  schedule

▸ **schedule**(`command`: Command, `deliverAt`: Date, `assignmentId?`: string | Guid): *void*

*Inherited from [Customer](customer.md).[schedule](customer.md#schedule)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | Command |
`deliverAt` | Date |
`assignmentId?` | string &#124; Guid |

**Returns:** *void*

___

###  setHandleableTypes

▸ **setHandleableTypes**(`handleableTypes`: MessageType‹Message› | MessageType‹Message›[]): *void*

*Inherited from [Customer](customer.md).[setHandleableTypes](customer.md#sethandleabletypes)*

**Parameters:**

Name | Type |
------ | ------ |
`handleableTypes` | MessageType‹Message› &#124; MessageType‹Message›[] |

**Returns:** *void*

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

###  setStatus

▸ **setStatus**(`status`: types.Status): *void*

*Inherited from [Customer](customer.md).[setStatus](customer.md#setstatus)*

**Parameters:**

Name | Type |
------ | ------ |
`status` | types.Status |

**Returns:** *void*

___

###  setVersion

▸ **setVersion**(`version`: number): *void*

*Inherited from [Customer](customer.md).[setVersion](customer.md#setversion)*

**Parameters:**

Name | Type |
------ | ------ |
`version` | number |

**Returns:** *void*

___

###  subscribes

▸ **subscribes**(): *Map‹MessageType‹Event›, types.Handler›*

*Inherited from [Customer](customer.md).[subscribes](customer.md#subscribes)*

**Returns:** *Map‹MessageType‹Event›, types.Handler›*

___

###  toJSONValue

▸ **toJSONValue**(): *Record‹string, any›*

*Inherited from [RegisterCustomer](registercustomer.md).[toJSONValue](registercustomer.md#tojsonvalue)*

**Returns:** *Record‹string, any›*

___

###  toPlainObject

▸ **toPlainObject**(): *types.Props*

*Inherited from [TestConfig](testconfig.md).[toPlainObject](testconfig.md#toplainobject)*

**Returns:** *types.Props*

___

###  toString

▸ **toString**(): *types.TypeName*

*Inherited from [RegisterCustomer](registercustomer.md).[toString](registercustomer.md#tostring)*

**Returns:** *types.TypeName*

___

###  transformLegacyProps

▸ **transformLegacyProps**(`props`: types.Props): *types.Props*

*Inherited from [RegisterCustomer](registercustomer.md).[transformLegacyProps](registercustomer.md#transformlegacyprops)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | types.Props |

**Returns:** *types.Props*

___

###  typeName

▸ **typeName**(): *types.TypeName*

*Inherited from [RegisterCustomer](registercustomer.md).[typeName](registercustomer.md#typename)*

**Returns:** *types.TypeName*

___

###  unschedule

▸ **unschedule**(`assignmentId`: string | Guid, `commandType`: MessageType‹Command›): *void*

*Inherited from [Customer](customer.md).[unschedule](customer.md#unschedule)*

**Parameters:**

Name | Type |
------ | ------ |
`assignmentId` | string &#124; Guid |
`commandType` | MessageType‹Command› |

**Returns:** *void*

___

###  validateProps

▸ **validateProps**(`props`: Record‹string | number | symbol, any› | undefined, `propTypes`: types.PropTypes, `isStrict?`: boolean): *boolean*

*Inherited from [TestConfig](testconfig.md).[validateProps](testconfig.md#validateprops)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Record‹string &#124; number &#124; symbol, any› &#124; undefined |
`propTypes` | types.PropTypes |
`isStrict?` | boolean |

**Returns:** *boolean*

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

___

###  validateStatus

▸ **validateStatus**(`statusOrStatuses`: types.Status | types.Status[], `error?`: Error): *boolean*

*Inherited from [Customer](customer.md).[validateStatus](customer.md#validatestatus)*

**Parameters:**

Name | Type |
------ | ------ |
`statusOrStatuses` | types.Status &#124; types.Status[] |
`error?` | Error |

**Returns:** *boolean*

___

### `Static` disableSerializableLists

▸ **disableSerializableLists**(): *void*

*Inherited from [RegisterCustomer](registercustomer.md).[disableSerializableLists](registercustomer.md#static-disableserializablelists)*

**Returns:** *void*

___

### `Static` enableSerializableLists

▸ **enableSerializableLists**(): *void*

*Inherited from [RegisterCustomer](registercustomer.md).[enableSerializableLists](registercustomer.md#static-enableserializablelists)*

**Returns:** *void*

___

### `Static` from

▸ **from**(...`sources`: Record‹string, any›[]): *any*

*Inherited from [RegisterCustomer](registercustomer.md).[from](registercustomer.md#static-from)*

**Parameters:**

Name | Type |
------ | ------ |
`...sources` | Record‹string, any›[] |

**Returns:** *any*

___

### `Static` getPropTypes

▸ **getPropTypes**(): *types.Props*

*Inherited from [TestConfig](testconfig.md).[getPropTypes](testconfig.md#static-getproptypes)*

**Returns:** *types.Props*

___

### `Static` getPropertyInitializers

▸ **getPropertyInitializers**(): *types.Props*

*Inherited from [TestConfig](testconfig.md).[getPropertyInitializers](testconfig.md#getpropertyinitializers)*

**Returns:** *types.Props*

___

### `Static` getTypeName

▸ **getTypeName**(): *types.TypeName*

*Inherited from [RegisterCustomer](registercustomer.md).[getTypeName](registercustomer.md#gettypename)*

**Returns:** *types.TypeName*

___

### `Static` resolveInitializingMessage

▸ **resolveInitializingMessage**(): *MessageType‹Command | Event› | undefined*

*Inherited from [Customer](customer.md).[resolveInitializingMessage](customer.md#static-resolveinitializingmessage)*

**Returns:** *MessageType‹Command | Event› | undefined*

___

### `Static` resolveRoutedCommands

▸ **resolveRoutedCommands**(): *MessageType‹Command›[]*

*Inherited from [Customer](customer.md).[resolveRoutedCommands](customer.md#static-resolveroutedcommands)*

**Returns:** *MessageType‹Command›[]*

___

### `Static` resolveRoutedEvents

▸ **resolveRoutedEvents**(): *MessageType‹Event›[]*

*Inherited from [Customer](customer.md).[resolveRoutedEvents](customer.md#static-resolveroutedevents)*

**Returns:** *MessageType‹Event›[]*

___

### `Static` resolveRoutedMessages

▸ **resolveRoutedMessages**(): *MessageType‹Command | Event›[]*

*Inherited from [Customer](customer.md).[resolveRoutedMessages](customer.md#static-resolveroutedmessages)*

**Returns:** *MessageType‹Command | Event›[]*

___

### `Static` toString

▸ **toString**(): *types.TypeName*

*Inherited from [RegisterCustomer](registercustomer.md).[toString](registercustomer.md#tostring)*

**Returns:** *types.TypeName*

___

### `Static` typeName

▸ **typeName**(): *types.TypeName*

*Inherited from [RegisterCustomer](registercustomer.md).[typeName](registercustomer.md#typename)*

**Returns:** *types.TypeName*
