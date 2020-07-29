---
id: "invalidsuterror"
title: "InvalidSUTError"
sidebar_label: "InvalidSUTError"
---

## Hierarchy

  ↳ [TestError](testerror.md)

* TestError

  ↳ **InvalidSUTError**

## Index

### Constructors

* [constructor](invalidsuterror.md#constructor)

### Properties

* [code](invalidsuterror.md#optional-code)
* [message](invalidsuterror.md#message)
* [name](invalidsuterror.md#name)
* [stack](invalidsuterror.md#optional-stack)

### Methods

* [fillErrorProps](invalidsuterror.md#fillerrorprops)

## Constructors

###  constructor

\+ **new InvalidSUTError**(`got`: string): *[InvalidSUTError](invalidsuterror.md)*

*Overrides [TestError](testerror.md).[constructor](testerror.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`got` | string |

**Returns:** *[InvalidSUTError](invalidsuterror.md)*

## Properties

### `Optional` code

• **code**? : *number*

*Inherited from [TestError](testerror.md).[code](testerror.md#optional-code)*

*Overrides [TestError](testerror.md).[code](testerror.md#optional-code)*

___

###  message

• **message**: *string*

*Inherited from [TestError](testerror.md).[message](testerror.md#message)*

*Overrides void*

___

###  name

• **name**: *string*

*Inherited from [TestError](testerror.md).[name](testerror.md#name)*

*Overrides void*

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [TestError](testerror.md).[stack](testerror.md#optional-stack)*

*Overrides void*

## Methods

###  fillErrorProps

▸ **fillErrorProps**(`props`: types.ErrorProps): *types.ErrorProps*

*Inherited from [TestError](testerror.md).[fillErrorProps](testerror.md#fillerrorprops)*

*Overrides [TestError](testerror.md).[fillErrorProps](testerror.md#fillerrorprops)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | types.ErrorProps |

**Returns:** *types.ErrorProps*
