[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Console](../modules/_inspector_.console.md) › [ConsoleMessage](_inspector_.console.consolemessage.md)

# Interface: ConsoleMessage

Console message.

## Hierarchy

* **ConsoleMessage**

## Index

### Properties

* [column](_inspector_.console.consolemessage.md#optional-column)
* [level](_inspector_.console.consolemessage.md#level)
* [line](_inspector_.console.consolemessage.md#optional-line)
* [source](_inspector_.console.consolemessage.md#source)
* [text](_inspector_.console.consolemessage.md#text)
* [url](_inspector_.console.consolemessage.md#optional-url)

## Properties

### `Optional` column

• **column**? : *undefined | number*

Defined in node_modules/@types/node/inspector.d.ts:1425

Column number in the resource that generated this message (1-based).

___

###  level

• **level**: *string*

Defined in node_modules/@types/node/inspector.d.ts:1409

Message severity.

___

### `Optional` line

• **line**? : *undefined | number*

Defined in node_modules/@types/node/inspector.d.ts:1421

Line number in the resource that generated this message (1-based).

___

###  source

• **source**: *string*

Defined in node_modules/@types/node/inspector.d.ts:1405

Message source.

___

###  text

• **text**: *string*

Defined in node_modules/@types/node/inspector.d.ts:1413

Message text.

___

### `Optional` url

• **url**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:1417

URL of the message origin.
