---
id: "invalidexpectationerror"
title: "InvalidExpectationError"
sidebar_label: "InvalidExpectationError"
---

## Hierarchy

  ↳ [TestError](testerror.md)

* TestError

  ↳ **InvalidExpectationError**

## Index

### Constructors

* [constructor](invalidexpectationerror.md#constructor)

### Properties

* [code](invalidexpectationerror.md#optional-code)
* [message](invalidexpectationerror.md#message)
* [name](invalidexpectationerror.md#name)
* [stack](invalidexpectationerror.md#optional-stack)

### Methods

* [fillErrorProps](invalidexpectationerror.md#fillerrorprops)

## Constructors

###  constructor

\+ **new InvalidExpectationError**(): *[InvalidExpectationError](invalidexpectationerror.md)*

*Overrides [TestError](testerror.md).[constructor](testerror.md#constructor)*

**Returns:** *[InvalidExpectationError](invalidexpectationerror.md)*

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
