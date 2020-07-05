---
id: "todocompleted"
title: "TodoCompleted"
sidebar_label: "TodoCompleted"
---

## Type parameters

▪ **T**: *SuperConstructor*

## Hierarchy

* Event

  ↳ **TodoCompleted**

## Implements

* Definable
* Hookable
* Ejsonable
* Message
* Event
* Identifiable

## Index

### Constructors

* [constructor](todocompleted.md#constructor)

### Properties

* [metadata](todocompleted.md#metadata)
* [schemaVersion](todocompleted.md#optional-schemaversion)
* [sourceId](todocompleted.md#sourceid)
* [timestamp](todocompleted.md#timestamp)
* [todo](todocompleted.md#todo)
* [version](todocompleted.md#optional-version)

### Methods

* [assignMetadata](todocompleted.md#assignmetadata)
* [equals](todocompleted.md#equals)
* [getActions](todocompleted.md#getactions)
* [getCorrelationId](todocompleted.md#getcorrelationid)
* [getHook](todocompleted.md#gethook)
* [getHookOrThrow](todocompleted.md#gethookorthrow)
* [getHooks](todocompleted.md#gethooks)
* [getId](todocompleted.md#getid)
* [getLegacyTransformer](todocompleted.md#getlegacytransformer)
* [getLegacyTransformers](todocompleted.md#getlegacytransformers)
* [getMetadata](todocompleted.md#getmetadata)
* [getPropTypes](todocompleted.md#getproptypes)
* [getPropertyInitializers](todocompleted.md#getpropertyinitializers)
* [getSchemaVersion](todocompleted.md#getschemaversion)
* [getTimestamp](todocompleted.md#gettimestamp)
* [getTypeName](todocompleted.md#gettypename)
* [hasAction](todocompleted.md#hasaction)
* [hasCorrelationId](todocompleted.md#hascorrelationid)
* [hasHook](todocompleted.md#hashook)
* [hasLegacyTransformer](todocompleted.md#haslegacytransformer)
* [hasMetadata](todocompleted.md#hasmetadata)
* [in](todocompleted.md#in)
* [overrideHook](todocompleted.md#overridehook)
* [overrideLegacyTransformer](todocompleted.md#overridelegacytransformer)
* [processSerializableList](todocompleted.md#processserializablelist)
* [registerHook](todocompleted.md#registerhook)
* [registerLegacyTransformer](todocompleted.md#registerlegacytransformer)
* [removeHook](todocompleted.md#removehook)
* [setCorrelationId](todocompleted.md#setcorrelationid)
* [toJSONValue](todocompleted.md#tojsonvalue)
* [toPlainObject](todocompleted.md#toplainobject)
* [toString](todocompleted.md#tostring)
* [transformLegacyProps](todocompleted.md#transformlegacyprops)
* [typeName](todocompleted.md#typename)
* [validateProps](todocompleted.md#validateprops)
* [disableSerializableLists](todocompleted.md#static-disableserializablelists)
* [enableSerializableLists](todocompleted.md#static-enableserializablelists)
* [from](todocompleted.md#static-from)
* [getPropTypes](todocompleted.md#static-getproptypes)
* [getPropertyInitializers](todocompleted.md#static-getpropertyinitializers)
* [getTypeName](todocompleted.md#static-gettypename)
* [toString](todocompleted.md#static-tostring)
* [typeName](todocompleted.md#static-typename)

## Constructors

###  constructor

\+ **new TodoCompleted**(`props?`: types.Props): *[TodoCompleted](todocompleted.md)*

*Inherited from [CustomerRegistrationInitiated](customerregistrationinitiated.md).[constructor](customerregistrationinitiated.md#constructor)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`props?` | types.Props |

**Returns:** *[TodoCompleted](todocompleted.md)*

## Properties

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

###  todo

• **todo**: *[Todo](todo.md)*

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
