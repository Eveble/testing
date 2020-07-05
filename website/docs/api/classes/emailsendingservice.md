---
id: "emailsendingservice"
title: "EmailSendingService"
sidebar_label: "EmailSendingService"
---

## Type parameters

▪ **T**: *SuperConstructor*

## Hierarchy

* Service

  ↳ **EmailSendingService**

## Implements

* Controller
* Sender
* Controller
* Publisher

## Index

### Constructors

* [constructor](emailsendingservice.md#constructor)

### Properties

* [commandBus](emailsendingservice.md#commandbus)
* [eventBus](emailsendingservice.md#eventbus)

### Methods

* [SendWelcomeEmail](emailsendingservice.md#sendwelcomeemail)
* [ensureHandleability](emailsendingservice.md#ensurehandleability)
* [getHandleableTypes](emailsendingservice.md#gethandleabletypes)
* [getHandled](emailsendingservice.md#gethandled)
* [getHandledCommands](emailsendingservice.md#gethandledcommands)
* [getHandledEvents](emailsendingservice.md#gethandledevents)
* [getHandledMessages](emailsendingservice.md#gethandledmessages)
* [getHandledTypes](emailsendingservice.md#gethandledtypes)
* [getHandledTypesNames](emailsendingservice.md#gethandledtypesnames)
* [getHandler](emailsendingservice.md#gethandler)
* [getHandlerOrThrow](emailsendingservice.md#gethandlerorthrow)
* [getHandlers](emailsendingservice.md#gethandlers)
* [getSubscribedEvents](emailsendingservice.md#getsubscribedevents)
* [getTypeByHandler](emailsendingservice.md#gettypebyhandler)
* [handle](emailsendingservice.md#handle)
* [handles](emailsendingservice.md#handles)
* [hasHandler](emailsendingservice.md#hashandler)
* [initialize](emailsendingservice.md#initialize)
* [isHandleabe](emailsendingservice.md#ishandleabe)
* [on](emailsendingservice.md#on)
* [overrideHandler](emailsendingservice.md#overridehandler)
* [publish](emailsendingservice.md#publish)
* [registerCommandHandler](emailsendingservice.md#registercommandhandler)
* [registerEventHandler](emailsendingservice.md#registereventhandler)
* [registerHandler](emailsendingservice.md#registerhandler)
* [removeHandler](emailsendingservice.md#removehandler)
* [send](emailsendingservice.md#send)
* [setHandleableTypes](emailsendingservice.md#sethandleabletypes)
* [subscribeTo](emailsendingservice.md#subscribeto)
* [subscribes](emailsendingservice.md#subscribes)

## Constructors

###  constructor

\+ **new EmailSendingService**(): *[EmailSendingService](emailsendingservice.md)*

*Inherited from [EmailSendingService](emailsendingservice.md).[constructor](emailsendingservice.md#constructor)*

**Returns:** *[EmailSendingService](emailsendingservice.md)*

## Properties

###  commandBus

• **commandBus**: *CommandBus*

*Inherited from [EmailSendingService](emailsendingservice.md).[commandBus](emailsendingservice.md#commandbus)*

*Overrides void*

___

###  eventBus

• **eventBus**: *EventBus*

*Inherited from [EmailSendingService](emailsendingservice.md).[eventBus](emailsendingservice.md#eventbus)*

*Overrides void*

## Methods

###  SendWelcomeEmail

▸ **SendWelcomeEmail**(`command`: [SendWelcomeEmail](sendwelcomeemail.md)): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`command` | [SendWelcomeEmail](sendwelcomeemail.md) |

**Returns:** *Promise‹void›*

___

###  ensureHandleability

▸ **ensureHandleability**(`messageType`: MessageType‹Message›, `handleableTypes?`: MessageType‹Message› | MessageType‹Message›[]): *boolean*

*Inherited from [Customer](customer.md).[ensureHandleability](customer.md#ensurehandleability)*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |
`handleableTypes?` | MessageType‹Message› &#124; MessageType‹Message›[] |

**Returns:** *boolean*

___

###  getHandleableTypes

▸ **getHandleableTypes**(): *MessageType‹Message›[]*

*Inherited from [Customer](customer.md).[getHandleableTypes](customer.md#gethandleabletypes)*

**Returns:** *MessageType‹Message›[]*

___

###  getHandled

▸ **getHandled**(`messageType`: MessageType‹Message›): *MessageType‹Message›[]*

*Inherited from [Customer](customer.md).[getHandled](customer.md#gethandled)*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |

**Returns:** *MessageType‹Message›[]*

___

###  getHandledCommands

▸ **getHandledCommands**(): *MessageType‹Command›[]*

*Inherited from [Customer](customer.md).[getHandledCommands](customer.md#gethandledcommands)*

**Returns:** *MessageType‹Command›[]*

___

###  getHandledEvents

▸ **getHandledEvents**(): *MessageType‹Event›[]*

*Inherited from [Customer](customer.md).[getHandledEvents](customer.md#gethandledevents)*

**Returns:** *MessageType‹Event›[]*

___

###  getHandledMessages

▸ **getHandledMessages**(): *MessageType‹Message›[]*

*Inherited from [Customer](customer.md).[getHandledMessages](customer.md#gethandledmessages)*

**Returns:** *MessageType‹Message›[]*

___

###  getHandledTypes

▸ **getHandledTypes**(): *MessageType‹Message›[]*

*Inherited from [Customer](customer.md).[getHandledTypes](customer.md#gethandledtypes)*

**Returns:** *MessageType‹Message›[]*

___

###  getHandledTypesNames

▸ **getHandledTypesNames**(): *types.TypeName[]*

*Inherited from [Customer](customer.md).[getHandledTypesNames](customer.md#gethandledtypesnames)*

**Returns:** *types.TypeName[]*

___

###  getHandler

▸ **getHandler**(`messageType`: MessageType‹Message›): *types.Handler | undefined*

*Inherited from [Customer](customer.md).[getHandler](customer.md#gethandler)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |

**Returns:** *types.Handler | undefined*

___

###  getHandlerOrThrow

▸ **getHandlerOrThrow**(`messageType`: MessageType‹Message›): *types.Handler*

*Inherited from [Customer](customer.md).[getHandlerOrThrow](customer.md#gethandlerorthrow)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |

**Returns:** *types.Handler*

___

###  getHandlers

▸ **getHandlers**(): *Map‹MessageType‹Message›, types.Handler | types.Handler[]›*

*Inherited from [Customer](customer.md).[getHandlers](customer.md#gethandlers)*

**Returns:** *Map‹MessageType‹Message›, types.Handler | types.Handler[]›*

___

###  getSubscribedEvents

▸ **getSubscribedEvents**(): *MessageType‹Event›[]*

*Inherited from [EmailSendingService](emailsendingservice.md).[getSubscribedEvents](emailsendingservice.md#getsubscribedevents)*

**Returns:** *MessageType‹Event›[]*

___

###  getTypeByHandler

▸ **getTypeByHandler**(`handlerReference`: types.Handler): *any | undefined*

*Inherited from [Customer](customer.md).[getTypeByHandler](customer.md#gettypebyhandler)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`handlerReference` | types.Handler |

**Returns:** *any | undefined*

___

###  handle

▸ **handle**(`message`: Message): *Promise‹any›*

*Inherited from [EmailSendingService](emailsendingservice.md).[handle](emailsendingservice.md#handle)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | Message |

**Returns:** *Promise‹any›*

___

###  handles

▸ **handles**(): *Map‹MessageType‹Command›, types.Handler›*

*Inherited from [Customer](customer.md).[handles](customer.md#handles)*

**Returns:** *Map‹MessageType‹Command›, types.Handler›*

___

###  hasHandler

▸ **hasHandler**(`messageType`: MessageType‹Message›): *boolean*

*Inherited from [Customer](customer.md).[hasHandler](customer.md#hashandler)*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |

**Returns:** *boolean*

___

###  initialize

▸ **initialize**(): *void*

*Inherited from [EmailSendingService](emailsendingservice.md).[initialize](emailsendingservice.md#initialize)*

*Overrides void*

**Returns:** *void*

___

###  isHandleabe

▸ **isHandleabe**(`messageType`: MessageType‹Message›, `handleableTypes?`: MessageType‹Message› | MessageType‹Message›[]): *boolean*

*Inherited from [Customer](customer.md).[isHandleabe](customer.md#ishandleabe)*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |
`handleableTypes?` | MessageType‹Message› &#124; MessageType‹Message›[] |

**Returns:** *boolean*

___

###  on

▸ **on**(`event`: Event): *Promise‹void›*

*Inherited from [EmailSendingService](emailsendingservice.md).[on](emailsendingservice.md#on)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event |

**Returns:** *Promise‹void›*

___

###  overrideHandler

▸ **overrideHandler**(`messageType`: MessageType‹Message›, `handler`: types.Handler): *void*

*Inherited from [Customer](customer.md).[overrideHandler](customer.md#overridehandler)*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |
`handler` | types.Handler |

**Returns:** *void*

___

###  publish

▸ **publish**(`event`: Event): *Promise‹void›*

*Inherited from [EmailSendingService](emailsendingservice.md).[publish](emailsendingservice.md#publish)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event |

**Returns:** *Promise‹void›*

___

###  registerCommandHandler

▸ **registerCommandHandler**(`commandType`: MessageType‹Command›, `handler`: types.Handler, `shouldOverride?`: boolean): *void*

*Inherited from [EmailSendingService](emailsendingservice.md).[registerCommandHandler](emailsendingservice.md#registercommandhandler)*

**Parameters:**

Name | Type |
------ | ------ |
`commandType` | MessageType‹Command› |
`handler` | types.Handler |
`shouldOverride?` | boolean |

**Returns:** *void*

___

###  registerEventHandler

▸ **registerEventHandler**(`eventType`: MessageType‹Event›, `handler`: types.Handler, `shouldOverride?`: boolean): *void*

*Inherited from [EmailSendingService](emailsendingservice.md).[registerEventHandler](emailsendingservice.md#registereventhandler)*

**Parameters:**

Name | Type |
------ | ------ |
`eventType` | MessageType‹Event› |
`handler` | types.Handler |
`shouldOverride?` | boolean |

**Returns:** *void*

___

###  registerHandler

▸ **registerHandler**(`messageType`: MessageType‹Message›, `handler`: types.Handler, `shouldOverride?`: boolean): *void*

*Inherited from [Customer](customer.md).[registerHandler](customer.md#registerhandler)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |
`handler` | types.Handler |
`shouldOverride?` | boolean |

**Returns:** *void*

___

###  removeHandler

▸ **removeHandler**(`messageType`: MessageType‹Message›): *void*

*Inherited from [Customer](customer.md).[removeHandler](customer.md#removehandler)*

**Parameters:**

Name | Type |
------ | ------ |
`messageType` | MessageType‹Message› |

**Returns:** *void*

___

###  send

▸ **send**(`command`: Command): *Promise‹any›*

*Inherited from [EmailSendingService](emailsendingservice.md).[send](emailsendingservice.md#send)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | Command |

**Returns:** *Promise‹any›*

___

###  setHandleableTypes

▸ **setHandleableTypes**(`handleableTypes`: MessageType‹Message› | MessageType‹Message›[]): *void*

*Inherited from [Customer](customer.md).[setHandleableTypes](customer.md#sethandleabletypes)*

**Parameters:**

Name | Type |
------ | ------ |
`handleableTypes` | MessageType‹Message› &#124; MessageType‹Message›[] |

**Returns:** *void*

___

###  subscribeTo

▸ **subscribeTo**(`eventType`: MessageType‹Event›, `handler`: types.Handler, `shouldOverride?`: boolean): *void*

*Inherited from [EmailSendingService](emailsendingservice.md).[subscribeTo](emailsendingservice.md#subscribeto)*

**Parameters:**

Name | Type |
------ | ------ |
`eventType` | MessageType‹Event› |
`handler` | types.Handler |
`shouldOverride?` | boolean |

**Returns:** *void*

___

###  subscribes

▸ **subscribes**(): *Map‹MessageType‹Event›, types.Handler›*

*Inherited from [Customer](customer.md).[subscribes](customer.md#subscribes)*

**Returns:** *Map‹MessageType‹Event›, types.Handler›*
