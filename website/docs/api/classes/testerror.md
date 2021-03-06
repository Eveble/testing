---
id: "testerror"
title: "TestError"
sidebar_label: "TestError"
---

## Hierarchy

* ExtendableError

* ExtendableError

  ↳ **TestError**

  ↳ [InvalidAppError](invalidapperror.md)

  ↳ [InvalidSUTError](invalidsuterror.md)

  ↳ [InvalidExpectationError](invalidexpectationerror.md)

  ↳ [InvalidMessageError](invalidmessageerror.md)

## Index

### Constructors

* [constructor](testerror.md#constructor)

### Properties

* [code](testerror.md#optional-code)
* [message](testerror.md#message)
* [name](testerror.md#name)
* [stack](testerror.md#optional-stack)

### Methods

* [fillErrorProps](testerror.md#fillerrorprops)

## Constructors

###  constructor

\+ **new TestError**(`messageOrProps?`: string | types.ErrorProps): *[TestError](testerror.md)*

*Inherited from [TestError](testerror.md).[constructor](testerror.md#constructor)*

*Overrides [TestError](testerror.md).[constructor](testerror.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`messageOrProps?` | string &#124; types.ErrorProps |

**Returns:** *[TestError](testerror.md)*

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
