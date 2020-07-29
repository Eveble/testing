---
id: "expiretodo"
title: "ExpireTodo"
sidebar_label: "ExpireTodo"
---

## Type parameters

▪ **T**: *SuperConstructor*

## Hierarchy

* Command‹[ExpireTodo](expiretodo.md)›

  ↳ **ExpireTodo**

## Implements

* Definable
* Hookable
* Ejsonable
* Message
* Command
* Identifiable

## Index

### Constructors

* [constructor](expiretodo.md#constructor)

### Properties

* [id](expiretodo.md#id)
* [metadata](expiretodo.md#optional-metadata)
* [schemaVersion](expiretodo.md#optional-schemaversion)
* [targetId](expiretodo.md#targetid)
* [timestamp](expiretodo.md#optional-timestamp)

### Methods

* [assignMetadata](expiretodo.md#assignmetadata)
* [equals](expiretodo.md#equals)
* [getActions](expiretodo.md#getactions)
* [getAssignment](expiretodo.md#getassignment)
* [getCorrelationId](expiretodo.md#getcorrelationid)
* [getHook](expiretodo.md#gethook)
* [getHookOrThrow](expiretodo.md#gethookorthrow)
* [getHooks](expiretodo.md#gethooks)
* [getId](expiretodo.md#getid)
* [getLegacyTransformer](expiretodo.md#getlegacytransformer)
* [getLegacyTransformers](expiretodo.md#getlegacytransformers)
* [getMetadata](expiretodo.md#getmetadata)
* [getPropTypes](expiretodo.md#getproptypes)
* [getPropertyInitializers](expiretodo.md#getpropertyinitializers)
* [getSchemaVersion](expiretodo.md#getschemaversion)
* [getTimestamp](expiretodo.md#gettimestamp)
* [getTypeName](expiretodo.md#gettypename)
* [hasAction](expiretodo.md#hasaction)
* [hasCorrelationId](expiretodo.md#hascorrelationid)
* [hasHook](expiretodo.md#hashook)
* [hasLegacyTransformer](expiretodo.md#haslegacytransformer)
* [hasMetadata](expiretodo.md#hasmetadata)
* [in](expiretodo.md#in)
* [isDeliverable](expiretodo.md#isdeliverable)
* [isScheduled](expiretodo.md#isscheduled)
* [overrideHook](expiretodo.md#overridehook)
* [overrideLegacyTransformer](expiretodo.md#overridelegacytransformer)
* [processSerializableList](expiretodo.md#processserializablelist)
* [registerHook](expiretodo.md#registerhook)
* [registerLegacyTransformer](expiretodo.md#registerlegacytransformer)
* [removeHook](expiretodo.md#removehook)
* [schedule](expiretodo.md#schedule)
* [setCorrelationId](expiretodo.md#setcorrelationid)
* [toJSONValue](expiretodo.md#tojsonvalue)
* [toPlainObject](expiretodo.md#toplainobject)
* [toString](expiretodo.md#tostring)
* [transformLegacyProps](expiretodo.md#transformlegacyprops)
* [typeName](expiretodo.md#typename)
* [validateProps](expiretodo.md#validateprops)
* [disableSerializableLists](expiretodo.md#static-disableserializablelists)
* [enableSerializableLists](expiretodo.md#static-enableserializablelists)
* [from](expiretodo.md#static-from)
* [getPropTypes](expiretodo.md#static-getproptypes)
* [getPropertyInitializers](expiretodo.md#static-getpropertyinitializers)
* [getTypeName](expiretodo.md#static-gettypename)
* [toString](expiretodo.md#static-tostring)
* [typeName](expiretodo.md#static-typename)

## Constructors

###  constructor

\+ **new ExpireTodo**(`props`: types.ConstructorType‹[ExpireTodo](expiretodo.md)› & object): *[ExpireTodo](expiretodo.md)*

*Inherited from [RegisterCustomer](registercustomer.md).[constructor](registercustomer.md#constructor)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`props` | types.ConstructorType‹[ExpireTodo](expiretodo.md)› & object |

**Returns:** *[ExpireTodo](expiretodo.md)*

## Properties

###  id

• **id**: *string | Guid*

___

### `Optional` metadata

• **metadata**? : *Record‹string, any›*

*Inherited from [RegisterCustomer](registercustomer.md).[metadata](registercustomer.md#optional-metadata)*

___

### `Optional` schemaVersion

• **schemaVersion**? : *number*

*Inherited from [RegisterCustomer](registercustomer.md).[schemaVersion](registercustomer.md#optional-schemaversion)*

*Overrides void*

___

###  targetId

• **targetId**: *Guid | string*

*Inherited from [RegisterCustomer](registercustomer.md).[targetId](registercustomer.md#targetid)*

___

### `Optional` timestamp

• **timestamp**? : *Date*

*Inherited from [RegisterCustomer](registercustomer.md).[timestamp](registercustomer.md#optional-timestamp)*

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

###  getAssignment

▸ **getAssignment**(): *Assignment | undefined*

*Inherited from [RegisterCustomer](registercustomer.md).[getAssignment](registercustomer.md#getassignment)*

**Returns:** *Assignment | undefined*

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

*Inherited from [RegisterCustomer](registercustomer.md).[getId](registercustomer.md#getid)*

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

###  isDeliverable

▸ **isDeliverable**(): *boolean*

*Inherited from [RegisterCustomer](registercustomer.md).[isDeliverable](registercustomer.md#isdeliverable)*

**Returns:** *boolean*

___

###  isScheduled

▸ **isScheduled**(): *boolean*

*Inherited from [RegisterCustomer](registercustomer.md).[isScheduled](registercustomer.md#isscheduled)*

**Returns:** *boolean*

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

###  schedule

▸ **schedule**(`assignment`: Assignment): *void*

*Inherited from [RegisterCustomer](registercustomer.md).[schedule](registercustomer.md#schedule)*

**Parameters:**

Name | Type |
------ | ------ |
`assignment` | Assignment |

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
