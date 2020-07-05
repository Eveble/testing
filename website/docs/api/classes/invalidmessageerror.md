---
id: "invalidmessageerror"
title: "InvalidMessageError"
sidebar_label: "InvalidMessageError"
---

## Hierarchy

  ↳ [TestError](testerror.md)

  ↳ **InvalidMessageError**

## Index

### Constructors

* [constructor](invalidmessageerror.md#constructor)

### Properties

* [code](invalidmessageerror.md#optional-code)
* [message](invalidmessageerror.md#message)
* [name](invalidmessageerror.md#name)
* [stack](invalidmessageerror.md#optional-stack)

### Methods

* [fillErrorProps](invalidmessageerror.md#fillerrorprops)

## Constructors

###  constructor

\+ **new InvalidMessageError**(`got`: string): *[InvalidMessageError](invalidmessageerror.md)*

*Overrides [TestError](testerror.md).[constructor](testerror.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`got` | string |

**Returns:** *[InvalidMessageError](invalidmessageerror.md)*

## Properties

### `Optional` code

• **code**? : *number*

*Inherited from [TestError](testerror.md).[code](testerror.md#optional-code)*

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

**Parameters:**

Name | Type |
------ | ------ |
`props` | types.ErrorProps |

**Returns:** *types.ErrorProps*
