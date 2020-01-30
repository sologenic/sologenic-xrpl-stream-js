[typescript](../README.md) › [Globals](../globals.md) › [math](../modules/math.md) › [MathNode](math.mathnode.md)

# Interface: MathNode

## Hierarchy

* **MathNode**

## Index

### Properties

* [args](math.mathnode.md#optional-args)
* [comment](math.mathnode.md#optional-comment)
* [fn](math.mathnode.md#optional-fn)
* [isAccessorNode](math.mathnode.md#optional-isaccessornode)
* [isArrayNode](math.mathnode.md#optional-isarraynode)
* [isAssignmentNode](math.mathnode.md#optional-isassignmentnode)
* [isBlockNode](math.mathnode.md#optional-isblocknode)
* [isConditionalnode](math.mathnode.md#optional-isconditionalnode)
* [isConstantNode](math.mathnode.md#optional-isconstantnode)
* [isFunctionAssignmentNode](math.mathnode.md#optional-isfunctionassignmentnode)
* [isFunctionNode](math.mathnode.md#optional-isfunctionnode)
* [isIndexNode](math.mathnode.md#optional-isindexnode)
* [isNode](math.mathnode.md#isnode)
* [isObjectNode](math.mathnode.md#optional-isobjectnode)
* [isOperatorNode](math.mathnode.md#optional-isoperatornode)
* [isParenthesisNode](math.mathnode.md#optional-isparenthesisnode)
* [isRangeNode](math.mathnode.md#optional-israngenode)
* [isSymbolNode](math.mathnode.md#optional-issymbolnode)
* [isUpdateNode](math.mathnode.md#optional-isupdatenode)
* [name](math.mathnode.md#optional-name)
* [op](math.mathnode.md#optional-op)
* [type](math.mathnode.md#type)
* [value](math.mathnode.md#optional-value)

### Methods

* [clone](math.mathnode.md#clone)
* [cloneDeep](math.mathnode.md#clonedeep)
* [compile](math.mathnode.md#compile)
* [equals](math.mathnode.md#equals)
* [evaluate](math.mathnode.md#evaluate)
* [filter](math.mathnode.md#filter)
* [forEach](math.mathnode.md#foreach)
* [map](math.mathnode.md#map)
* [toHtml](math.mathnode.md#tohtml)
* [toString](math.mathnode.md#tostring)
* [toTex](math.mathnode.md#totex)
* [transform](math.mathnode.md#transform)
* [traverse](math.mathnode.md#traverse)

## Properties

### `Optional` args

• **args**? : *[MathNode](math.mathnode.md)[]*

Defined in node_modules/@types/mathjs/index.d.ts:3072

___

### `Optional` comment

• **comment**? : *undefined | string*

Defined in node_modules/@types/mathjs/index.d.ts:3069

___

### `Optional` fn

• **fn**? : *undefined | string*

Defined in node_modules/@types/mathjs/index.d.ts:3071

___

### `Optional` isAccessorNode

• **isAccessorNode**? : *undefined | false | true*

Defined in node_modules/@types/mathjs/index.d.ts:3054

___

### `Optional` isArrayNode

• **isArrayNode**? : *undefined | false | true*

Defined in node_modules/@types/mathjs/index.d.ts:3055

___

### `Optional` isAssignmentNode

• **isAssignmentNode**? : *undefined | false | true*

Defined in node_modules/@types/mathjs/index.d.ts:3056

___

### `Optional` isBlockNode

• **isBlockNode**? : *undefined | false | true*

Defined in node_modules/@types/mathjs/index.d.ts:3057

___

### `Optional` isConditionalnode

• **isConditionalnode**? : *undefined | false | true*

Defined in node_modules/@types/mathjs/index.d.ts:3058

___

### `Optional` isConstantNode

• **isConstantNode**? : *undefined | false | true*

Defined in node_modules/@types/mathjs/index.d.ts:3059

___

### `Optional` isFunctionAssignmentNode

• **isFunctionAssignmentNode**? : *undefined | false | true*

Defined in node_modules/@types/mathjs/index.d.ts:3060

___

### `Optional` isFunctionNode

• **isFunctionNode**? : *undefined | false | true*

Defined in node_modules/@types/mathjs/index.d.ts:3061

___

### `Optional` isIndexNode

• **isIndexNode**? : *undefined | false | true*

Defined in node_modules/@types/mathjs/index.d.ts:3062

___

###  isNode

• **isNode**: *boolean*

Defined in node_modules/@types/mathjs/index.d.ts:3053

___

### `Optional` isObjectNode

• **isObjectNode**? : *undefined | false | true*

Defined in node_modules/@types/mathjs/index.d.ts:3063

___

### `Optional` isOperatorNode

• **isOperatorNode**? : *undefined | false | true*

Defined in node_modules/@types/mathjs/index.d.ts:3064

___

### `Optional` isParenthesisNode

• **isParenthesisNode**? : *undefined | false | true*

Defined in node_modules/@types/mathjs/index.d.ts:3065

___

### `Optional` isRangeNode

• **isRangeNode**? : *undefined | false | true*

Defined in node_modules/@types/mathjs/index.d.ts:3066

___

### `Optional` isSymbolNode

• **isSymbolNode**? : *undefined | false | true*

Defined in node_modules/@types/mathjs/index.d.ts:3067

___

### `Optional` isUpdateNode

• **isUpdateNode**? : *undefined | false | true*

Defined in node_modules/@types/mathjs/index.d.ts:3068

___

### `Optional` name

• **name**? : *undefined | string*

Defined in node_modules/@types/mathjs/index.d.ts:3074

___

### `Optional` op

• **op**? : *undefined | string*

Defined in node_modules/@types/mathjs/index.d.ts:3070

___

###  type

• **type**: *string*

Defined in node_modules/@types/mathjs/index.d.ts:3073

___

### `Optional` value

• **value**? : *any*

Defined in node_modules/@types/mathjs/index.d.ts:3075

## Methods

###  clone

▸ **clone**(): *[MathNode](math.mathnode.md)*

Defined in node_modules/@types/mathjs/index.d.ts:3081

Create a shallow clone of the node. The node itself is cloned, its
childs are not cloned.

**Returns:** *[MathNode](math.mathnode.md)*

___

###  cloneDeep

▸ **cloneDeep**(): *[MathNode](math.mathnode.md)*

Defined in node_modules/@types/mathjs/index.d.ts:3086

Create a deep clone of the node. Both the node as well as all its
childs are cloned recursively.

**Returns:** *[MathNode](math.mathnode.md)*

___

###  compile

▸ **compile**(): *[EvalFunction](math.evalfunction.md)*

Defined in node_modules/@types/mathjs/index.d.ts:3091

Compile an expression into optimized JavaScript code. compile returns
an object with a function evaluate([scope]) to evaluate. Example:

**Returns:** *[EvalFunction](math.evalfunction.md)*

___

###  equals

▸ **equals**(`other`: [MathNode](math.mathnode.md)): *boolean*

Defined in node_modules/@types/mathjs/index.d.ts:3101

Test whether this node equals an other node. Does a deep comparison
of the values of both nodes.

**Parameters:**

Name | Type |
------ | ------ |
`other` | [MathNode](math.mathnode.md) |

**Returns:** *boolean*

___

###  evaluate

▸ **evaluate**(`expr?`: any): *any*

Defined in node_modules/@types/mathjs/index.d.ts:3096

Compile and eval an expression, this is the equivalent of doing
node.compile().evaluate(scope). Example:

**Parameters:**

Name | Type |
------ | ------ |
`expr?` | any |

**Returns:** *any*

___

###  filter

▸ **filter**(`callback`: function): *[MathNode](math.mathnode.md)[]*

Defined in node_modules/@types/mathjs/index.d.ts:3127

Filter nodes in an expression tree. The callback function is called
as callback(node: MathNode, path: string, parent: MathNode) : boolean
for every node in the tree, and must return a boolean. The function
filter returns an array with nodes for which the test returned true.
Parameter path is a string containing a relative JSON Path.

Example:

```
var node = math.parse('x^2 + x/4 + 3*y');
var filtered = node.filter(function (node) {
return node.isSymbolMathNode && node.name == 'x';
});
// returns an array with two entries: two SymbolMathNodes 'x'
```

The callback function is called as callback(node: MathNode, path:
string, parent: MathNode) : boolean for every node in the tree, and
must return a boolean. The function filter returns an array with
nodes for which the test returned true. Parameter path is a string
containing a relative JSON Path.

**Parameters:**

▪ **callback**: *function*

▸ (`node`: [MathNode](math.mathnode.md), `path`: string, `parent`: [MathNode](math.mathnode.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [MathNode](math.mathnode.md) |
`path` | string |
`parent` | [MathNode](math.mathnode.md) |

**Returns:** *[MathNode](math.mathnode.md)[]*

Returns an array with nodes for which test returned true

___

###  forEach

▸ **forEach**(`callback`: function): *[MathNode](math.mathnode.md)[]*

Defined in node_modules/@types/mathjs/index.d.ts:3134

[forEach description]

**Parameters:**

▪ **callback**: *function*

▸ (`node`: [MathNode](math.mathnode.md), `path`: string, `parent`: [MathNode](math.mathnode.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [MathNode](math.mathnode.md) |
`path` | string |
`parent` | [MathNode](math.mathnode.md) |

**Returns:** *[MathNode](math.mathnode.md)[]*

___

###  map

▸ **map**(`callback`: function): *[MathNode](math.mathnode.md)*

Defined in node_modules/@types/mathjs/index.d.ts:3149

Transform a node. Creates a new MathNode having it’s child's be the
results of calling the provided callback function for each of the
child's of the original node. The callback function is called as
`callback(child: MathNode, path: string, parent: MathNode)` and must
return a MathNode. Parameter path is a string containing a relative
JSON Path.

See also transform, which is a recursive version of map.

**Parameters:**

▪ **callback**: *function*

▸ (`node`: [MathNode](math.mathnode.md), `path`: string, `parent`: [MathNode](math.mathnode.md)): *[MathNode](math.mathnode.md)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [MathNode](math.mathnode.md) |
`path` | string |
`parent` | [MathNode](math.mathnode.md) |

**Returns:** *[MathNode](math.mathnode.md)*

___

###  toHtml

▸ **toHtml**(`options?`: undefined | object): *string*

Defined in node_modules/@types/mathjs/index.d.ts:3160

Get a HTML representation of the parsed expression.

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |

**Returns:** *string*

___

###  toString

▸ **toString**(`options?`: undefined | object): *string*

Defined in node_modules/@types/mathjs/index.d.ts:3166

Get a string representation of the parsed expression. This is not
exactly the same as the original input.

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |

**Returns:** *string*

___

###  toTex

▸ **toTex**(`options?`: undefined | object): *string*

Defined in node_modules/@types/mathjs/index.d.ts:3171

Get a LaTeX representation of the expression.

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |

**Returns:** *string*

___

###  transform

▸ **transform**(`callback`: function): *[MathNode](math.mathnode.md)*

Defined in node_modules/@types/mathjs/index.d.ts:3198

Recursively transform an expression tree via a transform function.
Similar to Array.map, but recursively executed on all nodes in the
expression tree. The callback function is a mapping function
accepting a node, and returning a replacement for the node or the
original node. Function callback is called as callback(node:
MathNode, path: string, parent: MathNode) for every node in the tree,
and must return a MathNode. Parameter path is a string containing a
relative JSON Path.

For example, to replace all nodes of type SymbolMathNode having name
‘x’ with a ConstantMathNode with value 3:
```js
var node = math.parse('x^2 + 5*x');
var transformed = node.transform(function (node, path, parent) {
  if (node.SymbolMathNode && node.name == 'x') {
    return new math.expression.node.ConstantMathNode(3);
  }
  else {
    return node;
  }
});
transformed.toString(); // returns '(3 ^ 2) + (5 * 3)'
```

**Parameters:**

▪ **callback**: *function*

▸ (`node`: [MathNode](math.mathnode.md), `path`: string, `parent`: [MathNode](math.mathnode.md)): *[MathNode](math.mathnode.md)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [MathNode](math.mathnode.md) |
`path` | string |
`parent` | [MathNode](math.mathnode.md) |

**Returns:** *[MathNode](math.mathnode.md)*

___

###  traverse

▸ **traverse**(`callback`: function): *any*

Defined in node_modules/@types/mathjs/index.d.ts:3235

`traverse(callback)`

Recursively traverse all nodes in a node tree. Executes given
callback for this node and each of its child nodes. Similar to
Array.forEach, except recursive. The callback function is a mapping
function accepting a node, and returning a replacement for the node
or the original node. Function callback is called as callback(node:
MathNode, path: string, parent: MathNode) for every node in the tree.
Parameter path is a string containing a relative JSON Path. Example:

```
var node = math.parse('3 * x + 2');
node.traverse(function (node, path, parent) {
switch (node.type) {
case 'OperatorMathNode': console.log(node.type, node.op);    break;
case 'ConstantMathNode': console.log(node.type, node.value); break;
case 'SymbolMathNode':   console.log(node.type, node.name);  break;
default:             console.log(node.type);
}
});
// outputs:
//   OperatorMathNode +
//   OperatorMathNode *
//   ConstantMathNode 3
//   SymbolMathNode x
//   ConstantMathNode 2
```

**Parameters:**

▪ **callback**: *function*

▸ (`node`: [MathNode](math.mathnode.md), `path`: string, `parent`: [MathNode](math.mathnode.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [MathNode](math.mathnode.md) |
`path` | string |
`parent` | [MathNode](math.mathnode.md) |

**Returns:** *any*
