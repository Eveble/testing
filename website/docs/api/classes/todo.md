---
id: "todo"
title: "Todo"
sidebar_label: "Todo"
---

## Type parameters

▪ **T**: *SuperConstructor*

## Hierarchy

* Entity

  ↳ **Todo**

## Implements

* Definable
* Hookable
* Ejsonable
* Stateful
* Statusful
* Entity

## Index

### Constructors

* [constructor](todo.md#constructor)

### Properties

* [id](todo.md#id)
* [schemaVersion](todo.md#optional-schemaversion)
* [state](todo.md#state)
* [status](todo.md#status)
* [title](todo.md#title)

### Accessors

* [ableTo](todo.md#ableto)
* [can](todo.md#can)
* [ensure](todo.md#ensure)
* [is](todo.md#is)

### Methods

* [[ROLLBACK_STATE_METHOD_KEY]](todo.md#[rollback_state_method_key])
* [[SAVE_STATE_METHOD_KEY]](todo.md#[save_state_method_key])
* [complete](todo.md#complete)
* [equals](todo.md#equals)
* [expire](todo.md#expire)
* [getActions](todo.md#getactions)
* [getHook](todo.md#gethook)
* [getHookOrThrow](todo.md#gethookorthrow)
* [getHooks](todo.md#gethooks)
* [getId](todo.md#getid)
* [getLegacyTransformer](todo.md#getlegacytransformer)
* [getLegacyTransformers](todo.md#getlegacytransformers)
* [getPropTypes](todo.md#getproptypes)
* [getPropertyInitializers](todo.md#getpropertyinitializers)
* [getSchemaVersion](todo.md#getschemaversion)
* [getSelectableStates](todo.md#getselectablestates)
* [getSelectableStatuses](todo.md#getselectablestatuses)
* [getState](todo.md#getstate)
* [getStatus](todo.md#getstatus)
* [getTypeName](todo.md#gettypename)
* [hasAction](todo.md#hasaction)
* [hasHook](todo.md#hashook)
* [hasLegacyTransformer](todo.md#haslegacytransformer)
* [hasState](todo.md#hasstate)
* [hasStatus](todo.md#hasstatus)
* [in](todo.md#in)
* [isInOneOfStates](todo.md#isinoneofstates)
* [isInOneOfStatuses](todo.md#isinoneofstatuses)
* [isInState](todo.md#isinstate)
* [isInStatus](todo.md#isinstatus)
* [isStateSaved](todo.md#isstatesaved)
* [on](todo.md#on)
* [overrideHook](todo.md#overridehook)
* [overrideLegacyTransformer](todo.md#overridelegacytransformer)
* [processSerializableList](todo.md#processserializablelist)
* [registerHook](todo.md#registerhook)
* [registerLegacyTransformer](todo.md#registerlegacytransformer)
* [removeHook](todo.md#removehook)
* [setState](todo.md#setstate)
* [setStatus](todo.md#setstatus)
* [toJSONValue](todo.md#tojsonvalue)
* [toPlainObject](todo.md#toplainobject)
* [toString](todo.md#tostring)
* [transformLegacyProps](todo.md#transformlegacyprops)
* [typeName](todo.md#typename)
* [validateProps](todo.md#validateprops)
* [validateState](todo.md#validatestate)
* [validateStatus](todo.md#validatestatus)
* [disableSerializableLists](todo.md#static-disableserializablelists)
* [enableSerializableLists](todo.md#static-enableserializablelists)
* [from](todo.md#static-from)
* [getPropTypes](todo.md#static-getproptypes)
* [getPropertyInitializers](todo.md#static-getpropertyinitializers)
* [getTypeName](todo.md#static-gettypename)
* [toString](todo.md#static-tostring)
* [typeName](todo.md#static-typename)

### Object literals

* [STATES](todo.md#static-states)

## Constructors

###  constructor

\+ **new Todo**(`props`: Partial‹[Todo](todo.md)›): *[Todo](todo.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Partial‹[Todo](todo.md)› |

**Returns:** *[Todo](todo.md)*

## Properties

###  id

• **id**: *string | Guid*

*Inherited from [Todo](todo.md).[id](todo.md#id)*

___

### `Optional` schemaVersion

• **schemaVersion**? : *number*

*Inherited from [Todo](todo.md).[schemaVersion](todo.md#optional-schemaversion)*

*Overrides [RegisterCustomer](registercustomer.md).[schemaVersion](registercustomer.md#optional-schemaversion)*

___

###  state

• **state**: *types.State*

*Inherited from [Todo](todo.md).[state](todo.md#state)*

*Overrides [CustomerApp](customerapp.md).[state](customerapp.md#state)*

___

###  status

• **status**: *types.Status*

*Inherited from [Todo](todo.md).[status](todo.md#status)*

*Overrides void*

___

###  title

• **title**: *[Title](title.md)*

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

###  complete

▸ **complete**(): *void*

**Returns:** *void*

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

###  expire

▸ **expire**(): *void*

**Returns:** *void*

___

###  getActions

▸ **getActions**(): *types.hooks.Actions*

*Inherited from [TestConfig](testconfig.md).[getActions](testconfig.md#getactions)*

**Returns:** *types.hooks.Actions*

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

###  getTypeName

▸ **getTypeName**(): *types.TypeName*

*Inherited from [RegisterCustomer](registercustomer.md).[getTypeName](registercustomer.md#gettypename)*

**Returns:** *types.TypeName*

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

###  processSerializableList

▸ **processSerializableList**(`props?`: types.Props): *types.Props*

*Inherited from [RegisterCustomer](registercustomer.md).[processSerializableList](registercustomer.md#processserializablelist)*

**Parameters:**

Name | Type |
------ | ------ |
`props?` | types.Props |

**Returns:** *types.Props*

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

###  created

• **created**: *string* = "created"

###  expired

• **expired**: *string* = "expired"
