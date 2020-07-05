---
id: "globals"
title: "@eveble/testing"
sidebar_label: "Globals"
---

## Index

### Namespaces

* [__global](modules/__global.md)
* [types](modules/types.md)

### Classes

* [AddTodo](classes/addtodo.md)
* [ChangeCustomerName](classes/changecustomername.md)
* [CompleteTodo](classes/completetodo.md)
* [CreateCustomer](classes/createcustomer.md)
* [CreateTodoList](classes/createtodolist.md)
* [Customer](classes/customer.md)
* [CustomerApp](classes/customerapp.md)
* [CustomerCreated](classes/customercreated.md)
* [CustomerNameChanged](classes/customernamechanged.md)
* [CustomerRegistration](classes/customerregistration.md)
* [CustomerRegistrationCompleted](classes/customerregistrationcompleted.md)
* [CustomerRegistrationInitiated](classes/customerregistrationinitiated.md)
* [EmailSendingService](classes/emailsendingservice.md)
* [EventSourceableBDDAsserter](classes/eventsourceablebddasserter.md)
* [ExpireTodo](classes/expiretodo.md)
* [InvalidAppError](classes/invalidapperror.md)
* [InvalidCustomerName](classes/invalidcustomername.md)
* [InvalidExpectationError](classes/invalidexpectationerror.md)
* [InvalidMessageError](classes/invalidmessageerror.md)
* [InvalidSUTError](classes/invalidsuterror.md)
* [ProcessedAssertion](classes/processedassertion.md)
* [RegisterCustomer](classes/registercustomer.md)
* [Scenario](classes/scenario.md)
* [SendWelcomeEmail](classes/sendwelcomeemail.md)
* [TestConfig](classes/testconfig.md)
* [TestError](classes/testerror.md)
* [Title](classes/title.md)
* [Todo](classes/todo.md)
* [TodoAdded](classes/todoadded.md)
* [TodoCompleted](classes/todocompleted.md)
* [TodoExceededError](classes/todoexceedederror.md)
* [TodoExpired](classes/todoexpired.md)
* [TodoList](classes/todolist.md)
* [TodoListApp](classes/todolistapp.md)
* [TodoListCreated](classes/todolistcreated.md)
* [WelcomeEmailSent](classes/welcomeemailsent.md)
* [WelcomeEmailTriggered](classes/welcomeemailtriggered.md)

### Variables

* [env](globals.md#const-env)
* [envFile](globals.md#const-envfile)

### Functions

* [chaiStructAssertion](globals.md#const-chaistructassertion)
* [on](globals.md#on)

## Variables

### `Const` env

• **env**: *string* = process.env.NODE_ENV

___

### `Const` envFile

• **envFile**: *string* = process.env.NODE_ENV ? `.env.${env}` : '.env'

## Functions

### `Const` chaiStructAssertion

▸ **chaiStructAssertion**(`chai`: ChaiStatic, `utils`: ChaiUtils): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chai` | ChaiStatic |
`utils` | ChaiUtils |

**Returns:** *void*

___

###  on

▸ **on**(`app`: EvebleTypes.App, `asserter?`: [EventSourceableBDDAsserterType](interfaces/types.eventsourceablebddassertertype.md)): *[Scenario](classes/scenario.md)*

**Parameters:**

Name | Type |
------ | ------ |
`app` | EvebleTypes.App |
`asserter?` | [EventSourceableBDDAsserterType](interfaces/types.eventsourceablebddassertertype.md) |

**Returns:** *[Scenario](classes/scenario.md)*
