---
id: "customerregistration"
title: "CustomerRegistration"
sidebar_label: "CustomerRegistration"
---

## Type parameters

▪ **T**: *SuperConstructor*

## Hierarchy

* Process

  ↳ **CustomerRegistration**

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

* [constructor](customerregistration.md#constructor)

### Properties

* [[COMMANDS_KEY]](customerregistration.md#[commands_key])
* [[EVENTS_KEY]](customerregistration.md#[events_key])
* [customerId](customerregistration.md#customerid)
* [customerName](customerregistration.md#customername)
* [id](customerregistration.md#id)
* [metadata](customerregistration.md#optional-metadata)
* [schemaVersion](customerregistration.md#optional-schemaversion)
* [state](customerregistration.md#state)
* [status](customerregistration.md#status)
* [version](customerregistration.md#version)
* [correlationKey](customerregistration.md#static-optional-correlationkey)

### Accessors

* [ableTo](customerregistration.md#ableto)
* [can](customerregistration.md#can)
* [ensure](customerregistration.md#ensure)
* [is](customerregistration.md#is)

### Methods

* [CustomerCreated](customerregistration.md#customercreated)
* [CustomerRegistrationCompleted](customerregistration.md#customerregistrationcompleted)
* [CustomerRegistrationInitiated](customerregistration.md#customerregistrationinitiated)
* [RegisterCustomer](customerregistration.md#registercustomer)
* [WelcomeEmailSent](customerregistration.md#welcomeemailsent)
* [WelcomeEmailTriggered](customerregistration.md#welcomeemailtriggered)
* [[ROLLBACK_STATE_METHOD_KEY]](customerregistration.md#[rollback_state_method_key])
* [[SAVE_STATE_METHOD_KEY]](customerregistration.md#[save_state_method_key])
* [assignMetadata](customerregistration.md#assignmetadata)
* [ensureHandleability](customerregistration.md#ensurehandleability)
* [equals](customerregistration.md#equals)
* [eventProps](customerregistration.md#eventprops)
* [getActions](customerregistration.md#getactions)
* [getCommands](customerregistration.md#getcommands)
* [getCorrelationKey](customerregistration.md#getcorrelationkey)
* [getEvents](customerregistration.md#getevents)
* [getHandleableTypes](customerregistration.md#gethandleabletypes)
* [getHandled](customerregistration.md#gethandled)
* [getHandledCommands](customerregistration.md#gethandledcommands)
* [getHandledEvents](customerregistration.md#gethandledevents)
* [getHandledMessages](customerregistration.md#gethandledmessages)
* [getHandledTypes](customerregistration.md#gethandledtypes)
* [getHandledTypesNames](customerregistration.md#gethandledtypesnames)
* [getHandler](customerregistration.md#gethandler)
* [getHandlerOrThrow](customerregistration.md#gethandlerorthrow)
* [getHandlers](customerregistration.md#gethandlers)
* [getHook](customerregistration.md#gethook)
* [getHookOrThrow](customerregistration.md#gethookorthrow)
* [getHooks](customerregistration.md#gethooks)
* [getId](customerregistration.md#getid)
* [getLegacyTransformer](customerregistration.md#getlegacytransformer)
* [getLegacyTransformers](customerregistration.md#getlegacytransformers)
* [getPropTypes](customerregistration.md#getproptypes)
* [getPropertyInitializers](customerregistration.md#getpropertyinitializers)
* [getSchemaVersion](customerregistration.md#getschemaversion)
* [getSelectableStates](customerregistration.md#getselectablestates)
* [getSelectableStatuses](customerregistration.md#getselectablestatuses)
* [getState](customerregistration.md#getstate)
* [getStatus](customerregistration.md#getstatus)
* [getTypeByHandler](customerregistration.md#gettypebyhandler)
* [getTypeName](customerregistration.md#gettypename)
* [getVersion](customerregistration.md#getversion)
* [handle](customerregistration.md#handle)
* [handles](customerregistration.md#handles)
* [hasAction](customerregistration.md#hasaction)
* [hasHandler](customerregistration.md#hashandler)
* [hasHook](customerregistration.md#hashook)
* [hasLegacyTransformer](customerregistration.md#haslegacytransformer)
* [hasState](customerregistration.md#hasstate)
* [hasStatus](customerregistration.md#hasstatus)
* [in](customerregistration.md#in)
* [incrementVersion](customerregistration.md#incrementversion)
* [initialize](customerregistration.md#initialize)
* [isHandleabe](customerregistration.md#ishandleabe)
* [isInOneOfStates](customerregistration.md#isinoneofstates)
* [isInOneOfStatuses](customerregistration.md#isinoneofstatuses)
* [isInState](customerregistration.md#isinstate)
* [isInStatus](customerregistration.md#isinstatus)
* [isStateSaved](customerregistration.md#isstatesaved)
* [on](customerregistration.md#on)
* [overrideHandler](customerregistration.md#overridehandler)
* [overrideHook](customerregistration.md#overridehook)
* [overrideLegacyTransformer](customerregistration.md#overridelegacytransformer)
* [pickEventProps](customerregistration.md#pickeventprops)
* [processSerializableList](customerregistration.md#processserializablelist)
* [record](customerregistration.md#record)
* [registerHandler](customerregistration.md#registerhandler)
* [registerHook](customerregistration.md#registerhook)
* [registerLegacyTransformer](customerregistration.md#registerlegacytransformer)
* [removeHandler](customerregistration.md#removehandler)
* [removeHook](customerregistration.md#removehook)
* [replay](customerregistration.md#replay)
* [replayHistory](customerregistration.md#replayhistory)
* [schedule](customerregistration.md#schedule)
* [setHandleableTypes](customerregistration.md#sethandleabletypes)
* [setState](customerregistration.md#setstate)
* [setStatus](customerregistration.md#setstatus)
* [setVersion](customerregistration.md#setversion)
* [subscribes](customerregistration.md#subscribes)
* [toJSONValue](customerregistration.md#tojsonvalue)
* [toPlainObject](customerregistration.md#toplainobject)
* [toString](customerregistration.md#tostring)
* [transformLegacyProps](customerregistration.md#transformlegacyprops)
* [trigger](customerregistration.md#trigger)
* [typeName](customerregistration.md#typename)
* [unschedule](customerregistration.md#unschedule)
* [validateProps](customerregistration.md#validateprops)
* [validateState](customerregistration.md#validatestate)
* [validateStatus](customerregistration.md#validatestatus)
* [disableSerializableLists](customerregistration.md#static-disableserializablelists)
* [enableSerializableLists](customerregistration.md#static-enableserializablelists)
* [from](customerregistration.md#static-from)
* [getCorrelationKey](customerregistration.md#static-getcorrelationkey)
* [getPropTypes](customerregistration.md#static-getproptypes)
* [getPropertyInitializers](customerregistration.md#static-getpropertyinitializers)
* [getTypeName](customerregistration.md#static-gettypename)
* [resolveInitializingMessage](customerregistration.md#static-resolveinitializingmessage)
* [resolveRoutedCommands](customerregistration.md#static-resolveroutedcommands)
* [resolveRoutedEvents](customerregistration.md#static-resolveroutedevents)
* [resolveRoutedMessages](customerregistration.md#static-resolveroutedmessages)
* [setCorrelationKey](customerregistration.md#static-setcorrelationkey)
* [toString](customerregistration.md#static-tostring)
* [typeName](customerregistration.md#static-typename)

### Object literals

* [STATES](customerregistration.md#static-states)

## Constructors

###  constructor

\+ **new CustomerRegistration**(`arg`: History | Command | Event | types.Props): *[CustomerRegistration](customerregistration.md)*

*Inherited from [CustomerRegistration](customerregistration.md).[constructor](customerregistration.md#constructor)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | History &#124; Command &#124; Event &#124; types.Props |

**Returns:** *[CustomerRegistration](customerregistration.md)*

## Properties

###  [COMMANDS_KEY]

• **[COMMANDS_KEY]**: *Command[]*

*Inherited from [CustomerRegistration](customerregistration.md).[[COMMANDS_KEY]](customerregistration.md#[commands_key])*

*Overrides void*

___

###  [EVENTS_KEY]

• **[EVENTS_KEY]**: *Event[]*

*Inherited from [CustomerRegistration](customerregistration.md).[[EVENTS_KEY]](customerregistration.md#[events_key])*

*Overrides void*

___

###  customerId

• **customerId**: *string | Guid*

___

###  customerName

• **customerName**: *string*

___

###  id

• **id**: *string | Guid*

*Inherited from [CustomerRegistration](customerregistration.md).[id](customerregistration.md#id)*

*Overrides void*

___

### `Optional` metadata

• **metadata**? : *Record‹string, any›*

*Inherited from [CustomerRegistration](customerregistration.md).[metadata](customerregistration.md#optional-metadata)*

*Overrides void*

___

### `Optional` schemaVersion

• **schemaVersion**? : *number*

*Inherited from [CustomerRegistration](customerregistration.md).[schemaVersion](customerregistration.md#optional-schemaversion)*

*Overrides void*

___

###  state

• **state**: *types.State*

*Inherited from [CustomerRegistration](customerregistration.md).[state](customerregistration.md#state)*

*Overrides void*

___

###  status

• **status**: *types.Status*

*Inherited from [CustomerRegistration](customerregistration.md).[status](customerregistration.md#status)*

*Overrides void*

___

###  version

• **version**: *number*

*Inherited from [CustomerRegistration](customerregistration.md).[version](customerregistration.md#version)*

*Overrides void*

___

### `Static` `Optional` correlationKey

▪ **correlationKey**? : *string*

*Inherited from [CustomerRegistration](customerregistration.md).[correlationKey](customerregistration.md#static-optional-correlationkey)*

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

###  CustomerCreated

▸ **CustomerCreated**(`_event`: [CustomerCreated](customercreated.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`_event` | [CustomerCreated](customercreated.md) |

**Returns:** *void*

___

###  CustomerRegistrationCompleted

▸ **CustomerRegistrationCompleted**(`_event`: [CustomerRegistrationCompleted](customerregistrationcompleted.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`_event` | [CustomerRegistrationCompleted](customerregistrationcompleted.md) |

**Returns:** *void*

___

###  CustomerRegistrationInitiated

▸ **CustomerRegistrationInitiated**(`event`: [CustomerRegistrationInitiated](customerregistrationinitiated.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [CustomerRegistrationInitiated](customerregistrationinitiated.md) |

**Returns:** *void*

___

###  RegisterCustomer

▸ **RegisterCustomer**(`command`: [RegisterCustomer](registercustomer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`command` | [RegisterCustomer](registercustomer.md) |

**Returns:** *void*

___

###  WelcomeEmailSent

▸ **WelcomeEmailSent**(`_event`: [WelcomeEmailSent](welcomeemailsent.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`_event` | [WelcomeEmailSent](welcomeemailsent.md) |

**Returns:** *void*

___

###  WelcomeEmailTriggered

▸ **WelcomeEmailTriggered**(`_event`: [WelcomeEmailTriggered](welcomeemailtriggered.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`_event` | [WelcomeEmailTriggered](welcomeemailtriggered.md) |

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

###  getCorrelationKey

▸ **getCorrelationKey**(): *string*

*Inherited from [CustomerRegistration](customerregistration.md).[getCorrelationKey](customerregistration.md#static-getcorrelationkey)*

**Returns:** *string*

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

###  trigger

▸ **trigger**(`command`: Command): *void*

*Inherited from [CustomerRegistration](customerregistration.md).[trigger](customerregistration.md#trigger)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | Command |

**Returns:** *void*

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

### `Static` getCorrelationKey

▸ **getCorrelationKey**(): *string*

*Inherited from [CustomerRegistration](customerregistration.md).[getCorrelationKey](customerregistration.md#static-getcorrelationkey)*

**Returns:** *string*

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

### `Static` setCorrelationKey

▸ **setCorrelationKey**(`key`: string): *void*

*Inherited from [CustomerRegistration](customerregistration.md).[setCorrelationKey](customerregistration.md#static-setcorrelationkey)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *void*

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

## Object literals

### `Static` STATES

### ▪ **STATES**: *object*

###  completed

• **completed**: *string* = "completed"

###  creatingCustomer

• **creatingCustomer**: *string* = "creatingCustomer"

###  sendingWelcomeEmail

• **sendingWelcomeEmail**: *string* = "sendingWelcomeEmail"
