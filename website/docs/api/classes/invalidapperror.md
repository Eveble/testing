---
id: "invalidapperror"
title: "InvalidAppError"
sidebar_label: "InvalidAppError"
---

## Hierarchy

  ↳ [TestError](testerror.md)

* TestError

  ↳ **InvalidAppError**

## Index

### Constructors

* [constructor](invalidapperror.md#constructor)

### Properties

* [code](invalidapperror.md#optional-code)
* [message](invalidapperror.md#message)
* [name](invalidapperror.md#name)
* [stack](invalidapperror.md#optional-stack)

### Methods

* [fillErrorProps](invalidapperror.md#fillerrorprops)

## Constructors

###  constructor

\+ **new InvalidAppError**(): *[InvalidAppError](invalidapperror.md)*

*Overrides [TestError](testerror.md).[constructor](testerror.md#constructor)*

**Returns:** *[InvalidAppError](invalidapperror.md)*

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
