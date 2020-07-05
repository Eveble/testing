---
id: "todolistcreated"
title: "TodoListCreated"
sidebar_label: "TodoListCreated"
---

## Type parameters

▪ **T**: *SuperConstructor*

## Hierarchy

* Event

  ↳ **TodoListCreated**

## Implements

* Definable
* Hookable
* Ejsonable
* Message
* Event
* Identifiable

## Index

### Constructors

* [constructor](todolistcreated.md#constructor)

### Properties

* [maxItems](todolistcreated.md#maxitems)
* [metadata](todolistcreated.md#metadata)
* [schemaVersion](todolistcreated.md#optional-schemaversion)
* [sourceId](todolistcreated.md#sourceid)
* [timestamp](todolistcreated.md#timestamp)
* [title](todolistcreated.md#title)
* [todos](todolistcreated.md#todos)
* [version](todolistcreated.md#optional-version)

### Methods

* [assignMetadata](todolistcreated.md#assignmetadata)
* [equals](todolistcreated.md#equals)
* [getActions](todolistcreated.md#getactions)
* [getCorrelationId](todolistcreated.md#getcorrelationid)
* [getHook](todolistcreated.md#gethook)
* [getHookOrThrow](todolistcreated.md#gethookorthrow)
* [getHooks](todolistcreated.md#gethooks)
* [getId](todolistcreated.md#getid)
* [getLegacyTransformer](todolistcreated.md#getlegacytransformer)
* [getLegacyTransformers](todolistcreated.md#getlegacytransformers)
* [getMetadata](todolistcreated.md#getmetadata)
* [getPropTypes](todolistcreated.md#getproptypes)
* [getPropertyInitializers](todolistcreated.md#getpropertyinitializers)
* [getSchemaVersion](todolistcreated.md#getschemaversion)
* [getTimestamp](todolistcreated.md#gettimestamp)
* [getTypeName](todolistcreated.md#gettypename)
* [hasAction](todolistcreated.md#hasaction)
* [hasCorrelationId](todolistcreated.md#hascorrelationid)
* [hasHook](todolistcreated.md#hashook)
* [hasLegacyTransformer](todolistcreated.md#haslegacytransformer)
* [hasMetadata](todolistcreated.md#hasmetadata)
* [in](todolistcreated.md#in)
* [overrideHook](todolistcreated.md#overridehook)
* [overrideLegacyTransformer](todolistcreated.md#overridelegacytransformer)
* [processSerializableList](todolistcreated.md#processserializablelist)
* [registerHook](todolistcreated.md#registerhook)
* [registerLegacyTransformer](todolistcreated.md#registerlegacytransformer)
* [removeHook](todolistcreated.md#removehook)
* [setCorrelationId](todolistcreated.md#setcorrelationid)
* [toJSONValue](todolistcreated.md#tojsonvalue)
* [toPlainObject](todolistcreated.md#toplainobject)
* [toString](todolistcreated.md#tostring)
* [transformLegacyProps](todolistcreated.md#transformlegacyprops)
* [typeName](todolistcreated.md#typename)
* [validateProps](todolistcreated.md#validateprops)
* [disableSerializableLists](todolistcreated.md#static-disableserializablelists)
* [enableSerializableLists](todolistcreated.md#static-enableserializablelists)
* [from](todolistcreated.md#static-from)
* [getPropTypes](todolistcreated.md#static-getproptypes)
* [getPropertyInitializers](todolistcreated.md#static-getpropertyinitializers)
* [getTypeName](todolistcreated.md#static-gettypename)
* [toString](todolistcreated.md#static-tostring)
* [typeName](todolistcreated.md#static-typename)

## Constructors

###  constructor

\+ **new TodoListCreated**(`props?`: types.Props): *[TodoListCreated](todolistcreated.md)*

*Inherited from [CustomerRegistrationInitiated](customerregistrationinitiated.md).[constructor](customerregistrationinitiated.md#constructor)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`props?` | types.Props |

**Returns:** *[TodoListCreated](todolistcreated.md)*

## Properties

###  maxItems

• **maxItems**: *number*

___

###  metadata

• **metadata**: *Record‹string, any›*

*Inherited from [RegisterCustomer](registercustomer.md).[metadata](registercustomer.md#metadata)*

___

### `Optional` schemaVersion

• **schemaVersion**? : *number*

*Inherited from [RegisterCustomer](registercustomer.md).[schemaVersion](registercustomer.md#optional-schemaversion)*

*Overrides void*

___

###  sourceId

• **sourceId**: *Guid | string*

*Inherited from [CustomerRegistrationInitiated](customerregistrationinitiated.md).[sourceId](customerregistrationinitiated.md#sourceid)*

___

###  timestamp

• **timestamp**: *Date*

*Inherited from [RegisterCustomer](registercustomer.md).[timestamp](registercustomer.md#timestamp)*

___

###  title

• **title**: *[Title](title.md)*

___

###  todos

• **todos**: *[Todo](todo.md)[]*

___

### `Optional` version

• **version**? : *number*

*Inherited from [CustomerRegistrationInitiated](customerregistrationinitiated.md).[version](customerregistrationinitiated.md#optional-version)*

## Methods

###  assignMetadata

▸ **assignMetadata**(`props`: Record‹string, any›): *void*

*Inherited from [RegisterCustomer](registercustomer.md).[assignMetadata](registercustomer.md#assignmetadata)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Record‹string, any› |

**Returns:** *void*

___

###  equals

▸ **equals**(`other`: any): *boolean*

*Inherited from [TestConfig](testconfig.md).[equals](testconfig.md#equals)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | any |

**Returns:** *boolean*

___

###  getActions

▸ **getActions**(): *types.hooks.Actions*

*Inherited from [TestConfig](testconfig.md).[getActions](testconfig.md#getactions)*

**Returns:** *types.hooks.Actions*

___

###  getCorrelationId

▸ **getCorrelationId**(`key`: string): *string | undefined*

*Inherited from [RegisterCustomer](registercustomer.md).[getCorrelationId](registercustomer.md#getcorrelationid)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *string | undefined*

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

▸ **getId**(): *Guid | string*

*Inherited from [CustomerRegistrationInitiated](customerregistrationinitiated.md).[getId](customerregistrationinitiated.md#getid)*

**Returns:** *Guid | string*

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

###  getMetadata

▸ **getMetadata**(): *Record‹string, any›*

*Inherited from [RegisterCustomer](registercustomer.md).[getMetadata](registercustomer.md#getmetadata)*

**Returns:** *Record‹string, any›*

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

###  getTimestamp

▸ **getTimestamp**(): *Date*

*Inherited from [RegisterCustomer](registercustomer.md).[getTimestamp](registercustomer.md#gettimestamp)*

**Returns:** *Date*

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

###  hasCorrelationId

▸ **hasCorrelationId**(`key`: string): *boolean*

*Inherited from [RegisterCustomer](registercustomer.md).[hasCorrelationId](registercustomer.md#hascorrelationid)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

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

###  hasMetadata

▸ **hasMetadata**(): *boolean*

*Inherited from [RegisterCustomer](registercustomer.md).[hasMetadata](registercustomer.md#hasmetadata)*

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

###  setCorrelationId

▸ **setCorrelationId**(`key`: string, `id`: Stringifiable): *void*

*Inherited from [RegisterCustomer](registercustomer.md).[setCorrelationId](registercustomer.md#setcorrelationid)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`id` | Stringifiable |

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
