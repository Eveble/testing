---
id: "sendwelcomeemail"
title: "SendWelcomeEmail"
sidebar_label: "SendWelcomeEmail"
---

## Type parameters

▪ **T**: *SuperConstructor*

## Hierarchy

* Command‹[SendWelcomeEmail](sendwelcomeemail.md)›

  ↳ **SendWelcomeEmail**

## Implements

* Definable
* Hookable
* Ejsonable
* Message
* Command
* Identifiable

## Index

### Constructors

* [constructor](sendwelcomeemail.md#constructor)

### Properties

* [customerId](sendwelcomeemail.md#customerid)
* [customerName](sendwelcomeemail.md#customername)
* [metadata](sendwelcomeemail.md#optional-metadata)
* [schemaVersion](sendwelcomeemail.md#optional-schemaversion)
* [targetId](sendwelcomeemail.md#targetid)
* [timestamp](sendwelcomeemail.md#optional-timestamp)

### Methods

* [assignMetadata](sendwelcomeemail.md#assignmetadata)
* [equals](sendwelcomeemail.md#equals)
* [getActions](sendwelcomeemail.md#getactions)
* [getAssignment](sendwelcomeemail.md#getassignment)
* [getCorrelationId](sendwelcomeemail.md#getcorrelationid)
* [getHook](sendwelcomeemail.md#gethook)
* [getHookOrThrow](sendwelcomeemail.md#gethookorthrow)
* [getHooks](sendwelcomeemail.md#gethooks)
* [getId](sendwelcomeemail.md#getid)
* [getLegacyTransformer](sendwelcomeemail.md#getlegacytransformer)
* [getLegacyTransformers](sendwelcomeemail.md#getlegacytransformers)
* [getMetadata](sendwelcomeemail.md#getmetadata)
* [getPropTypes](sendwelcomeemail.md#getproptypes)
* [getPropertyInitializers](sendwelcomeemail.md#getpropertyinitializers)
* [getSchemaVersion](sendwelcomeemail.md#getschemaversion)
* [getTimestamp](sendwelcomeemail.md#gettimestamp)
* [getTypeName](sendwelcomeemail.md#gettypename)
* [hasAction](sendwelcomeemail.md#hasaction)
* [hasCorrelationId](sendwelcomeemail.md#hascorrelationid)
* [hasHook](sendwelcomeemail.md#hashook)
* [hasLegacyTransformer](sendwelcomeemail.md#haslegacytransformer)
* [hasMetadata](sendwelcomeemail.md#hasmetadata)
* [in](sendwelcomeemail.md#in)
* [isDeliverable](sendwelcomeemail.md#isdeliverable)
* [isScheduled](sendwelcomeemail.md#isscheduled)
* [overrideHook](sendwelcomeemail.md#overridehook)
* [overrideLegacyTransformer](sendwelcomeemail.md#overridelegacytransformer)
* [processSerializableList](sendwelcomeemail.md#processserializablelist)
* [registerHook](sendwelcomeemail.md#registerhook)
* [registerLegacyTransformer](sendwelcomeemail.md#registerlegacytransformer)
* [removeHook](sendwelcomeemail.md#removehook)
* [schedule](sendwelcomeemail.md#schedule)
* [setCorrelationId](sendwelcomeemail.md#setcorrelationid)
* [toJSONValue](sendwelcomeemail.md#tojsonvalue)
* [toPlainObject](sendwelcomeemail.md#toplainobject)
* [toString](sendwelcomeemail.md#tostring)
* [transformLegacyProps](sendwelcomeemail.md#transformlegacyprops)
* [typeName](sendwelcomeemail.md#typename)
* [validateProps](sendwelcomeemail.md#validateprops)
* [disableSerializableLists](sendwelcomeemail.md#static-disableserializablelists)
* [enableSerializableLists](sendwelcomeemail.md#static-enableserializablelists)
* [from](sendwelcomeemail.md#static-from)
* [getPropTypes](sendwelcomeemail.md#static-getproptypes)
* [getPropertyInitializers](sendwelcomeemail.md#static-getpropertyinitializers)
* [getTypeName](sendwelcomeemail.md#static-gettypename)
* [toString](sendwelcomeemail.md#static-tostring)
* [typeName](sendwelcomeemail.md#static-typename)

## Constructors

###  constructor

\+ **new SendWelcomeEmail**(`props`: types.ConstructorType‹[SendWelcomeEmail](sendwelcomeemail.md)› & object): *[SendWelcomeEmail](sendwelcomeemail.md)*

*Inherited from [RegisterCustomer](registercustomer.md).[constructor](registercustomer.md#constructor)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`props` | types.ConstructorType‹[SendWelcomeEmail](sendwelcomeemail.md)› & object |

**Returns:** *[SendWelcomeEmail](sendwelcomeemail.md)*

## Properties

###  customerId

• **customerId**: *string | Guid*

___

###  customerName

• **customerName**: *string*

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
