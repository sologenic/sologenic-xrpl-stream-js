[typescript](../README.md) › [Globals](../globals.md) › [math](math.md)

# Module: math

## Index

### Interfaces

* [BigNumber](../interfaces/math.bignumber.md)
* [Complex](../interfaces/math.complex.md)
* [ConfigOptions](../interfaces/math.configoptions.md)
* [CreateUnitOptions](../interfaces/math.createunitoptions.md)
* [Distribution](../interfaces/math.distribution.md)
* [EvalFunction](../interfaces/math.evalfunction.md)
* [FactoryDependencies](../interfaces/math.factorydependencies.md)
* [FactoryFunctionMap](../interfaces/math.factoryfunctionmap.md)
* [FormatOptions](../interfaces/math.formatoptions.md)
* [Fraction](../interfaces/math.fraction.md)
* [Help](../interfaces/math.help.md)
* [ImportObject](../interfaces/math.importobject.md)
* [ImportOptions](../interfaces/math.importoptions.md)
* [Index](../interfaces/math.index.md)
* [MathJSON](../interfaces/math.mathjson.md)
* [MathJsChain](../interfaces/math.mathjschain.md)
* [MathJsJson](../interfaces/math.mathjsjson.md)
* [MathJsStatic](../interfaces/math.mathjsstatic.md)
* [MathNode](../interfaces/math.mathnode.md)
* [Matrix](../interfaces/math.matrix.md)
* [Parser](../interfaces/math.parser.md)
* [PolarCoordinates](../interfaces/math.polarcoordinates.md)
* [Unit](../interfaces/math.unit.md)
* [UnitDefinition](../interfaces/math.unitdefinition.md)

### Type aliases

* [FactoryFunction](math.md#factoryfunction)
* [MathArray](math.md#matharray)
* [MathExpression](math.md#mathexpression)
* [MathJsFunctionName](math.md#mathjsfunctionname)
* [MathType](math.md#mathtype)

## Type aliases

###  FactoryFunction

Ƭ **FactoryFunction**: *function*

Defined in node_modules/@types/mathjs/index.d.ts:29

#### Type declaration:

▸ (`scope`: any): *T*

**Parameters:**

Name | Type |
------ | ------ |
`scope` | any |

___

###  MathArray

Ƭ **MathArray**: *number[] | number[][]*

Defined in node_modules/@types/mathjs/index.d.ts:18

___

###  MathExpression

Ƭ **MathExpression**: *string | string[] | [MathArray](math.md#matharray) | [Matrix](../interfaces/math.matrix.md)*

Defined in node_modules/@types/mathjs/index.d.ts:27

___

###  MathJsFunctionName

Ƭ **MathJsFunctionName**: *keyof MathJsStatic*

Defined in node_modules/@types/mathjs/index.d.ts:36

___

###  MathType

Ƭ **MathType**: *number | [BigNumber](../interfaces/math.bignumber.md) | [Fraction](../interfaces/math.fraction.md) | [Complex](../interfaces/math.complex.md) | [Unit](../interfaces/math.unit.md) | [MathArray](math.md#matharray) | [Matrix](../interfaces/math.matrix.md)*

Defined in node_modules/@types/mathjs/index.d.ts:19
