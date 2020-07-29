---
id: "testconfig"
title: "TestConfig"
sidebar_label: "TestConfig"
---

## Type parameters

▪ **T**: *SuperConstructor*

▪ **T**: *SuperConstructor*

## Hierarchy

* Config

* Config

  ↳ **TestConfig**

## Implements

* Definable
* Hookable
* Configurable
* Definable
* Hookable
* Configurable

## Index

### Constructors

* [constructor](testconfig.md#constructor)

### Properties

* [included](testconfig.md#optional-included)
* [merged](testconfig.md#optional-merged)
* [untestedProperties](testconfig.md#untestedproperties)

### Methods

* [assign](testconfig.md#assign)
* [equals](testconfig.md#equals)
* [get](testconfig.md#get)
* [getActions](testconfig.md#getactions)
* [getDefault](testconfig.md#getdefault)
* [getExact](testconfig.md#getexact)
* [getHook](testconfig.md#gethook)
* [getHookOrThrow](testconfig.md#gethookorthrow)
* [getHooks](testconfig.md#gethooks)
* [getPropTypes](testconfig.md#getproptypes)
* [getPropertyInitializers](testconfig.md#getpropertyinitializers)
* [has](testconfig.md#has)
* [hasAction](testconfig.md#hasaction)
* [hasDefault](testconfig.md#hasdefault)
* [hasHook](testconfig.md#hashook)
* [include](testconfig.md#include)
* [isConfigurable](testconfig.md#isconfigurable)
* [merge](testconfig.md#merge)
* [overrideHook](testconfig.md#overridehook)
* [registerHook](testconfig.md#registerhook)
* [removeHook](testconfig.md#removehook)
* [set](testconfig.md#set)
* [toPlainObject](testconfig.md#toplainobject)
* [validateProps](testconfig.md#validateprops)
* [from](testconfig.md#static-from)
* [getPropTypes](testconfig.md#static-getproptypes)
* [getPropertyInitializers](testconfig.md#static-getpropertyinitializers)

## Constructors

###  constructor

\+ **new TestConfig**(`props?`: Partial‹[TestConfig](testconfig.md)›): *[TestConfig](testconfig.md)*

*Overrides void*

Creates an instance of TestConfig.
Creates an instance of TestConfig.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props?` | Partial‹[TestConfig](testconfig.md)› | Properties of the type required for construction.  |

**Returns:** *[TestConfig](testconfig.md)*

## Properties

### `Optional` included

• **included**? : *Record‹string, Configurable›*

*Inherited from [TestConfig](testconfig.md).[included](testconfig.md#optional-included)*

*Overrides [TestConfig](testconfig.md).[included](testconfig.md#optional-included)*

___

### `Optional` merged

• **merged**? : *Record‹string, Configurable›*

*Inherited from [TestConfig](testconfig.md).[merged](testconfig.md#optional-merged)*

*Overrides [TestConfig](testconfig.md).[merged](testconfig.md#optional-merged)*

___

###  untestedProperties

• **untestedProperties**: *string[]* = [
    'timestamp',
    'version',
    'metadata',
    'schemaVersion',
  ]

## Methods

###  assign

▸ **assign**(`props`: types.Props): *void*

*Inherited from [TestConfig](testconfig.md).[assign](testconfig.md#assign)*

*Overrides [TestConfig](testconfig.md).[assign](testconfig.md#assign)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | types.Props |

**Returns:** *void*

___

###  equals

▸ **equals**(`other`: any): *boolean*

*Inherited from [TestConfig](testconfig.md).[equals](testconfig.md#equals)*

*Overrides [TestConfig](testconfig.md).[equals](testconfig.md#equals)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | any |

**Returns:** *boolean*

___

###  get

▸ **get**‹**T**›(`path`: string, `runtimeDefaultValue?`: T): *T | any*

*Inherited from [TestConfig](testconfig.md).[get](testconfig.md#get)*

*Overrides [TestConfig](testconfig.md).[get](testconfig.md#get)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`runtimeDefaultValue?` | T |

**Returns:** *T | any*

___

###  getActions

▸ **getActions**(): *types.hooks.Actions*

*Inherited from [TestConfig](testconfig.md).[getActions](testconfig.md#getactions)*

*Overrides [TestConfig](testconfig.md).[getActions](testconfig.md#getactions)*

**Returns:** *types.hooks.Actions*

___

###  getDefault

▸ **getDefault**‹**T**›(`path`: string): *T | any*

*Inherited from [TestConfig](testconfig.md).[getDefault](testconfig.md#getdefault)*

*Overrides [TestConfig](testconfig.md).[getDefault](testconfig.md#getdefault)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *T | any*

___

###  getExact

▸ **getExact**‹**T**›(`path`: string): *T | any*

*Inherited from [TestConfig](testconfig.md).[getExact](testconfig.md#getexact)*

*Overrides [TestConfig](testconfig.md).[getExact](testconfig.md#getexact)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *T | any*

___

###  getHook

▸ **getHook**(`action`: string, `id`: string): *types.Hook | undefined*

*Inherited from [TestConfig](testconfig.md).[getHook](testconfig.md#gethook)*

*Overrides [TestConfig](testconfig.md).[getHook](testconfig.md#gethook)*

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

*Overrides [TestConfig](testconfig.md).[getHookOrThrow](testconfig.md#gethookorthrow)*

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

*Overrides [TestConfig](testconfig.md).[getHooks](testconfig.md#gethooks)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |

**Returns:** *types.hooks.Mappings*

___

###  getPropTypes

▸ **getPropTypes**(): *types.Props*

*Inherited from [TestConfig](testconfig.md).[getPropTypes](testconfig.md#getproptypes)*

*Overrides [TestConfig](testconfig.md).[getPropTypes](testconfig.md#static-getproptypes)*

**Returns:** *types.Props*

___

###  getPropertyInitializers

▸ **getPropertyInitializers**(): *types.Props*

*Inherited from [TestConfig](testconfig.md).[getPropertyInitializers](testconfig.md#getpropertyinitializers)*

*Overrides [TestConfig](testconfig.md).[getPropertyInitializers](testconfig.md#getpropertyinitializers)*

**Returns:** *types.Props*

___

###  has

▸ **has**(`path`: string): *boolean*

*Inherited from [TestConfig](testconfig.md).[has](testconfig.md#has)*

*Overrides [TestConfig](testconfig.md).[has](testconfig.md#has)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *boolean*

___

###  hasAction

▸ **hasAction**(`action`: string): *boolean*

*Inherited from [TestConfig](testconfig.md).[hasAction](testconfig.md#hasaction)*

*Overrides [TestConfig](testconfig.md).[hasAction](testconfig.md#hasaction)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |

**Returns:** *boolean*

___

###  hasDefault

▸ **hasDefault**(`path`: string): *boolean*

*Inherited from [TestConfig](testconfig.md).[hasDefault](testconfig.md#hasdefault)*

*Overrides [TestConfig](testconfig.md).[hasDefault](testconfig.md#hasdefault)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *boolean*

___

###  hasHook

▸ **hasHook**(`action`: string, `id`: string): *boolean*

*Inherited from [TestConfig](testconfig.md).[hasHook](testconfig.md#hashook)*

*Overrides [TestConfig](testconfig.md).[hasHook](testconfig.md#hashook)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |

**Returns:** *boolean*

___

###  include

▸ **include**(`config`: Configurable): *void*

*Inherited from [TestConfig](testconfig.md).[include](testconfig.md#include)*

*Overrides [TestConfig](testconfig.md).[include](testconfig.md#include)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | Configurable |

**Returns:** *void*

___

###  isConfigurable

▸ **isConfigurable**(`path`: string): *boolean*

*Inherited from [TestConfig](testconfig.md).[isConfigurable](testconfig.md#isconfigurable)*

*Overrides [TestConfig](testconfig.md).[isConfigurable](testconfig.md#isconfigurable)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *boolean*

___

###  merge

▸ **merge**(`config`: Configurable): *void*

*Inherited from [TestConfig](testconfig.md).[merge](testconfig.md#merge)*

*Overrides [TestConfig](testconfig.md).[merge](testconfig.md#merge)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | Configurable |

**Returns:** *void*

___

###  overrideHook

▸ **overrideHook**(`action`: string, `id`: string, `hook`: types.Hook): *void*

*Inherited from [TestConfig](testconfig.md).[overrideHook](testconfig.md#overridehook)*

*Overrides [TestConfig](testconfig.md).[overrideHook](testconfig.md#overridehook)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |
`hook` | types.Hook |

**Returns:** *void*

___

###  registerHook

▸ **registerHook**(`action`: string, `id`: string, `hook`: types.Hook, `shouldOverride?`: boolean): *void*

*Inherited from [TestConfig](testconfig.md).[registerHook](testconfig.md#registerhook)*

*Overrides [TestConfig](testconfig.md).[registerHook](testconfig.md#registerhook)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |
`hook` | types.Hook |
`shouldOverride?` | boolean |

**Returns:** *void*

___

###  removeHook

▸ **removeHook**(`action`: string, `id`: string): *void*

*Inherited from [TestConfig](testconfig.md).[removeHook](testconfig.md#removehook)*

*Overrides [TestConfig](testconfig.md).[removeHook](testconfig.md#removehook)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |

**Returns:** *void*

___

###  set

▸ **set**‹**T**›(`path`: string, `value`: T): *void*

*Inherited from [TestConfig](testconfig.md).[set](testconfig.md#set)*

*Overrides [TestConfig](testconfig.md).[set](testconfig.md#set)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`value` | T |

**Returns:** *void*

___

###  toPlainObject

▸ **toPlainObject**(): *types.Props*

*Inherited from [TestConfig](testconfig.md).[toPlainObject](testconfig.md#toplainobject)*

*Overrides [TestConfig](testconfig.md).[toPlainObject](testconfig.md#toplainobject)*

**Returns:** *types.Props*

___

###  validateProps

▸ **validateProps**(`props`: Record‹string | number | symbol, any› | undefined, `propTypes`: types.PropTypes, `isStrict?`: boolean): *boolean*

*Inherited from [TestConfig](testconfig.md).[validateProps](testconfig.md#validateprops)*

*Overrides [TestConfig](testconfig.md).[validateProps](testconfig.md#validateprops)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Record‹string &#124; number &#124; symbol, any› &#124; undefined |
`propTypes` | types.PropTypes |
`isStrict?` | boolean |

**Returns:** *boolean*

___

### `Static` from

▸ **from**‹**T**›(`props`: Record‹string, any›): *T*

*Inherited from [TestConfig](testconfig.md).[from](testconfig.md#static-from)*

*Overrides [TestConfig](testconfig.md).[from](testconfig.md#static-from)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`props` | Record‹string, any› |

**Returns:** *T*

___

### `Static` getPropTypes

▸ **getPropTypes**(): *types.Props*

*Inherited from [TestConfig](testconfig.md).[getPropTypes](testconfig.md#static-getproptypes)*

*Overrides [TestConfig](testconfig.md).[getPropTypes](testconfig.md#static-getproptypes)*

**Returns:** *types.Props*

___

### `Static` getPropertyInitializers

▸ **getPropertyInitializers**(): *types.Props*

*Inherited from [TestConfig](testconfig.md).[getPropertyInitializers](testconfig.md#getpropertyinitializers)*

*Overrides [TestConfig](testconfig.md).[getPropertyInitializers](testconfig.md#getpropertyinitializers)*

**Returns:** *types.Props*
