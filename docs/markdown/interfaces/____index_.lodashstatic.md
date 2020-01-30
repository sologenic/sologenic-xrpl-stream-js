[typescript](../README.md) › [Globals](../globals.md) › ["../index"](../modules/____index_.md) › [LoDashStatic](____index_.lodashstatic.md)

# Interface: LoDashStatic

## Hierarchy

* **LoDashStatic**

## Callable

▸ <**TrapAny**>(`value`: TrapAny): *[Collection](____index_.collection.md)‹any› & [Function](____index_.function.md)‹any› & [Object](____index_.object.md)‹any› & [Primitive](____index_.primitive.md)‹any› & [String](____index_.string.md)*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:25

Creates a lodash object which wraps value to enable implicit method chain sequences.
Methods that operate on and return arrays, collections, and functions can be chained together.
Methods that retrieve a single value or may return a primitive value will automatically end the
chain sequence and return the unwrapped value. Otherwise, the value must be unwrapped with value().

Explicit chain sequences, which must be unwrapped with value(), may be enabled using _.chain.

The execution of chained methods is lazy, that is, it's deferred until value() is
implicitly or explicitly called.

Lazy evaluation allows several methods to support shortcut fusion. Shortcut fusion
is an optimization to merge iteratee calls; this avoids the creation of intermediate
arrays and can greatly reduce the number of iteratee executions. Sections of a chain
sequence qualify for shortcut fusion if the section is applied to an array and iteratees
accept only one argument. The heuristic for whether a section qualifies for shortcut
fusion is subject to change.

Chaining is supported in custom builds as long as the value() method is directly or
indirectly included in the build.

In addition to lodash methods, wrappers have Array and String methods.
The wrapper Array methods are:
concat, join, pop, push, shift, sort, splice, and unshift.
The wrapper String methods are:
replace and split.

The wrapper methods that support shortcut fusion are:
at, compact, drop, dropRight, dropWhile, filter, find, findLast, head, initial, last,
map, reject, reverse, slice, tail, take, takeRight, takeRightWhile, takeWhile, and toArray

The chainable wrapper methods are:
after, ary, assign, assignIn, assignInWith, assignWith, at, before, bind, bindAll, bindKey,
castArray, chain, chunk, commit, compact, concat, conforms, constant, countBy, create,
curry, debounce, defaults, defaultsDeep, defer, delay, difference, differenceBy, differenceWith,
drop, dropRight, dropRightWhile, dropWhile, extend, extendWith, fill, filter, flatMap,
flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, flip, flow, flowRight,
fromPairs, functions, functionsIn, groupBy, initial, intersection, intersectionBy, intersectionWith,
invert, invertBy, invokeMap, iteratee, keyBy, keys, keysIn, map, mapKeys, mapValues,
matches, matchesProperty, memoize, merge, mergeWith, method, methodOf, mixin, negate,
nthArg, omit, omitBy, once, orderBy, over, overArgs, overEvery, overSome, partial, partialRight,
partition, pick, pickBy, plant, property, propertyOf, pull, pullAll, pullAllBy, pullAllWith, pullAt,
push, range, rangeRight, rearg, reject, remove, rest, reverse, sampleSize, set, setWith,
shuffle, slice, sort, sortBy, sortedUniq, sortedUniqBy, splice, spread, tail, take,
takeRight, takeRightWhile, takeWhile, tap, throttle, thru, toArray, toPairs, toPairsIn,
toPath, toPlainObject, transform, unary, union, unionBy, unionWith, uniq, uniqBy, uniqWith,
unset, unshift, unzip, unzipWith, update, updateWith, values, valuesIn, without, wrap,
xor, xorBy, xorWith, zip, zipObject, zipObjectDeep, and zipWith.

The wrapper methods that are not chainable by default are:
add, attempt, camelCase, capitalize, ceil, clamp, clone, cloneDeep, cloneDeepWith, cloneWith,
conformsTo, deburr, defaultTo, divide, each, eachRight, endsWith, eq, escape, escapeRegExp,
every, find, findIndex, findKey, findLast, findLastIndex, findLastKey, first, floor, forEach,
forEachRight, forIn, forInRight, forOwn, forOwnRight, get, gt, gte, has, hasIn, head,
identity, includes, indexOf, inRange, invoke, isArguments, isArray, isArrayBuffer,
isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith,
isError, isFinite, isFunction, isInteger, isLength, isMap, isMatch, isMatchWith, isNaN,
isNative, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp,
isSafeInteger, isSet, isString, isUndefined, isTypedArray, isWeakMap, isWeakSet, join,
kebabCase, last, lastIndexOf, lowerCase, lowerFirst, lt, lte, max, maxBy, mean, meanBy,
min, minBy, multiply, noConflict, noop, now, nth, pad, padEnd, padStart, parseInt, pop,
random, reduce, reduceRight, repeat, result, round, runInContext, sample, shift, size,
snakeCase, some, sortedIndex, sortedIndexBy, sortedLastIndex, sortedLastIndexBy, startCase,
startsWith, stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, sum, sumBy,
template, times, toFinite, toInteger, toJSON, toLength, toLower, toNumber, toSafeInteger,
toString, toUpper, trim, trimEnd, trimStart, truncate, unescape, uniqueId, upperCase,
upperFirst, value, and words.

**Type parameters:**

▪ **TrapAny**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TrapAny |

**Returns:** *[Collection](____index_.collection.md)‹any› & [Function](____index_.function.md)‹any› & [Object](____index_.object.md)‹any› & [Primitive](____index_.primitive.md)‹any› & [String](____index_.string.md)*

▸ <**T**>(`value`: T): *[Primitive](____index_.primitive.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:94

**Type parameters:**

▪ **T**: *null | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Primitive](____index_.primitive.md)‹T›*

▸ (`value`: string | null | undefined): *[String](____index_.string.md)*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:95

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; null &#124; undefined |

**Returns:** *[String](____index_.string.md)*

▸ <**T**>(`value`: T): *[Function](____index_.function.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:96

**Type parameters:**

▪ **T**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Function](____index_.function.md)‹T›*

▸ <**T**>(`value`: [List](../modules/____index_.md#list)‹T› | null | undefined): *[Collection](____index_.collection.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:97

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |

**Returns:** *[Collection](____index_.collection.md)‹T›*

▸ <**T**>(`value`: T | null | undefined): *[Object](____index_.object.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:98

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; null &#124; undefined |

**Returns:** *[Object](____index_.object.md)‹T›*

▸ <**T**>(`value`: T): *[Primitive](____index_.primitive.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:99

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Primitive](____index_.primitive.md)‹T›*

## Index

### Properties

* [VERSION](____index_.lodashstatic.md#version)
* [bind](____index_.lodashstatic.md#bind)
* [bindKey](____index_.lodashstatic.md#bindkey)
* [curry](____index_.lodashstatic.md#curry)
* [curryRight](____index_.lodashstatic.md#curryright)
* [each](____index_.lodashstatic.md#each)
* [eachRight](____index_.lodashstatic.md#eachright)
* [first](____index_.lodashstatic.md#first)
* [memoize](____index_.lodashstatic.md#memoize)
* [partial](____index_.lodashstatic.md#partial)
* [partialRight](____index_.lodashstatic.md#partialright)
* [templateSettings](____index_.lodashstatic.md#templatesettings)

### Array Methods

* [concat](____index_.lodashstatic.md#concat)
* [differenceWith](____index_.lodashstatic.md#differencewith)
* [fromPairs](____index_.lodashstatic.md#frompairs)
* [indexOf](____index_.lodashstatic.md#indexof)
* [intersectionBy](____index_.lodashstatic.md#intersectionby)
* [intersectionWith](____index_.lodashstatic.md#intersectionwith)
* [pullAll](____index_.lodashstatic.md#pullall)
* [pullAllBy](____index_.lodashstatic.md#pullallby)
* [pullAllWith](____index_.lodashstatic.md#pullallwith)
* [reverse](____index_.lodashstatic.md#reverse)
* [sortedIndex](____index_.lodashstatic.md#sortedindex)
* [sortedIndexBy](____index_.lodashstatic.md#sortedindexby)
* [sortedIndexOf](____index_.lodashstatic.md#sortedindexof)
* [sortedLastIndex](____index_.lodashstatic.md#sortedlastindex)
* [sortedLastIndexBy](____index_.lodashstatic.md#sortedlastindexby)
* [sortedLastIndexOf](____index_.lodashstatic.md#sortedlastindexof)
* [sortedUniq](____index_.lodashstatic.md#sorteduniq)
* [sortedUniqBy](____index_.lodashstatic.md#sorteduniqby)
* [unionWith](____index_.lodashstatic.md#unionwith)
* [uniq](____index_.lodashstatic.md#uniq)
* [uniqBy](____index_.lodashstatic.md#uniqby)
* [uniqWith](____index_.lodashstatic.md#uniqwith)
* [xorBy](____index_.lodashstatic.md#xorby)
* [xorWith](____index_.lodashstatic.md#xorwith)

### Collection Methods

* [flatMapDeep](____index_.lodashstatic.md#flatmapdeep)
* [flatMapDepth](____index_.lodashstatic.md#flatmapdepth)
* [orderBy](____index_.lodashstatic.md#orderby)
* [sortBy](____index_.lodashstatic.md#sortby)

### Function Methods

* [flip](____index_.lodashstatic.md#flip)
* [unary](____index_.lodashstatic.md#unary)

### Lang Methods

* [eq](____index_.lodashstatic.md#eq)
* [isArrayLike](____index_.lodashstatic.md#isarraylike)
* [isArrayLikeObject](____index_.lodashstatic.md#isarraylikeobject)
* [isEqual](____index_.lodashstatic.md#isequal)
* [isEqualWith](____index_.lodashstatic.md#isequalwith)
* [isInteger](____index_.lodashstatic.md#isinteger)
* [isLength](____index_.lodashstatic.md#islength)
* [isMatch](____index_.lodashstatic.md#ismatch)
* [isMatchWith](____index_.lodashstatic.md#ismatchwith)
* [isNil](____index_.lodashstatic.md#isnil)
* [isObjectLike](____index_.lodashstatic.md#isobjectlike)
* [isSafeInteger](____index_.lodashstatic.md#issafeinteger)
* [isSymbol](____index_.lodashstatic.md#issymbol)
* [toFinite](____index_.lodashstatic.md#tofinite)
* [toInteger](____index_.lodashstatic.md#tointeger)
* [toLength](____index_.lodashstatic.md#tolength)
* [toNumber](____index_.lodashstatic.md#tonumber)
* [toSafeInteger](____index_.lodashstatic.md#tosafeinteger)
* [toString](____index_.lodashstatic.md#tostring)

### Math Methods

* [max](____index_.lodashstatic.md#max)
* [maxBy](____index_.lodashstatic.md#maxby)
* [mean](____index_.lodashstatic.md#mean)
* [meanBy](____index_.lodashstatic.md#meanby)
* [min](____index_.lodashstatic.md#min)
* [minBy](____index_.lodashstatic.md#minby)
* [subtract](____index_.lodashstatic.md#subtract)
* [sum](____index_.lodashstatic.md#sum)
* [sumBy](____index_.lodashstatic.md#sumby)

### Number Methods

* [clamp](____index_.lodashstatic.md#clamp)

### Object Methods

* [assign](____index_.lodashstatic.md#assign)
* [assignIn](____index_.lodashstatic.md#assignin)
* [assignInWith](____index_.lodashstatic.md#assigninwith)
* [assignWith](____index_.lodashstatic.md#assignwith)
* [functions](____index_.lodashstatic.md#functions)
* [functionsIn](____index_.lodashstatic.md#functionsin)
* [has](____index_.lodashstatic.md#has)
* [hasIn](____index_.lodashstatic.md#hasin)
* [merge](____index_.lodashstatic.md#merge)
* [mergeWith](____index_.lodashstatic.md#mergewith)
* [omit](____index_.lodashstatic.md#omit)
* [omitBy](____index_.lodashstatic.md#omitby)
* [pick](____index_.lodashstatic.md#pick)
* [pickBy](____index_.lodashstatic.md#pickby)
* [updateWith](____index_.lodashstatic.md#updatewith)

### Other Methods

* [add](____index_.lodashstatic.md#add)
* [after](____index_.lodashstatic.md#after)
* [ary](____index_.lodashstatic.md#ary)
* [at](____index_.lodashstatic.md#at)
* [attempt](____index_.lodashstatic.md#attempt)
* [before](____index_.lodashstatic.md#before)
* [bindAll](____index_.lodashstatic.md#bindall)
* [camelCase](____index_.lodashstatic.md#camelcase)
* [capitalize](____index_.lodashstatic.md#capitalize)
* [castArray](____index_.lodashstatic.md#castarray)
* [ceil](____index_.lodashstatic.md#ceil)
* [chain](____index_.lodashstatic.md#chain)
* [chunk](____index_.lodashstatic.md#chunk)
* [clone](____index_.lodashstatic.md#clone)
* [cloneDeep](____index_.lodashstatic.md#clonedeep)
* [cloneDeepWith](____index_.lodashstatic.md#clonedeepwith)
* [cloneWith](____index_.lodashstatic.md#clonewith)
* [compact](____index_.lodashstatic.md#compact)
* [conforms](____index_.lodashstatic.md#conforms)
* [conformsTo](____index_.lodashstatic.md#conformsto)
* [constant](____index_.lodashstatic.md#constant)
* [countBy](____index_.lodashstatic.md#countby)
* [create](____index_.lodashstatic.md#create)
* [debounce](____index_.lodashstatic.md#debounce)
* [deburr](____index_.lodashstatic.md#deburr)
* [defaultTo](____index_.lodashstatic.md#defaultto)
* [defaults](____index_.lodashstatic.md#defaults)
* [defaultsDeep](____index_.lodashstatic.md#defaultsdeep)
* [defer](____index_.lodashstatic.md#defer)
* [delay](____index_.lodashstatic.md#delay)
* [difference](____index_.lodashstatic.md#difference)
* [differenceBy](____index_.lodashstatic.md#differenceby)
* [divide](____index_.lodashstatic.md#divide)
* [drop](____index_.lodashstatic.md#drop)
* [dropRight](____index_.lodashstatic.md#dropright)
* [dropRightWhile](____index_.lodashstatic.md#droprightwhile)
* [dropWhile](____index_.lodashstatic.md#dropwhile)
* [endsWith](____index_.lodashstatic.md#endswith)
* [entries](____index_.lodashstatic.md#entries)
* [entriesIn](____index_.lodashstatic.md#entriesin)
* [escape](____index_.lodashstatic.md#escape)
* [escapeRegExp](____index_.lodashstatic.md#escaperegexp)
* [every](____index_.lodashstatic.md#every)
* [extend](____index_.lodashstatic.md#extend)
* [extendWith](____index_.lodashstatic.md#extendwith)
* [fill](____index_.lodashstatic.md#fill)
* [filter](____index_.lodashstatic.md#filter)
* [find](____index_.lodashstatic.md#find)
* [findIndex](____index_.lodashstatic.md#findindex)
* [findKey](____index_.lodashstatic.md#findkey)
* [findLast](____index_.lodashstatic.md#findlast)
* [findLastIndex](____index_.lodashstatic.md#findlastindex)
* [findLastKey](____index_.lodashstatic.md#findlastkey)
* [flatMap](____index_.lodashstatic.md#flatmap)
* [flatten](____index_.lodashstatic.md#flatten)
* [flattenDeep](____index_.lodashstatic.md#flattendeep)
* [flattenDepth](____index_.lodashstatic.md#flattendepth)
* [floor](____index_.lodashstatic.md#floor)
* [flow](____index_.lodashstatic.md#flow)
* [flowRight](____index_.lodashstatic.md#flowright)
* [forEach](____index_.lodashstatic.md#foreach)
* [forEachRight](____index_.lodashstatic.md#foreachright)
* [forIn](____index_.lodashstatic.md#forin)
* [forInRight](____index_.lodashstatic.md#forinright)
* [forOwn](____index_.lodashstatic.md#forown)
* [forOwnRight](____index_.lodashstatic.md#forownright)
* [get](____index_.lodashstatic.md#get)
* [groupBy](____index_.lodashstatic.md#groupby)
* [gt](____index_.lodashstatic.md#gt)
* [gte](____index_.lodashstatic.md#gte)
* [head](____index_.lodashstatic.md#head)
* [identity](____index_.lodashstatic.md#identity)
* [inRange](____index_.lodashstatic.md#inrange)
* [includes](____index_.lodashstatic.md#includes)
* [initial](____index_.lodashstatic.md#initial)
* [intersection](____index_.lodashstatic.md#intersection)
* [invert](____index_.lodashstatic.md#invert)
* [invertBy](____index_.lodashstatic.md#invertby)
* [invoke](____index_.lodashstatic.md#invoke)
* [invokeMap](____index_.lodashstatic.md#invokemap)
* [isArguments](____index_.lodashstatic.md#isarguments)
* [isArray](____index_.lodashstatic.md#isarray)
* [isArrayBuffer](____index_.lodashstatic.md#isarraybuffer)
* [isBoolean](____index_.lodashstatic.md#isboolean)
* [isBuffer](____index_.lodashstatic.md#isbuffer)
* [isDate](____index_.lodashstatic.md#isdate)
* [isElement](____index_.lodashstatic.md#iselement)
* [isEmpty](____index_.lodashstatic.md#isempty)
* [isError](____index_.lodashstatic.md#iserror)
* [isFinite](____index_.lodashstatic.md#isfinite)
* [isFunction](____index_.lodashstatic.md#isfunction)
* [isMap](____index_.lodashstatic.md#ismap)
* [isNaN](____index_.lodashstatic.md#isnan)
* [isNative](____index_.lodashstatic.md#isnative)
* [isNull](____index_.lodashstatic.md#isnull)
* [isNumber](____index_.lodashstatic.md#isnumber)
* [isObject](____index_.lodashstatic.md#isobject)
* [isPlainObject](____index_.lodashstatic.md#isplainobject)
* [isRegExp](____index_.lodashstatic.md#isregexp)
* [isSet](____index_.lodashstatic.md#isset)
* [isString](____index_.lodashstatic.md#isstring)
* [isTypedArray](____index_.lodashstatic.md#istypedarray)
* [isUndefined](____index_.lodashstatic.md#isundefined)
* [isWeakMap](____index_.lodashstatic.md#isweakmap)
* [isWeakSet](____index_.lodashstatic.md#isweakset)
* [join](____index_.lodashstatic.md#join)
* [kebabCase](____index_.lodashstatic.md#kebabcase)
* [keyBy](____index_.lodashstatic.md#keyby)
* [keys](____index_.lodashstatic.md#keys)
* [keysIn](____index_.lodashstatic.md#keysin)
* [last](____index_.lodashstatic.md#last)
* [lastIndexOf](____index_.lodashstatic.md#lastindexof)
* [lowerCase](____index_.lodashstatic.md#lowercase)
* [lowerFirst](____index_.lodashstatic.md#lowerfirst)
* [lt](____index_.lodashstatic.md#lt)
* [lte](____index_.lodashstatic.md#lte)
* [map](____index_.lodashstatic.md#map)
* [mapKeys](____index_.lodashstatic.md#mapkeys)
* [mapValues](____index_.lodashstatic.md#mapvalues)
* [matches](____index_.lodashstatic.md#matches)
* [matchesProperty](____index_.lodashstatic.md#matchesproperty)
* [method](____index_.lodashstatic.md#method)
* [methodOf](____index_.lodashstatic.md#methodof)
* [mixin](____index_.lodashstatic.md#mixin)
* [multiply](____index_.lodashstatic.md#multiply)
* [negate](____index_.lodashstatic.md#negate)
* [noConflict](____index_.lodashstatic.md#noconflict)
* [noop](____index_.lodashstatic.md#noop)
* [now](____index_.lodashstatic.md#now)
* [nth](____index_.lodashstatic.md#nth)
* [nthArg](____index_.lodashstatic.md#ntharg)
* [once](____index_.lodashstatic.md#once)
* [over](____index_.lodashstatic.md#over)
* [overArgs](____index_.lodashstatic.md#overargs)
* [overEvery](____index_.lodashstatic.md#overevery)
* [overSome](____index_.lodashstatic.md#oversome)
* [pad](____index_.lodashstatic.md#pad)
* [padEnd](____index_.lodashstatic.md#padend)
* [padStart](____index_.lodashstatic.md#padstart)
* [parseInt](____index_.lodashstatic.md#parseint)
* [partition](____index_.lodashstatic.md#partition)
* [property](____index_.lodashstatic.md#property)
* [propertyOf](____index_.lodashstatic.md#propertyof)
* [pull](____index_.lodashstatic.md#pull)
* [pullAt](____index_.lodashstatic.md#pullat)
* [random](____index_.lodashstatic.md#random)
* [range](____index_.lodashstatic.md#range)
* [rearg](____index_.lodashstatic.md#rearg)
* [reduce](____index_.lodashstatic.md#reduce)
* [reduceRight](____index_.lodashstatic.md#reduceright)
* [reject](____index_.lodashstatic.md#reject)
* [remove](____index_.lodashstatic.md#remove)
* [repeat](____index_.lodashstatic.md#repeat)
* [replace](____index_.lodashstatic.md#replace)
* [rest](____index_.lodashstatic.md#rest)
* [result](____index_.lodashstatic.md#result)
* [round](____index_.lodashstatic.md#round)
* [runInContext](____index_.lodashstatic.md#runincontext)
* [sample](____index_.lodashstatic.md#sample)
* [sampleSize](____index_.lodashstatic.md#samplesize)
* [set](____index_.lodashstatic.md#set)
* [setWith](____index_.lodashstatic.md#setwith)
* [shuffle](____index_.lodashstatic.md#shuffle)
* [size](____index_.lodashstatic.md#size)
* [slice](____index_.lodashstatic.md#slice)
* [snakeCase](____index_.lodashstatic.md#snakecase)
* [some](____index_.lodashstatic.md#some)
* [split](____index_.lodashstatic.md#split)
* [spread](____index_.lodashstatic.md#spread)
* [startCase](____index_.lodashstatic.md#startcase)
* [startsWith](____index_.lodashstatic.md#startswith)
* [stubArray](____index_.lodashstatic.md#stubarray)
* [stubFalse](____index_.lodashstatic.md#stubfalse)
* [stubObject](____index_.lodashstatic.md#stubobject)
* [stubString](____index_.lodashstatic.md#stubstring)
* [stubTrue](____index_.lodashstatic.md#stubtrue)
* [tail](____index_.lodashstatic.md#tail)
* [take](____index_.lodashstatic.md#take)
* [takeRight](____index_.lodashstatic.md#takeright)
* [takeRightWhile](____index_.lodashstatic.md#takerightwhile)
* [takeWhile](____index_.lodashstatic.md#takewhile)
* [tap](____index_.lodashstatic.md#tap)
* [template](____index_.lodashstatic.md#template)
* [throttle](____index_.lodashstatic.md#throttle)
* [thru](____index_.lodashstatic.md#thru)
* [times](____index_.lodashstatic.md#times)
* [toArray](____index_.lodashstatic.md#toarray)
* [toLower](____index_.lodashstatic.md#tolower)
* [toPairs](____index_.lodashstatic.md#topairs)
* [toPairsIn](____index_.lodashstatic.md#topairsin)
* [toPlainObject](____index_.lodashstatic.md#toplainobject)
* [toUpper](____index_.lodashstatic.md#toupper)
* [transform](____index_.lodashstatic.md#transform)
* [trim](____index_.lodashstatic.md#trim)
* [trimEnd](____index_.lodashstatic.md#trimend)
* [trimStart](____index_.lodashstatic.md#trimstart)
* [truncate](____index_.lodashstatic.md#truncate)
* [unescape](____index_.lodashstatic.md#unescape)
* [union](____index_.lodashstatic.md#union)
* [unionBy](____index_.lodashstatic.md#unionby)
* [uniqueId](____index_.lodashstatic.md#uniqueid)
* [unset](____index_.lodashstatic.md#unset)
* [unzip](____index_.lodashstatic.md#unzip)
* [unzipWith](____index_.lodashstatic.md#unzipwith)
* [update](____index_.lodashstatic.md#update)
* [upperCase](____index_.lodashstatic.md#uppercase)
* [upperFirst](____index_.lodashstatic.md#upperfirst)
* [values](____index_.lodashstatic.md#values)
* [valuesIn](____index_.lodashstatic.md#valuesin)
* [without](____index_.lodashstatic.md#without)
* [words](____index_.lodashstatic.md#words)
* [wrap](____index_.lodashstatic.md#wrap)
* [xor](____index_.lodashstatic.md#xor)
* [zip](____index_.lodashstatic.md#zip)
* [zipObject](____index_.lodashstatic.md#zipobject)
* [zipObjectDeep](____index_.lodashstatic.md#zipobjectdeep)
* [zipWith](____index_.lodashstatic.md#zipwith)

### Util Methods

* [cond](____index_.lodashstatic.md#cond)
* [iteratee](____index_.lodashstatic.md#iteratee)
* [rangeRight](____index_.lodashstatic.md#rangeright)
* [toPath](____index_.lodashstatic.md#topath)

## Properties

###  VERSION

• **VERSION**: *string*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:104

The semantic version number.

___

###  bind

• **bind**: *[FunctionBind](____index_.functionbind.md)*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:93

Creates a function that invokes func with the this binding of thisArg and prepends any additional _.bind
arguments to those provided to the bound function.

The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for
partially applied arguments.

Note: Unlike native Function#bind this method does not set the "length" property of bound functions.

**`param`** The function to bind.

**`param`** The this binding of func.

**`param`** The arguments to be partially applied.

**`returns`** Returns the new bound function.

___

###  bindKey

• **bindKey**: *[FunctionBindKey](____index_.functionbindkey.md)*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:127

Creates a function that invokes the method at object[key] and prepends any additional _.bindKey arguments
to those provided to the bound function.

This method differs from _.bind by allowing bound functions to reference methods that may be redefined
or don’t yet exist. See Peter Michaux’s article for more details.

The _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder
for partially applied arguments.

**`param`** The object the method belongs to.

**`param`** The key of the method.

**`param`** The arguments to be partially applied.

**`returns`** Returns the new bound function.

___

###  curry

• **curry**: *[Curry](____index_.curry.md)*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:151

___

###  curryRight

• **curryRight**: *[CurryRight](____index_.curryright.md)*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:331

___

###  each

• **each**: *LoDashStatic["forEach"]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:65

**`see`** _.forEach

___

###  eachRight

• **eachRight**: *LoDashStatic["forEachRight"]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:113

**`see`** _.forEachRight

___

###  first

• **first**: *LoDashStatic["head"]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:418

**`see`** _.head

___

###  memoize

• **memoize**: *object*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:499

Creates a function that memoizes the result of func. If resolver is provided it determines the cache key for
storing the result based on the arguments provided to the memoized function. By default, the first argument
provided to the memoized function is coerced to a string and used as the cache key. The func is invoked with
the this binding of the memoized function.

**`param`** The function to have its output memoized.

**`param`** The function to resolve the cache key.

**`returns`** Returns the new memoizing function.

#### Type declaration:

▸ <**T**>(`func`: T, `resolver?`: undefined | function): *T & [MemoizedFunction](____index_.memoizedfunction.md)*

**Type parameters:**

▪ **T**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`func` | T |
`resolver?` | undefined &#124; function |

* **Cache**: *[MapCacheConstructor](____index_.mapcacheconstructor.md)*

___

###  partial

• **partial**: *[Partial](____index_.partial.md)*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:592

Creates a function that, when called, invokes func with any additional partial arguments
prepended to those provided to the new function. This method is similar to _.bind except
it does not alter the this binding.

**`param`** The function to partially apply arguments to.

**`param`** Arguments to be partially applied.

**`returns`** The new partially applied function.

___

###  partialRight

• **partialRight**: *[PartialRight](____index_.partialright.md)*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:865

This method is like _.partial except that partial arguments are appended to those provided
to the new function.

**`param`** The function to partially apply arguments to.

**`param`** Arguments to be partially applied.

**`returns`** The new partially applied function.

___

###  templateSettings

• **templateSettings**: *[TemplateSettings](____index_.templatesettings.md)*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:109

By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby
(ERB). Change the following template settings to use alternative delimiters.

## Array Methods

###  concat

▸ **concat**<**T**>(`array`: [Many](../modules/____index_.md#many)‹T›, ...`values`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹T››): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:70

Creates a new array concatenating `array` with any additional arrays
and/or values.

**`example`** 

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Many](../modules/____index_.md#many)‹T› | The array to concatenate. |
`...values` | [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹T›› | - |

**Returns:** *T[]*

Returns the new concatenated array.

___

###  differenceWith

▸ **differenceWith**<**T1**, **T2**>(`array`: [List](../modules/____index_.md#list)‹T1› | null | undefined, `values`: [List](../modules/____index_.md#list)‹T2›, `comparator`: [Comparator2](../modules/____index_.md#comparator2)‹T1, T2›): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:205

Creates an array of unique `array` values not included in the other
provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
for equality comparisons.

**`example`** 

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› &#124; null &#124; undefined |
`values` | [List](../modules/____index_.md#list)‹T2› |
`comparator` | [Comparator2](../modules/____index_.md#comparator2)‹T1, T2› |

**Returns:** *T1[]*

Returns the new array of filtered values.

▸ **differenceWith**<**T1**, **T2**, **T3**>(`array`: [List](../modules/____index_.md#list)‹T1› | null | undefined, `values1`: [List](../modules/____index_.md#list)‹T2›, `values2`: [List](../modules/____index_.md#list)‹T3›, `comparator`: [Comparator2](../modules/____index_.md#comparator2)‹T1, T2 | T3›): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:209

**`see`** _.differenceWith

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› &#124; null &#124; undefined |
`values1` | [List](../modules/____index_.md#list)‹T2› |
`values2` | [List](../modules/____index_.md#list)‹T3› |
`comparator` | [Comparator2](../modules/____index_.md#comparator2)‹T1, T2 &#124; T3› |

**Returns:** *T1[]*

▸ **differenceWith**<**T1**, **T2**, **T3**, **T4**>(`array`: [List](../modules/____index_.md#list)‹T1› | null | undefined, `values1`: [List](../modules/____index_.md#list)‹T2›, `values2`: [List](../modules/____index_.md#list)‹T3›, ...`values`: [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T4› | [Comparator2](../modules/____index_.md#comparator2)‹T1, T2 | T3 | T4››): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:213

**`see`** _.differenceWith

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› &#124; null &#124; undefined |
`values1` | [List](../modules/____index_.md#list)‹T2› |
`values2` | [List](../modules/____index_.md#list)‹T3› |
`...values` | [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T4› &#124; [Comparator2](../modules/____index_.md#comparator2)‹T1, T2 &#124; T3 &#124; T4›› |

**Returns:** *T1[]*

▸ **differenceWith**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, ...`values`: [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T››): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:217

**`see`** _.differenceWith

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`...values` | [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T›› |

**Returns:** *T[]*

___

###  fromPairs

▸ **fromPairs**<**T**>(`pairs`: [List](../modules/____index_.md#list)‹[[PropertyName](../modules/____index_.md#propertyname), T]› | null | undefined): *[Dictionary](____index_.dictionary.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:550

The inverse of `_.toPairs`; this method returns an object composed
from key-value `pairs`.

**`example`** 

_.fromPairs([['fred', 30], ['barney', 40]]);
// => { 'fred': 30, 'barney': 40 }

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pairs` | [List](../modules/____index_.md#list)‹[[PropertyName](../modules/____index_.md#propertyname), T]› &#124; null &#124; undefined | The key-value pairs. |

**Returns:** *[Dictionary](____index_.dictionary.md)‹T›*

Returns the new object.

▸ **fromPairs**(`pairs`: [List](../modules/____index_.md#list)‹any[]› | null | undefined): *[Dictionary](____index_.dictionary.md)‹any›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:554

**`see`** _.fromPairs

**Parameters:**

Name | Type |
------ | ------ |
`pairs` | [List](../modules/____index_.md#list)‹any[]› &#124; null &#124; undefined |

**Returns:** *[Dictionary](____index_.dictionary.md)‹any›*

___

###  indexOf

▸ **indexOf**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `value`: T, `fromIndex?`: undefined | number): *number*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:630

Gets the index at which the first occurrence of `value` is found in `array`
using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
for equality comparisons. If `fromIndex` is negative, it's used as the offset
from the end of `array`.

**`example`** 

_.indexOf([1, 2, 1, 2], 2);
// => 1

// using `fromIndex`
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to search. |
`value` | T | The value to search for. |
`fromIndex?` | undefined &#124; number | - |

**Returns:** *number*

Returns the index of the matched value, else `-1`.

___

###  intersectionBy

▸ **intersectionBy**<**T1**, **T2**>(`array`: [List](../modules/____index_.md#list)‹T1› | null, `values`: [List](../modules/____index_.md#list)‹T2›, `iteratee`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 | T2›): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:706

This method is like `_.intersection` except that it accepts `iteratee`
which is invoked for each element of each `arrays` to generate the criterion
by which uniqueness is computed. The iteratee is invoked with one argument: (value).

**`example`** 

_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [2.1]

// using the `_.property` iteratee shorthand
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› &#124; null |
`values` | [List](../modules/____index_.md#list)‹T2› |
`iteratee` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 &#124; T2› |

**Returns:** *T1[]*

Returns the new array of shared values.

▸ **intersectionBy**<**T1**, **T2**, **T3**>(`array`: [List](../modules/____index_.md#list)‹T1› | null, `values1`: [List](../modules/____index_.md#list)‹T2›, `values2`: [List](../modules/____index_.md#list)‹T3›, `iteratee`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 | T2 | T3›): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:710

**`see`** _.intersectionBy

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› &#124; null |
`values1` | [List](../modules/____index_.md#list)‹T2› |
`values2` | [List](../modules/____index_.md#list)‹T3› |
`iteratee` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 &#124; T2 &#124; T3› |

**Returns:** *T1[]*

▸ **intersectionBy**<**T1**, **T2**, **T3**, **T4**>(`array`: [List](../modules/____index_.md#list)‹T1› | null | undefined, `values1`: [List](../modules/____index_.md#list)‹T2›, `values2`: [List](../modules/____index_.md#list)‹T3›, ...`values`: [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T4› | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 | T2 | T3 | T4››): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:714

**`see`** _.intersectionBy

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› &#124; null &#124; undefined |
`values1` | [List](../modules/____index_.md#list)‹T2› |
`values2` | [List](../modules/____index_.md#list)‹T3› |
`...values` | [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T4› &#124; [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 &#124; T2 &#124; T3 &#124; T4›› |

**Returns:** *T1[]*

▸ **intersectionBy**<**T**>(`array?`: [List](../modules/____index_.md#list)‹T› | null, ...`values`: [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T››): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:718

**`see`** _.intersectionBy

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`array?` | [List](../modules/____index_.md#list)‹T› &#124; null |
`...values` | [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T›› |

**Returns:** *T[]*

▸ **intersectionBy**<**T**>(...`values`: [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T› | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T››): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:722

**`see`** _.intersectionBy

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...values` | [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T› &#124; [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›› |

**Returns:** *T[]*

___

###  intersectionWith

▸ **intersectionWith**<**T1**, **T2**>(`array`: [List](../modules/____index_.md#list)‹T1› | null | undefined, `values`: [List](../modules/____index_.md#list)‹T2›, `comparator`: [Comparator2](../modules/____index_.md#comparator2)‹T1, T2›): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:762

Creates an array of unique `array` values not included in the other
provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
for equality comparisons.

**`example`** 

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.intersectionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }]

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› &#124; null &#124; undefined |
`values` | [List](../modules/____index_.md#list)‹T2› |
`comparator` | [Comparator2](../modules/____index_.md#comparator2)‹T1, T2› |

**Returns:** *T1[]*

Returns the new array of filtered values.

▸ **intersectionWith**<**T1**, **T2**, **T3**>(`array`: [List](../modules/____index_.md#list)‹T1› | null | undefined, `values1`: [List](../modules/____index_.md#list)‹T2›, `values2`: [List](../modules/____index_.md#list)‹T3›, `comparator`: [Comparator2](../modules/____index_.md#comparator2)‹T1, T2 | T3›): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:766

**`see`** _.intersectionWith

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› &#124; null &#124; undefined |
`values1` | [List](../modules/____index_.md#list)‹T2› |
`values2` | [List](../modules/____index_.md#list)‹T3› |
`comparator` | [Comparator2](../modules/____index_.md#comparator2)‹T1, T2 &#124; T3› |

**Returns:** *T1[]*

▸ **intersectionWith**<**T1**, **T2**, **T3**, **T4**>(`array`: [List](../modules/____index_.md#list)‹T1› | null | undefined, `values1`: [List](../modules/____index_.md#list)‹T2›, `values2`: [List](../modules/____index_.md#list)‹T3›, ...`values`: [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T4› | [Comparator2](../modules/____index_.md#comparator2)‹T1, T2 | T3 | T4››): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:770

**`see`** _.intersectionWith

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› &#124; null &#124; undefined |
`values1` | [List](../modules/____index_.md#list)‹T2› |
`values2` | [List](../modules/____index_.md#list)‹T3› |
`...values` | [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T4› &#124; [Comparator2](../modules/____index_.md#comparator2)‹T1, T2 &#124; T3 &#124; T4›› |

**Returns:** *T1[]*

▸ **intersectionWith**<**T**>(`array?`: [List](../modules/____index_.md#list)‹T› | null, ...`values`: [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T››): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:774

**`see`** _.intersectionWith

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`array?` | [List](../modules/____index_.md#list)‹T› &#124; null |
`...values` | [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T›› |

**Returns:** *T[]*

___

###  pullAll

▸ **pullAll**<**T**>(`array`: T[], `values?`: [List](../modules/____index_.md#list)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:966

This method is like `_.pull` except that it accepts an array of values to remove.

**Note:** Unlike `_.difference`, this method mutates `array`.

**`example`** 

var array = [1, 2, 3, 1, 2, 3];

_.pull(array, [2, 3]);
console.log(array);
// => [1, 1]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | T[] | The array to modify. |
`values?` | [List](../modules/____index_.md#list)‹T› | The values to remove. |

**Returns:** *T[]*

Returns `array`.

▸ **pullAll**<**T**>(`array`: [List](../modules/____index_.md#list)‹T›, `values?`: [List](../modules/____index_.md#list)‹T›): *[List](../modules/____index_.md#list)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:970

**`see`** _.pullAll

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› |
`values?` | [List](../modules/____index_.md#list)‹T› |

**Returns:** *[List](../modules/____index_.md#list)‹T›*

___

###  pullAllBy

▸ **pullAllBy**<**T**>(`array`: T[], `values?`: [List](../modules/____index_.md#list)‹T›, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1005

This method is like `_.pullAll` except that it accepts `iteratee` which is
invoked for each element of `array` and `values` to to generate the criterion
by which uniqueness is computed. The iteratee is invoked with one argument: (value).

**Note:** Unlike `_.differenceBy`, this method mutates `array`.

**`example`** 

var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
// => [{ 'x': 2 }]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | T[] | The array to modify. |
`values?` | [List](../modules/____index_.md#list)‹T› | The values to remove. |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› | - |

**Returns:** *T[]*

Returns `array`.

▸ **pullAllBy**<**T**>(`array`: [List](../modules/____index_.md#list)‹T›, `values?`: [List](../modules/____index_.md#list)‹T›, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *[List](../modules/____index_.md#list)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1009

**`see`** _.pullAllBy

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› |
`values?` | [List](../modules/____index_.md#list)‹T› |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› |

**Returns:** *[List](../modules/____index_.md#list)‹T›*

▸ **pullAllBy**<**T1**, **T2**>(`array`: T1[], `values`: [List](../modules/____index_.md#list)‹T2›, `iteratee`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 | T2›): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1013

**`see`** _.pullAllBy

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

Name | Type |
------ | ------ |
`array` | T1[] |
`values` | [List](../modules/____index_.md#list)‹T2› |
`iteratee` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 &#124; T2› |

**Returns:** *T1[]*

▸ **pullAllBy**<**T1**, **T2**>(`array`: [List](../modules/____index_.md#list)‹T1›, `values`: [List](../modules/____index_.md#list)‹T2›, `iteratee`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 | T2›): *[List](../modules/____index_.md#list)‹T1›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1017

**`see`** _.pullAllBy

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› |
`values` | [List](../modules/____index_.md#list)‹T2› |
`iteratee` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 &#124; T2› |

**Returns:** *[List](../modules/____index_.md#list)‹T1›*

___

###  pullAllWith

▸ **pullAllWith**<**T**>(`array`: T[], `values?`: [List](../modules/____index_.md#list)‹T›, `comparator?`: [Comparator](../modules/____index_.md#comparator)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1052

This method is like `_.pullAll` except that it accepts `comparator` which is
invoked to compare elements of array to values. The comparator is invoked with
two arguments: (arrVal, othVal).

**Note:** Unlike `_.differenceWith`, this method mutates `array`.

**`example`** 

var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];

_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | T[] | The array to modify. |
`values?` | [List](../modules/____index_.md#list)‹T› | The values to remove. |
`comparator?` | [Comparator](../modules/____index_.md#comparator)‹T› | - |

**Returns:** *T[]*

Returns `array`.

▸ **pullAllWith**<**T**>(`array`: [List](../modules/____index_.md#list)‹T›, `values?`: [List](../modules/____index_.md#list)‹T›, `comparator?`: [Comparator](../modules/____index_.md#comparator)‹T›): *[List](../modules/____index_.md#list)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1056

**`see`** _.pullAllWith

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› |
`values?` | [List](../modules/____index_.md#list)‹T› |
`comparator?` | [Comparator](../modules/____index_.md#comparator)‹T› |

**Returns:** *[List](../modules/____index_.md#list)‹T›*

▸ **pullAllWith**<**T1**, **T2**>(`array`: T1[], `values`: [List](../modules/____index_.md#list)‹T2›, `comparator`: [Comparator2](../modules/____index_.md#comparator2)‹T1, T2›): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1060

**`see`** _.pullAllWith

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

Name | Type |
------ | ------ |
`array` | T1[] |
`values` | [List](../modules/____index_.md#list)‹T2› |
`comparator` | [Comparator2](../modules/____index_.md#comparator2)‹T1, T2› |

**Returns:** *T1[]*

▸ **pullAllWith**<**T1**, **T2**>(`array`: [List](../modules/____index_.md#list)‹T1›, `values`: [List](../modules/____index_.md#list)‹T2›, `comparator`: [Comparator2](../modules/____index_.md#comparator2)‹T1, T2›): *[List](../modules/____index_.md#list)‹T1›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1064

**`see`** _.pullAllWith

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› |
`values` | [List](../modules/____index_.md#list)‹T2› |
`comparator` | [Comparator2](../modules/____index_.md#comparator2)‹T1, T2› |

**Returns:** *[List](../modules/____index_.md#list)‹T1›*

___

###  reverse

▸ **reverse**<**TList**>(`array`: TList): *TList*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1152

Reverses `array` so that the first element becomes the last, the second
element becomes the second to last, and so on.

**Note:** This method mutates `array` and is based on
[`Array#reverse`](https://mdn.io/Array/reverse).

**`example`** 

var array = [1, 2, 3];

_.reverse(array);
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]

**Type parameters:**

▪ **TList**: *[List](../modules/____index_.md#list)‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`array` | TList |

**Returns:** *TList*

Returns `array`.

___

###  sortedIndex

▸ **sortedIndex**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `value`: T): *number*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1194

Uses a binary search to determine the lowest index at which `value` should
be inserted into `array` in order to maintain its sort order.

**`example`** 

_.sortedIndex([30, 50], 40);
// => 1

_.sortedIndex([4, 5], 4);
// => 0

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The sorted array to inspect. |
`value` | T | The value to evaluate. |

**Returns:** *number*

Returns the index at which `value` should be inserted into `array`.

▸ **sortedIndex**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `value`: T): *number*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1225

Uses a binary search to determine the lowest index at which `value` should
be inserted into `array` in order to maintain its sort order.

**`category`** Array

**`example`** 

_.sortedIndex([30, 50], 40);
// => 1

_.sortedIndex([4, 5], 4);
// => 0

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The sorted array to inspect. |
`value` | T | The value to evaluate. |

**Returns:** *number*

Returns the index at which `value` should be inserted into `array`.

___

###  sortedIndexBy

▸ **sortedIndexBy**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `value`: T, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *number*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1261

This method is like `_.sortedIndex` except that it accepts `iteratee`
which is invoked for `value` and each element of `array` to compute their
sort ranking. The iteratee is invoked with one argument: (value).

**`example`** 

var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };

_.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
// => 1

// using the `_.property` iteratee shorthand
_.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
// => 0

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The sorted array to inspect. |
`value` | T | The value to evaluate. |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› | - |

**Returns:** *number*

Returns the index at which `value` should be inserted into `array`.

___

###  sortedIndexOf

▸ **sortedIndexOf**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `value`: T): *number*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1289

This method is like `_.indexOf` except that it performs a binary
search on a sorted `array`.

**`example`** 

_.sortedIndexOf([1, 1, 2, 2], 2);
// => 2

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to search. |
`value` | T | The value to search for. |

**Returns:** *number*

Returns the index of the matched value, else `-1`.

___

###  sortedLastIndex

▸ **sortedLastIndex**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `value`: T): *number*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1318

This method is like `_.sortedIndex` except that it returns the highest
index at which `value` should be inserted into `array` in order to
maintain its sort order.

**`example`** 

_.sortedLastIndex([4, 5], 4);
// => 1

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The sorted array to inspect. |
`value` | T | The value to evaluate. |

**Returns:** *number*

Returns the index at which `value` should be inserted into `array`.

___

###  sortedLastIndexBy

▸ **sortedLastIndexBy**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `value`: T, `iteratee`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *number*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1349

This method is like `_.sortedLastIndex` except that it accepts `iteratee`
which is invoked for `value` and each element of `array` to compute their
sort ranking. The iteratee is invoked with one argument: (value).

**`example`** 

// using the `_.property` iteratee shorthand
_.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
// => 1

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The sorted array to inspect. |
`value` | T | The value to evaluate. |
`iteratee` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› | - |

**Returns:** *number*

Returns the index at which `value` should be inserted into `array`.

___

###  sortedLastIndexOf

▸ **sortedLastIndexOf**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `value`: T): *number*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1377

This method is like `_.lastIndexOf` except that it performs a binary
search on a sorted `array`.

**`example`** 

_.sortedLastIndexOf([1, 1, 2, 2], 2);
// => 3

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to search. |
`value` | T | The value to search for. |

**Returns:** *number*

Returns the index of the matched value, else `-1`.

___

###  sortedUniq

▸ **sortedUniq**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1404

This method is like `_.uniq` except that it's designed and optimized
for sorted arrays.

**`example`** 

_.sortedUniq([1, 1, 2]);
// => [1, 2]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to inspect. |

**Returns:** *T[]*

Returns the new duplicate free array.

___

###  sortedUniqBy

▸ **sortedUniqBy**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1432

This method is like `_.uniqBy` except that it's designed and optimized
for sorted arrays.

**`example`** 

_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.2]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to inspect. |
`iteratee` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› | - |

**Returns:** *T[]*

Returns the new duplicate free array.

___

###  unionWith

▸ **unionWith**<**T**>(`arrays`: [List](../modules/____index_.md#list)‹T› | null | undefined, `comparator?`: [Comparator](../modules/____index_.md#comparator)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1645

This method is like `_.union` except that it accepts `comparator` which
is invoked to compare elements of `arrays`. The comparator is invoked
with two arguments: (arrVal, othVal).

**`example`** 

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.unionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arrays` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`comparator?` | [Comparator](../modules/____index_.md#comparator)‹T› |

**Returns:** *T[]*

Returns the new array of combined values.

▸ **unionWith**<**T**>(`arrays`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays2`: [List](../modules/____index_.md#list)‹T› | null | undefined, `comparator?`: [Comparator](../modules/____index_.md#comparator)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1649

**`see`** _.unionWith

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arrays` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays2` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`comparator?` | [Comparator](../modules/____index_.md#comparator)‹T› |

**Returns:** *T[]*

▸ **unionWith**<**T**>(`arrays`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays2`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays3`: [List](../modules/____index_.md#list)‹T› | null | undefined, ...`comparator`: [Array](regexpmatcharray.md#array)‹[Comparator](../modules/____index_.md#comparator)‹T› | [List](../modules/____index_.md#list)‹T› | null | undefined›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1653

**`see`** _.unionWith

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arrays` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays2` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays3` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`...comparator` | [Array](regexpmatcharray.md#array)‹[Comparator](../modules/____index_.md#comparator)‹T› &#124; [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined› |

**Returns:** *T[]*

___

###  uniq

▸ **uniq**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1690

Creates a duplicate-free version of an array, using
[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
for equality comparisons, in which only the first occurrence of each element
is kept.

**`example`** 

_.uniq([2, 1, 2]);
// => [2, 1]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to inspect. |

**Returns:** *T[]*

Returns the new duplicate free array.

___

###  uniqBy

▸ **uniqBy**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1723

This method is like `_.uniq` except that it accepts `iteratee` which is
invoked for each element in `array` to generate the criterion by which
uniqueness is computed. The iteratee is invoked with one argument: (value).

**`example`** 

_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// using the `_.property` iteratee shorthand
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to inspect. |
`iteratee` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› | - |

**Returns:** *T[]*

Returns the new duplicate free array.

___

###  uniqWith

▸ **uniqWith**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `comparator?`: [Comparator](../modules/____index_.md#comparator)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1754

This method is like `_.uniq` except that it accepts `comparator` which
is invoked to compare elements of `array`. The comparator is invoked with
two arguments: (arrVal, othVal).

**`example`** 

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 },  { 'x': 1, 'y': 2 }];

_.uniqWith(objects, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to inspect. |
`comparator?` | [Comparator](../modules/____index_.md#comparator)‹T› | - |

**Returns:** *T[]*

Returns the new duplicate free array.

___

###  xorBy

▸ **xorBy**<**T**>(`arrays`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1887

This method is like `_.xor` except that it accepts `iteratee` which is
invoked for each element of each `arrays` to generate the criterion by which
uniqueness is computed. The iteratee is invoked with one argument: (value).

**`example`** 

_.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [1.2, 4.3]

// using the `_.property` iteratee shorthand
_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 2 }]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arrays` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› |

**Returns:** *T[]*

Returns the new array of values.

▸ **xorBy**<**T**>(`arrays`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays2`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1891

**`see`** _.xorBy

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arrays` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays2` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› |

**Returns:** *T[]*

▸ **xorBy**<**T**>(`arrays`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays2`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays3`: [List](../modules/____index_.md#list)‹T› | null | undefined, ...`iteratee`: [Array](regexpmatcharray.md#array)‹[ValueIteratee](../modules/____index_.md#valueiteratee)‹T› | [List](../modules/____index_.md#list)‹T› | null | undefined›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1895

**`see`** _.xorBy

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arrays` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays2` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays3` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`...iteratee` | [Array](regexpmatcharray.md#array)‹[ValueIteratee](../modules/____index_.md#valueiteratee)‹T› &#124; [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined› |

**Returns:** *T[]*

___

###  xorWith

▸ **xorWith**<**T**>(`arrays`: [List](../modules/____index_.md#list)‹T› | null | undefined, `comparator?`: [Comparator](../modules/____index_.md#comparator)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1935

This method is like `_.xor` except that it accepts `comparator` which is
invoked to compare elements of `arrays`. The comparator is invoked with
two arguments: (arrVal, othVal).

**`example`** 

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.xorWith(objects, others, _.isEqual);
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arrays` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`comparator?` | [Comparator](../modules/____index_.md#comparator)‹T› |

**Returns:** *T[]*

Returns the new array of values.

▸ **xorWith**<**T**>(`arrays`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays2`: [List](../modules/____index_.md#list)‹T› | null | undefined, `comparator?`: [Comparator](../modules/____index_.md#comparator)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1939

**`see`** _.xorWith

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arrays` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays2` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`comparator?` | [Comparator](../modules/____index_.md#comparator)‹T› |

**Returns:** *T[]*

▸ **xorWith**<**T**>(`arrays`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays2`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays3`: [List](../modules/____index_.md#list)‹T› | null | undefined, ...`comparator`: [Array](regexpmatcharray.md#array)‹[Comparator](../modules/____index_.md#comparator)‹T› | [List](../modules/____index_.md#list)‹T› | null | undefined›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1943

**`see`** _.xorWith

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arrays` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays2` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays3` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`...comparator` | [Array](regexpmatcharray.md#array)‹[Comparator](../modules/____index_.md#comparator)‹T› &#124; [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined› |

**Returns:** *T[]*

___

## Collection Methods

###  flatMapDeep

▸ **flatMapDeep**<**T**>(`collection`: [Dictionary](____index_.dictionary.md)‹[ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹T› | T› | [NumericDictionary](____index_.numericdictionary.md)‹[ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹T› | T› | null | undefined): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:545

This method is like `_.flatMap` except that it recursively flattens the
mapped results.

**`since`** 4.7.0

**`example`** 

function duplicate(n) {
  return [[[n, n]]];
}

_.flatMapDeep([1, 2], duplicate);
// => [1, 1, 2, 2]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [Dictionary](____index_.dictionary.md)‹[ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹T› &#124; T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹[ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹T› &#124; T› &#124; null &#124; undefined | The collection to iterate over. |

**Returns:** *T[]*

Returns the new flattened array.

▸ **flatMapDeep**<**T**, **TResult**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee`: [ListIterator](../modules/____index_.md#listiterator)‹T, [ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹TResult› | TResult›): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:549

**`see`** _.flatMapDeep

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`iteratee` | [ListIterator](../modules/____index_.md#listiterator)‹T, [ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹TResult› &#124; TResult› |

**Returns:** *TResult[]*

▸ **flatMapDeep**<**T**, **TResult**>(`collection`: T | null | undefined, `iteratee`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, [ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹TResult› | TResult›): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:553

**`see`** _.flatMapDeep

**Type parameters:**

▪ **T**: *object*

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`iteratee` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, [ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹TResult› &#124; TResult› |

**Returns:** *TResult[]*

▸ **flatMapDeep**(`collection`: object | null | undefined, `iteratee`: string): *any[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:557

**`see`** _.flatMapDeep

**Parameters:**

Name | Type |
------ | ------ |
`collection` | object &#124; null &#124; undefined |
`iteratee` | string |

**Returns:** *any[]*

▸ **flatMapDeep**(`collection`: object | null | undefined, `iteratee`: object): *boolean[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:561

**`see`** _.flatMapDeep

**Parameters:**

Name | Type |
------ | ------ |
`collection` | object &#124; null &#124; undefined |
`iteratee` | object |

**Returns:** *boolean[]*

___

###  flatMapDepth

▸ **flatMapDepth**<**T**>(`collection`: [Dictionary](____index_.dictionary.md)‹[ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹T› | T› | [NumericDictionary](____index_.numericdictionary.md)‹[ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹T› | T› | null | undefined): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:669

This method is like `_.flatMap` except that it recursively flattens the
mapped results up to `depth` times.

**`since`** 4.7.0

**`example`** 

function duplicate(n) {
  return [[[n, n]]];
}

_.flatMapDepth([1, 2], duplicate, 2);
// => [[1, 1], [2, 2]]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [Dictionary](____index_.dictionary.md)‹[ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹T› &#124; T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹[ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹T› &#124; T› &#124; null &#124; undefined | The collection to iterate over. |

**Returns:** *T[]*

Returns the new flattened array.

▸ **flatMapDepth**<**T**, **TResult**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee`: [ListIterator](../modules/____index_.md#listiterator)‹T, [ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹TResult› | TResult›, `depth?`: undefined | number): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:673

**`see`** _.flatMapDepth

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`iteratee` | [ListIterator](../modules/____index_.md#listiterator)‹T, [ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹TResult› &#124; TResult› |
`depth?` | undefined &#124; number |

**Returns:** *TResult[]*

▸ **flatMapDepth**<**T**, **TResult**>(`collection`: T | null | undefined, `iteratee`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, [ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹TResult› | TResult›, `depth?`: undefined | number): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:677

**`see`** _.flatMapDepth

**Type parameters:**

▪ **T**: *object*

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`iteratee` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, [ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹TResult› &#124; TResult› |
`depth?` | undefined &#124; number |

**Returns:** *TResult[]*

▸ **flatMapDepth**(`collection`: object | null | undefined, `iteratee`: string, `depth?`: undefined | number): *any[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:681

**`see`** _.flatMapDepth

**Parameters:**

Name | Type |
------ | ------ |
`collection` | object &#124; null &#124; undefined |
`iteratee` | string |
`depth?` | undefined &#124; number |

**Returns:** *any[]*

▸ **flatMapDepth**(`collection`: object | null | undefined, `iteratee`: object, `depth?`: undefined | number): *boolean[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:685

**`see`** _.flatMapDepth

**Parameters:**

Name | Type |
------ | ------ |
`collection` | object &#124; null &#124; undefined |
`iteratee` | object |
`depth?` | undefined &#124; number |

**Returns:** *boolean[]*

___

###  orderBy

▸ **orderBy**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratees?`: [Many](../modules/____index_.md#many)‹[ListIterator](../modules/____index_.md#listiterator)‹T, [NotVoid](../modules/____index_.md#notvoid)››, `orders?`: [Many](../modules/____index_.md#many)‹boolean | "asc" | "desc"›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1327

This method is like `_.sortBy` except that it allows specifying the sort
orders of the iteratees to sort by. If `orders` is unspecified, all values
are sorted in ascending order. Otherwise, specify an order of "desc" for
descending or "asc" for ascending sort order of corresponding values.

**`param-`** {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.

**`example`** 

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 42 },
  { 'user': 'barney', 'age': 36 }
];

// sort by `user` in ascending order and by `age` in descending order
_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The collection to iterate over. |
`iteratees?` | [Many](../modules/____index_.md#many)‹[ListIterator](../modules/____index_.md#listiterator)‹T, [NotVoid](../modules/____index_.md#notvoid)›› | - |
`orders?` | [Many](../modules/____index_.md#many)‹boolean &#124; "asc" &#124; "desc"› | - |

**Returns:** *T[]*

Returns the new sorted array.

▸ **orderBy**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratees?`: [Many](../modules/____index_.md#many)‹[ListIteratee](../modules/____index_.md#listiteratee)‹T››, `orders?`: [Many](../modules/____index_.md#many)‹boolean | "asc" | "desc"›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1331

**`see`** _.orderBy

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`iteratees?` | [Many](../modules/____index_.md#many)‹[ListIteratee](../modules/____index_.md#listiteratee)‹T›› |
`orders?` | [Many](../modules/____index_.md#many)‹boolean &#124; "asc" &#124; "desc"› |

**Returns:** *T[]*

▸ **orderBy**<**T**>(`collection`: T | null | undefined, `iteratees?`: [Many](../modules/____index_.md#many)‹[ObjectIterator](../modules/____index_.md#objectiterator)‹T, [NotVoid](../modules/____index_.md#notvoid)››, `orders?`: [Many](../modules/____index_.md#many)‹boolean | "asc" | "desc"›): *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1335

**`see`** _.orderBy

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`iteratees?` | [Many](../modules/____index_.md#many)‹[ObjectIterator](../modules/____index_.md#objectiterator)‹T, [NotVoid](../modules/____index_.md#notvoid)›› |
`orders?` | [Many](../modules/____index_.md#many)‹boolean &#124; "asc" &#124; "desc"› |

**Returns:** *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

▸ **orderBy**<**T**>(`collection`: T | null | undefined, `iteratees?`: [Many](../modules/____index_.md#many)‹[ObjectIteratee](../modules/____index_.md#objectiteratee)‹T››, `orders?`: [Many](../modules/____index_.md#many)‹boolean | "asc" | "desc"›): *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1339

**`see`** _.orderBy

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`iteratees?` | [Many](../modules/____index_.md#many)‹[ObjectIteratee](../modules/____index_.md#objectiteratee)‹T›› |
`orders?` | [Many](../modules/____index_.md#many)‹boolean &#124; "asc" &#124; "desc"› |

**Returns:** *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

___

###  sortBy

▸ **sortBy**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, ...`iteratees`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹[ListIteratee](../modules/____index_.md#listiteratee)‹T›››): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1900

Creates an array of elements, sorted in ascending order by the results of
running each element in a collection through each iteratee. This method
performs a stable sort, that is, it preserves the original sort order of
equal elements. The iteratees are invoked with one argument: (value).

**`example`** 

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 42 },
  { 'user': 'barney', 'age': 34 }
];

_.sortBy(users, function(o) { return o.user; });
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]

_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]

_.sortBy(users, 'user', function(o) {
  return Math.floor(o.age / 10);
});
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The collection to iterate over. |
`...iteratees` | [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹[ListIteratee](../modules/____index_.md#listiteratee)‹T››› | - |

**Returns:** *T[]*

Returns the new sorted array.

▸ **sortBy**<**T**>(`collection`: T | null | undefined, ...`iteratees`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹[ObjectIteratee](../modules/____index_.md#objectiteratee)‹T›››): *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1904

**`see`** _.sortBy

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`...iteratees` | [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹[ObjectIteratee](../modules/____index_.md#objectiteratee)‹T››› |

**Returns:** *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

___

## Function Methods

###  flip

▸ **flip**<**T**>(`func`: T): *T*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:468

Creates a function that invokes `func` with arguments reversed.

**`example`** 

var flipped = _.flip(function() {
  return _.toArray(arguments);
});

flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']

**Type parameters:**

▪ **T**: *function*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`func` | T | The function to flip arguments for. |

**Returns:** *T*

Returns the new function.

___

###  unary

▸ **unary**<**T**, **TResult**>(`func`: function): *function*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:1354

Creates a function that accepts up to one argument, ignoring any
additional arguments.

**`example`** 

_.map(['6', '8', '10'], _.unary(parseInt));
// => [6, 8, 10]

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

▪ **func**: *function*

The function to cap arguments for.

▸ (`arg1`: T, ...`args`: any[]): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T |
`...args` | any[] |

**Returns:** *function*

Returns the new function.

▸ (`arg1`: T): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T |

___

## Lang Methods

###  eq

▸ **eq**(`value`: any, `other`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:253

Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
comparison between two values to determine if they are equivalent.

**`example`** 

var object = { 'user': 'fred' };
var other = { 'user': 'fred' };

_.eq(object, object);
// => true

_.eq(object, other);
// => false

_.eq('a', 'a');
// => true

_.eq('a', Object('a'));
// => false

_.eq(NaN, NaN);
// => true

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to compare. |
`other` | any | The other value to compare. |

**Returns:** *boolean*

Returns `true` if the values are equivalent, else `false`.

___

###  isArrayLike

▸ **isArrayLike**<**T**>(`t`: T): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:407

Checks if `value` is array-like. A value is considered array-like if it's
not a function and has a `value.length` that's an integer greater than or
equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.

**`example`** 

_.isArrayLike([1, 2, 3]);
// => true

_.isArrayLike(document.body.children);
// => true

_.isArrayLike('abc');
// => true

_.isArrayLike(_.noop);
// => false

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |

**Returns:** *boolean*

Returns `true` if `value` is array-like, else `false`.

▸ **isArrayLike**(`value`: function | null | undefined): *value is never*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:411

**`see`** _.isArrayLike

**Parameters:**

Name | Type |
------ | ------ |
`value` | function &#124; null &#124; undefined |

**Returns:** *value is never*

▸ **isArrayLike**(`value`: any): *value is object*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:415

**`see`** _.isArrayLike

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is object*

___

###  isArrayLikeObject

▸ **isArrayLikeObject**<**T**>(`value`: T): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:452

This method is like `_.isArrayLike` except that it also checks if `value`
is an object.

**`example`** 

_.isArrayLikeObject([1, 2, 3]);
// => true

_.isArrayLikeObject(document.body.children);
// => true

_.isArrayLikeObject('abc');
// => false

_.isArrayLikeObject(_.noop);
// => false

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | The value to check. |

**Returns:** *boolean*

Returns `true` if `value` is an array-like object, else `false`.

▸ **isArrayLikeObject**(`value`: function | [FunctionBase](../modules/____index_.md#functionbase) | string | boolean | number | null | undefined): *value is never*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:457

**`see`** _.isArrayLikeObject

**Parameters:**

Name | Type |
------ | ------ |
`value` | function &#124; [FunctionBase](../modules/____index_.md#functionbase) &#124; string &#124; boolean &#124; number &#124; null &#124; undefined |

**Returns:** *value is never*

▸ **isArrayLikeObject**(`value`: any): *value is object & object*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:461

**`see`** _.isArrayLikeObject

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is object & object*

___

###  isEqual

▸ **isEqual**(`value`: any, `other`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:613

Performs a deep comparison between two values to determine if they are
equivalent.

**Note:** This method supports comparing arrays, array buffers, booleans,
date objects, error objects, maps, numbers, `Object` objects, regexes,
sets, strings, symbols, and typed arrays. `Object` objects are compared
by their own, not inherited, enumerable properties. Functions and DOM
nodes are **not** supported.

**`example`** 

var object = { 'user': 'fred' };
var other = { 'user': 'fred' };

_.isEqual(object, other);
// => true

object === other;
// => false

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to compare. |
`other` | any | The other value to compare. |

**Returns:** *boolean*

Returns `true` if the values are equivalent, else `false`.

___

###  isEqualWith

▸ **isEqualWith**(`value`: any, `other`: any, `customizer?`: [IsEqualCustomizer](../modules/____index_.md#isequalcustomizer)): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:659

This method is like `_.isEqual` except that it accepts `customizer` which is
invoked to compare values. If `customizer` returns `undefined` comparisons are
handled by the method instead. The `customizer` is invoked with up to seven arguments:
(objValue, othValue [, index|key, object, other, stack]).

**`example`** 

function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, othValue) {
  if (isGreeting(objValue) && isGreeting(othValue)) {
    return true;
  }
}

var array = ['hello', 'goodbye'];
var other = ['hi', 'goodbye'];

_.isEqualWith(array, other, customizer);
// => true

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to compare. |
`other` | any | The other value to compare. |
`customizer?` | [IsEqualCustomizer](../modules/____index_.md#isequalcustomizer) | - |

**Returns:** *boolean*

Returns `true` if the values are equivalent, else `false`.

___

###  isInteger

▸ **isInteger**(`value?`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:766

Checks if `value` is an integer.

**Note:** This method is based on [`Number.isInteger`](https://mdn.io/Number/isInteger).

**`example`** 

_.isInteger(3);
// => true

_.isInteger(Number.MIN_VALUE);
// => false

_.isInteger(Infinity);
// => false

_.isInteger('3');
// => false

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *boolean*

Returns `true` if `value` is an integer, else `false`.

___

###  isLength

▸ **isLength**(`value?`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:804

Checks if `value` is a valid array-like length.

**Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).

**`example`** 

_.isLength(3);
// => true

_.isLength(Number.MIN_VALUE);
// => false

_.isLength(Infinity);
// => false

_.isLength('3');
// => false

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *boolean*

Returns `true` if `value` is a valid length, else `false`.

___

###  isMatch

▸ **isMatch**(`object`: object, `source`: object): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:863

Performs a deep comparison between `object` and `source` to determine if
`object` contains equivalent property values.

**Note:** This method supports comparing the same values as `_.isEqual`.

**`example`** 

var object = { 'user': 'fred', 'age': 40 };

_.isMatch(object, { 'age': 40 });
// => true

_.isMatch(object, { 'age': 36 });
// => false

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | object | The object to inspect. |
`source` | object | The object of property values to match. |

**Returns:** *boolean*

Returns `true` if `object` is a match, else `false`.

___

###  isMatchWith

▸ **isMatchWith**(`object`: object, `source`: object, `customizer`: [isMatchWithCustomizer](../modules/____index_.md#ismatchwithcustomizer)): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:909

This method is like `_.isMatch` except that it accepts `customizer` which
is invoked to compare values. If `customizer` returns `undefined` comparisons
are handled by the method instead. The `customizer` is invoked with three
arguments: (objValue, srcValue, index|key, object, source).

**`example`** 

function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, srcValue) {
  if (isGreeting(objValue) && isGreeting(srcValue)) {
    return true;
  }
}

var object = { 'greeting': 'hello' };
var source = { 'greeting': 'hi' };

_.isMatchWith(object, source, customizer);
// => true

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | object | The object to inspect. |
`source` | object | The object of property values to match. |
`customizer` | [isMatchWithCustomizer](../modules/____index_.md#ismatchwithcustomizer) | - |

**Returns:** *boolean*

Returns `true` if `object` is a match, else `false`.

___

###  isNil

▸ **isNil**(`value`: any): *value is null | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:988

Checks if `value` is `null` or `undefined`.

**`example`** 

_.isNil(null);
// => true

_.isNil(void 0);
// => true

_.isNil(NaN);
// => false

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to check. |

**Returns:** *value is null | undefined*

Returns `true` if `value` is nullish, else `false`.

___

###  isObjectLike

▸ **isObjectLike**(`value?`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1094

Checks if `value` is object-like. A value is object-like if it's not `null`
and has a `typeof` result of "object".

**`example`** 

_.isObjectLike({});
// => true

_.isObjectLike([1, 2, 3]);
// => true

_.isObjectLike(_.noop);
// => false

_.isObjectLike(null);
// => false

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *boolean*

Returns `true` if `value` is object-like, else `false`.

___

###  isSafeInteger

▸ **isSafeInteger**(`value`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1180

Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
double precision number which isn't the result of a rounded unsafe integer.

**Note:** This method is based on [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).

**`example`** 

_.isSafeInteger(3);
// => true

_.isSafeInteger(Number.MIN_VALUE);
// => false

_.isSafeInteger(Infinity);
// => false

_.isSafeInteger('3');
// => false

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to check. |

**Returns:** *boolean*

Returns `true` if `value` is a safe integer, else `false`.

___

###  isSymbol

▸ **isSymbol**(`value`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1254

Checks if `value` is classified as a `Symbol` primitive or object.

**`example`** 

_.isSymbol(Symbol.iterator);
// => true

_.isSymbol('abc');
// => false

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to check. |

**Returns:** *boolean*

Returns `true` if `value` is correctly classified, else `false`.

___

###  toFinite

▸ **toFinite**(`value`: any): *number*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1485

Converts `value` to a finite number.

**`since`** 4.12.0

**`example`** 

_.toFinite(3.2);
// => 3.2

_.toFinite(Number.MIN_VALUE);
// => 5e-324

_.toFinite(Infinity);
// => 1.7976931348623157e+308

_.toFinite('3.2');
// => 3.2

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to convert. |

**Returns:** *number*

Returns the converted number.

___

###  toInteger

▸ **toInteger**(`value`: any): *number*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1523

Converts `value` to an integer.

**Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).

**`example`** 

_.toInteger(3);
// => 3

_.toInteger(Number.MIN_VALUE);
// => 0

_.toInteger(Infinity);
// => 1.7976931348623157e+308

_.toInteger('3');
// => 3

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to convert. |

**Returns:** *number*

Returns the converted integer.

___

###  toLength

▸ **toLength**(`value`: any): *number*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1562

Converts `value` to an integer suitable for use as the length of an
array-like object.

**Note:** This method is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).

**`example`** 

_.toLength(3);
// => 3

_.toLength(Number.MIN_VALUE);
// => 0

_.toLength(Infinity);
// => 4294967295

_.toLength('3');
// => 3

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to convert. |

**Returns:** *number*

Returns the converted integer.

___

###  toNumber

▸ **toNumber**(`value`: any): *number*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1598

Converts `value` to a number.

**`example`** 

_.toNumber(3);
// => 3

_.toNumber(Number.MIN_VALUE);
// => 5e-324

_.toNumber(Infinity);
// => Infinity

_.toNumber('3');
// => 3

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to process. |

**Returns:** *number*

Returns the number.

___

###  toSafeInteger

▸ **toSafeInteger**(`value`: any): *number*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1658

Converts `value` to a safe integer. A safe integer can be compared and
represented correctly.

**`example`** 

_.toSafeInteger(3);
// => 3

_.toSafeInteger(Number.MIN_VALUE);
// => 0

_.toSafeInteger(Infinity);
// => 9007199254740991

_.toSafeInteger('3');
// => 3

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to convert. |

**Returns:** *number*

Returns the converted integer.

___

###  toString

▸ **toString**(`value`: any): *string*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1692

Converts `value` to a string if it's not one. An empty string is returned
for `null` and `undefined` values. The sign of `-0` is preserved.

**`example`** 

_.toString(null);
// => ''

_.toString(-0);
// => '-0'

_.toString([1, 2, 3]);
// => '1,2,3'

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to process. |

**Returns:** *string*

Returns the string.

___

## Math Methods

###  max

▸ **max**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined): *T | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/math.d.ts:104

Computes the maximum value of `array`. If `array` is empty or falsey
`undefined` is returned.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |

**Returns:** *T | undefined*

Returns the maximum value.

___

###  maxBy

▸ **maxBy**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *T | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/math.d.ts:140

This method is like `_.max` except that it accepts `iteratee` which is
invoked for each element in `array` to generate the criterion by which
the value is ranked. The iteratee is invoked with one argument: (value).

**`example`** 

var objects = [{ 'n': 1 }, { 'n': 2 }];

_.maxBy(objects, function(o) { return o.a; });
// => { 'n': 2 }

// using the `_.property` iteratee shorthand
_.maxBy(objects, 'n');
// => { 'n': 2 }

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | - |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› | The iteratee invoked per element. |

**Returns:** *T | undefined*

Returns the maximum value.

___

###  mean

▸ **mean**(`collection`: [List](../modules/____index_.md#list)‹any› | null | undefined): *number*

Defined in node_modules/@types/lodash/ts3.1/common/math.d.ts:167

Computes the mean of the values in `array`.

**`example`** 

_.mean([4, 2, 8, 6]);
// => 5

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹any› &#124; null &#124; undefined |

**Returns:** *number*

Returns the mean.

___

###  meanBy

▸ **meanBy**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *number*

Defined in node_modules/@types/lodash/ts3.1/common/math.d.ts:195

Computes the mean of the provided propties of the objects in the `array`

**`example`** 

_.mean([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n');
// => 5

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | - |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› | The iteratee invoked per element. |

**Returns:** *number*

Returns the mean.

___

###  min

▸ **min**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined): *T | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/math.d.ts:219

Computes the minimum value of `array`. If `array` is empty or falsey
`undefined` is returned.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |

**Returns:** *T | undefined*

Returns the minimum value.

___

###  minBy

▸ **minBy**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *T | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/math.d.ts:255

This method is like `_.min` except that it accepts `iteratee` which is
invoked for each element in `array` to generate the criterion by which
the value is ranked. The iteratee is invoked with one argument: (value).

**`example`** 

var objects = [{ 'n': 1 }, { 'n': 2 }];

_.minBy(objects, function(o) { return o.a; });
// => { 'n': 1 }

// using the `_.property` iteratee shorthand
_.minBy(objects, 'n');
// => { 'n': 1 }

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | - |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› | The iteratee invoked per element. |

**Returns:** *T | undefined*

Returns the minimum value.

___

###  subtract

▸ **subtract**(`minuend`: number, `subtrahend`: number): *number*

Defined in node_modules/@types/lodash/ts3.1/common/math.d.ts:328

Subtract two numbers.

**`example`** 

_.subtract(6, 4);
// => 2

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`minuend` | number | The first number in a subtraction. |
`subtrahend` | number | The second number in a subtraction. |

**Returns:** *number*

Returns the difference.

___

###  sum

▸ **sum**(`collection`: [List](../modules/____index_.md#list)‹any› | null | undefined): *number*

Defined in node_modules/@types/lodash/ts3.1/common/math.d.ts:355

Computes the sum of the values in `array`.

**`example`** 

_.sum([4, 2, 8, 6]);
// => 20

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹any› &#124; null &#124; undefined |

**Returns:** *number*

Returns the sum.

___

###  sumBy

▸ **sumBy**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee?`: function | string): *number*

Defined in node_modules/@types/lodash/ts3.1/common/math.d.ts:391

This method is like `_.sum` except that it accepts `iteratee` which is
invoked for each element in `array` to generate the value to be summed.
The iteratee is invoked with one argument: (value).

**`example`** 

var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

_.sumBy(objects, function(o) { return o.n; });
// => 20

// using the `_.property` iteratee shorthand
_.sumBy(objects, 'n');
// => 20

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`iteratee?` | function &#124; string |

**Returns:** *number*

Returns the sum.

___

## Number Methods

###  clamp

▸ **clamp**(`number`: number, `lower`: number, `upper`: number): *number*

Defined in node_modules/@types/lodash/ts3.1/common/number.d.ts:34

Clamps `number` within the inclusive `lower` and `upper` bounds.

**`example`** 

_.clamp(-10, -5, 5);
// => -5

_.clamp(10, -5, 5);
// => 5
Clamps `number` within the inclusive `lower` and `upper` bounds.

**`category`** Number

**`example`** 

_.clamp(-10, -5, 5);
// => -5

_.clamp(10, -5, 5);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`number` | number | The number to clamp. |
`lower` | number | - |
`upper` | number | The upper bound. |

**Returns:** *number*

Returns the clamped number.

▸ **clamp**(`number`: number, `upper`: number): *number*

Defined in node_modules/@types/lodash/ts3.1/common/number.d.ts:38

**`see`** _.clamp

**Parameters:**

Name | Type |
------ | ------ |
`number` | number |
`upper` | number |

**Returns:** *number*

___

## Object Methods

###  assign

▸ **assign**<**TObject**, **TSource**>(`object`: TObject, `source`: TSource): *TObject & TSource*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:32

Assigns own enumerable properties of source objects to the destination
object. Source objects are applied from left to right. Subsequent sources
overwrite property assignments of previous sources.

**Note:** This method mutates `object` and is loosely based on
[`Object.assign`](https://mdn.io/Object/assign).

**`example`** 

function Foo() {
  this.c = 3;
}

function Bar() {
  this.e = 5;
}

Foo.prototype.d = 4;
Bar.prototype.f = 6;

_.assign({ 'a': 1 }, new Foo, new Bar);
// => { 'a': 1, 'c': 3, 'e': 5 }

**Type parameters:**

▪ **TObject**

▪ **TSource**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | TObject | The destination object. |
`source` | TSource | - |

**Returns:** *TObject & TSource*

Returns `object`.

▸ **assign**<**TObject**, **TSource1**, **TSource2**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2): *TObject & TSource1 & TSource2*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:36

**`see`** _.assign

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |

**Returns:** *TObject & TSource1 & TSource2*

▸ **assign**<**TObject**, **TSource1**, **TSource2**, **TSource3**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3): *TObject & TSource1 & TSource2 & TSource3*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:40

**`see`** _.assign

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |

**Returns:** *TObject & TSource1 & TSource2 & TSource3*

▸ **assign**<**TObject**, **TSource1**, **TSource2**, **TSource3**, **TSource4**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3, `source4`: TSource4): *TObject & TSource1 & TSource2 & TSource3 & TSource4*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:44

**`see`** _.assign

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

▪ **TSource4**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |
`source4` | TSource4 |

**Returns:** *TObject & TSource1 & TSource2 & TSource3 & TSource4*

▸ **assign**<**TObject**>(`object`: TObject): *TObject*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:48

**`see`** _.assign

**Type parameters:**

▪ **TObject**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |

**Returns:** *TObject*

▸ **assign**(`object`: any, ...`otherArgs`: any[]): *any*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:52

**`see`** _.assign

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`...otherArgs` | any[] |

**Returns:** *any*

___

###  assignIn

▸ **assignIn**<**TObject**, **TSource**>(`object`: TObject, `source`: TSource): *TObject & TSource*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:134

This method is like `_.assign` except that it iterates over own and
inherited source properties.

**Note:** This method mutates `object`.

**`alias`** extend

**`example`** 

function Foo() {
  this.b = 2;
}

function Bar() {
  this.d = 4;
}

Foo.prototype.c = 3;
Bar.prototype.e = 5;

_.assignIn({ 'a': 1 }, new Foo, new Bar);
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }

**Type parameters:**

▪ **TObject**

▪ **TSource**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | TObject | The destination object. |
`source` | TSource | - |

**Returns:** *TObject & TSource*

Returns `object`.

▸ **assignIn**<**TObject**, **TSource1**, **TSource2**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2): *TObject & TSource1 & TSource2*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:138

**`see`** _.assignIn

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |

**Returns:** *TObject & TSource1 & TSource2*

▸ **assignIn**<**TObject**, **TSource1**, **TSource2**, **TSource3**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3): *TObject & TSource1 & TSource2 & TSource3*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:142

**`see`** _.assignIn

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |

**Returns:** *TObject & TSource1 & TSource2 & TSource3*

▸ **assignIn**<**TObject**, **TSource1**, **TSource2**, **TSource3**, **TSource4**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3, `source4`: TSource4): *TObject & TSource1 & TSource2 & TSource3 & TSource4*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:146

**`see`** _.assignIn

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

▪ **TSource4**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |
`source4` | TSource4 |

**Returns:** *TObject & TSource1 & TSource2 & TSource3 & TSource4*

▸ **assignIn**<**TObject**>(`object`: TObject): *TObject*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:150

**`see`** _.assignIn

**Type parameters:**

▪ **TObject**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |

**Returns:** *TObject*

▸ **assignIn**<**TResult**>(`object`: any, ...`otherArgs`: any[]): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:154

**`see`** _.assignIn

**Type parameters:**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`...otherArgs` | any[] |

**Returns:** *TResult*

___

###  assignInWith

▸ **assignInWith**<**TObject**, **TSource**>(`object`: TObject, `source`: TSource, `customizer`: [AssignCustomizer](../modules/____index_.md#assigncustomizer)): *TObject & TSource*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:235

This method is like `_.assignIn` except that it accepts `customizer` which
is invoked to produce the assigned values. If `customizer` returns `undefined`
assignment is handled by the method instead. The `customizer` is invoked
with five arguments: (objValue, srcValue, key, object, source).

**Note:** This method mutates `object`.

**`alias`** extendWith

**`example`** 

function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = _.partialRight(_.assignInWith, customizer);

defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }

**Type parameters:**

▪ **TObject**

▪ **TSource**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | TObject | The destination object. |
`source` | TSource | - |
`customizer` | [AssignCustomizer](../modules/____index_.md#assigncustomizer) | - |

**Returns:** *TObject & TSource*

Returns `object`.

▸ **assignInWith**<**TObject**, **TSource1**, **TSource2**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `customizer`: [AssignCustomizer](../modules/____index_.md#assigncustomizer)): *TObject & TSource1 & TSource2*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:239

**`see`** _.assignInWith

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`customizer` | [AssignCustomizer](../modules/____index_.md#assigncustomizer) |

**Returns:** *TObject & TSource1 & TSource2*

▸ **assignInWith**<**TObject**, **TSource1**, **TSource2**, **TSource3**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3, `customizer`: [AssignCustomizer](../modules/____index_.md#assigncustomizer)): *TObject & TSource1 & TSource2 & TSource3*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:243

**`see`** _.assignInWith

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |
`customizer` | [AssignCustomizer](../modules/____index_.md#assigncustomizer) |

**Returns:** *TObject & TSource1 & TSource2 & TSource3*

▸ **assignInWith**<**TObject**, **TSource1**, **TSource2**, **TSource3**, **TSource4**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3, `source4`: TSource4, `customizer`: [AssignCustomizer](../modules/____index_.md#assigncustomizer)): *TObject & TSource1 & TSource2 & TSource3 & TSource4*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:247

**`see`** _.assignInWith

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

▪ **TSource4**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |
`source4` | TSource4 |
`customizer` | [AssignCustomizer](../modules/____index_.md#assigncustomizer) |

**Returns:** *TObject & TSource1 & TSource2 & TSource3 & TSource4*

▸ **assignInWith**<**TObject**>(`object`: TObject): *TObject*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:251

**`see`** _.assignInWith

**Type parameters:**

▪ **TObject**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |

**Returns:** *TObject*

▸ **assignInWith**<**TResult**>(`object`: any, ...`otherArgs`: any[]): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:255

**`see`** _.assignInWith

**Type parameters:**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`...otherArgs` | any[] |

**Returns:** *TResult*

___

###  assignWith

▸ **assignWith**<**TObject**, **TSource**>(`object`: TObject, `source`: TSource, `customizer`: [AssignCustomizer](../modules/____index_.md#assigncustomizer)): *TObject & TSource*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:334

This method is like `_.assign` except that it accepts `customizer` which
is invoked to produce the assigned values. If `customizer` returns `undefined`
assignment is handled by the method instead. The `customizer` is invoked
with five arguments: (objValue, srcValue, key, object, source).

**Note:** This method mutates `object`.

**`example`** 

function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = _.partialRight(_.assignWith, customizer);

defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }

**Type parameters:**

▪ **TObject**

▪ **TSource**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | TObject | The destination object. |
`source` | TSource | - |
`customizer` | [AssignCustomizer](../modules/____index_.md#assigncustomizer) | - |

**Returns:** *TObject & TSource*

Returns `object`.

▸ **assignWith**<**TObject**, **TSource1**, **TSource2**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `customizer`: [AssignCustomizer](../modules/____index_.md#assigncustomizer)): *TObject & TSource1 & TSource2*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:338

**`see`** _.assignWith

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`customizer` | [AssignCustomizer](../modules/____index_.md#assigncustomizer) |

**Returns:** *TObject & TSource1 & TSource2*

▸ **assignWith**<**TObject**, **TSource1**, **TSource2**, **TSource3**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3, `customizer`: [AssignCustomizer](../modules/____index_.md#assigncustomizer)): *TObject & TSource1 & TSource2 & TSource3*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:342

**`see`** _.assignWith

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |
`customizer` | [AssignCustomizer](../modules/____index_.md#assigncustomizer) |

**Returns:** *TObject & TSource1 & TSource2 & TSource3*

▸ **assignWith**<**TObject**, **TSource1**, **TSource2**, **TSource3**, **TSource4**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3, `source4`: TSource4, `customizer`: [AssignCustomizer](../modules/____index_.md#assigncustomizer)): *TObject & TSource1 & TSource2 & TSource3 & TSource4*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:346

**`see`** _.assignWith

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

▪ **TSource4**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |
`source4` | TSource4 |
`customizer` | [AssignCustomizer](../modules/____index_.md#assigncustomizer) |

**Returns:** *TObject & TSource1 & TSource2 & TSource3 & TSource4*

▸ **assignWith**<**TObject**>(`object`: TObject): *TObject*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:350

**`see`** _.assignWith

**Type parameters:**

▪ **TObject**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |

**Returns:** *TObject*

▸ **assignWith**<**TResult**>(`object`: any, ...`otherArgs`: any[]): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:354

**`see`** _.assignWith

**Type parameters:**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`...otherArgs` | any[] |

**Returns:** *TResult*

___

###  functions

▸ **functions**(`object`: any): *string[]*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:974

Creates an array of function property names from own enumerable properties
of `object`.

**`example`** 

function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}

Foo.prototype.c = _.constant('c');

_.functions(new Foo);
// => ['a', 'b']

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | any | The object to inspect. |

**Returns:** *string[]*

Returns the new array of property names.

___

###  functionsIn

▸ **functionsIn**<**T**>(`object`: any): *string[]*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1008

Creates an array of function property names from own and inherited
enumerable properties of `object`.

**`example`** 

function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}

Foo.prototype.c = _.constant('c');

_.functionsIn(new Foo);
// => ['a', 'b', 'c']

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | any | The object to inspect. |

**Returns:** *string[]*

Returns the new array of property names.

___

###  has

▸ **has**<**T**>(`object`: T, `path`: [PropertyPath](../modules/____index_.md#propertypath)): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1269

Checks if `path` is a direct property of `object`.

**`example`** 

var object = { 'a': { 'b': { 'c': 3 } } };
var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });

_.has(object, 'a');
// => true

_.has(object, 'a.b.c');
// => true

_.has(object, ['a', 'b', 'c']);
// => true

_.has(other, 'a');
// => false

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T | The object to query. |
`path` | [PropertyPath](../modules/____index_.md#propertypath) | The path to check. |

**Returns:** *boolean*

Returns `true` if `path` exists, else `false`.

___

###  hasIn

▸ **hasIn**<**T**>(`object`: T, `path`: [PropertyPath](../modules/____index_.md#propertypath)): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1307

Checks if `path` is a direct or inherited property of `object`.

**`example`** 

var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });

_.hasIn(object, 'a');
// => true

_.hasIn(object, 'a.b.c');
// => true

_.hasIn(object, ['a', 'b', 'c']);
// => true

_.hasIn(object, 'b');
// => false

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T | The object to query. |
`path` | [PropertyPath](../modules/____index_.md#propertypath) | The path to check. |

**Returns:** *boolean*

Returns `true` if `path` exists, else `false`.

___

###  merge

▸ **merge**<**TObject**, **TSource**>(`object`: TObject, `source`: TSource): *TObject & TSource*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1714

Recursively merges own and inherited enumerable properties of source
objects into the destination object, skipping source properties that resolve
to `undefined`. Array and plain object properties are merged recursively.
Other objects and value types are overridden by assignment. Source objects
are applied from left to right. Subsequent sources overwrite property
assignments of previous sources.

**Note:** This method mutates `object`.

**`example`** 

var users = {
  'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
};

var ages = {
  'data': [{ 'age': 36 }, { 'age': 40 }]
};

_.merge(users, ages);
// => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }

**Type parameters:**

▪ **TObject**

▪ **TSource**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | TObject | The destination object. |
`source` | TSource | - |

**Returns:** *TObject & TSource*

Returns `object`.

▸ **merge**<**TObject**, **TSource1**, **TSource2**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2): *TObject & TSource1 & TSource2*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1718

**`see`** _.merge

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |

**Returns:** *TObject & TSource1 & TSource2*

▸ **merge**<**TObject**, **TSource1**, **TSource2**, **TSource3**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3): *TObject & TSource1 & TSource2 & TSource3*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1722

**`see`** _.merge

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |

**Returns:** *TObject & TSource1 & TSource2 & TSource3*

▸ **merge**<**TObject**, **TSource1**, **TSource2**, **TSource3**, **TSource4**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3, `source4`: TSource4): *TObject & TSource1 & TSource2 & TSource3 & TSource4*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1726

**`see`** _.merge

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

▪ **TSource4**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |
`source4` | TSource4 |

**Returns:** *TObject & TSource1 & TSource2 & TSource3 & TSource4*

▸ **merge**(`object`: any, ...`otherArgs`: any[]): *any*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1730

**`see`** _.merge

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`...otherArgs` | any[] |

**Returns:** *any*

___

###  mergeWith

▸ **mergeWith**<**TObject**, **TSource**>(`object`: TObject, `source`: TSource, `customizer`: [MergeWithCustomizer](../modules/____index_.md#mergewithcustomizer)): *TObject & TSource*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1813

This method is like `_.merge` except that it accepts `customizer` which
is invoked to produce the merged values of the destination and source
properties. If `customizer` returns `undefined` merging is handled by the
method instead. The `customizer` is invoked with seven arguments:
(objValue, srcValue, key, object, source, stack).

**`example`** 

function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

var object = {
  'fruits': ['apple'],
  'vegetables': ['beet']
};

var other = {
  'fruits': ['banana'],
  'vegetables': ['carrot']
};

_.merge(object, other, customizer);
// => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }

**Type parameters:**

▪ **TObject**

▪ **TSource**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | TObject | The destination object. |
`source` | TSource | - |
`customizer` | [MergeWithCustomizer](../modules/____index_.md#mergewithcustomizer) | The function to customize assigned values. |

**Returns:** *TObject & TSource*

Returns `object`.

▸ **mergeWith**<**TObject**, **TSource1**, **TSource2**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `customizer`: [MergeWithCustomizer](../modules/____index_.md#mergewithcustomizer)): *TObject & TSource1 & TSource2*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1817

**`see`** _.mergeWith

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`customizer` | [MergeWithCustomizer](../modules/____index_.md#mergewithcustomizer) |

**Returns:** *TObject & TSource1 & TSource2*

▸ **mergeWith**<**TObject**, **TSource1**, **TSource2**, **TSource3**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3, `customizer`: [MergeWithCustomizer](../modules/____index_.md#mergewithcustomizer)): *TObject & TSource1 & TSource2 & TSource3*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1821

**`see`** _.mergeWith

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |
`customizer` | [MergeWithCustomizer](../modules/____index_.md#mergewithcustomizer) |

**Returns:** *TObject & TSource1 & TSource2 & TSource3*

▸ **mergeWith**<**TObject**, **TSource1**, **TSource2**, **TSource3**, **TSource4**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3, `source4`: TSource4, `customizer`: [MergeWithCustomizer](../modules/____index_.md#mergewithcustomizer)): *TObject & TSource1 & TSource2 & TSource3 & TSource4*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1825

**`see`** _.mergeWith

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

▪ **TSource4**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |
`source4` | TSource4 |
`customizer` | [MergeWithCustomizer](../modules/____index_.md#mergewithcustomizer) |

**Returns:** *TObject & TSource1 & TSource2 & TSource3 & TSource4*

▸ **mergeWith**(`object`: any, ...`otherArgs`: any[]): *any*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1829

**`see`** _.mergeWith

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`...otherArgs` | any[] |

**Returns:** *any*

___

###  omit

▸ **omit**<**T**, **K**>(`object`: T | null | undefined, ...`paths`: K): *[Pick](../globals.md#pick)‹T, [Exclude](../globals.md#exclude)‹keyof T, K[number]››*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1892

The opposite of `_.pick`; this method creates an object composed of the
own and inherited enumerable properties of `object` that are not omitted.

**`example`** 

var object = { 'a': 1, 'b': '2', 'c': 3 };

_.omit(object, ['a', 'c']);
// => { 'b': '2' }

**Type parameters:**

▪ **T**: *object*

▪ **K**: *[PropertyName](../modules/____index_.md#propertyname)[]*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T &#124; null &#124; undefined | The source object. |
`...paths` | K | - |

**Returns:** *[Pick](../globals.md#pick)‹T, [Exclude](../globals.md#exclude)‹keyof T, K[number]››*

Returns the new object.

▸ **omit**<**T**, **K**>(`object`: T | null | undefined, ...`paths`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹K››): *[Omit](../modules/____index_.md#omit)‹T, K›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1899

**`see`** _.omit

**Type parameters:**

▪ **T**: *object*

▪ **K**: *keyof T*

**Parameters:**

Name | Type |
------ | ------ |
`object` | T &#124; null &#124; undefined |
`...paths` | [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹K›› |

**Returns:** *[Omit](../modules/____index_.md#omit)‹T, K›*

▸ **omit**<**T**>(`object`: T | null | undefined, ...`paths`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹[PropertyName](../modules/____index_.md#propertyname)››): *[PartialObject](../modules/____index_.md#partialobject)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1903

**`see`** _.omit

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`object` | T &#124; null &#124; undefined |
`...paths` | [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹[PropertyName](../modules/____index_.md#propertyname)›› |

**Returns:** *[PartialObject](../modules/____index_.md#partialobject)‹T›*

___

###  omitBy

▸ **omitBy**<**T**>(`object`: [Dictionary](____index_.dictionary.md)‹T› | null | undefined, `predicate?`: [ValueKeyIteratee](../modules/____index_.md#valuekeyiteratee)‹T›): *[Dictionary](____index_.dictionary.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1954

The opposite of `_.pickBy`; this method creates an object composed of the
own and inherited enumerable properties of `object` that `predicate`
doesn't return truthy for.

**`example`** 

var object = { 'a': 1, 'b': '2', 'c': 3 };

_.omitBy(object, _.isNumber);
// => { 'b': '2' }

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | [Dictionary](____index_.dictionary.md)‹T› &#124; null &#124; undefined | The source object. |
`predicate?` | [ValueKeyIteratee](../modules/____index_.md#valuekeyiteratee)‹T› | - |

**Returns:** *[Dictionary](____index_.dictionary.md)‹T›*

Returns the new object.

▸ **omitBy**<**T**>(`object`: [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined, `predicate?`: [ValueKeyIteratee](../modules/____index_.md#valuekeyiteratee)‹T›): *[NumericDictionary](____index_.numericdictionary.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1958

**`see`** _.omitBy

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`object` | [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined |
`predicate?` | [ValueKeyIteratee](../modules/____index_.md#valuekeyiteratee)‹T› |

**Returns:** *[NumericDictionary](____index_.numericdictionary.md)‹T›*

▸ **omitBy**<**T**>(`object`: T | null | undefined, `predicate`: [ValueKeyIteratee](../modules/____index_.md#valuekeyiteratee)‹T[keyof T]›): *[PartialObject](../modules/____index_.md#partialobject)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1962

**`see`** _.omitBy

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`object` | T &#124; null &#124; undefined |
`predicate` | [ValueKeyIteratee](../modules/____index_.md#valuekeyiteratee)‹T[keyof T]› |

**Returns:** *[PartialObject](../modules/____index_.md#partialobject)‹T›*

___

###  pick

▸ **pick**<**T**, **U**>(`object`: T, ...`props`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹U››): *[Pick](../globals.md#pick)‹T, U›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2004

Creates an object composed of the picked `object` properties.

**`example`** 

var object = { 'a': 1, 'b': '2', 'c': 3 };

_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }

**Type parameters:**

▪ **T**: *object*

▪ **U**: *keyof T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T | The source object. |
`...props` | [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹U›› | - |

**Returns:** *[Pick](../globals.md#pick)‹T, U›*

Returns the new object.

▸ **pick**<**T**>(`object`: T | null | undefined, ...`props`: [PropertyPath](../modules/____index_.md#propertypath)[]): *[PartialObject](../modules/____index_.md#partialobject)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2008

**`see`** _.pick

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`object` | T &#124; null &#124; undefined |
`...props` | [PropertyPath](../modules/____index_.md#propertypath)[] |

**Returns:** *[PartialObject](../modules/____index_.md#partialobject)‹T›*

___

###  pickBy

▸ **pickBy**<**T**, **S**>(`object`: [Dictionary](____index_.dictionary.md)‹T› | null | undefined, `predicate`: [ValueKeyIterateeTypeGuard](../modules/____index_.md#valuekeyiterateetypeguard)‹T, S›): *[Dictionary](____index_.dictionary.md)‹S›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2046

Creates an object composed of the `object` properties `predicate` returns
truthy for. The predicate is invoked with two arguments: (value, key).

**`example`** 

var object = { 'a': 1, 'b': '2', 'c': 3 };

_.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }

**Type parameters:**

▪ **T**

▪ **S**: *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | [Dictionary](____index_.dictionary.md)‹T› &#124; null &#124; undefined | The source object. |
`predicate` | [ValueKeyIterateeTypeGuard](../modules/____index_.md#valuekeyiterateetypeguard)‹T, S› | - |

**Returns:** *[Dictionary](____index_.dictionary.md)‹S›*

Returns the new object.

▸ **pickBy**<**T**, **S**>(`object`: [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined, `predicate`: [ValueKeyIterateeTypeGuard](../modules/____index_.md#valuekeyiterateetypeguard)‹T, S›): *[NumericDictionary](____index_.numericdictionary.md)‹S›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2050

**`see`** _.pickBy

**Type parameters:**

▪ **T**

▪ **S**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`object` | [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined |
`predicate` | [ValueKeyIterateeTypeGuard](../modules/____index_.md#valuekeyiterateetypeguard)‹T, S› |

**Returns:** *[NumericDictionary](____index_.numericdictionary.md)‹S›*

▸ **pickBy**<**T**>(`object`: [Dictionary](____index_.dictionary.md)‹T› | null | undefined, `predicate?`: [ValueKeyIteratee](../modules/____index_.md#valuekeyiteratee)‹T›): *[Dictionary](____index_.dictionary.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2054

**`see`** _.pickBy

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`object` | [Dictionary](____index_.dictionary.md)‹T› &#124; null &#124; undefined |
`predicate?` | [ValueKeyIteratee](../modules/____index_.md#valuekeyiteratee)‹T› |

**Returns:** *[Dictionary](____index_.dictionary.md)‹T›*

▸ **pickBy**<**T**>(`object`: [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined, `predicate?`: [ValueKeyIteratee](../modules/____index_.md#valuekeyiteratee)‹T›): *[NumericDictionary](____index_.numericdictionary.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2058

**`see`** _.pickBy

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`object` | [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined |
`predicate?` | [ValueKeyIteratee](../modules/____index_.md#valuekeyiteratee)‹T› |

**Returns:** *[NumericDictionary](____index_.numericdictionary.md)‹T›*

▸ **pickBy**<**T**>(`object`: T | null | undefined, `predicate?`: [ValueKeyIteratee](../modules/____index_.md#valuekeyiteratee)‹T[keyof T]›): *[PartialObject](../modules/____index_.md#partialobject)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2062

**`see`** _.pickBy

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`object` | T &#124; null &#124; undefined |
`predicate?` | [ValueKeyIteratee](../modules/____index_.md#valuekeyiteratee)‹T[keyof T]› |

**Returns:** *[PartialObject](../modules/____index_.md#partialobject)‹T›*

___

###  updateWith

▸ **updateWith**<**T**>(`object`: T, `path`: [PropertyPath](../modules/____index_.md#propertypath), `updater`: function, `customizer?`: [SetWithCustomizer](../modules/____index_.md#setwithcustomizer)‹T›): *T*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2391

This method is like `_.update` except that it accepts `customizer` which is
invoked to produce the objects of `path`.  If `customizer` returns `undefined`
path creation is handled by the method instead. The `customizer` is invoked
with three arguments: (nsValue, key, nsObject).

**Note:** This method mutates `object`.

**`since`** 4.6.0

**`example`** 

var object = {};

_.updateWith(object, '[0][1]', _.constant('a'), Object);
// => { '0': { '1': 'a' } }

**Type parameters:**

▪ **T**: *object*

**Parameters:**

▪ **object**: *T*

The object to modify.

▪ **path**: *[PropertyPath](../modules/____index_.md#propertypath)*

The path of the property to set.

▪ **updater**: *function*

The function to produce the updated value.

▸ (`oldValue`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`oldValue` | any |

▪`Optional`  **customizer**: *[SetWithCustomizer](../modules/____index_.md#setwithcustomizer)‹T›*

**Returns:** *T*

Returns `object`.

▸ **updateWith**<**T**, **TResult**>(`object`: T, `path`: [PropertyPath](../modules/____index_.md#propertypath), `updater`: function, `customizer?`: [SetWithCustomizer](../modules/____index_.md#setwithcustomizer)‹T›): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2395

**`see`** _.updateWith

**Type parameters:**

▪ **T**: *object*

▪ **TResult**

**Parameters:**

▪ **object**: *T*

▪ **path**: *[PropertyPath](../modules/____index_.md#propertypath)*

▪ **updater**: *function*

▸ (`oldValue`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`oldValue` | any |

▪`Optional`  **customizer**: *[SetWithCustomizer](../modules/____index_.md#setwithcustomizer)‹T›*

**Returns:** *TResult*

___

## Other Methods

###  add

▸ **add**(`augend`: number, `addend`: number): *number*

Defined in node_modules/@types/lodash/ts3.1/common/math.d.ts:11

Adds two numbers.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`augend` | number | The first number to add. |
`addend` | number | The second number to add. |

**Returns:** *number*

Returns the sum.

___

###  after

▸ **after**<**TFunc**>(`n`: number, `func`: TFunc): *TFunc*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:11

The opposite of _.before; this method creates a function that invokes func once it’s called n or more times.

**Type parameters:**

▪ **TFunc**: *function*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The number of calls before func is invoked. |
`func` | TFunc | The function to restrict. |

**Returns:** *TFunc*

Returns the new restricted function.

___

###  ary

▸ **ary**(`func`: function, `n?`: undefined | number): *function*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:33

Creates a function that accepts up to n arguments ignoring any additional arguments.

**Parameters:**

▪ **func**: *function*

The function to cap arguments for.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Optional`  **n**: *undefined | number*

The arity cap.

**Returns:** *function*

Returns the new function.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  at

▸ **at**<**T**>(`object`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined, ...`props`: [PropertyPath](../modules/____index_.md#propertypath)[]): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:417

Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
specified as individual arguments or as arrays of keys.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined | The object to iterate over. |
`...props` | [PropertyPath](../modules/____index_.md#propertypath)[] | The property names or indexes of elements to pick, specified individually or in arrays. |

**Returns:** *T[]*

Returns the new array of picked elements.

▸ **at**<**T**>(`object`: T | null | undefined, ...`props`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹keyof T››): *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:421

**`see`** _.at

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`object` | T &#124; null &#124; undefined |
`...props` | [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹keyof T›› |

**Returns:** *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

___

###  attempt

▸ **attempt**<**TResult**>(`func`: function, ...`args`: any[]): *TResult | [Error](error.md)*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:11

Attempts to invoke func, returning either the result or the caught error object. Any additional arguments
are provided to func when it’s invoked.

**Type parameters:**

▪ **TResult**

**Parameters:**

▪ **func**: *function*

The function to attempt.

▸ (...`args`: any[]): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪... **args**: *any[]*

**Returns:** *TResult | [Error](error.md)*

Returns the func result or error object.

___

###  before

▸ **before**<**TFunc**>(`n`: number, `func`: TFunc): *TFunc*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:57

Creates a function that invokes func, with the this binding and arguments of the created function, while
it’s called less than n times. Subsequent calls to the created function return the result of the last func
invocation.

**Type parameters:**

▪ **TFunc**: *function*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The number of calls at which func is no longer invoked. |
`func` | TFunc | The function to restrict. |

**Returns:** *TFunc*

Returns the new restricted function.

___

###  bindAll

▸ **bindAll**<**T**>(`object`: T, ...`methodNames`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹string››): *T*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:39

Binds methods of an object to the object itself, overwriting the existing method. Method names may be
specified as individual arguments or as arrays of method names. If no method names are provided all
enumerable function properties, own and inherited, of object are bound.

Note: This method does not set the "length" property of bound functions.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T | The object to bind and assign the bound methods to. |
`...methodNames` | [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹string›› | The object method names to bind, specified as individual method names or arrays of method names. |

**Returns:** *T*

Returns object.

___

###  camelCase

▸ **camelCase**(`string?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:10

Converts string to camel case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to convert. |

**Returns:** *string*

Returns the camel cased string.

___

###  capitalize

▸ **capitalize**(`string?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:32

Converts the first character of string to upper case and the remaining to lower case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to capitalize. |

**Returns:** *string*

Returns the capitalized string.

___

###  castArray

▸ **castArray**<**T**>(`value?`: [Many](../modules/____index_.md#many)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:13

Casts value as an array if it’s not one.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | [Many](../modules/____index_.md#many)‹T› | The value to inspect. |

**Returns:** *T[]*

Returns the cast array.

___

###  ceil

▸ **ceil**(`n`: number, `precision?`: undefined | number): *number*

Defined in node_modules/@types/lodash/ts3.1/common/math.d.ts:34

Calculates n rounded up to precision.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The number to round up. |
`precision?` | undefined &#124; number | The precision to round up to. |

**Returns:** *number*

Returns the rounded up number.

___

###  chain

▸ **chain**<**TrapAny**>(`value`: TrapAny): *[CollectionChain](____index_.collectionchain.md)‹any› & [FunctionChain](____index_.functionchain.md)‹any› & [ObjectChain](____index_.objectchain.md)‹any› & [PrimitiveChain](____index_.primitivechain.md)‹any› & [StringChain](____index_.stringchain.md)*

Defined in node_modules/@types/lodash/ts3.1/common/seq.d.ts:11

Creates a lodash object that wraps value with explicit method chaining enabled.

**Type parameters:**

▪ **TrapAny**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | TrapAny | The value to wrap. |

**Returns:** *[CollectionChain](____index_.collectionchain.md)‹any› & [FunctionChain](____index_.functionchain.md)‹any› & [ObjectChain](____index_.objectchain.md)‹any› & [PrimitiveChain](____index_.primitivechain.md)‹any› & [StringChain](____index_.stringchain.md)*

Returns the new lodash wrapper instance.

▸ **chain**<**T**>(`value`: T): *[PrimitiveChain](____index_.primitivechain.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/seq.d.ts:15

**`see`** _.chain

**Type parameters:**

▪ **T**: *null | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[PrimitiveChain](____index_.primitivechain.md)‹T›*

▸ **chain**(`value`: string): *[StringChain](____index_.stringchain.md)*

Defined in node_modules/@types/lodash/ts3.1/common/seq.d.ts:19

**`see`** _.chain

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[StringChain](____index_.stringchain.md)*

▸ **chain**(`value`: string | null | undefined): *[StringNullableChain](____index_.stringnullablechain.md)*

Defined in node_modules/@types/lodash/ts3.1/common/seq.d.ts:23

**`see`** _.chain

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; null &#124; undefined |

**Returns:** *[StringNullableChain](____index_.stringnullablechain.md)*

▸ **chain**<**T**>(`value`: T): *[FunctionChain](____index_.functionchain.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/seq.d.ts:27

**`see`** _.chain

**Type parameters:**

▪ **T**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[FunctionChain](____index_.functionchain.md)‹T›*

▸ **chain**<**T**>(`value`: [List](../modules/____index_.md#list)‹T› | null | undefined): *[CollectionChain](____index_.collectionchain.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/seq.d.ts:31

**`see`** _.chain

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |

**Returns:** *[CollectionChain](____index_.collectionchain.md)‹T›*

▸ **chain**<**T**>(`value`: T | null | undefined): *[ObjectChain](____index_.objectchain.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/seq.d.ts:35

**`see`** _.chain

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; null &#124; undefined |

**Returns:** *[ObjectChain](____index_.objectchain.md)‹T›*

▸ **chain**<**T**>(`value`: T): *[PrimitiveChain](____index_.primitivechain.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/seq.d.ts:39

**`see`** _.chain

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[PrimitiveChain](____index_.primitivechain.md)‹T›*

___

###  chunk

▸ **chunk**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `size?`: undefined | number): *T[][]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:12

Creates an array of elements split into groups the length of size. If collection can’t be split evenly, the
final chunk will be the remaining elements.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to process. |
`size?` | undefined &#124; number | The length of each chunk. |

**Returns:** *T[][]*

Returns the new array containing chunks.

___

###  clone

▸ **clone**<**T**>(`value`: T): *T*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:94

Creates a shallow clone of value.

Note: This method is loosely based on the structured clone algorithm and supports cloning arrays,
array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols,
and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty
object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | The value to clone. |

**Returns:** *T*

Returns the cloned value.

___

###  cloneDeep

▸ **cloneDeep**<**T**>(`value`: T): *T*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:165

This method is like _.clone except that it recursively clones value.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | The value to recursively clone. |

**Returns:** *T*

Returns the deep cloned value.

___

###  cloneDeepWith

▸ **cloneDeepWith**<**T**>(`value`: T, `customizer`: [CloneDeepWithCustomizer](../modules/____index_.md#clonedeepwithcustomizer)‹T›): *any*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:176

This method is like _.cloneWith except that it recursively clones value.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | The value to recursively clone. |
`customizer` | [CloneDeepWithCustomizer](../modules/____index_.md#clonedeepwithcustomizer)‹T› | The function to customize cloning. |

**Returns:** *any*

Returns the deep cloned value.

▸ **cloneDeepWith**<**T**>(`value`: T): *T*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:180

**`see`** _.cloneDeepWith

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *T*

___

###  cloneWith

▸ **cloneWith**<**T**, **TResult**>(`value`: T, `customizer`: [CloneWithCustomizer](../modules/____index_.md#clonewithcustomizer)‹T, TResult›): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:192

This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value.
If customizer returns undefined cloning is handled by the method instead.

**Type parameters:**

▪ **T**

▪ **TResult**: *object | string | number | boolean | null*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | The value to clone. |
`customizer` | [CloneWithCustomizer](../modules/____index_.md#clonewithcustomizer)‹T, TResult› | The function to customize cloning. |

**Returns:** *TResult*

Returns the cloned value.

▸ **cloneWith**<**T**, **TResult**>(`value`: T, `customizer`: [CloneWithCustomizer](../modules/____index_.md#clonewithcustomizer)‹T, TResult | undefined›): *TResult | T*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:196

**`see`** _.cloneWith

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`customizer` | [CloneWithCustomizer](../modules/____index_.md#clonewithcustomizer)‹T, TResult &#124; undefined› |

**Returns:** *TResult | T*

▸ **cloneWith**<**T**>(`value`: T): *T*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:200

**`see`** _.cloneWith

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *T*

___

###  compact

▸ **compact**<**T**>(`array`: [List](../modules/____index_.md#list)‹T | null | undefined | false | "" | 0› | null | undefined): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:34

Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are
falsey.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T &#124; null &#124; undefined &#124; false &#124; "" &#124; 0› &#124; null &#124; undefined | The array to compact. |

**Returns:** *T[]*

Returns the new array of filtered values.

___

###  conforms

▸ **conforms**<**T**>(`source`: [ConformsPredicateObject](../modules/____index_.md#conformspredicateobject)‹T›): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:93

Creates a function that invokes the predicate properties of `source` with the corresponding
property values of a given object, returning true if all predicates return truthy, else false.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`source` | [ConformsPredicateObject](../modules/____index_.md#conformspredicateobject)‹T› |

**Returns:** *function*

▸ (`value`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

___

###  conformsTo

▸ **conformsTo**<**T**>(`object`: T, `source`: [ConformsPredicateObject](../modules/____index_.md#conformspredicateobject)‹T›): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:209

Checks if object conforms to source by invoking the predicate properties of source with the
corresponding property values of object.

Note: This method is equivalent to _.conforms when source is partially applied.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`object` | T |
`source` | [ConformsPredicateObject](../modules/____index_.md#conformspredicateobject)‹T› |

**Returns:** *boolean*

___

###  constant

▸ **constant**<**T**>(`value`: T): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:115

Creates a function that returns value.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | The value to return from the new function. |

**Returns:** *function*

Returns the new function.

▸ (): *T*

___

###  countBy

▸ **countBy**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *[Dictionary](____index_.dictionary.md)‹number›*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:13

Creates an object composed of keys generated from the results of running each element of collection through
iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The
iteratee is invoked with one argument: (value).

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The collection to iterate over. |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› | The function invoked per iteration. |

**Returns:** *[Dictionary](____index_.dictionary.md)‹number›*

Returns the composed aggregate object.

▸ **countBy**<**T**>(`collection`: T | null | undefined, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T[keyof T]›): *[Dictionary](____index_.dictionary.md)‹number›*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:17

**`see`** _.countBy

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T[keyof T]› |

**Returns:** *[Dictionary](____index_.dictionary.md)‹number›*

___

###  create

▸ **create**<**T**, **U**>(`prototype`: T, `properties?`: U): *T & U*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:456

Creates an object that inherits from the given prototype object. If a properties object is provided its own
enumerable properties are assigned to the created object.

**Type parameters:**

▪ **T**: *object*

▪ **U**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prototype` | T | The object to inherit from. |
`properties?` | U | The properties to assign to the object. |

**Returns:** *T & U*

Returns the new object.

___

###  debounce

▸ **debounce**<**T**>(`func`: T, `wait?`: undefined | number, `options?`: [DebounceSettings](____index_.debouncesettings.md)): *T & [Cancelable](____index_.cancelable.md)*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:392

Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since
the last time the debounced function was invoked. The debounced function comes with a cancel method to
cancel delayed invocations and a flush method to immediately invoke them. Provide an options object to
indicate that func should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent
calls to the debounced function return the result of the last func invocation.

Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only
if the the debounced function is invoked more than once during the wait timeout.

See David Corbacho’s article for details over the differences between _.debounce and _.throttle.

**Type parameters:**

▪ **T**: *function*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`func` | T | The function to debounce. |
`wait?` | undefined &#124; number | The number of milliseconds to delay. |
`options?` | [DebounceSettings](____index_.debouncesettings.md) | The options object. |

**Returns:** *T & [Cancelable](____index_.cancelable.md)*

Returns the new debounced function.

___

###  deburr

▸ **deburr**(`string?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:55

Deburrs string by converting latin-1 supplementary letters to basic latin letters and removing combining
diacritical marks.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to deburr. |

**Returns:** *string*

Returns the deburred string.

___

###  defaultTo

▸ **defaultTo**<**T**>(`value`: T | null | undefined, `defaultValue`: T): *T*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:140

Checks `value` to determine whether a default value should be returned in
its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
or `undefined`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T &#124; null &#124; undefined | The value to check. |
`defaultValue` | T | The default value. |

**Returns:** *T*

Returns the resolved value.

▸ **defaultTo**<**T**, **TDefault**>(`value`: T | null | undefined, `defaultValue`: TDefault): *T | TDefault*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:144

**`see`** _.defaultTo

**Type parameters:**

▪ **T**

▪ **TDefault**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; null &#124; undefined |
`defaultValue` | TDefault |

**Returns:** *T | TDefault*

___

###  defaults

▸ **defaults**<**TObject**, **TSource**>(`object`: TObject, `source`: TSource): *[NonNullable](../globals.md#nonnullable)‹TSource & TObject›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:482

Assigns own enumerable properties of source object(s) to the destination object for all destination
properties that resolve to undefined. Once a property is set, additional values of the same property are
ignored.

Note: This method mutates object.

**Type parameters:**

▪ **TObject**

▪ **TSource**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | TObject | The destination object. |
`source` | TSource | - |

**Returns:** *[NonNullable](../globals.md#nonnullable)‹TSource & TObject›*

The destination object.

▸ **defaults**<**TObject**, **TSource1**, **TSource2**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2): *[NonNullable](../globals.md#nonnullable)‹TSource2 & TSource1 & TObject›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:486

**`see`** _.defaults

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |

**Returns:** *[NonNullable](../globals.md#nonnullable)‹TSource2 & TSource1 & TObject›*

▸ **defaults**<**TObject**, **TSource1**, **TSource2**, **TSource3**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3): *[NonNullable](../globals.md#nonnullable)‹TSource3 & TSource2 & TSource1 & TObject›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:490

**`see`** _.defaults

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |

**Returns:** *[NonNullable](../globals.md#nonnullable)‹TSource3 & TSource2 & TSource1 & TObject›*

▸ **defaults**<**TObject**, **TSource1**, **TSource2**, **TSource3**, **TSource4**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3, `source4`: TSource4): *[NonNullable](../globals.md#nonnullable)‹TSource4 & TSource3 & TSource2 & TSource1 & TObject›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:494

**`see`** _.defaults

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

▪ **TSource4**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |
`source4` | TSource4 |

**Returns:** *[NonNullable](../globals.md#nonnullable)‹TSource4 & TSource3 & TSource2 & TSource1 & TObject›*

▸ **defaults**<**TObject**>(`object`: TObject): *[NonNullable](../globals.md#nonnullable)‹TObject›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:498

**`see`** _.defaults

**Type parameters:**

▪ **TObject**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |

**Returns:** *[NonNullable](../globals.md#nonnullable)‹TObject›*

▸ **defaults**(`object`: any, ...`sources`: any[]): *any*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:502

**`see`** _.defaults

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`...sources` | any[] |

**Returns:** *any*

___

###  defaultsDeep

▸ **defaultsDeep**(`object`: any, ...`sources`: any[]): *any*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:563

This method is like _.defaults except that it recursively assigns default properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | any | The destination object. |
`...sources` | any[] | The source objects. |

**Returns:** *any*

Returns object.

___

###  defer

▸ **defer**(`func`: function, ...`args`: any[]): *number*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:415

Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
func when it’s invoked.

**Parameters:**

▪ **func**: *function*

The function to defer.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪... **args**: *any[]*

The arguments to invoke the function with.

**Returns:** *number*

Returns the timer id.

___

###  delay

▸ **delay**(`func`: function, `wait`: number, ...`args`: any[]): *number*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:438

Invokes func after wait milliseconds. Any additional arguments are provided to func when it’s invoked.

**Parameters:**

▪ **func**: *function*

The function to delay.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪ **wait**: *number*

The number of milliseconds to delay invocation.

▪... **args**: *any[]*

The arguments to invoke the function with.

**Returns:** *number*

Returns the timer id.

___

###  difference

▸ **difference**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, ...`values`: [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T››): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:117

Creates an array of unique array values not included in the other provided arrays using SameValueZero for
equality comparisons.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to inspect. |
`...values` | [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T›› | The arrays of values to exclude. |

**Returns:** *T[]*

Returns the new array of filtered values.

___

###  differenceBy

▸ **differenceBy**<**T1**, **T2**>(`array`: [List](../modules/____index_.md#list)‹T1› | null | undefined, `values`: [List](../modules/____index_.md#list)‹T2›, `iteratee`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 | T2›): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:142

This method is like _.difference except that it accepts iteratee which is invoked for each element of array
and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
argument: (value).

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› &#124; null &#124; undefined | The array to inspect. |
`values` | [List](../modules/____index_.md#list)‹T2› | The values to exclude. |
`iteratee` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 &#124; T2› | The iteratee invoked per element. |

**Returns:** *T1[]*

Returns the new array of filtered values.

▸ **differenceBy**<**T1**, **T2**, **T3**>(`array`: [List](../modules/____index_.md#list)‹T1› | null | undefined, `values1`: [List](../modules/____index_.md#list)‹T2›, `values2`: [List](../modules/____index_.md#list)‹T3›, `iteratee`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 | T2 | T3›): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:146

**`see`** _.differenceBy

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› &#124; null &#124; undefined |
`values1` | [List](../modules/____index_.md#list)‹T2› |
`values2` | [List](../modules/____index_.md#list)‹T3› |
`iteratee` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 &#124; T2 &#124; T3› |

**Returns:** *T1[]*

▸ **differenceBy**<**T1**, **T2**, **T3**, **T4**>(`array`: [List](../modules/____index_.md#list)‹T1› | null | undefined, `values1`: [List](../modules/____index_.md#list)‹T2›, `values2`: [List](../modules/____index_.md#list)‹T3›, `values3`: [List](../modules/____index_.md#list)‹T4›, `iteratee`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 | T2 | T3 | T4›): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:150

**`see`** _.differenceBy

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› &#124; null &#124; undefined |
`values1` | [List](../modules/____index_.md#list)‹T2› |
`values2` | [List](../modules/____index_.md#list)‹T3› |
`values3` | [List](../modules/____index_.md#list)‹T4› |
`iteratee` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 &#124; T2 &#124; T3 &#124; T4› |

**Returns:** *T1[]*

▸ **differenceBy**<**T1**, **T2**, **T3**, **T4**, **T5**>(`array`: [List](../modules/____index_.md#list)‹T1› | null | undefined, `values1`: [List](../modules/____index_.md#list)‹T2›, `values2`: [List](../modules/____index_.md#list)‹T3›, `values3`: [List](../modules/____index_.md#list)‹T4›, `values4`: [List](../modules/____index_.md#list)‹T5›, `iteratee`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 | T2 | T3 | T4 | T5›): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:154

**`see`** _.differenceBy

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› &#124; null &#124; undefined |
`values1` | [List](../modules/____index_.md#list)‹T2› |
`values2` | [List](../modules/____index_.md#list)‹T3› |
`values3` | [List](../modules/____index_.md#list)‹T4› |
`values4` | [List](../modules/____index_.md#list)‹T5› |
`iteratee` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 &#124; T2 &#124; T3 &#124; T4 &#124; T5› |

**Returns:** *T1[]*

▸ **differenceBy**<**T1**, **T2**, **T3**, **T4**, **T5**, **T6**>(`array`: [List](../modules/____index_.md#list)‹T1› | null | undefined, `values1`: [List](../modules/____index_.md#list)‹T2›, `values2`: [List](../modules/____index_.md#list)‹T3›, `values3`: [List](../modules/____index_.md#list)‹T4›, `values4`: [List](../modules/____index_.md#list)‹T5›, `values5`: [List](../modules/____index_.md#list)‹T6›, `iteratee`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 | T2 | T3 | T4 | T5 | T6›): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:158

**`see`** _.differenceBy

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

▪ **T6**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› &#124; null &#124; undefined |
`values1` | [List](../modules/____index_.md#list)‹T2› |
`values2` | [List](../modules/____index_.md#list)‹T3› |
`values3` | [List](../modules/____index_.md#list)‹T4› |
`values4` | [List](../modules/____index_.md#list)‹T5› |
`values5` | [List](../modules/____index_.md#list)‹T6› |
`iteratee` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 &#124; T2 &#124; T3 &#124; T4 &#124; T5 &#124; T6› |

**Returns:** *T1[]*

▸ **differenceBy**<**T1**, **T2**, **T3**, **T4**, **T5**, **T6**, **T7**>(`array`: [List](../modules/____index_.md#list)‹T1› | null | undefined, `values1`: [List](../modules/____index_.md#list)‹T2›, `values2`: [List](../modules/____index_.md#list)‹T3›, `values3`: [List](../modules/____index_.md#list)‹T4›, `values4`: [List](../modules/____index_.md#list)‹T5›, `values5`: [List](../modules/____index_.md#list)‹T6›, ...`values`: [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T7› | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 | T2 | T3 | T4 | T5 | T6 | T7››): *T1[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:162

**`see`** _.differenceBy

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

▪ **T6**

▪ **T7**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T1› &#124; null &#124; undefined |
`values1` | [List](../modules/____index_.md#list)‹T2› |
`values2` | [List](../modules/____index_.md#list)‹T3› |
`values3` | [List](../modules/____index_.md#list)‹T4› |
`values4` | [List](../modules/____index_.md#list)‹T5› |
`values5` | [List](../modules/____index_.md#list)‹T6› |
`...values` | [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T7› &#124; [ValueIteratee](../modules/____index_.md#valueiteratee)‹T1 &#124; T2 &#124; T3 &#124; T4 &#124; T5 &#124; T6 &#124; T7›› |

**Returns:** *T1[]*

▸ **differenceBy**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, ...`values`: [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T››): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:166

**`see`** _.differenceBy

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`...values` | [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T›› |

**Returns:** *T[]*

___

###  divide

▸ **divide**(`dividend`: number, `divisor`: number): *number*

Defined in node_modules/@types/lodash/ts3.1/common/math.d.ts:57

Divide two numbers.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dividend` | number | The first number in a division. |
`divisor` | number | The second number in a division. |

**Returns:** *number*

Returns the quotient.

___

###  drop

▸ **drop**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `n?`: undefined | number): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:247

Creates a slice of array with n elements dropped from the beginning.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to query. |
`n?` | undefined &#124; number | The number of elements to drop. |

**Returns:** *T[]*

Returns the slice of array.

___

###  dropRight

▸ **dropRight**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `n?`: undefined | number): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:269

Creates a slice of array with n elements dropped from the end.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to query. |
`n?` | undefined &#124; number | The number of elements to drop. |

**Returns:** *T[]*

Returns the slice of array.

___

###  dropRightWhile

▸ **dropRightWhile**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `predicate?`: [ListIteratee](../modules/____index_.md#listiteratee)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:292

Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate
returns falsey. The predicate is invoked with three arguments: (value, index, array).

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to query. |
`predicate?` | [ListIteratee](../modules/____index_.md#listiteratee)‹T› | The function invoked per iteration. |

**Returns:** *T[]*

Returns the slice of array.

___

###  dropWhile

▸ **dropWhile**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `predicate?`: [ListIteratee](../modules/____index_.md#listiteratee)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:315

Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate
returns falsey. The predicate is invoked with three arguments: (value, index, array).

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to query. |
`predicate?` | [ListIteratee](../modules/____index_.md#listiteratee)‹T› | The function invoked per iteration. |

**Returns:** *T[]*

Returns the slice of array.

___

###  endsWith

▸ **endsWith**(`string?`: undefined | string, `target?`: undefined | string, `position?`: undefined | number): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:79

Checks if string ends with the given target string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to search. |
`target?` | undefined &#124; string | The string to search for. |
`position?` | undefined &#124; number | The position to search from. |

**Returns:** *boolean*

Returns true if string ends with target, else false.

___

###  entries

▸ **entries**<**T**>(`object?`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T›): *[Array](regexpmatcharray.md#array)‹[string, T]›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:581

**`see`** _.toPairs

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`object?` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› |

**Returns:** *[Array](regexpmatcharray.md#array)‹[string, T]›*

▸ **entries**(`object?`: undefined | object): *[Array](regexpmatcharray.md#array)‹[string, any]›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:585

**`see`** _.entries

**Parameters:**

Name | Type |
------ | ------ |
`object?` | undefined &#124; object |

**Returns:** *[Array](regexpmatcharray.md#array)‹[string, any]›*

___

###  entriesIn

▸ **entriesIn**<**T**>(`object?`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T›): *[Array](regexpmatcharray.md#array)‹[string, T]›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:615

**`see`** _.entriesIn

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`object?` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› |

**Returns:** *[Array](regexpmatcharray.md#array)‹[string, T]›*

▸ **entriesIn**(`object?`: undefined | object): *[Array](regexpmatcharray.md#array)‹[string, any]›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:619

**`see`** _.entriesIn

**Parameters:**

Name | Type |
------ | ------ |
`object?` | undefined &#124; object |

**Returns:** *[Array](regexpmatcharray.md#array)‹[string, any]›*

___

###  escape

▸ **escape**(`string?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:112

Converts the characters "&", "<", ">", '"', "'", and "`" in string to their corresponding HTML entities.

Note: No other characters are escaped. To escape additional characters use a third-party library like he.

hough the ">" character is escaped for symmetry, characters like ">" and "/" don’t need escaping in HTML
and have no special meaning unless they're part of a tag or unquoted attribute value. See Mathias Bynens’s
article (under "semi-related fun fact") for more details.

Backticks are escaped because in IE < 9, they can break out of attribute values or HTML comments. See #59,
#102, #108, and #133 of the HTML5 Security Cheatsheet for more details.

When working with HTML you should always quote attribute values to reduce XSS vectors.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to escape. |

**Returns:** *string*

Returns the escaped string.

___

###  escapeRegExp

▸ **escapeRegExp**(`string?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:135

Escapes the RegExp special characters "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]",
"{", "}", and "|" in string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to escape. |

**Returns:** *string*

Returns the escaped string.

___

###  every

▸ **every**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `predicate?`: [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean›): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:166

Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The collection to iterate over. |
`predicate?` | [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean› | The function invoked per iteration. |

**Returns:** *boolean*

Returns true if all elements pass the predicate check, else false.

▸ **every**<**T**>(`collection`: T | null | undefined, `predicate?`: [ObjectIterateeCustom](../modules/____index_.md#objectiterateecustom)‹T, boolean›): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:170

**`see`** _.every

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`predicate?` | [ObjectIterateeCustom](../modules/____index_.md#objectiterateecustom)‹T, boolean› |

**Returns:** *boolean*

___

###  extend

▸ **extend**<**TObject**, **TSource**>(`object`: TObject, `source`: TSource): *TObject & TSource*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:649

**`see`** _.extend

**Type parameters:**

▪ **TObject**

▪ **TSource**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source` | TSource |

**Returns:** *TObject & TSource*

▸ **extend**<**TObject**, **TSource1**, **TSource2**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2): *TObject & TSource1 & TSource2*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:653

**`see`** _.extend

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |

**Returns:** *TObject & TSource1 & TSource2*

▸ **extend**<**TObject**, **TSource1**, **TSource2**, **TSource3**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3): *TObject & TSource1 & TSource2 & TSource3*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:657

**`see`** _.extend

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |

**Returns:** *TObject & TSource1 & TSource2 & TSource3*

▸ **extend**<**TObject**, **TSource1**, **TSource2**, **TSource3**, **TSource4**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3, `source4`: TSource4): *TObject & TSource1 & TSource2 & TSource3 & TSource4*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:661

**`see`** _.extend

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

▪ **TSource4**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |
`source4` | TSource4 |

**Returns:** *TObject & TSource1 & TSource2 & TSource3 & TSource4*

▸ **extend**<**TObject**>(`object`: TObject): *TObject*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:665

**`see`** _.extend

**Type parameters:**

▪ **TObject**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |

**Returns:** *TObject*

▸ **extend**<**TResult**>(`object`: any, ...`otherArgs`: any[]): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:669

**`see`** _.extend

**Type parameters:**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`...otherArgs` | any[] |

**Returns:** *TResult*

___

###  extendWith

▸ **extendWith**<**TObject**, **TSource**>(`object`: TObject, `source`: TSource, `customizer`: [AssignCustomizer](../modules/____index_.md#assigncustomizer)): *TObject & TSource*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:727

**`see`** _.extendWith

**Type parameters:**

▪ **TObject**

▪ **TSource**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source` | TSource |
`customizer` | [AssignCustomizer](../modules/____index_.md#assigncustomizer) |

**Returns:** *TObject & TSource*

▸ **extendWith**<**TObject**, **TSource1**, **TSource2**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `customizer`: [AssignCustomizer](../modules/____index_.md#assigncustomizer)): *TObject & TSource1 & TSource2*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:731

**`see`** _.extendWith

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`customizer` | [AssignCustomizer](../modules/____index_.md#assigncustomizer) |

**Returns:** *TObject & TSource1 & TSource2*

▸ **extendWith**<**TObject**, **TSource1**, **TSource2**, **TSource3**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3, `customizer`: [AssignCustomizer](../modules/____index_.md#assigncustomizer)): *TObject & TSource1 & TSource2 & TSource3*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:735

**`see`** _.extendWith

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |
`customizer` | [AssignCustomizer](../modules/____index_.md#assigncustomizer) |

**Returns:** *TObject & TSource1 & TSource2 & TSource3*

▸ **extendWith**<**TObject**, **TSource1**, **TSource2**, **TSource3**, **TSource4**>(`object`: TObject, `source1`: TSource1, `source2`: TSource2, `source3`: TSource3, `source4`: TSource4, `customizer`: [AssignCustomizer](../modules/____index_.md#assigncustomizer)): *TObject & TSource1 & TSource2 & TSource3 & TSource4*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:739

**`see`** _.extendWith

**Type parameters:**

▪ **TObject**

▪ **TSource1**

▪ **TSource2**

▪ **TSource3**

▪ **TSource4**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source1` | TSource1 |
`source2` | TSource2 |
`source3` | TSource3 |
`source4` | TSource4 |
`customizer` | [AssignCustomizer](../modules/____index_.md#assigncustomizer) |

**Returns:** *TObject & TSource1 & TSource2 & TSource3 & TSource4*

▸ **extendWith**<**TObject**>(`object`: TObject): *TObject*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:743

**`see`** _.extendWith

**Type parameters:**

▪ **TObject**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |

**Returns:** *TObject*

▸ **extendWith**<**TResult**>(`object`: any, ...`otherArgs`: any[]): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:747

**`see`** _.extendWith

**Type parameters:**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`...otherArgs` | any[] |

**Returns:** *TResult*

___

###  fill

▸ **fill**<**T**>(`array`: any[] | null | undefined, `value`: T): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:341

Fills elements of array with value from start up to, but not including, end.

Note: This method mutates array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | any[] &#124; null &#124; undefined | The array to fill. |
`value` | T | The value to fill array with. |

**Returns:** *T[]*

Returns array.

▸ **fill**<**T**>(`array`: [List](../modules/____index_.md#list)‹any› | null | undefined, `value`: T): *[List](../modules/____index_.md#list)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:345

**`see`** _.fill

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹any› &#124; null &#124; undefined |
`value` | T |

**Returns:** *[List](../modules/____index_.md#list)‹T›*

▸ **fill**<**T**, **U**>(`array`: U[] | null | undefined, `value`: T, `start?`: undefined | number, `end?`: undefined | number): *[Array](regexpmatcharray.md#array)‹T | U›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:349

**`see`** _.fill

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`array` | U[] &#124; null &#124; undefined |
`value` | T |
`start?` | undefined &#124; number |
`end?` | undefined &#124; number |

**Returns:** *[Array](regexpmatcharray.md#array)‹T | U›*

▸ **fill**<**T**, **U**>(`array`: [List](../modules/____index_.md#list)‹U› | null | undefined, `value`: T, `start?`: undefined | number, `end?`: undefined | number): *[List](../modules/____index_.md#list)‹T | U›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:353

**`see`** _.fill

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹U› &#124; null &#124; undefined |
`value` | T |
`start?` | undefined &#124; number |
`end?` | undefined &#124; number |

**Returns:** *[List](../modules/____index_.md#list)‹T | U›*

___

###  filter

▸ **filter**(`collection`: string | null | undefined, `predicate?`: [StringIterator](../modules/____index_.md#stringiterator)‹boolean›): *string[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:205

Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
predicate is invoked with three arguments: (value, index|key, collection).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | string &#124; null &#124; undefined | The collection to iterate over. |
`predicate?` | [StringIterator](../modules/____index_.md#stringiterator)‹boolean› | The function invoked per iteration. |

**Returns:** *string[]*

Returns the new filtered array.

▸ **filter**<**T**, **S**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `predicate`: [ListIteratorTypeGuard](../modules/____index_.md#listiteratortypeguard)‹T, S›): *S[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:209

**`see`** _.filter

**Type parameters:**

▪ **T**

▪ **S**: *T*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`predicate` | [ListIteratorTypeGuard](../modules/____index_.md#listiteratortypeguard)‹T, S› |

**Returns:** *S[]*

▸ **filter**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `predicate?`: [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:213

**`see`** _.filter

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`predicate?` | [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean› |

**Returns:** *T[]*

▸ **filter**<**T**, **S**>(`collection`: T | null | undefined, `predicate`: [ObjectIteratorTypeGuard](../modules/____index_.md#objectiteratortypeguard)‹T, S›): *S[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:217

**`see`** _.filter

**Type parameters:**

▪ **T**: *object*

▪ **S**: *T[keyof T]*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`predicate` | [ObjectIteratorTypeGuard](../modules/____index_.md#objectiteratortypeguard)‹T, S› |

**Returns:** *S[]*

▸ **filter**<**T**>(`collection`: T | null | undefined, `predicate?`: [ObjectIterateeCustom](../modules/____index_.md#objectiterateecustom)‹T, boolean›): *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:221

**`see`** _.filter

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`predicate?` | [ObjectIterateeCustom](../modules/____index_.md#objectiterateecustom)‹T, boolean› |

**Returns:** *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

___

###  find

▸ **find**<**T**, **S**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `predicate`: [ListIteratorTypeGuard](../modules/____index_.md#listiteratortypeguard)‹T, S›, `fromIndex?`: undefined | number): *S | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:291

Iterates over elements of collection, returning the first element predicate returns truthy for.
The predicate is invoked with three arguments: (value, index|key, collection).

**Type parameters:**

▪ **T**

▪ **S**: *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The collection to search. |
`predicate` | [ListIteratorTypeGuard](../modules/____index_.md#listiteratortypeguard)‹T, S› | The function invoked per iteration. |
`fromIndex?` | undefined &#124; number | The index to search from. |

**Returns:** *S | undefined*

Returns the matched element, else undefined.

▸ **find**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `predicate?`: [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean›, `fromIndex?`: undefined | number): *T | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:295

**`see`** _.find

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`predicate?` | [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean› |
`fromIndex?` | undefined &#124; number |

**Returns:** *T | undefined*

▸ **find**<**T**, **S**>(`collection`: T | null | undefined, `predicate`: [ObjectIteratorTypeGuard](../modules/____index_.md#objectiteratortypeguard)‹T, S›, `fromIndex?`: undefined | number): *S | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:299

**`see`** _.find

**Type parameters:**

▪ **T**: *object*

▪ **S**: *T[keyof T]*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`predicate` | [ObjectIteratorTypeGuard](../modules/____index_.md#objectiteratortypeguard)‹T, S› |
`fromIndex?` | undefined &#124; number |

**Returns:** *S | undefined*

▸ **find**<**T**>(`collection`: T | null | undefined, `predicate?`: [ObjectIterateeCustom](../modules/____index_.md#objectiterateecustom)‹T, boolean›, `fromIndex?`: undefined | number): *T[keyof T] | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:303

**`see`** _.find

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`predicate?` | [ObjectIterateeCustom](../modules/____index_.md#objectiterateecustom)‹T, boolean› |
`fromIndex?` | undefined &#124; number |

**Returns:** *T[keyof T] | undefined*

___

###  findIndex

▸ **findIndex**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `predicate?`: [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean›, `fromIndex?`: undefined | number): *number*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:377

This method is like _.find except that it returns the index of the first element predicate returns truthy
for instead of the element itself.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to search. |
`predicate?` | [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean› | The function invoked per iteration. |
`fromIndex?` | undefined &#124; number | The index to search from. |

**Returns:** *number*

Returns the index of the found element, else -1.

___

###  findKey

▸ **findKey**<**T**>(`object`: T | null | undefined, `predicate?`: [ObjectIteratee](../modules/____index_.md#objectiteratee)‹T›): *string | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:810

This method is like _.find except that it returns the key of the first element predicate returns truthy for
instead of the element itself.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T &#124; null &#124; undefined | The object to search. |
`predicate?` | [ObjectIteratee](../modules/____index_.md#objectiteratee)‹T› | The function invoked per iteration. |

**Returns:** *string | undefined*

Returns the key of the matched element, else undefined.

___

###  findLast

▸ **findLast**<**T**, **S**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `predicate`: [ListIteratorTypeGuard](../modules/____index_.md#listiteratortypeguard)‹T, S›, `fromIndex?`: undefined | number): *S | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:354

This method is like _.find except that it iterates over elements of a collection from
right to left.

**Type parameters:**

▪ **T**

▪ **S**: *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | Searches for a value in this list. |
`predicate` | [ListIteratorTypeGuard](../modules/____index_.md#listiteratortypeguard)‹T, S› | The function called per iteration. |
`fromIndex?` | undefined &#124; number | The index to search from. |

**Returns:** *S | undefined*

The found element, else undefined.

▸ **findLast**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `predicate?`: [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean›, `fromIndex?`: undefined | number): *T | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:358

**`see`** _.findLast

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`predicate?` | [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean› |
`fromIndex?` | undefined &#124; number |

**Returns:** *T | undefined*

▸ **findLast**<**T**, **S**>(`collection`: T | null | undefined, `predicate`: [ObjectIteratorTypeGuard](../modules/____index_.md#objectiteratortypeguard)‹T, S›, `fromIndex?`: undefined | number): *S | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:362

**`see`** _.findLast

**Type parameters:**

▪ **T**: *object*

▪ **S**: *T[keyof T]*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`predicate` | [ObjectIteratorTypeGuard](../modules/____index_.md#objectiteratortypeguard)‹T, S› |
`fromIndex?` | undefined &#124; number |

**Returns:** *S | undefined*

▸ **findLast**<**T**>(`collection`: T | null | undefined, `predicate?`: [ObjectIterateeCustom](../modules/____index_.md#objectiterateecustom)‹T, boolean›, `fromIndex?`: undefined | number): *T[keyof T] | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:366

**`see`** _.findLast

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`predicate?` | [ObjectIterateeCustom](../modules/____index_.md#objectiterateecustom)‹T, boolean› |
`fromIndex?` | undefined &#124; number |

**Returns:** *T[keyof T] | undefined*

___

###  findLastIndex

▸ **findLastIndex**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `predicate?`: [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean›, `fromIndex?`: undefined | number): *number*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:400

This method is like _.findIndex except that it iterates over elements of collection from right to left.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to search. |
`predicate?` | [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean› | The function invoked per iteration. |
`fromIndex?` | undefined &#124; number | The index to search from. |

**Returns:** *number*

Returns the index of the found element, else -1.

___

###  findLastKey

▸ **findLastKey**<**T**>(`object`: T | null | undefined, `predicate?`: [ObjectIteratee](../modules/____index_.md#objectiteratee)‹T›): *string | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:832

This method is like _.findKey except that it iterates over elements of a collection in the opposite order.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T &#124; null &#124; undefined | The object to search. |
`predicate?` | [ObjectIteratee](../modules/____index_.md#objectiteratee)‹T› | The function invoked per iteration. |

**Returns:** *string | undefined*

Returns the key of the matched element, else undefined.

___

###  flatMap

▸ **flatMap**<**T**>(`collection`: [Dictionary](____index_.dictionary.md)‹[Many](../modules/____index_.md#many)‹T›› | [NumericDictionary](____index_.numericdictionary.md)‹[Many](../modules/____index_.md#many)‹T›› | null | undefined): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:418

Creates an array of flattened values by running each element in collection through iteratee
and concating its result to the other mapped values. The iteratee is invoked with three arguments:
(value, index|key, collection).

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [Dictionary](____index_.dictionary.md)‹[Many](../modules/____index_.md#many)‹T›› &#124; [NumericDictionary](____index_.numericdictionary.md)‹[Many](../modules/____index_.md#many)‹T›› &#124; null &#124; undefined | The collection to iterate over. |

**Returns:** *T[]*

Returns the new flattened array.

▸ **flatMap**(`collection`: object | null | undefined): *any[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:422

**`see`** _.flatMap

**Parameters:**

Name | Type |
------ | ------ |
`collection` | object &#124; null &#124; undefined |

**Returns:** *any[]*

▸ **flatMap**<**T**, **TResult**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee`: [ListIterator](../modules/____index_.md#listiterator)‹T, [Many](../modules/____index_.md#many)‹TResult››): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:426

**`see`** _.flatMap

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`iteratee` | [ListIterator](../modules/____index_.md#listiterator)‹T, [Many](../modules/____index_.md#many)‹TResult›› |

**Returns:** *TResult[]*

▸ **flatMap**<**T**, **TResult**>(`collection`: T | null | undefined, `iteratee`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, [Many](../modules/____index_.md#many)‹TResult››): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:430

**`see`** _.flatMap

**Type parameters:**

▪ **T**: *object*

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`iteratee` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, [Many](../modules/____index_.md#many)‹TResult›› |

**Returns:** *TResult[]*

▸ **flatMap**(`collection`: object | null | undefined, `iteratee`: string): *any[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:434

**`see`** _.flatMap

**Parameters:**

Name | Type |
------ | ------ |
`collection` | object &#124; null &#124; undefined |
`iteratee` | string |

**Returns:** *any[]*

▸ **flatMap**(`collection`: object | null | undefined, `iteratee`: object): *boolean[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:438

**`see`** _.flatMap

**Parameters:**

Name | Type |
------ | ------ |
`collection` | object &#124; null &#124; undefined |
`iteratee` | object |

**Returns:** *boolean[]*

___

###  flatten

▸ **flatten**<**T**>(`array`: [List](../modules/____index_.md#list)‹[Many](../modules/____index_.md#many)‹T›› | null | undefined): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:459

Flattens `array` a single level deep.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹[Many](../modules/____index_.md#many)‹T›› &#124; null &#124; undefined | The array to flatten. |

**Returns:** *T[]*

Returns the new flattened array.

___

###  flattenDeep

▸ **flattenDeep**<**T**>(`array`: [ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹T› | null | undefined): *[Array](regexpmatcharray.md#array)‹[Flat](../modules/____index_.md#flat)‹T››*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:501

Recursively flattens a nested array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹T› &#124; null &#124; undefined | The array to recursively flatten. |

**Returns:** *[Array](regexpmatcharray.md#array)‹[Flat](../modules/____index_.md#flat)‹T››*

Returns the new flattened array.

___

###  flattenDepth

▸ **flattenDepth**<**T**>(`array`: [ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹T› | null | undefined, `depth?`: undefined | number): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:523

Recursively flatten array up to depth times.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [ListOfRecursiveArraysOrValues](____index_.listofrecursivearraysorvalues.md)‹T› &#124; null &#124; undefined | The array to recursively flatten. |
`depth?` | undefined &#124; number | - |

**Returns:** *T[]*

Returns the new flattened array.

___

###  floor

▸ **floor**(`n`: number, `precision?`: undefined | number): *number*

Defined in node_modules/@types/lodash/ts3.1/common/math.d.ts:80

Calculates n rounded down to precision.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The number to round down. |
`precision?` | undefined &#124; number | The precision to round down to. |

**Returns:** *number*

Returns the rounded down number.

___

###  flow

▸ **flow**<**A**, **R1**, **R2**, **R3**, **R4**, **R5**, **R6**, **R7**>(`f1`: function, `f2`: function, `f3`: function, `f4`: function, `f5`: function, `f6`: function, `f7`: function): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:175

Creates a function that returns the result of invoking the provided functions with the this binding of the
created function, where each successive invocation is supplied the return value of the previous.

**Type parameters:**

▪ **A**: *any[]*

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **R5**

▪ **R6**

▪ **R7**

**Parameters:**

▪ **f1**: *function*

▸ (...`args`: A): *R1*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▪ **f2**: *function*

▸ (`a`: R1): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R1 |

▪ **f3**: *function*

▸ (`a`: R2): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R2 |

▪ **f4**: *function*

▸ (`a`: R3): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R3 |

▪ **f5**: *function*

▸ (`a`: R4): *R5*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R4 |

▪ **f6**: *function*

▸ (`a`: R5): *R6*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R5 |

▪ **f7**: *function*

▸ (`a`: R6): *R7*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R6 |

**Returns:** *function*

Returns the new function.

▸ (...`args`: A): *R7*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **flow**<**A**, **R1**, **R2**, **R3**, **R4**, **R5**, **R6**, **R7**>(`f1`: function, `f2`: function, `f3`: function, `f4`: function, `f5`: function, `f6`: function, `f7`: function, ...`func`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹function››): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:179

**`see`** _.flow

**Type parameters:**

▪ **A**: *any[]*

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **R5**

▪ **R6**

▪ **R7**

**Parameters:**

▪ **f1**: *function*

▸ (...`args`: A): *R1*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▪ **f2**: *function*

▸ (`a`: R1): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R1 |

▪ **f3**: *function*

▸ (`a`: R2): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R2 |

▪ **f4**: *function*

▸ (`a`: R3): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R3 |

▪ **f5**: *function*

▸ (`a`: R4): *R5*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R4 |

▪ **f6**: *function*

▸ (`a`: R5): *R6*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R5 |

▪ **f7**: *function*

▸ (`a`: R6): *R7*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R6 |

▪... **func**: *[Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹function››*

**Returns:** *function*

▸ (...`args`: A): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **flow**<**A**, **R1**, **R2**, **R3**, **R4**, **R5**, **R6**>(`f1`: function, `f2`: function, `f3`: function, `f4`: function, `f5`: function, `f6`: function): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:183

**`see`** _.flow

**Type parameters:**

▪ **A**: *any[]*

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **R5**

▪ **R6**

**Parameters:**

▪ **f1**: *function*

▸ (...`args`: A): *R1*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▪ **f2**: *function*

▸ (`a`: R1): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R1 |

▪ **f3**: *function*

▸ (`a`: R2): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R2 |

▪ **f4**: *function*

▸ (`a`: R3): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R3 |

▪ **f5**: *function*

▸ (`a`: R4): *R5*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R4 |

▪ **f6**: *function*

▸ (`a`: R5): *R6*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R5 |

**Returns:** *function*

▸ (...`args`: A): *R6*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **flow**<**A**, **R1**, **R2**, **R3**, **R4**, **R5**>(`f1`: function, `f2`: function, `f3`: function, `f4`: function, `f5`: function): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:187

**`see`** _.flow

**Type parameters:**

▪ **A**: *any[]*

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **R5**

**Parameters:**

▪ **f1**: *function*

▸ (...`args`: A): *R1*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▪ **f2**: *function*

▸ (`a`: R1): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R1 |

▪ **f3**: *function*

▸ (`a`: R2): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R2 |

▪ **f4**: *function*

▸ (`a`: R3): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R3 |

▪ **f5**: *function*

▸ (`a`: R4): *R5*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R4 |

**Returns:** *function*

▸ (...`args`: A): *R5*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **flow**<**A**, **R1**, **R2**, **R3**, **R4**>(`f1`: function, `f2`: function, `f3`: function, `f4`: function): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:191

**`see`** _.flow

**Type parameters:**

▪ **A**: *any[]*

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

**Parameters:**

▪ **f1**: *function*

▸ (...`args`: A): *R1*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▪ **f2**: *function*

▸ (`a`: R1): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R1 |

▪ **f3**: *function*

▸ (`a`: R2): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R2 |

▪ **f4**: *function*

▸ (`a`: R3): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R3 |

**Returns:** *function*

▸ (...`args`: A): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **flow**<**A**, **R1**, **R2**, **R3**>(`f1`: function, `f2`: function, `f3`: function): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:195

**`see`** _.flow

**Type parameters:**

▪ **A**: *any[]*

▪ **R1**

▪ **R2**

▪ **R3**

**Parameters:**

▪ **f1**: *function*

▸ (...`args`: A): *R1*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▪ **f2**: *function*

▸ (`a`: R1): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R1 |

▪ **f3**: *function*

▸ (`a`: R2): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R2 |

**Returns:** *function*

▸ (...`args`: A): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **flow**<**A**, **R1**, **R2**>(`f1`: function, `f2`: function): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:199

**`see`** _.flow

**Type parameters:**

▪ **A**: *any[]*

▪ **R1**

▪ **R2**

**Parameters:**

▪ **f1**: *function*

▸ (...`args`: A): *R1*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▪ **f2**: *function*

▸ (`a`: R1): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R1 |

**Returns:** *function*

▸ (...`args`: A): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **flow**(...`func`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹function››): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:203

**`see`** _.flow

**Parameters:**

Name | Type |
------ | ------ |
`...func` | [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹function›› |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  flowRight

▸ **flowRight**<**A**, **R1**, **R2**, **R3**, **R4**, **R5**, **R6**, **R7**>(`f7`: function, `f6`: function, `f5`: function, `f4`: function, `f3`: function, `f2`: function, `f1`: function): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:282

This method is like _.flow except that it creates a function that invokes the provided functions from right
to left.

**Type parameters:**

▪ **A**: *any[]*

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **R5**

▪ **R6**

▪ **R7**

**Parameters:**

▪ **f7**: *function*

▸ (`a`: R6): *R7*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R6 |

▪ **f6**: *function*

▸ (`a`: R5): *R6*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R5 |

▪ **f5**: *function*

▸ (`a`: R4): *R5*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R4 |

▪ **f4**: *function*

▸ (`a`: R3): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R3 |

▪ **f3**: *function*

▸ (`a`: R2): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R2 |

▪ **f2**: *function*

▸ (`a`: R1): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R1 |

▪ **f1**: *function*

▸ (...`args`: A): *R1*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

**Returns:** *function*

Returns the new function.

▸ (...`args`: A): *R7*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **flowRight**<**A**, **R1**, **R2**, **R3**, **R4**, **R5**, **R6**>(`f6`: function, `f5`: function, `f4`: function, `f3`: function, `f2`: function, `f1`: function): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:286

**`see`** _.flowRight

**Type parameters:**

▪ **A**: *any[]*

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **R5**

▪ **R6**

**Parameters:**

▪ **f6**: *function*

▸ (`a`: R5): *R6*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R5 |

▪ **f5**: *function*

▸ (`a`: R4): *R5*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R4 |

▪ **f4**: *function*

▸ (`a`: R3): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R3 |

▪ **f3**: *function*

▸ (`a`: R2): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R2 |

▪ **f2**: *function*

▸ (`a`: R1): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R1 |

▪ **f1**: *function*

▸ (...`args`: A): *R1*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

**Returns:** *function*

▸ (...`args`: A): *R6*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **flowRight**<**A**, **R1**, **R2**, **R3**, **R4**, **R5**>(`f5`: function, `f4`: function, `f3`: function, `f2`: function, `f1`: function): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:290

**`see`** _.flowRight

**Type parameters:**

▪ **A**: *any[]*

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **R5**

**Parameters:**

▪ **f5**: *function*

▸ (`a`: R4): *R5*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R4 |

▪ **f4**: *function*

▸ (`a`: R3): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R3 |

▪ **f3**: *function*

▸ (`a`: R2): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R2 |

▪ **f2**: *function*

▸ (`a`: R1): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R1 |

▪ **f1**: *function*

▸ (...`args`: A): *R1*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

**Returns:** *function*

▸ (...`args`: A): *R5*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **flowRight**<**A**, **R1**, **R2**, **R3**, **R4**>(`f4`: function, `f3`: function, `f2`: function, `f1`: function): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:294

**`see`** _.flowRight

**Type parameters:**

▪ **A**: *any[]*

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

**Parameters:**

▪ **f4**: *function*

▸ (`a`: R3): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R3 |

▪ **f3**: *function*

▸ (`a`: R2): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R2 |

▪ **f2**: *function*

▸ (`a`: R1): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R1 |

▪ **f1**: *function*

▸ (...`args`: A): *R1*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

**Returns:** *function*

▸ (...`args`: A): *R4*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **flowRight**<**A**, **R1**, **R2**, **R3**>(`f3`: function, `f2`: function, `f1`: function): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:298

**`see`** _.flowRight

**Type parameters:**

▪ **A**: *any[]*

▪ **R1**

▪ **R2**

▪ **R3**

**Parameters:**

▪ **f3**: *function*

▸ (`a`: R2): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R2 |

▪ **f2**: *function*

▸ (`a`: R1): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R1 |

▪ **f1**: *function*

▸ (...`args`: A): *R1*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

**Returns:** *function*

▸ (...`args`: A): *R3*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **flowRight**<**A**, **R1**, **R2**>(`f2`: function, `f1`: function): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:302

**`see`** _.flowRight

**Type parameters:**

▪ **A**: *any[]*

▪ **R1**

▪ **R2**

**Parameters:**

▪ **f2**: *function*

▸ (`a`: R1): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`a` | R1 |

▪ **f1**: *function*

▸ (...`args`: A): *R1*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

**Returns:** *function*

▸ (...`args`: A): *R2*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **flowRight**(...`func`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹function››): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:306

**`see`** _.flowRight

**Parameters:**

Name | Type |
------ | ------ |
`...func` | [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹function›› |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  forEach

▸ **forEach**<**T**>(`collection`: T[], `iteratee?`: [ArrayIterator](../modules/____index_.md#arrayiterator)‹T, any›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:786

Iterates over elements of collection invoking iteratee for each element. The iteratee is invoked with three arguments:
(value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
avoid this behavior _.forIn or _.forOwn may be used for object iteration.

**`alias`** _.each

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | T[] | The collection to iterate over. |
`iteratee?` | [ArrayIterator](../modules/____index_.md#arrayiterator)‹T, any› | The function invoked per iteration.  |

**Returns:** *T[]*

▸ **forEach**(`collection`: string, `iteratee?`: [StringIterator](../modules/____index_.md#stringiterator)‹any›): *string*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:790

**`see`** _.forEach

**Parameters:**

Name | Type |
------ | ------ |
`collection` | string |
`iteratee?` | [StringIterator](../modules/____index_.md#stringiterator)‹any› |

**Returns:** *string*

▸ **forEach**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T›, `iteratee?`: [ListIterator](../modules/____index_.md#listiterator)‹T, any›): *[List](../modules/____index_.md#list)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:794

**`see`** _.forEach

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› |
`iteratee?` | [ListIterator](../modules/____index_.md#listiterator)‹T, any› |

**Returns:** *[List](../modules/____index_.md#list)‹T›*

▸ **forEach**<**T**>(`collection`: T, `iteratee?`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any›): *T*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:798

**`see`** _.forEach

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T |
`iteratee?` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any› |

**Returns:** *T*

▸ **forEach**<**T**, **TArray**>(`collection`: TArray & undefined | null | T[], `iteratee?`: [ArrayIterator](../modules/____index_.md#arrayiterator)‹T, any›): *TArray*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:802

**`see`** _.forEach

**Type parameters:**

▪ **T**

▪ **TArray**: *T[] | null | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | TArray & undefined &#124; null &#124; T[] |
`iteratee?` | [ArrayIterator](../modules/____index_.md#arrayiterator)‹T, any› |

**Returns:** *TArray*

▸ **forEach**<**TString**>(`collection`: TString, `iteratee?`: [StringIterator](../modules/____index_.md#stringiterator)‹any›): *TString*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:806

**`see`** _.forEach

**Type parameters:**

▪ **TString**: *string | null | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | TString |
`iteratee?` | [StringIterator](../modules/____index_.md#stringiterator)‹any› |

**Returns:** *TString*

▸ **forEach**<**T**, **TList**>(`collection`: TList & undefined | null | [ArrayLike](arraylike.md)‹T›, `iteratee?`: [ListIterator](../modules/____index_.md#listiterator)‹T, any›): *TList*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:810

**`see`** _.forEach

**Type parameters:**

▪ **T**

▪ **TList**: *[List](../modules/____index_.md#list)‹T› | null | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | TList & undefined &#124; null &#124; [ArrayLike](arraylike.md)‹T› |
`iteratee?` | [ListIterator](../modules/____index_.md#listiterator)‹T, any› |

**Returns:** *TList*

▸ **forEach**<**T**>(`collection`: T | null | undefined, `iteratee?`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any›): *T | null | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:814

**`see`** _.forEach

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`iteratee?` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any› |

**Returns:** *T | null | undefined*

___

###  forEachRight

▸ **forEachRight**<**T**>(`collection`: T[], `iteratee?`: [ArrayIterator](../modules/____index_.md#arrayiterator)‹T, any›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:867

This method is like _.forEach except that it iterates over elements of collection from right to left.

**`alias`** _.eachRight

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | T[] | The collection to iterate over. |
`iteratee?` | [ArrayIterator](../modules/____index_.md#arrayiterator)‹T, any› | The function called per iteration.  |

**Returns:** *T[]*

▸ **forEachRight**(`collection`: string, `iteratee?`: [StringIterator](../modules/____index_.md#stringiterator)‹any›): *string*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:871

**`see`** _.forEachRight

**Parameters:**

Name | Type |
------ | ------ |
`collection` | string |
`iteratee?` | [StringIterator](../modules/____index_.md#stringiterator)‹any› |

**Returns:** *string*

▸ **forEachRight**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T›, `iteratee?`: [ListIterator](../modules/____index_.md#listiterator)‹T, any›): *[List](../modules/____index_.md#list)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:875

**`see`** _.forEachRight

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› |
`iteratee?` | [ListIterator](../modules/____index_.md#listiterator)‹T, any› |

**Returns:** *[List](../modules/____index_.md#list)‹T›*

▸ **forEachRight**<**T**>(`collection`: T, `iteratee?`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any›): *T*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:879

**`see`** _.forEachRight

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T |
`iteratee?` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any› |

**Returns:** *T*

▸ **forEachRight**<**T**, **TArray**>(`collection`: TArray & undefined | null | T[], `iteratee?`: [ArrayIterator](../modules/____index_.md#arrayiterator)‹T, any›): *TArray*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:883

**`see`** _.forEachRight

**Type parameters:**

▪ **T**

▪ **TArray**: *T[] | null | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | TArray & undefined &#124; null &#124; T[] |
`iteratee?` | [ArrayIterator](../modules/____index_.md#arrayiterator)‹T, any› |

**Returns:** *TArray*

▸ **forEachRight**<**TString**>(`collection`: TString, `iteratee?`: [StringIterator](../modules/____index_.md#stringiterator)‹any›): *TString*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:887

**`see`** _.forEachRight

**Type parameters:**

▪ **TString**: *string | null | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | TString |
`iteratee?` | [StringIterator](../modules/____index_.md#stringiterator)‹any› |

**Returns:** *TString*

▸ **forEachRight**<**T**, **TList**>(`collection`: TList & undefined | null | [ArrayLike](arraylike.md)‹T›, `iteratee?`: [ListIterator](../modules/____index_.md#listiterator)‹T, any›): *TList*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:891

**`see`** _.forEachRight

**Type parameters:**

▪ **T**

▪ **TList**: *[List](../modules/____index_.md#list)‹T› | null | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | TList & undefined &#124; null &#124; [ArrayLike](arraylike.md)‹T› |
`iteratee?` | [ListIterator](../modules/____index_.md#listiterator)‹T, any› |

**Returns:** *TList*

▸ **forEachRight**<**T**>(`collection`: T | null | undefined, `iteratee?`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any›): *T | null | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:895

**`see`** _.forEachRight

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`iteratee?` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any› |

**Returns:** *T | null | undefined*

___

###  forIn

▸ **forIn**<**T**>(`object`: T, `iteratee?`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any›): *T*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:856

Iterates over own and inherited enumerable properties of an object invoking iteratee for each property. The
iteratee is invoked with three arguments: (value, key, object). Iteratee functions may
exit iteration early by explicitly returning false.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T | The object to iterate over. |
`iteratee?` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any› | The function invoked per iteration. |

**Returns:** *T*

Returns object.

▸ **forIn**<**T**>(`object`: T | null | undefined, `iteratee?`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any›): *T | null | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:860

**`see`** _.forIn

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`object` | T &#124; null &#124; undefined |
`iteratee?` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any› |

**Returns:** *T | null | undefined*

___

###  forInRight

▸ **forInRight**<**T**>(`object`: T, `iteratee?`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any›): *T*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:882

This method is like _.forIn except that it iterates over properties of object in the opposite order.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T | The object to iterate over. |
`iteratee?` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any› | The function invoked per iteration. |

**Returns:** *T*

Returns object.

▸ **forInRight**<**T**>(`object`: T | null | undefined, `iteratee?`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any›): *T | null | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:886

**`see`** _.forInRight

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`object` | T &#124; null &#124; undefined |
`iteratee?` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any› |

**Returns:** *T | null | undefined*

___

###  forOwn

▸ **forOwn**<**T**>(`object`: T, `iteratee?`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any›): *T*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:910

Iterates over own enumerable properties of an object invoking iteratee for each property. The iteratee is
invoked with three arguments: (value, key, object). Iteratee functions may exit
iteration early by explicitly returning false.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T | The object to iterate over. |
`iteratee?` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any› | The function invoked per iteration. |

**Returns:** *T*

Returns object.

▸ **forOwn**<**T**>(`object`: T | null | undefined, `iteratee?`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any›): *T | null | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:914

**`see`** _.forOwn

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`object` | T &#124; null &#124; undefined |
`iteratee?` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any› |

**Returns:** *T | null | undefined*

___

###  forOwnRight

▸ **forOwnRight**<**T**>(`object`: T, `iteratee?`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any›): *T*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:936

This method is like _.forOwn except that it iterates over properties of object in the opposite order.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T | The object to iterate over. |
`iteratee?` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any› | The function invoked per iteration. |

**Returns:** *T*

Returns object.

▸ **forOwnRight**<**T**>(`object`: T | null | undefined, `iteratee?`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any›): *T | null | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:940

**`see`** _.forOwnRight

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`object` | T &#124; null &#124; undefined |
`iteratee?` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, any› |

**Returns:** *T | null | undefined*

___

###  get

▸ **get**<**TObject**, **TKey**>(`object`: TObject, `path`: TKey | [TKey]): *TObject[TKey]*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1032

Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
in its place.

**Type parameters:**

▪ **TObject**: *object*

▪ **TKey**: *keyof TObject*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | TObject | The object to query. |
`path` | TKey &#124; [TKey] | The path of the property to get. |

**Returns:** *TObject[TKey]*

Returns the resolved value.

▸ **get**<**TObject**, **TKey**>(`object`: TObject | null | undefined, `path`: TKey | [TKey]): *TObject[TKey] | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1036

**`see`** _.get

**Type parameters:**

▪ **TObject**: *object*

▪ **TKey**: *keyof TObject*

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject &#124; null &#124; undefined |
`path` | TKey &#124; [TKey] |

**Returns:** *TObject[TKey] | undefined*

▸ **get**<**TObject**, **TKey**, **TDefault**>(`object`: TObject | null | undefined, `path`: TKey | [TKey], `defaultValue`: TDefault): *[Exclude](../globals.md#exclude)‹TObject[TKey], undefined› | TDefault*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1040

**`see`** _.get

**Type parameters:**

▪ **TObject**: *object*

▪ **TKey**: *keyof TObject*

▪ **TDefault**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject &#124; null &#124; undefined |
`path` | TKey &#124; [TKey] |
`defaultValue` | TDefault |

**Returns:** *[Exclude](../globals.md#exclude)‹TObject[TKey], undefined› | TDefault*

▸ **get**<**TObject**, **TKey1**, **TKey2**>(`object`: TObject, `path`: [TKey1, TKey2]): *TObject[TKey1][TKey2]*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1044

**`see`** _.get

**Type parameters:**

▪ **TObject**: *object*

▪ **TKey1**: *keyof TObject*

▪ **TKey2**: *keyof TObject[TKey1]*

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`path` | [TKey1, TKey2] |

**Returns:** *TObject[TKey1][TKey2]*

▸ **get**<**TObject**, **TKey1**, **TKey2**>(`object`: TObject | null | undefined, `path`: [TKey1, TKey2]): *TObject[TKey1][TKey2] | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1048

**`see`** _.get

**Type parameters:**

▪ **TObject**: *object*

▪ **TKey1**: *keyof TObject*

▪ **TKey2**: *keyof TObject[TKey1]*

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject &#124; null &#124; undefined |
`path` | [TKey1, TKey2] |

**Returns:** *TObject[TKey1][TKey2] | undefined*

▸ **get**<**TObject**, **TKey1**, **TKey2**, **TDefault**>(`object`: TObject | null | undefined, `path`: [TKey1, TKey2], `defaultValue`: TDefault): *[Exclude](../globals.md#exclude)‹TObject[TKey1][TKey2], undefined› | TDefault*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1052

**`see`** _.get

**Type parameters:**

▪ **TObject**: *object*

▪ **TKey1**: *keyof TObject*

▪ **TKey2**: *keyof TObject[TKey1]*

▪ **TDefault**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject &#124; null &#124; undefined |
`path` | [TKey1, TKey2] |
`defaultValue` | TDefault |

**Returns:** *[Exclude](../globals.md#exclude)‹TObject[TKey1][TKey2], undefined› | TDefault*

▸ **get**<**TObject**, **TKey1**, **TKey2**, **TKey3**>(`object`: TObject, `path`: [TKey1, TKey2, TKey3]): *TObject[TKey1][TKey2][TKey3]*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1056

**`see`** _.get

**Type parameters:**

▪ **TObject**: *object*

▪ **TKey1**: *keyof TObject*

▪ **TKey2**: *keyof TObject[TKey1]*

▪ **TKey3**: *keyof TObject[TKey1][TKey2]*

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`path` | [TKey1, TKey2, TKey3] |

**Returns:** *TObject[TKey1][TKey2][TKey3]*

▸ **get**<**TObject**, **TKey1**, **TKey2**, **TKey3**>(`object`: TObject | null | undefined, `path`: [TKey1, TKey2, TKey3]): *TObject[TKey1][TKey2][TKey3] | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1060

**`see`** _.get

**Type parameters:**

▪ **TObject**: *object*

▪ **TKey1**: *keyof TObject*

▪ **TKey2**: *keyof TObject[TKey1]*

▪ **TKey3**: *keyof TObject[TKey1][TKey2]*

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject &#124; null &#124; undefined |
`path` | [TKey1, TKey2, TKey3] |

**Returns:** *TObject[TKey1][TKey2][TKey3] | undefined*

▸ **get**<**TObject**, **TKey1**, **TKey2**, **TKey3**, **TDefault**>(`object`: TObject | null | undefined, `path`: [TKey1, TKey2, TKey3], `defaultValue`: TDefault): *[Exclude](../globals.md#exclude)‹TObject[TKey1][TKey2][TKey3], undefined› | TDefault*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1064

**`see`** _.get

**Type parameters:**

▪ **TObject**: *object*

▪ **TKey1**: *keyof TObject*

▪ **TKey2**: *keyof TObject[TKey1]*

▪ **TKey3**: *keyof TObject[TKey1][TKey2]*

▪ **TDefault**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject &#124; null &#124; undefined |
`path` | [TKey1, TKey2, TKey3] |
`defaultValue` | TDefault |

**Returns:** *[Exclude](../globals.md#exclude)‹TObject[TKey1][TKey2][TKey3], undefined› | TDefault*

▸ **get**<**TObject**, **TKey1**, **TKey2**, **TKey3**, **TKey4**>(`object`: TObject, `path`: [TKey1, TKey2, TKey3, TKey4]): *TObject[TKey1][TKey2][TKey3][TKey4]*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1068

**`see`** _.get

**Type parameters:**

▪ **TObject**: *object*

▪ **TKey1**: *keyof TObject*

▪ **TKey2**: *keyof TObject[TKey1]*

▪ **TKey3**: *keyof TObject[TKey1][TKey2]*

▪ **TKey4**: *keyof TObject[TKey1][TKey2][TKey3]*

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`path` | [TKey1, TKey2, TKey3, TKey4] |

**Returns:** *TObject[TKey1][TKey2][TKey3][TKey4]*

▸ **get**<**TObject**, **TKey1**, **TKey2**, **TKey3**, **TKey4**>(`object`: TObject | null | undefined, `path`: [TKey1, TKey2, TKey3, TKey4]): *TObject[TKey1][TKey2][TKey3][TKey4] | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1072

**`see`** _.get

**Type parameters:**

▪ **TObject**: *object*

▪ **TKey1**: *keyof TObject*

▪ **TKey2**: *keyof TObject[TKey1]*

▪ **TKey3**: *keyof TObject[TKey1][TKey2]*

▪ **TKey4**: *keyof TObject[TKey1][TKey2][TKey3]*

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject &#124; null &#124; undefined |
`path` | [TKey1, TKey2, TKey3, TKey4] |

**Returns:** *TObject[TKey1][TKey2][TKey3][TKey4] | undefined*

▸ **get**<**TObject**, **TKey1**, **TKey2**, **TKey3**, **TKey4**, **TDefault**>(`object`: TObject | null | undefined, `path`: [TKey1, TKey2, TKey3, TKey4], `defaultValue`: TDefault): *[Exclude](../globals.md#exclude)‹TObject[TKey1][TKey2][TKey3][TKey4], undefined› | TDefault*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1076

**`see`** _.get

**Type parameters:**

▪ **TObject**: *object*

▪ **TKey1**: *keyof TObject*

▪ **TKey2**: *keyof TObject[TKey1]*

▪ **TKey3**: *keyof TObject[TKey1][TKey2]*

▪ **TKey4**: *keyof TObject[TKey1][TKey2][TKey3]*

▪ **TDefault**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject &#124; null &#124; undefined |
`path` | [TKey1, TKey2, TKey3, TKey4] |
`defaultValue` | TDefault |

**Returns:** *[Exclude](../globals.md#exclude)‹TObject[TKey1][TKey2][TKey3][TKey4], undefined› | TDefault*

▸ **get**<**T**>(`object`: [NumericDictionary](____index_.numericdictionary.md)‹T›, `path`: number): *T*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1080

**`see`** _.get

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`object` | [NumericDictionary](____index_.numericdictionary.md)‹T› |
`path` | number |

**Returns:** *T*

▸ **get**<**T**>(`object`: [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined, `path`: number): *T | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1084

**`see`** _.get

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`object` | [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined |
`path` | number |

**Returns:** *T | undefined*

▸ **get**<**T**, **TDefault**>(`object`: [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined, `path`: number, `defaultValue`: TDefault): *T | TDefault*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1088

**`see`** _.get

**Type parameters:**

▪ **T**

▪ **TDefault**

**Parameters:**

Name | Type |
------ | ------ |
`object` | [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined |
`path` | number |
`defaultValue` | TDefault |

**Returns:** *T | TDefault*

▸ **get**<**TDefault**>(`object`: null | undefined, `path`: [PropertyPath](../modules/____index_.md#propertypath), `defaultValue`: TDefault): *TDefault*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1092

**`see`** _.get

**Type parameters:**

▪ **TDefault**

**Parameters:**

Name | Type |
------ | ------ |
`object` | null &#124; undefined |
`path` | [PropertyPath](../modules/____index_.md#propertypath) |
`defaultValue` | TDefault |

**Returns:** *TDefault*

▸ **get**(`object`: null | undefined, `path`: [PropertyPath](../modules/____index_.md#propertypath)): *undefined*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1096

**`see`** _.get

**Parameters:**

Name | Type |
------ | ------ |
`object` | null &#124; undefined |
`path` | [PropertyPath](../modules/____index_.md#propertypath) |

**Returns:** *undefined*

▸ **get**(`object`: any, `path`: [PropertyPath](../modules/____index_.md#propertypath), `defaultValue?`: any): *any*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1100

**`see`** _.get

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`path` | [PropertyPath](../modules/____index_.md#propertypath) |
`defaultValue?` | any |

**Returns:** *any*

___

###  groupBy

▸ **groupBy**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *[Dictionary](____index_.dictionary.md)‹T[]›*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:949

Creates an object composed of keys generated from the results of running each element of collection through
iteratee. The corresponding value of each key is an array of the elements responsible for generating the
key. The iteratee is invoked with one argument: (value).

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The collection to iterate over. |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› | The function invoked per iteration. |

**Returns:** *[Dictionary](____index_.dictionary.md)‹T[]›*

Returns the composed aggregate object.

▸ **groupBy**<**T**>(`collection`: T | null | undefined, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T[keyof T]›): *[Dictionary](____index_.dictionary.md)‹[Array](regexpmatcharray.md#array)‹T[keyof T]››*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:953

**`see`** _.groupBy

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T[keyof T]› |

**Returns:** *[Dictionary](____index_.dictionary.md)‹[Array](regexpmatcharray.md#array)‹T[keyof T]››*

___

###  gt

▸ **gt**(`value`: any, `other`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:276

Checks if value is greater than other.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to compare. |
`other` | any | The other value to compare. |

**Returns:** *boolean*

Returns true if value is greater than other, else false.

___

###  gte

▸ **gte**(`value`: any, `other`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:299

Checks if value is greater than or equal to other.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to compare. |
`other` | any | The other value to compare. |

**Returns:** *boolean*

Returns true if value is greater than or equal to other, else false.

___

###  head

▸ **head**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined): *T | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:577

Gets the first element of array.

**`alias`** _.first

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to query. |

**Returns:** *T | undefined*

Returns the first element of array.

___

###  identity

▸ **identity**<**T**>(`value`: T): *T*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:376

This method returns the first argument provided to it.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | Any value. |

**Returns:** *T*

Returns value.

▸ **identity**(): *undefined*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:380

**`see`** _.identity

**Returns:** *undefined*

___

###  inRange

▸ **inRange**(`n`: number, `start`: number, `end?`: undefined | number): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/number.d.ts:71

Checks if n is between start and up to but not including, end. If end is not specified it’s set to start
with start then set to 0.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The number to check. |
`start` | number | The start of the range. |
`end?` | undefined &#124; number | The end of the range. |

**Returns:** *boolean*

Returns true if n is in the range, else false.

___

###  includes

▸ **includes**<**T**>(`collection`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined, `target`: T, `fromIndex?`: undefined | number): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1007

Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
it’s used as the offset from the end of collection.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined | The collection to search. |
`target` | T | The value to search for. |
`fromIndex?` | undefined &#124; number | The index to search from. |

**Returns:** *boolean*

True if the target element is found, else false.

___

###  initial

▸ **initial**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:651

Gets all but the last element of array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to query. |

**Returns:** *T[]*

Returns the slice of array.

___

###  intersection

▸ **intersection**<**T**>(...`arrays`: [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T››): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:673

Creates an array of unique values that are included in all of the provided arrays using SameValueZero for
equality comparisons.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...arrays` | [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T›› | The arrays to inspect. |

**Returns:** *T[]*

Returns the new array of shared values.

___

###  invert

▸ **invert**(`object`: object): *[Dictionary](____index_.dictionary.md)‹string›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1330

Creates an object composed of the inverted keys and values of object. If object contains duplicate values,
subsequent values overwrite property assignments of previous values unless multiValue is true.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | object | The object to invert. |

**Returns:** *[Dictionary](____index_.dictionary.md)‹string›*

Returns the new inverted object.

___

###  invertBy

▸ **invertBy**<**T**>(`object`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined, `interatee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *[Dictionary](____index_.dictionary.md)‹string[]›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1354

This method is like _.invert except that the inverted object is generated from the results of running each
element of object through iteratee. The corresponding inverted value of each inverted key is an array of
keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined | The object to invert. |
`interatee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› | The iteratee invoked per element. |

**Returns:** *[Dictionary](____index_.dictionary.md)‹string[]›*

Returns the new inverted object.

▸ **invertBy**<**T**>(`object`: T | null | undefined, `interatee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T[keyof T]›): *[Dictionary](____index_.dictionary.md)‹string[]›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1358

**`see`** _.invertBy

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`object` | T &#124; null &#124; undefined |
`interatee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T[keyof T]› |

**Returns:** *[Dictionary](____index_.dictionary.md)‹string[]›*

___

###  invoke

▸ **invoke**(`object`: any, `path`: [PropertyPath](../modules/____index_.md#propertypath), ...`args`: any[]): *any*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1409

Invokes the method at path of object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | any | The object to query. |
`path` | [PropertyPath](../modules/____index_.md#propertypath) | The path of the method to invoke. |
`...args` | any[] | The arguments to invoke the method with.  |

**Returns:** *any*

___

###  invokeMap

▸ **invokeMap**(`collection`: object | null | undefined, `methodName`: string, ...`args`: any[]): *any[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1055

Invokes the method named by methodName on each element in the collection returning
an array of the results of each invoked method. Additional arguments will be provided
to each invoked method. If methodName is a function it will be invoked for, and this
bound to, each element in the collection.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | object &#124; null &#124; undefined | The collection to iterate over. |
`methodName` | string | The name of the method to invoke. |
`...args` | any[] | Arguments to invoke the method with.  |

**Returns:** *any[]*

▸ **invokeMap**<**TResult**>(`collection`: object | null | undefined, `method`: function, ...`args`: any[]): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1059

**`see`** _.invokeMap

**Type parameters:**

▪ **TResult**

**Parameters:**

▪ **collection**: *object | null | undefined*

▪ **method**: *function*

▸ (...`args`: any[]): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪... **args**: *any[]*

**Returns:** *TResult[]*

___

###  isArguments

▸ **isArguments**(`value?`: any): *value is IArguments*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:321

Checks if value is classified as an arguments object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *value is IArguments*

Returns true if value is correctly classified, else false.

___

###  isArray

▸ **isArray**(`value?`: any): *value is any[]*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:343

Checks if value is classified as an Array object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check.  |

**Returns:** *value is any[]*

Returns true if value is correctly classified, else false.

▸ **isArray**<**T**>(`value?`: any): *value is any[]*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:347

**`see`** _.isArray

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *value is any[]*

___

###  isArrayBuffer

▸ **isArrayBuffer**(`value?`: any): *value is ArrayBuffer*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:369

Checks if value is classified as an ArrayBuffer object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *value is ArrayBuffer*

Returns true if value is correctly classified, else false.

___

###  isBoolean

▸ **isBoolean**(`value?`: any): *value is boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:483

Checks if value is classified as a boolean primitive or object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *value is boolean*

Returns true if value is correctly classified, else false.

___

###  isBuffer

▸ **isBuffer**(`value?`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:505

Checks if value is a buffer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *boolean*

Returns true if value is a buffer, else false.

___

###  isDate

▸ **isDate**(`value?`: any): *value is Date*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:527

Checks if value is classified as a Date object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check.  |

**Returns:** *value is Date*

Returns true if value is correctly classified, else false.

___

###  isElement

▸ **isElement**(`value?`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:549

Checks if value is a DOM element.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *boolean*

Returns true if value is a DOM element, else false.

___

###  isEmpty

▸ **isEmpty**(`value?`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:572

Checks if value is empty. A value is considered empty unless it’s an arguments object, array, string, or
jQuery-like collection with a length greater than 0 or an object with own enumerable properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to inspect. |

**Returns:** *boolean*

Returns true if value is empty, else false.

___

###  isError

▸ **isError**(`value`: any): *value is Error*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:682

Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError
object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to check. |

**Returns:** *value is Error*

Returns true if value is an error object, else false.

___

###  isFinite

▸ **isFinite**(`value?`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:706

Checks if value is a finite primitive number.

Note: This method is based on Number.isFinite.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *boolean*

Returns true if value is a finite number, else false.

___

###  isFunction

▸ **isFunction**(`value`: any): *value is function*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:728

Checks if value is a callable function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to check. |

**Returns:** *value is function*

Returns true if value is correctly classified, else false.

___

###  isMap

▸ **isMap**(`value?`: any): *value is Map<any, any>*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:826

Checks if value is classified as a Map object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *value is Map<any, any>*

Returns true if value is correctly classified, else false.

___

###  isNaN

▸ **isNaN**(`value?`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:933

Checks if value is NaN.

Note: This method is not the same as isNaN which returns true for undefined and other non-numeric values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *boolean*

Returns true if value is NaN, else false.

___

###  isNative

▸ **isNative**(`value`: any): *value is function*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:955

Checks if value is a native function.

**`retrun`** Returns true if value is a native function, else false.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to check.  |

**Returns:** *value is function*

___

###  isNull

▸ **isNull**(`value`: any): *value is null*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1010

Checks if value is null.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to check. |

**Returns:** *value is null*

Returns true if value is null, else false.

___

###  isNumber

▸ **isNumber**(`value?`: any): *value is number*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1034

Checks if value is classified as a Number primitive or object.

Note: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the _.isFinite method.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *value is number*

Returns true if value is correctly classified, else false.

___

###  isObject

▸ **isObject**(`value?`: any): *value is object*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1057

Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0),
and new String(''))

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *value is object*

Returns true if value is an object, else false.

___

###  isPlainObject

▸ **isPlainObject**(`value?`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1119

Checks if value is a plain object, that is, an object created by the Object constructor or one with a
[[Prototype]] of null.

Note: This method assumes objects created by the Object constructor have no inherited enumerable properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *boolean*

Returns true if value is a plain object, else false.

___

###  isRegExp

▸ **isRegExp**(`value?`: any): *value is RegExp*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1141

Checks if value is classified as a RegExp object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check.  |

**Returns:** *value is RegExp*

Returns true if value is correctly classified, else false.

___

###  isSet

▸ **isSet**(`value?`: any): *value is Set<any>*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1202

Checks if value is classified as a Set object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *value is Set<any>*

Returns true if value is correctly classified, else false.

___

###  isString

▸ **isString**(`value?`: any): *value is string*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1224

Checks if value is classified as a String primitive or object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *value is string*

Returns true if value is correctly classified, else false.

___

###  isTypedArray

▸ **isTypedArray**(`value`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1276

Checks if value is classified as a typed array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to check. |

**Returns:** *boolean*

Returns true if value is correctly classified, else false.

___

###  isUndefined

▸ **isUndefined**(`value`: any): *value is undefined*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1298

Checks if value is undefined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to check. |

**Returns:** *value is undefined*

Returns true if value is undefined, else false.

___

###  isWeakMap

▸ **isWeakMap**(`value?`: any): *value is WeakMap<object, any>*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1320

Checks if value is classified as a WeakMap object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *value is WeakMap<object, any>*

Returns true if value is correctly classified, else false.

___

###  isWeakSet

▸ **isWeakSet**(`value?`: any): *value is WeakSet<object>*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1342

Checks if value is classified as a WeakSet object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to check. |

**Returns:** *value is WeakSet<object>*

Returns true if value is correctly classified, else false.

___

###  join

▸ **join**(`array`: [List](../modules/____index_.md#list)‹any› | null | undefined, `separator?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:804

Converts all elements in `array` into a string separated by `separator`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹any› &#124; null &#124; undefined | The array to convert. |
`separator?` | undefined &#124; string | The element separator. |

**Returns:** *string*

Returns the joined string.

___

###  kebabCase

▸ **kebabCase**(`string?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:157

Converts string to kebab case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to convert. |

**Returns:** *string*

Returns the kebab cased string.

___

###  keyBy

▸ **keyBy**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee?`: [ValueIterateeCustom](../modules/____index_.md#valueiterateecustom)‹T, [PropertyName](../modules/____index_.md#propertyname)›): *[Dictionary](____index_.dictionary.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1091

Creates an object composed of keys generated from the results of running each element of collection through
iteratee. The corresponding value of each key is the last element responsible for generating the key. The
iteratee function is invoked with one argument: (value).

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The collection to iterate over. |
`iteratee?` | [ValueIterateeCustom](../modules/____index_.md#valueiterateecustom)‹T, [PropertyName](../modules/____index_.md#propertyname)› | The function invoked per iteration. |

**Returns:** *[Dictionary](____index_.dictionary.md)‹T›*

Returns the composed aggregate object.

▸ **keyBy**<**T**>(`collection`: T | null | undefined, `iteratee?`: [ValueIterateeCustom](../modules/____index_.md#valueiterateecustom)‹T[keyof T], [PropertyName](../modules/____index_.md#propertyname)›): *[Dictionary](____index_.dictionary.md)‹T[keyof T]›*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1095

**`see`** _.keyBy

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`iteratee?` | [ValueIterateeCustom](../modules/____index_.md#valueiterateecustom)‹T[keyof T], [PropertyName](../modules/____index_.md#propertyname)› |

**Returns:** *[Dictionary](____index_.dictionary.md)‹T[keyof T]›*

___

###  keys

▸ **keys**(`object?`: any): *string[]*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1432

Creates an array of the own enumerable property names of object.

Note: Non-object values are coerced to objects. See the ES spec for more details.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object?` | any | The object to query. |

**Returns:** *string[]*

Returns the array of property names.

___

###  keysIn

▸ **keysIn**(`object?`: any): *string[]*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1455

Creates an array of the own and inherited enumerable property names of object.

Note: Non-object values are coerced to objects.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object?` | any | The object to query. |

**Returns:** *string[]*

An array of property names.

___

###  last

▸ **last**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined): *T | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:843

Gets the last element of array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to query. |

**Returns:** *T | undefined*

Returns the last element of array.

___

###  lastIndexOf

▸ **lastIndexOf**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `value`: T, `fromIndex?`: true | number): *number*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:884

This method is like _.indexOf except that it iterates over elements of array from right to left.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to search. |
`value` | T | The value to search for. |
`fromIndex?` | true &#124; number | The index to search from or true to perform a binary search on a sorted array. |

**Returns:** *number*

Returns the index of the matched value, else -1.

___

###  lowerCase

▸ **lowerCase**(`string?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:179

Converts `string`, as space separated words, to lower case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to convert. |

**Returns:** *string*

Returns the lower cased string.

___

###  lowerFirst

▸ **lowerFirst**(`string?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:201

Converts the first character of `string` to lower case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to convert. |

**Returns:** *string*

Returns the converted string.

___

###  lt

▸ **lt**(`value`: any, `other`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1365

Checks if value is less than other.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to compare. |
`other` | any | The other value to compare. |

**Returns:** *boolean*

Returns true if value is less than other, else false.

___

###  lte

▸ **lte**(`value`: any, `other`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1388

Checks if value is less than or equal to other.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to compare. |
`other` | any | The other value to compare. |

**Returns:** *boolean*

Returns true if value is less than or equal to other, else false.

___

###  map

▸ **map**<**T**, **TResult**>(`collection`: T[] | null | undefined, `iteratee`: [ArrayIterator](../modules/____index_.md#arrayiterator)‹T, TResult›): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1156

Creates an array of values by running each element in collection through iteratee. The iteratee is
invoked with three arguments: (value, index|key, collection).

Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
_.reject, and _.some.

The guarded methods are:
ary, callback, chunk, clone, create, curry, curryRight, drop, dropRight, every, fill, flatten, invert, max,
min, parseInt, slice, sortBy, take, takeRight, template, trim, trimLeft, trimRight, trunc, random, range,
sample, some, sum, uniq, and words

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | T[] &#124; null &#124; undefined | The collection to iterate over. |
`iteratee` | [ArrayIterator](../modules/____index_.md#arrayiterator)‹T, TResult› | The function invoked per iteration. |

**Returns:** *TResult[]*

Returns the new mapped array.

▸ **map**<**T**, **TResult**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee`: [ListIterator](../modules/____index_.md#listiterator)‹T, TResult›): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1160

**`see`** _.map

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`iteratee` | [ListIterator](../modules/____index_.md#listiterator)‹T, TResult› |

**Returns:** *TResult[]*

▸ **map**<**T**>(`collection`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1164

**`see`** _.map

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined |

**Returns:** *T[]*

▸ **map**<**T**, **TResult**>(`collection`: T | null | undefined, `iteratee`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, TResult›): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1168

**`see`** _.map

**Type parameters:**

▪ **T**: *object*

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`iteratee` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, TResult› |

**Returns:** *TResult[]*

▸ **map**<**T**, **K**>(`collection`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined, `iteratee`: K): *[Array](regexpmatcharray.md#array)‹T[K]›*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1172

**`see`** _.map

**Type parameters:**

▪ **T**

▪ **K**: *keyof T*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined |
`iteratee` | K |

**Returns:** *[Array](regexpmatcharray.md#array)‹T[K]›*

▸ **map**<**T**>(`collection`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined, `iteratee?`: undefined | string): *any[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1176

**`see`** _.map

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined |
`iteratee?` | undefined &#124; string |

**Returns:** *any[]*

▸ **map**<**T**>(`collection`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined, `iteratee?`: undefined | object): *boolean[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1180

**`see`** _.map

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined |
`iteratee?` | undefined &#124; object |

**Returns:** *boolean[]*

___

###  mapKeys

▸ **mapKeys**<**T**>(`object`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee?`: [ListIteratee](../modules/____index_.md#listiteratee)‹T›): *[Dictionary](____index_.dictionary.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1478

The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
by running each own enumerable property of object through iteratee.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The object to iterate over. |
`iteratee?` | [ListIteratee](../modules/____index_.md#listiteratee)‹T› | The function invoked per iteration. |

**Returns:** *[Dictionary](____index_.dictionary.md)‹T›*

Returns the new mapped object.

▸ **mapKeys**<**T**>(`object`: T | null | undefined, `iteratee?`: [ObjectIteratee](../modules/____index_.md#objectiteratee)‹T›): *[Dictionary](____index_.dictionary.md)‹T[keyof T]›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1482

**`see`** _.mapKeys

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`object` | T &#124; null &#124; undefined |
`iteratee?` | [ObjectIteratee](../modules/____index_.md#objectiteratee)‹T› |

**Returns:** *[Dictionary](____index_.dictionary.md)‹T[keyof T]›*

___

###  mapValues

▸ **mapValues**<**TResult**>(`obj`: string | null | undefined, `callback`: [StringIterator](../modules/____index_.md#stringiterator)‹TResult›): *[NumericDictionary](____index_.numericdictionary.md)‹TResult›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1518

Creates an object with the same keys as object and values generated by running each own
enumerable property of object through iteratee. The iteratee function is
invoked with three arguments: (value, key, object).

**Type parameters:**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | string &#124; null &#124; undefined |
`callback` | [StringIterator](../modules/____index_.md#stringiterator)‹TResult› |

**Returns:** *[NumericDictionary](____index_.numericdictionary.md)‹TResult›*

Returns the new mapped object.

▸ **mapValues**<**T**, **TResult**>(`obj`: T | null | undefined, `callback`: [ObjectIterator](../modules/____index_.md#objectiterator)‹T, TResult›): *object*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1522

**`see`** _.mapValues

**Type parameters:**

▪ **T**: *object*

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T &#124; null &#124; undefined |
`callback` | [ObjectIterator](../modules/____index_.md#objectiterator)‹T, TResult› |

**Returns:** *object*

▸ **mapValues**<**T**>(`obj`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined, `iteratee`: object): *[Dictionary](____index_.dictionary.md)‹boolean›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1526

**`see`** _.mapValues

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined |
`iteratee` | object |

**Returns:** *[Dictionary](____index_.dictionary.md)‹boolean›*

▸ **mapValues**<**T**>(`obj`: T | null | undefined, `iteratee`: object): *object*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1530

**`see`** _.mapValues

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T &#124; null &#124; undefined |
`iteratee` | object |

**Returns:** *object*

▸ **mapValues**<**T**, **TKey**>(`obj`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined, `iteratee`: TKey): *[Dictionary](____index_.dictionary.md)‹T[TKey]›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1534

**`see`** _.mapValues

**Type parameters:**

▪ **T**

▪ **TKey**: *keyof T*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined |
`iteratee` | TKey |

**Returns:** *[Dictionary](____index_.dictionary.md)‹T[TKey]›*

▸ **mapValues**<**T**>(`obj`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined, `iteratee`: string): *[Dictionary](____index_.dictionary.md)‹any›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1538

**`see`** _.mapValues

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined |
`iteratee` | string |

**Returns:** *[Dictionary](____index_.dictionary.md)‹any›*

▸ **mapValues**<**T**>(`obj`: T | null | undefined, `iteratee`: string): *object*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1542

**`see`** _.mapValues

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T &#124; null &#124; undefined |
`iteratee` | string |

**Returns:** *object*

▸ **mapValues**(`obj`: string | null | undefined): *[NumericDictionary](____index_.numericdictionary.md)‹string›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1546

**`see`** _.mapValues

**Parameters:**

Name | Type |
------ | ------ |
`obj` | string &#124; null &#124; undefined |

**Returns:** *[NumericDictionary](____index_.numericdictionary.md)‹string›*

▸ **mapValues**<**T**>(`obj`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined): *[Dictionary](____index_.dictionary.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1550

**`see`** _.mapValues

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined |

**Returns:** *[Dictionary](____index_.dictionary.md)‹T›*

▸ **mapValues**<**T**>(`obj`: T): *T*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1554

**`see`** _.mapValues

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T |

**Returns:** *T*

▸ **mapValues**<**T**>(`obj`: T | null | undefined): *[PartialObject](../modules/____index_.md#partialobject)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:1558

**`see`** _.mapValues

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T &#124; null &#124; undefined |

**Returns:** *[PartialObject](../modules/____index_.md#partialobject)‹T›*

___

###  matches

▸ **matches**<**T**>(`source`: T): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:496

Creates a function that performs a deep comparison between a given object and source, returning true if the
given object has equivalent property values, else false.

Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
strings. Objects are compared by their own, not inherited, enumerable properties. For comparing a single own
or inherited property value see _.matchesProperty.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | T | The object of property values to match. |

**Returns:** *function*

Returns the new function.

▸ (`value`: any): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

▸ **matches**<**T**, **V**>(`source`: T): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:500

**`see`** _.matches

**Type parameters:**

▪ **T**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`source` | T |

**Returns:** *function*

▸ (`value`: V): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |

___

###  matchesProperty

▸ **matchesProperty**<**T**>(`path`: [PropertyPath](../modules/____index_.md#propertypath), `srcValue`: T): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:526

Creates a function that compares the property value of path on a given object to value.

Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
strings. Objects are compared by their own, not inherited, enumerable properties.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PropertyPath](../modules/____index_.md#propertypath) | The path of the property to get. |
`srcValue` | T | The value to match. |

**Returns:** *function*

Returns the new function.

▸ (`value`: any): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

▸ **matchesProperty**<**T**, **V**>(`path`: [PropertyPath](../modules/____index_.md#propertypath), `srcValue`: T): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:530

**`see`** _.matchesProperty

**Type parameters:**

▪ **T**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [PropertyPath](../modules/____index_.md#propertypath) |
`srcValue` | T |

**Returns:** *function*

▸ (`value`: V): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |

___

###  method

▸ **method**(`path`: [PropertyPath](../modules/____index_.md#propertypath), ...`args`: any[]): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:562

Creates a function that invokes the method at path on a given object. Any additional arguments are provided
to the invoked method.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PropertyPath](../modules/____index_.md#propertypath) | The path of the method to invoke. |
`...args` | any[] | The arguments to invoke the method with. |

**Returns:** *function*

Returns the new function.

▸ (`object`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

___

###  methodOf

▸ **methodOf**(`object`: object, ...`args`: any[]): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:586

The opposite of _.method; this method creates a function that invokes the method at a given path on object.
Any additional arguments are provided to the invoked method.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | object | The object to query. |
`...args` | any[] | The arguments to invoke the method with. |

**Returns:** *function*

Returns the new function.

▸ (`path`: [PropertyPath](../modules/____index_.md#propertypath)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [PropertyPath](../modules/____index_.md#propertypath) |

___

###  mixin

▸ **mixin**<**TObject**>(`object`: TObject, `source`: [Dictionary](____index_.dictionary.md)‹function›, `options?`: [MixinOptions](____index_.mixinoptions.md)): *TObject*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:621

Adds all own enumerable function properties of a source object to the destination object. If object is a
function then methods are added to its prototype as well.

Note: Use _.runInContext to create a pristine lodash function to avoid conflicts caused by modifying
the original.

**Type parameters:**

▪ **TObject**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | TObject | The destination object. |
`source` | [Dictionary](____index_.dictionary.md)‹function› | The object of functions to add. |
`options?` | [MixinOptions](____index_.mixinoptions.md) | The options object. |

**Returns:** *TObject*

Returns object.

▸ **mixin**<**TResult**>(`source`: [Dictionary](____index_.dictionary.md)‹function›, `options?`: [MixinOptions](____index_.mixinoptions.md)): *[LoDashStatic](____index_.lodashstatic.md)*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:625

**`see`** _.mixin

**Type parameters:**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`source` | [Dictionary](____index_.dictionary.md)‹function› |
`options?` | [MixinOptions](____index_.mixinoptions.md) |

**Returns:** *[LoDashStatic](____index_.lodashstatic.md)*

___

###  multiply

▸ **multiply**(`multiplier`: number, `multiplicand`: number): *number*

Defined in node_modules/@types/lodash/ts3.1/common/math.d.ts:277

Multiply two numbers.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`multiplier` | number | The first number in a multiplication. |
`multiplicand` | number | The second number in a multiplication. |

**Returns:** *number*

Returns the product.

___

###  negate

▸ **negate**<**T**>(`predicate`: function): *function*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:524

Creates a function that negates the result of the predicate func. The func predicate is invoked with
the this binding and arguments of the created function.

**Type parameters:**

▪ **T**: *any[]*

**Parameters:**

▪ **predicate**: *function*

The predicate to negate.

▸ (...`args`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T |

**Returns:** *function*

Returns the new function.

▸ (...`args`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T |

___

###  noConflict

▸ **noConflict**(): *typeof _*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:654

Reverts the _ variable to its previous value and returns a reference to the lodash function.

**Returns:** *typeof _*

Returns the lodash function.

___

###  noop

▸ **noop**(...`args`: any[]): *void*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:675

A no-operation function that returns undefined regardless of the arguments it receives.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *void*

undefined

___

###  now

▸ **now**(): *number*

Defined in node_modules/@types/lodash/ts3.1/common/date.d.ts:9

**Returns:** *number*

___

###  nth

▸ **nth**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `n?`: undefined | number): *T | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:906

Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | array The array to query. |
`n?` | undefined &#124; number | - |

**Returns:** *T | undefined*

Returns the nth element of `array`.

___

###  nthArg

▸ **nthArg**(`n?`: undefined | number): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:697

Creates a function that returns its nth argument.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n?` | undefined &#124; number | The index of the argument to return. |

**Returns:** *function*

Returns the new function.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  once

▸ **once**<**T**>(`func`: T): *T*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:546

Creates a function that is restricted to invoking func once. Repeat calls to the function return the value
of the first call. The func is invoked with the this binding and arguments of the created function.

**Type parameters:**

▪ **T**: *function*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`func` | T | The function to restrict. |

**Returns:** *T*

Returns the new restricted function.

___

###  over

▸ **over**<**TResult**>(...`iteratees`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹function››): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:720

Creates a function that invokes iteratees with the arguments provided to the created function and returns
their results.

**Type parameters:**

▪ **TResult**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...iteratees` | [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹function›› | The iteratees to invoke. |

**Returns:** *function*

Returns the new function.

▸ (...`args`: any[]): *TResult[]*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  overArgs

▸ **overArgs**(`func`: function, ...`transforms`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹function››): *function*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:569

Creates a function that runs each argument through a corresponding transform function.

**Parameters:**

▪ **func**: *function*

The function to wrap.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪... **transforms**: *[Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹function››*

The functions to transform arguments, specified as individual functions or arrays
of functions.

**Returns:** *function*

Returns the new function.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  overEvery

▸ **overEvery**<**T**, **Result1**, **Result2**>(...`predicates`: [function, function]): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:755

Creates a function that checks if all of the predicates return truthy when invoked with the arguments
provided to the created function.

**Type parameters:**

▪ **T**

▪ **Result1**: *T*

▪ **Result2**: *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...predicates` | [function, function] | The predicates to check. |

**Returns:** *function*

Returns the new function.

▸ (`arg`: T): *arg is Result1 & Result2*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

▸ **overEvery**<**T**>(...`predicates`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹function››): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:759

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...predicates` | [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹function›› |

**Returns:** *function*

▸ (...`args`: T[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T[] |

___

###  overSome

▸ **overSome**<**T**, **Result1**, **Result2**>(...`predicates`: [function, function]): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:794

Creates a function that checks if any of the predicates return truthy when invoked with the arguments
provided to the created function.

**Type parameters:**

▪ **T**

▪ **Result1**: *T*

▪ **Result2**: *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...predicates` | [function, function] | The predicates to check. |

**Returns:** *function*

Returns the new function.

▸ (`arg`: T): *arg is Result1 | Result2*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

▸ **overSome**<**T**>(...`predicates`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹function››): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:798

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...predicates` | [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹function›› |

**Returns:** *function*

▸ (...`args`: T[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T[] |

___

###  pad

▸ **pad**(`string?`: undefined | string, `length?`: undefined | number, `chars?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:226

Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if
they can’t be evenly divided by length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to pad. |
`length?` | undefined &#124; number | The padding length. |
`chars?` | undefined &#124; string | The string used as padding. |

**Returns:** *string*

Returns the padded string.

___

###  padEnd

▸ **padEnd**(`string?`: undefined | string, `length?`: undefined | number, `chars?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:251

Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to pad. |
`length?` | undefined &#124; number | The padding length. |
`chars?` | undefined &#124; string | The string used as padding. |

**Returns:** *string*

Returns the padded string.

___

###  padStart

▸ **padStart**(`string?`: undefined | string, `length?`: undefined | number, `chars?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:276

Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to pad. |
`length?` | undefined &#124; number | The padding length. |
`chars?` | undefined &#124; string | The string used as padding. |

**Returns:** *string*

Returns the padded string.

___

###  parseInt

▸ **parseInt**(`string`: string, `radix?`: undefined | number): *number*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:302

Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used
unless value is a hexadecimal, in which case a radix of 16 is used.

Note: This method aligns with the ES5 implementation of parseInt.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string` | string | The string to convert. |
`radix?` | undefined &#124; number | The radix to interpret value by. |

**Returns:** *number*

Returns the converted integer.

___

###  partition

▸ **partition**<**T**, **U**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `callback`: [ValueIteratorTypeGuard](../modules/____index_.md#valueiteratortypeguard)‹T, U›): *[U[], [Array](regexpmatcharray.md#array)‹[Exclude](../globals.md#exclude)‹T, U››]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1375

Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,
while the second of which contains elements predicate returns falsey for.
The predicate is invoked with three arguments: (value, index|key, collection).

**Type parameters:**

▪ **T**

▪ **U**: *T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The collection to iterate over. |
`callback` | [ValueIteratorTypeGuard](../modules/____index_.md#valueiteratortypeguard)‹T, U› | The function called per iteration. |

**Returns:** *[U[], [Array](regexpmatcharray.md#array)‹[Exclude](../globals.md#exclude)‹T, U››]*

Returns the array of grouped elements.

▸ **partition**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `callback`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *[T[], T[]]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1379

**`see`** _.partition

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`callback` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› |

**Returns:** *[T[], T[]]*

▸ **partition**<**T**>(`collection`: T | null | undefined, `callback`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T[keyof T]›): *[[Array](regexpmatcharray.md#array)‹T[keyof T]›, [Array](regexpmatcharray.md#array)‹T[keyof T]›]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1383

**`see`** _.partition

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`callback` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T[keyof T]› |

**Returns:** *[[Array](regexpmatcharray.md#array)‹T[keyof T]›, [Array](regexpmatcharray.md#array)‹T[keyof T]›]*

___

###  property

▸ **property**<**TObj**, **TResult**>(`path`: [PropertyPath](../modules/____index_.md#propertypath)): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:832

Creates a function that returns the property value at path on a given object.

**Type parameters:**

▪ **TObj**

▪ **TResult**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PropertyPath](../modules/____index_.md#propertypath) | The path of the property to get. |

**Returns:** *function*

Returns the new function.

▸ (`obj`: TObj): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | TObj |

___

###  propertyOf

▸ **propertyOf**<**T**>(`object`: T): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:855

The opposite of _.property; this method creates a function that returns the property value at a given path
on object.

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T | The object to query. |

**Returns:** *function*

Returns the new function.

▸ (`path`: [PropertyPath](../modules/____index_.md#propertypath)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [PropertyPath](../modules/____index_.md#propertypath) |

___

###  pull

▸ **pull**<**T**>(`array`: T[], ...`values`: T[]): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:930

Removes all provided values from array using SameValueZero for equality comparisons.

Note: Unlike _.without, this method mutates array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | T[] | The array to modify. |
`...values` | T[] | The values to remove. |

**Returns:** *T[]*

Returns array.

▸ **pull**<**T**>(`array`: [List](../modules/____index_.md#list)‹T›, ...`values`: T[]): *[List](../modules/____index_.md#list)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:934

**`see`** _.pull

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› |
`...values` | T[] |

**Returns:** *[List](../modules/____index_.md#list)‹T›*

___

###  pullAt

▸ **pullAt**<**T**>(`array`: T[], ...`indexes`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹number››): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1089

Removes elements from array corresponding to the given indexes and returns an array of the removed elements.
Indexes may be specified as an array of indexes or as individual arguments.

Note: Unlike _.at, this method mutates array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | T[] | The array to modify. |
`...indexes` | [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹number›› | The indexes of elements to remove, specified as individual indexes or arrays of indexes. |

**Returns:** *T[]*

Returns the new array of removed elements.

▸ **pullAt**<**T**>(`array`: [List](../modules/____index_.md#list)‹T›, ...`indexes`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹number››): *[List](../modules/____index_.md#list)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1093

**`see`** _.pullAt

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› |
`...indexes` | [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹number›› |

**Returns:** *[List](../modules/____index_.md#list)‹T›*

___

###  random

▸ **random**(`floating?`: undefined | false | true): *number*

Defined in node_modules/@types/lodash/ts3.1/common/number.d.ts:97

Produces a random number between min and max (inclusive). If only one argument is provided a number between
0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
number is returned instead of an integer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`floating?` | undefined &#124; false &#124; true | Specify returning a floating-point number. |

**Returns:** *number*

Returns the random number.

▸ **random**(`max`: number, `floating?`: undefined | false | true): *number*

Defined in node_modules/@types/lodash/ts3.1/common/number.d.ts:101

**`see`** _.random

**Parameters:**

Name | Type |
------ | ------ |
`max` | number |
`floating?` | undefined &#124; false &#124; true |

**Returns:** *number*

▸ **random**(`min`: number, `max`: number, `floating?`: undefined | false | true): *number*

Defined in node_modules/@types/lodash/ts3.1/common/number.d.ts:105

**`see`** _.random

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |
`floating?` | undefined &#124; false &#124; true |

**Returns:** *number*

▸ **random**(`min`: number, `index`: string | number, `guard`: object): *number*

Defined in node_modules/@types/lodash/ts3.1/common/number.d.ts:109

**`see`** _.random

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`index` | string &#124; number |
`guard` | object |

**Returns:** *number*

___

###  range

▸ **range**(`start`: number, `end?`: undefined | number, `step?`: undefined | number): *number[]*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:881

Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
range is created unless a negative step is specified.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The start of the range. |
`end?` | undefined &#124; number | The end of the range. |
`step?` | undefined &#124; number | The value to increment or decrement by. |

**Returns:** *number[]*

Returns a new range array.

▸ **range**(`end`: number, `index`: string | number, `guard`: object): *number[]*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:885

**`see`** _.range

**Parameters:**

Name | Type |
------ | ------ |
`end` | number |
`index` | string &#124; number |
`guard` | object |

**Returns:** *number[]*

___

###  rearg

▸ **rearg**(`func`: function, ...`indexes`: [Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹number››): *function*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:1237

Creates a function that invokes func with arguments arranged according to the specified indexes where the
argument value at the first index is provided as the first argument, the argument value at the second index
is provided as the second argument, and so on.

**Parameters:**

▪ **func**: *function*

The function to rearrange arguments for.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪... **indexes**: *[Array](regexpmatcharray.md#array)‹[Many](../modules/____index_.md#many)‹number››*

The arranged argument indexes, specified as individual indexes or arrays of indexes.

**Returns:** *function*

Returns the new function.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  reduce

▸ **reduce**<**T**, **TResult**>(`collection`: T[] | null | undefined, `callback`: [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, TResult, T[]›, `accumulator`: TResult): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1447

Reduces a collection to a value which is the accumulated result of running each
element in the collection through the callback, where each successive callback execution
consumes the return value of the previous execution. If accumulator is not provided the
first element of the collection will be used as the initial accumulator value. The callback
is invoked with four arguments: (accumulator, value, index|key, collection).

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | T[] &#124; null &#124; undefined | The collection to iterate over. |
`callback` | [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, TResult, T[]› | The function called per iteration. |
`accumulator` | TResult | Initial value of the accumulator. |

**Returns:** *TResult*

Returns the accumulated value.

▸ **reduce**<**T**, **TResult**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `callback`: [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, TResult, [List](../modules/____index_.md#list)‹T››, `accumulator`: TResult): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1451

**`see`** _.reduce

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`callback` | [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, TResult, [List](../modules/____index_.md#list)‹T›› |
`accumulator` | TResult |

**Returns:** *TResult*

▸ **reduce**<**T**, **TResult**>(`collection`: T | null | undefined, `callback`: [MemoObjectIterator](../modules/____index_.md#memoobjectiterator)‹T[keyof T], TResult, T›, `accumulator`: TResult): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1455

**`see`** _.reduce

**Type parameters:**

▪ **T**: *object*

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`callback` | [MemoObjectIterator](../modules/____index_.md#memoobjectiterator)‹T[keyof T], TResult, T› |
`accumulator` | TResult |

**Returns:** *TResult*

▸ **reduce**<**T**>(`collection`: T[] | null | undefined, `callback`: [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, T, T[]›): *T | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1459

**`see`** _.reduce

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T[] &#124; null &#124; undefined |
`callback` | [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, T, T[]› |

**Returns:** *T | undefined*

▸ **reduce**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `callback`: [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, T, [List](../modules/____index_.md#list)‹T››): *T | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1463

**`see`** _.reduce

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`callback` | [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, T, [List](../modules/____index_.md#list)‹T›› |

**Returns:** *T | undefined*

▸ **reduce**<**T**>(`collection`: T | null | undefined, `callback`: [MemoObjectIterator](../modules/____index_.md#memoobjectiterator)‹T[keyof T], T[keyof T], T›): *T[keyof T] | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1467

**`see`** _.reduce

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`callback` | [MemoObjectIterator](../modules/____index_.md#memoobjectiterator)‹T[keyof T], T[keyof T], T› |

**Returns:** *T[keyof T] | undefined*

___

###  reduceRight

▸ **reduceRight**<**T**, **TResult**>(`collection`: T[] | null | undefined, `callback`: [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, TResult, T[]›, `accumulator`: TResult): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1518

This method is like _.reduce except that it iterates over elements of a collection from
right to left.

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | T[] &#124; null &#124; undefined | The collection to iterate over. |
`callback` | [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, TResult, T[]› | The function called per iteration. |
`accumulator` | TResult | Initial value of the accumulator. |

**Returns:** *TResult*

The accumulated value.

▸ **reduceRight**<**T**, **TResult**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `callback`: [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, TResult, [List](../modules/____index_.md#list)‹T››, `accumulator`: TResult): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1522

**`see`** _.reduceRight

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`callback` | [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, TResult, [List](../modules/____index_.md#list)‹T›› |
`accumulator` | TResult |

**Returns:** *TResult*

▸ **reduceRight**<**T**, **TResult**>(`collection`: T | null | undefined, `callback`: [MemoObjectIterator](../modules/____index_.md#memoobjectiterator)‹T[keyof T], TResult, T›, `accumulator`: TResult): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1526

**`see`** _.reduceRight

**Type parameters:**

▪ **T**: *object*

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`callback` | [MemoObjectIterator](../modules/____index_.md#memoobjectiterator)‹T[keyof T], TResult, T› |
`accumulator` | TResult |

**Returns:** *TResult*

▸ **reduceRight**<**T**>(`collection`: T[] | null | undefined, `callback`: [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, T, T[]›): *T | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1530

**`see`** _.reduceRight

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T[] &#124; null &#124; undefined |
`callback` | [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, T, T[]› |

**Returns:** *T | undefined*

▸ **reduceRight**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `callback`: [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, T, [List](../modules/____index_.md#list)‹T››): *T | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1534

**`see`** _.reduceRight

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`callback` | [MemoListIterator](../modules/____index_.md#memolistiterator)‹T, T, [List](../modules/____index_.md#list)‹T›› |

**Returns:** *T | undefined*

▸ **reduceRight**<**T**>(`collection`: T | null | undefined, `callback`: [MemoObjectIterator](../modules/____index_.md#memoobjectiterator)‹T[keyof T], T[keyof T], T›): *T[keyof T] | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1538

**`see`** _.reduceRight

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`callback` | [MemoObjectIterator](../modules/____index_.md#memoobjectiterator)‹T[keyof T], T[keyof T], T› |

**Returns:** *T[keyof T] | undefined*

___

###  reject

▸ **reject**(`collection`: string | null | undefined, `predicate?`: [StringIterator](../modules/____index_.md#stringiterator)‹boolean›): *string[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1589

The opposite of _.filter; this method returns the elements of collection that predicate does not return
truthy for.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | string &#124; null &#124; undefined | The collection to iterate over. |
`predicate?` | [StringIterator](../modules/____index_.md#stringiterator)‹boolean› | The function invoked per iteration. |

**Returns:** *string[]*

Returns the new filtered array.

▸ **reject**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `predicate?`: [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1593

**`see`** _.reject

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`predicate?` | [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean› |

**Returns:** *T[]*

▸ **reject**<**T**>(`collection`: T | null | undefined, `predicate?`: [ObjectIterateeCustom](../modules/____index_.md#objectiterateecustom)‹T, boolean›): *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1597

**`see`** _.reject

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`predicate?` | [ObjectIterateeCustom](../modules/____index_.md#objectiterateecustom)‹T, boolean› |

**Returns:** *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

___

###  remove

▸ **remove**<**T**>(`array`: [List](../modules/____index_.md#list)‹T›, `predicate?`: [ListIteratee](../modules/____index_.md#listiteratee)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1118

Removes all elements from array that predicate returns truthy for and returns an array of the removed
elements. The predicate is invoked with three arguments: (value, index, array).

Note: Unlike _.filter, this method mutates array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› | The array to modify. |
`predicate?` | [ListIteratee](../modules/____index_.md#listiteratee)‹T› | The function invoked per iteration. |

**Returns:** *T[]*

Returns the new array of removed elements.

___

###  repeat

▸ **repeat**(`string?`: undefined | string, `n?`: undefined | number): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:325

Repeats the given string n times.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to repeat. |
`n?` | undefined &#124; number | The number of times to repeat the string. |

**Returns:** *string*

Returns the repeated string.

___

###  replace

▸ **replace**(`string`: string, `pattern`: [RegExp](regexp.md) | string, `replacement`: [ReplaceFunction](../modules/____index_.md#replacefunction) | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:349

Replaces matches for pattern in string with replacement.

Note: This method is based on String#replace.

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |
`pattern` | [RegExp](regexp.md) &#124; string |
`replacement` | [ReplaceFunction](../modules/____index_.md#replacefunction) &#124; string |

**Returns:** *string*

Returns the modified string.

▸ **replace**(`pattern`: [RegExp](regexp.md) | string, `replacement`: [ReplaceFunction](../modules/____index_.md#replacefunction) | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:353

**`see`** _.replace

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | [RegExp](regexp.md) &#124; string |
`replacement` | [ReplaceFunction](../modules/____index_.md#replacefunction) &#124; string |

**Returns:** *string*

___

###  rest

▸ **rest**(`func`: function, `start?`: undefined | number): *function*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:1262

Creates a function that invokes func with the this binding of the created function and arguments from start
and beyond provided as an array.

Note: This method is based on the rest parameter.

**Parameters:**

▪ **func**: *function*

The function to apply a rest parameter to.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Optional`  **start**: *undefined | number*

The start position of the rest parameter.

**Returns:** *function*

Returns the new function.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  result

▸ **result**<**TResult**>(`object`: any, `path`: [PropertyPath](../modules/____index_.md#propertypath), `defaultValue?`: TResult | function): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2114

This method is like _.get except that if the resolved value is a function it’s invoked with the this binding
of its parent object and its result is returned.

**Type parameters:**

▪ **TResult**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | any | The object to query. |
`path` | [PropertyPath](../modules/____index_.md#propertypath) | The path of the property to resolve. |
`defaultValue?` | TResult &#124; function | The value returned if the resolved value is undefined. |

**Returns:** *TResult*

Returns the resolved value.

___

###  round

▸ **round**(`n`: number, `precision?`: undefined | number): *number*

Defined in node_modules/@types/lodash/ts3.1/common/math.d.ts:300

Calculates n rounded to precision.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The number to round. |
`precision?` | undefined &#124; number | The precision to round to. |

**Returns:** *number*

Returns the rounded number.

___

###  runInContext

▸ **runInContext**(`context?`: undefined | object): *[LoDashStatic](____index_.lodashstatic.md)*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:959

Create a new pristine lodash function using the given context object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context?` | undefined &#124; object | The context object. |

**Returns:** *[LoDashStatic](____index_.lodashstatic.md)*

Returns a new lodash function.

___

###  sample

▸ **sample**<**T**>(`collection`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined): *T | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1648

Gets a random element from collection.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined | The collection to sample. |

**Returns:** *T | undefined*

Returns the random element.

▸ **sample**<**T**>(`collection`: T | null | undefined): *T[keyof T] | undefined*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1652

**`see`** _.sample

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |

**Returns:** *T[keyof T] | undefined*

___

###  sampleSize

▸ **sampleSize**<**T**>(`collection`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined, `n?`: undefined | number): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1704

Gets n random elements at unique keys from collection up to the size of collection.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined | The collection to sample. |
`n?` | undefined &#124; number | The number of elements to sample. |

**Returns:** *T[]*

Returns the random elements.

▸ **sampleSize**<**T**>(`collection`: T | null | undefined, `n?`: undefined | number): *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1708

**`see`** _.sampleSize

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`n?` | undefined &#124; number |

**Returns:** *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

___

###  set

▸ **set**<**T**>(`object`: T, `path`: [PropertyPath](../modules/____index_.md#propertypath), `value`: any): *T*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2139

Sets the value at path of object. If a portion of path doesn’t exist it’s created. Arrays are created for
missing index properties while objects are created for all other missing properties. Use _.setWith to
customize path creation.

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T | The object to modify. |
`path` | [PropertyPath](../modules/____index_.md#propertypath) | The path of the property to set. |
`value` | any | The value to set. |

**Returns:** *T*

Returns object.

▸ **set**<**TResult**>(`object`: object, `path`: [PropertyPath](../modules/____index_.md#propertypath), `value`: any): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2143

**`see`** _.set

**Type parameters:**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`object` | object |
`path` | [PropertyPath](../modules/____index_.md#propertypath) |
`value` | any |

**Returns:** *TResult*

___

###  setWith

▸ **setWith**<**T**>(`object`: T, `path`: [PropertyPath](../modules/____index_.md#propertypath), `value`: any, `customizer?`: [SetWithCustomizer](../modules/____index_.md#setwithcustomizer)‹T›): *T*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2178

This method is like _.set except that it accepts customizer which is invoked to produce the objects of
path. If customizer returns undefined path creation is handled by the method instead. The customizer is
invoked with three arguments: (nsValue, key, nsObject).

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T | The object to modify. |
`path` | [PropertyPath](../modules/____index_.md#propertypath) | The path of the property to set. |
`value` | any | The value to set. |
`customizer?` | [SetWithCustomizer](../modules/____index_.md#setwithcustomizer)‹T› | The function to customize assigned values. |

**Returns:** *T*

Returns object.

▸ **setWith**<**T**, **TResult**>(`object`: T, `path`: [PropertyPath](../modules/____index_.md#propertypath), `value`: any, `customizer?`: [SetWithCustomizer](../modules/____index_.md#setwithcustomizer)‹T›): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2182

**`see`** _.setWith

**Type parameters:**

▪ **T**: *object*

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`object` | T |
`path` | [PropertyPath](../modules/____index_.md#propertypath) |
`value` | any |
`customizer?` | [SetWithCustomizer](../modules/____index_.md#setwithcustomizer)‹T› |

**Returns:** *TResult*

___

###  shuffle

▸ **shuffle**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1759

Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The collection to shuffle. |

**Returns:** *T[]*

Returns the new shuffled array.

▸ **shuffle**<**T**>(`collection`: T | null | undefined): *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1763

**`see`** _.shuffle

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |

**Returns:** *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

___

###  size

▸ **size**(`collection`: object | string | null | undefined): *number*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1815

Gets the size of collection by returning its length for array-like values or the number of own enumerable
properties for objects.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | object &#124; string &#124; null &#124; undefined | The collection to inspect. |

**Returns:** *number*

Returns the size of collection.

___

###  slice

▸ **slice**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `start?`: undefined | number, `end?`: undefined | number): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1163

Creates a slice of array from start up to, but not including, end.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to slice. |
`start?` | undefined &#124; number | The start position. |
`end?` | undefined &#124; number | The end position. |

**Returns:** *T[]*

Returns the slice of array.

___

###  snakeCase

▸ **snakeCase**(`string?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:383

Converts string to snake case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to convert. |

**Returns:** *string*

Returns the snake cased string.

___

###  some

▸ **some**<**T**>(`collection`: [List](../modules/____index_.md#list)‹T› | null | undefined, `predicate?`: [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean›): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1838

Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate
returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The collection to iterate over. |
`predicate?` | [ListIterateeCustom](../modules/____index_.md#listiterateecustom)‹T, boolean› | The function invoked per iteration. |

**Returns:** *boolean*

Returns true if any element passes the predicate check, else false.

▸ **some**<**T**>(`collection`: T | null | undefined, `predicate?`: [ObjectIterateeCustom](../modules/____index_.md#objectiterateecustom)‹T, boolean›): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/collection.d.ts:1842

**`see`** _.some

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | T &#124; null &#124; undefined |
`predicate?` | [ObjectIterateeCustom](../modules/____index_.md#objectiterateecustom)‹T, boolean› |

**Returns:** *boolean*

___

###  split

▸ **split**(`string`: string, `separator?`: [RegExp](regexp.md) | string, `limit?`: undefined | number): *string[]*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:409

Splits string by separator.

Note: This method is based on String#split.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string` | string | The string to trim. |
`separator?` | [RegExp](regexp.md) &#124; string | The separator pattern to split by. |
`limit?` | undefined &#124; number | The length to truncate results to. |

**Returns:** *string[]*

Returns the new array of string segments.

▸ **split**(`string`: string, `index`: string | number, `guard`: object): *string[]*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:413

**`see`** _.split

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |
`index` | string &#124; number |
`guard` | object |

**Returns:** *string[]*

___

###  spread

▸ **spread**<**TResult**>(`func`: function, `start?`: undefined | number): *function*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:1286

Creates a function that invokes func with the this binding of the created function and an array of arguments
much like Function#apply.

Note: This method is based on the spread operator.

**Type parameters:**

▪ **TResult**

**Parameters:**

▪ **func**: *function*

The function to spread arguments over.

▸ (...`args`: any[]): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Optional`  **start**: *undefined | number*

**Returns:** *function*

Returns the new function.

▸ (...`args`: any[]): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  startCase

▸ **startCase**(`string?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:435

Converts string to start case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to convert. |

**Returns:** *string*

Returns the start cased string.

___

###  startsWith

▸ **startsWith**(`string?`: undefined | string, `target?`: undefined | string, `position?`: undefined | number): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:459

Checks if string starts with the given target string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to search. |
`target?` | undefined &#124; string | The string to search for. |
`position?` | undefined &#124; number | The position to search from. |

**Returns:** *boolean*

Returns true if string starts with target, else false.

___

###  stubArray

▸ **stubArray**(): *any[]*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:974

This method returns a new empty array.

**Returns:** *any[]*

Returns the new empty array.

___

###  stubFalse

▸ **stubFalse**(): *false*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:995

This method returns `false`.

**Returns:** *false*

Returns `false`.

▸ **stubFalse**(): *false*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:1203

This method returns false.

**Returns:** *false*

Returns false.

___

###  stubObject

▸ **stubObject**(): *any*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:1016

This method returns a new empty object.

**Returns:** *any*

Returns the new empty object.

___

###  stubString

▸ **stubString**(): *string*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:1037

This method returns an empty string.

**Returns:** *string*

Returns the empty string.

___

###  stubTrue

▸ **stubTrue**(): *true*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:1058

This method returns `true`.

**Returns:** *true*

Returns `true`.

▸ **stubTrue**(): *true*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:1178

This method returns true.

**Returns:** *true*

Returns true.

___

###  tail

▸ **tail**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1453

Gets all but the first element of array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to query. |

**Returns:** *T[]*

Returns the slice of array.

___

###  take

▸ **take**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `n?`: undefined | number): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1475

Creates a slice of array with n elements taken from the beginning.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to query. |
`n?` | undefined &#124; number | The number of elements to take. |

**Returns:** *T[]*

Returns the slice of array.

___

###  takeRight

▸ **takeRight**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `n?`: undefined | number): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1497

Creates a slice of array with n elements taken from the end.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to query. |
`n?` | undefined &#124; number | The number of elements to take. |

**Returns:** *T[]*

Returns the slice of array.

___

###  takeRightWhile

▸ **takeRightWhile**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `predicate?`: [ListIteratee](../modules/____index_.md#listiteratee)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1520

Creates a slice of array with elements taken from the end. Elements are taken until predicate returns
falsey. The predicate is invoked with three arguments: (value, index, array).

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to query. |
`predicate?` | [ListIteratee](../modules/____index_.md#listiteratee)‹T› | The function invoked per iteration. |

**Returns:** *T[]*

Returns the slice of array.

___

###  takeWhile

▸ **takeWhile**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, `predicate?`: [ListIteratee](../modules/____index_.md#listiteratee)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1543

Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns
falsey. The predicate is invoked with three arguments: (value, index, array).

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to query. |
`predicate?` | [ListIteratee](../modules/____index_.md#listiteratee)‹T› | The function invoked per iteration. |

**Returns:** *T[]*

Returns the slice of array.

___

###  tap

▸ **tap**<**T**>(`value`: T, `interceptor`: function): *T*

Defined in node_modules/@types/lodash/ts3.1/common/seq.d.ts:173

This method invokes interceptor and returns value. The interceptor is invoked with one
argument; (value). The purpose of this method is to "tap into" a method chain in order to perform operations
on intermediate results within the chain.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **value**: *T*

The value to provide to interceptor.

▪ **interceptor**: *function*

The function to invoke.

▸ (`value`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *T*

Returns value.

___

###  template

▸ **template**(`string?`: undefined | string, `options?`: [TemplateOptions](____index_.templateoptions.md)): *[TemplateExecutor](____index_.templateexecutor.md)*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:514

Creates a compiled template function that can interpolate data properties in "interpolate" delimiters,
HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript in "evaluate"
delimiters. Data properties may be accessed as free variables in the template. If a setting object is
provided it takes precedence over _.templateSettings values.

Note: In the development build _.template utilizes
[sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl) for easier
debugging.

For more information on precompiling templates see
[lodash's custom builds documentation](https://lodash.com/custom-builds).

For more information on Chrome extension sandboxes see
[Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The template string. |
`options?` | [TemplateOptions](____index_.templateoptions.md) | The options object. |

**Returns:** *[TemplateExecutor](____index_.templateexecutor.md)*

Returns the compiled template function.

___

###  throttle

▸ **throttle**<**T**>(`func`: T, `wait?`: undefined | number, `options?`: [ThrottleSettings](____index_.throttlesettings.md)): *T & [Cancelable](____index_.cancelable.md)*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:1327

Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled
function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke
them. Provide an options object to indicate that func should be invoked on the leading and/or trailing edge
of the wait timeout. Subsequent calls to the throttled function return the result of the last func call.

Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if
the the throttled function is invoked more than once during the wait timeout.

**Type parameters:**

▪ **T**: *function*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`func` | T | The function to throttle. |
`wait?` | undefined &#124; number | The number of milliseconds to throttle invocations to. |
`options?` | [ThrottleSettings](____index_.throttlesettings.md) | The options object. |

**Returns:** *T & [Cancelable](____index_.cancelable.md)*

Returns the new throttled function.

___

###  thru

▸ **thru**<**T**, **TResult**>(`value`: T, `interceptor`: function): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/seq.d.ts:196

This method is like _.tap except that it returns the result of interceptor.

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

▪ **value**: *T*

The value to provide to interceptor.

▪ **interceptor**: *function*

The function to invoke.

▸ (`value`: T): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *TResult*

Returns the result of interceptor.

___

###  times

▸ **times**<**TResult**>(`n`: number, `iteratee`: function): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:1082

Invokes the iteratee function n times, returning an array of the results of each invocation. The iteratee
is invoked with one argument; (index).

**Type parameters:**

▪ **TResult**

**Parameters:**

▪ **n**: *number*

The number of times to invoke iteratee.

▪ **iteratee**: *function*

The function invoked per iteration.

▸ (`num`: number): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *TResult[]*

Returns the array of results.

▸ **times**(`n`: number): *number[]*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:1086

**`see`** _.times

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *number[]*

___

###  toArray

▸ **toArray**<**T**>(`value`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | null | undefined): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1410

Converts value to an array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; null &#124; undefined | The value to convert. |

**Returns:** *T[]*

Returns the converted array.

▸ **toArray**<**T**>(`value`: T): *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1414

**`see`** _.toArray

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

▸ **toArray**(): *any[]*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1418

**`see`** _.toArray

**Returns:** *any[]*

___

###  toLower

▸ **toLower**(`string?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:536

Converts `string`, as a whole, to lower case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to convert. |

**Returns:** *string*

Returns the lower cased string.

___

###  toPairs

▸ **toPairs**<**T**>(`object?`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T›): *[Array](regexpmatcharray.md#array)‹[string, T]›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2211

Creates an array of own enumerable key-value pairs for object.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object?` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› | The object to query. |

**Returns:** *[Array](regexpmatcharray.md#array)‹[string, T]›*

Returns the new array of key-value pairs.

▸ **toPairs**(`object?`: undefined | object): *[Array](regexpmatcharray.md#array)‹[string, any]›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2215

**`see`** _.toPairs

**Parameters:**

Name | Type |
------ | ------ |
`object?` | undefined &#124; object |

**Returns:** *[Array](regexpmatcharray.md#array)‹[string, any]›*

___

###  toPairsIn

▸ **toPairsIn**<**T**>(`object?`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T›): *[Array](regexpmatcharray.md#array)‹[string, T]›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2236

Creates an array of own and inherited enumerable key-value pairs for object.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object?` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› | The object to query. |

**Returns:** *[Array](regexpmatcharray.md#array)‹[string, T]›*

Returns the new array of key-value pairs.

▸ **toPairsIn**(`object?`: undefined | object): *[Array](regexpmatcharray.md#array)‹[string, any]›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2240

**`see`** _.toPairsIn

**Parameters:**

Name | Type |
------ | ------ |
`object?` | undefined &#124; object |

**Returns:** *[Array](regexpmatcharray.md#array)‹[string, any]›*

___

###  toPlainObject

▸ **toPlainObject**(`value?`: any): *any*

Defined in node_modules/@types/lodash/ts3.1/common/lang.d.ts:1621

Converts value to a plain object flattening inherited enumerable properties of value to own properties
of the plain object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | any | The value to convert. |

**Returns:** *any*

Returns the converted plain object.

___

###  toUpper

▸ **toUpper**(`string?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:558

Converts `string`, as a whole, to upper case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to convert. |

**Returns:** *string*

Returns the upper cased string.

___

###  transform

▸ **transform**<**T**, **TResult**>(`object`: T[], `iteratee`: [MemoVoidArrayIterator](../modules/____index_.md#memovoidarrayiterator)‹T, TResult›, `accumulator?`: TResult): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2266

An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
running each of its own enumerable properties through iteratee, with each invocation potentially mutating
the accumulator object. The iteratee is invoked with four arguments: (accumulator,
value, key, object). Iteratee functions may exit iteration early by explicitly returning false.

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T[] | The object to iterate over. |
`iteratee` | [MemoVoidArrayIterator](../modules/____index_.md#memovoidarrayiterator)‹T, TResult› | The function invoked per iteration. |
`accumulator?` | TResult | The custom accumulator value. |

**Returns:** *TResult*

Returns the accumulated value.

▸ **transform**<**T**, **TResult**>(`object`: [Dictionary](____index_.dictionary.md)‹T›, `iteratee`: [MemoVoidDictionaryIterator](../modules/____index_.md#memovoiddictionaryiterator)‹T, TResult›, `accumulator?`: TResult): *TResult*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2270

**`see`** _.transform

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`object` | [Dictionary](____index_.dictionary.md)‹T› |
`iteratee` | [MemoVoidDictionaryIterator](../modules/____index_.md#memovoiddictionaryiterator)‹T, TResult› |
`accumulator?` | TResult |

**Returns:** *TResult*

▸ **transform**(`object`: any[]): *any[]*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2274

**`see`** _.transform

**Parameters:**

Name | Type |
------ | ------ |
`object` | any[] |

**Returns:** *any[]*

▸ **transform**(`object`: object): *[Dictionary](____index_.dictionary.md)‹any›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2278

**`see`** _.transform

**Parameters:**

Name | Type |
------ | ------ |
`object` | object |

**Returns:** *[Dictionary](____index_.dictionary.md)‹any›*

___

###  trim

▸ **trim**(`string?`: undefined | string, `chars?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:581

Removes leading and trailing whitespace or specified characters from string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to trim. |
`chars?` | undefined &#124; string | The characters to trim. |

**Returns:** *string*

Returns the trimmed string.

▸ **trim**(`string`: string, `index`: string | number, `guard`: object): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:585

**`see`** _.trim

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |
`index` | string &#124; number |
`guard` | object |

**Returns:** *string*

___

###  trimEnd

▸ **trimEnd**(`string?`: undefined | string, `chars?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:608

Removes trailing whitespace or specified characters from string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to trim. |
`chars?` | undefined &#124; string | The characters to trim. |

**Returns:** *string*

Returns the trimmed string.

▸ **trimEnd**(`string`: string, `index`: string | number, `guard`: object): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:612

**`see`** _.trimEnd

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |
`index` | string &#124; number |
`guard` | object |

**Returns:** *string*

___

###  trimStart

▸ **trimStart**(`string?`: undefined | string, `chars?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:635

Removes leading whitespace or specified characters from string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to trim. |
`chars?` | undefined &#124; string | The characters to trim. |

**Returns:** *string*

Returns the trimmed string.

▸ **trimStart**(`string`: string, `index`: string | number, `guard`: object): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:639

**`see`** _.trimStart

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |
`index` | string &#124; number |
`guard` | object |

**Returns:** *string*

___

###  truncate

▸ **truncate**(`string?`: undefined | string, `options?`: [TruncateOptions](____index_.truncateoptions.md)): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:677

Truncates string if it’s longer than the given maximum string length. The last characters of the truncated
string are replaced with the omission string which defaults to "…".

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to truncate. |
`options?` | [TruncateOptions](____index_.truncateoptions.md) | The options object or maximum string length. |

**Returns:** *string*

Returns the truncated string.

___

###  unescape

▸ **unescape**(`string?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:703

The inverse of _.escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, &#39;, and &#96;
in string to their corresponding characters.

Note: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party library
like he.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to unescape. |

**Returns:** *string*

Returns the unescaped string.

___

###  union

▸ **union**<**T**>(...`arrays`: [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T› | null | undefined›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1565

Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
equality comparisons.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...arrays` | [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined› | The arrays to inspect. |

**Returns:** *T[]*

Returns the new array of combined values.

___

###  unionBy

▸ **unionBy**<**T**>(`arrays`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1589

This method is like `_.union` except that it accepts `iteratee` which is
invoked for each element of each `arrays` to generate the criterion by which
uniqueness is computed. The iteratee is invoked with one argument: (value).

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrays` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The arrays to inspect. |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› | The iteratee invoked per element. |

**Returns:** *T[]*

Returns the new array of combined values.

▸ **unionBy**<**T**>(`arrays1`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays2`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1593

**`see`** _.unionBy

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arrays1` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays2` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› |

**Returns:** *T[]*

▸ **unionBy**<**T**>(`arrays1`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays2`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays3`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1597

**`see`** _.unionBy

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arrays1` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays2` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays3` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› |

**Returns:** *T[]*

▸ **unionBy**<**T**>(`arrays1`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays2`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays3`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays4`: [List](../modules/____index_.md#list)‹T› | null | undefined, `iteratee?`: [ValueIteratee](../modules/____index_.md#valueiteratee)‹T›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1601

**`see`** _.unionBy

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arrays1` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays2` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays3` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays4` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`iteratee?` | [ValueIteratee](../modules/____index_.md#valueiteratee)‹T› |

**Returns:** *T[]*

▸ **unionBy**<**T**>(`arrays1`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays2`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays3`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays4`: [List](../modules/____index_.md#list)‹T› | null | undefined, `arrays5`: [List](../modules/____index_.md#list)‹T› | null | undefined, ...`iteratee`: [Array](regexpmatcharray.md#array)‹[ValueIteratee](../modules/____index_.md#valueiteratee)‹T› | [List](../modules/____index_.md#list)‹T› | null | undefined›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1605

**`see`** _.unionBy

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arrays1` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays2` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays3` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays4` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`arrays5` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined |
`...iteratee` | [Array](regexpmatcharray.md#array)‹[ValueIteratee](../modules/____index_.md#valueiteratee)‹T› &#124; [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined› |

**Returns:** *T[]*

___

###  uniqueId

▸ **uniqueId**(`prefix?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:1155

Generates a unique ID. If prefix is provided the ID is appended to it.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prefix?` | undefined &#124; string | The value to prefix the ID with. |

**Returns:** *string*

Returns the unique ID.

___

###  unset

▸ **unset**(`object`: any, `path`: [PropertyPath](../modules/____index_.md#propertypath)): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2330

Removes the property at path of object.

Note: This method mutates object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | any | The object to modify. |
`path` | [PropertyPath](../modules/____index_.md#propertypath) | The path of the property to unset. |

**Returns:** *boolean*

Returns true if the property is deleted, else false.

___

###  unzip

▸ **unzip**<**T**>(`array`: T[][] | [List](../modules/____index_.md#list)‹[List](../modules/____index_.md#list)‹T›› | null | undefined): *T[][]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1776

This method is like _.zip except that it accepts an array of grouped elements and creates an array
regrouping the elements to their pre-zip configuration.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | T[][] &#124; [List](../modules/____index_.md#list)‹[List](../modules/____index_.md#list)‹T›› &#124; null &#124; undefined | The array of grouped elements to process. |

**Returns:** *T[][]*

Returns the new array of regrouped elements.

___

###  unzipWith

▸ **unzipWith**<**T**, **TResult**>(`array`: [List](../modules/____index_.md#list)‹[List](../modules/____index_.md#list)‹T›› | null | undefined, `iteratee`: function): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1799

This method is like _.unzip except that it accepts an iteratee to specify how regrouped values should be
combined. The iteratee is invoked with four arguments: (accumulator, value, index, group).

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

▪ **array**: *[List](../modules/____index_.md#list)‹[List](../modules/____index_.md#list)‹T›› | null | undefined*

The array of grouped elements to process.

▪ **iteratee**: *function*

The function to combine regrouped values.

▸ (...`values`: T[]): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | T[] |

**Returns:** *TResult[]*

Returns the new array of regrouped elements.

▸ **unzipWith**<**T**>(`array`: [List](../modules/____index_.md#list)‹[List](../modules/____index_.md#list)‹T›› | null | undefined): *T[][]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1803

**`see`** _.unzipWith

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](../modules/____index_.md#list)‹[List](../modules/____index_.md#list)‹T›› &#124; null &#124; undefined |

**Returns:** *T[][]*

___

###  update

▸ **update**(`object`: object, `path`: [PropertyPath](../modules/____index_.md#propertypath), `updater`: function): *any*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2354

This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
customize path creation. The updater is invoked with one argument: (value).

**Parameters:**

▪ **object**: *object*

The object to modify.

▪ **path**: *[PropertyPath](../modules/____index_.md#propertypath)*

The path of the property to set.

▪ **updater**: *function*

The function to produce the updated value.

▸ (`value`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*

Returns object.

___

###  upperCase

▸ **upperCase**(`string?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:725

Converts `string`, as space separated words, to upper case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to convert. |

**Returns:** *string*

Returns the upper cased string.

___

###  upperFirst

▸ **upperFirst**(`string?`: undefined | string): *string*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:747

Converts the first character of `string` to upper case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to convert. |

**Returns:** *string*

Returns the converted string.

___

###  values

▸ **values**<**T**>(`object`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | [List](../modules/____index_.md#list)‹T› | null | undefined): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2424

Creates an array of the own enumerable property values of object.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The object to query. |

**Returns:** *T[]*

Returns an array of property values.

▸ **values**<**T**>(`object`: T | null | undefined): *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2428

**`see`** _.values

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`object` | T &#124; null &#124; undefined |

**Returns:** *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

▸ **values**(`object`: any): *any[]*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2432

**`see`** _.values

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any[]*

___

###  valuesIn

▸ **valuesIn**<**T**>(`object`: [Dictionary](____index_.dictionary.md)‹T› | [NumericDictionary](____index_.numericdictionary.md)‹T› | [List](../modules/____index_.md#list)‹T› | null | undefined): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2471

Creates an array of the own and inherited enumerable property values of object.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | [Dictionary](____index_.dictionary.md)‹T› &#124; [NumericDictionary](____index_.numericdictionary.md)‹T› &#124; [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The object to query. |

**Returns:** *T[]*

Returns the array of property values.

▸ **valuesIn**<**T**>(`object`: T | null | undefined): *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

Defined in node_modules/@types/lodash/ts3.1/common/object.d.ts:2475

**`see`** _.valuesIn

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`object` | T &#124; null &#124; undefined |

**Returns:** *[Array](regexpmatcharray.md#array)‹T[keyof T]›*

___

###  without

▸ **without**<**T**>(`array`: [List](../modules/____index_.md#list)‹T› | null | undefined, ...`values`: T[]): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1833

Creates an array excluding all provided values using SameValueZero for equality comparisons.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined | The array to filter. |
`...values` | T[] | The values to exclude. |

**Returns:** *T[]*

Returns the new array of filtered values.

___

###  words

▸ **words**(`string?`: undefined | string, `pattern?`: string | [RegExp](regexp.md)): *string[]*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:770

Splits `string` into an array of its words.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to inspect. |
`pattern?` | string &#124; [RegExp](regexp.md) | The pattern to match words. |

**Returns:** *string[]*

Returns the words of `string`.

▸ **words**(`string`: string, `index`: string | number, `guard`: object): *string[]*

Defined in node_modules/@types/lodash/ts3.1/common/string.d.ts:774

**`see`** _.words

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |
`index` | string &#124; number |
`guard` | object |

**Returns:** *string[]*

___

###  wrap

▸ **wrap**<**T**, **TArgs**, **TResult**>(`value`: T, `wrapper`: function): *function*

Defined in node_modules/@types/lodash/ts3.1/common/function.d.ts:1378

Creates a function that provides value to the wrapper function as its first argument. Any additional
arguments provided to the function are appended to those provided to the wrapper function. The wrapper is
invoked with the this binding of the created function.

**Type parameters:**

▪ **T**

▪ **TArgs**

▪ **TResult**

**Parameters:**

▪ **value**: *T*

The value to wrap.

▪ **wrapper**: *function*

The wrapper function.

▸ (`value`: T, ...`args`: TArgs[]): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...args` | TArgs[] |

**Returns:** *function*

Returns the new function.

▸ (...`args`: TArgs[]): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | TArgs[] |

___

###  xor

▸ **xor**<**T**>(...`arrays`: [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T› | null | undefined›): *T[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1854

Creates an array of unique values that is the symmetric difference of the provided arrays.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...arrays` | [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined› | The arrays to inspect. |

**Returns:** *T[]*

Returns the new array of values.

___

###  zip

▸ **zip**<**T1**, **T2**>(`arrays1`: [List](../modules/____index_.md#list)‹T1›, `arrays2`: [List](../modules/____index_.md#list)‹T2›): *[Array](regexpmatcharray.md#array)‹[T1 | undefined, T2 | undefined]›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1973

Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
the second of which contains the second elements of the given arrays, and so on.

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

Name | Type |
------ | ------ |
`arrays1` | [List](../modules/____index_.md#list)‹T1› |
`arrays2` | [List](../modules/____index_.md#list)‹T2› |

**Returns:** *[Array](regexpmatcharray.md#array)‹[T1 | undefined, T2 | undefined]›*

Returns the new array of grouped elements.

▸ **zip**<**T1**, **T2**, **T3**>(`arrays1`: [List](../modules/____index_.md#list)‹T1›, `arrays2`: [List](../modules/____index_.md#list)‹T2›, `arrays3`: [List](../modules/____index_.md#list)‹T3›): *[Array](regexpmatcharray.md#array)‹[T1 | undefined, T2 | undefined, T3 | undefined]›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1977

**`see`** _.zip

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

**Parameters:**

Name | Type |
------ | ------ |
`arrays1` | [List](../modules/____index_.md#list)‹T1› |
`arrays2` | [List](../modules/____index_.md#list)‹T2› |
`arrays3` | [List](../modules/____index_.md#list)‹T3› |

**Returns:** *[Array](regexpmatcharray.md#array)‹[T1 | undefined, T2 | undefined, T3 | undefined]›*

▸ **zip**<**T1**, **T2**, **T3**, **T4**>(`arrays1`: [List](../modules/____index_.md#list)‹T1›, `arrays2`: [List](../modules/____index_.md#list)‹T2›, `arrays3`: [List](../modules/____index_.md#list)‹T3›, `arrays4`: [List](../modules/____index_.md#list)‹T4›): *[Array](regexpmatcharray.md#array)‹[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1981

**`see`** _.zip

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

**Parameters:**

Name | Type |
------ | ------ |
`arrays1` | [List](../modules/____index_.md#list)‹T1› |
`arrays2` | [List](../modules/____index_.md#list)‹T2› |
`arrays3` | [List](../modules/____index_.md#list)‹T3› |
`arrays4` | [List](../modules/____index_.md#list)‹T4› |

**Returns:** *[Array](regexpmatcharray.md#array)‹[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]›*

▸ **zip**<**T1**, **T2**, **T3**, **T4**, **T5**>(`arrays1`: [List](../modules/____index_.md#list)‹T1›, `arrays2`: [List](../modules/____index_.md#list)‹T2›, `arrays3`: [List](../modules/____index_.md#list)‹T3›, `arrays4`: [List](../modules/____index_.md#list)‹T4›, `arrays5`: [List](../modules/____index_.md#list)‹T5›): *[Array](regexpmatcharray.md#array)‹[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined]›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1985

**`see`** _.zip

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

**Parameters:**

Name | Type |
------ | ------ |
`arrays1` | [List](../modules/____index_.md#list)‹T1› |
`arrays2` | [List](../modules/____index_.md#list)‹T2› |
`arrays3` | [List](../modules/____index_.md#list)‹T3› |
`arrays4` | [List](../modules/____index_.md#list)‹T4› |
`arrays5` | [List](../modules/____index_.md#list)‹T5› |

**Returns:** *[Array](regexpmatcharray.md#array)‹[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined]›*

▸ **zip**<**T**>(...`arrays`: [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T› | null | undefined›): *[Array](regexpmatcharray.md#array)‹[Array](regexpmatcharray.md#array)‹T | undefined››*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:1989

**`see`** _.zip

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...arrays` | [Array](regexpmatcharray.md#array)‹[List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined› |

**Returns:** *[Array](regexpmatcharray.md#array)‹[Array](regexpmatcharray.md#array)‹T | undefined››*

___

###  zipObject

▸ **zipObject**<**T**>(`props`: [List](../modules/____index_.md#list)‹[PropertyName](../modules/____index_.md#propertyname)›, `values`: [List](../modules/____index_.md#list)‹T›): *[Dictionary](____index_.dictionary.md)‹T›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:2020

This method is like _.fromPairs except that it accepts two arrays, one of property
identifiers and one of corresponding values.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | [List](../modules/____index_.md#list)‹[PropertyName](../modules/____index_.md#propertyname)› | The property names. |
`values` | [List](../modules/____index_.md#list)‹T› | The property values. |

**Returns:** *[Dictionary](____index_.dictionary.md)‹T›*

Returns the new object.

▸ **zipObject**(`props?`: [List](../modules/____index_.md#list)‹[PropertyName](../modules/____index_.md#propertyname)›): *[Dictionary](____index_.dictionary.md)‹undefined›*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:2024

**`see`** _.zipObject

**Parameters:**

Name | Type |
------ | ------ |
`props?` | [List](../modules/____index_.md#list)‹[PropertyName](../modules/____index_.md#propertyname)› |

**Returns:** *[Dictionary](____index_.dictionary.md)‹undefined›*

___

###  zipObjectDeep

▸ **zipObjectDeep**(`paths?`: [List](../modules/____index_.md#list)‹[PropertyPath](../modules/____index_.md#propertypath)›, `values?`: [List](../modules/____index_.md#list)‹any›): *object*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:2054

This method is like _.zipObject except that it supports property paths.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`paths?` | [List](../modules/____index_.md#list)‹[PropertyPath](../modules/____index_.md#propertypath)› | The property names. |
`values?` | [List](../modules/____index_.md#list)‹any› | The property values. |

**Returns:** *object*

Returns the new object.

___

###  zipWith

▸ **zipWith**<**T**, **TResult**>(`arrays`: [List](../modules/____index_.md#list)‹T›, `iteratee`: function): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:2077

This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
combined. The iteratee is invoked with four arguments: (accumulator, value, index,
group).

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

▪ **arrays**: *[List](../modules/____index_.md#list)‹T›*

The arrays to process.

▪ **iteratee**: *function*

The function to combine grouped values.

▸ (`value1`: T): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`value1` | T |

**Returns:** *TResult[]*

Returns the new array of grouped elements.

▸ **zipWith**<**T1**, **T2**, **TResult**>(`arrays1`: [List](../modules/____index_.md#list)‹T1›, `arrays2`: [List](../modules/____index_.md#list)‹T2›, `iteratee`: function): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:2081

**`see`** _.zipWith

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **TResult**

**Parameters:**

▪ **arrays1**: *[List](../modules/____index_.md#list)‹T1›*

▪ **arrays2**: *[List](../modules/____index_.md#list)‹T2›*

▪ **iteratee**: *function*

▸ (`value1`: T1, `value2`: T2): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`value1` | T1 |
`value2` | T2 |

**Returns:** *TResult[]*

▸ **zipWith**<**T1**, **T2**, **T3**, **TResult**>(`arrays1`: [List](../modules/____index_.md#list)‹T1›, `arrays2`: [List](../modules/____index_.md#list)‹T2›, `arrays3`: [List](../modules/____index_.md#list)‹T3›, `iteratee`: function): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:2085

**`see`** _.zipWith

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **TResult**

**Parameters:**

▪ **arrays1**: *[List](../modules/____index_.md#list)‹T1›*

▪ **arrays2**: *[List](../modules/____index_.md#list)‹T2›*

▪ **arrays3**: *[List](../modules/____index_.md#list)‹T3›*

▪ **iteratee**: *function*

▸ (`value1`: T1, `value2`: T2, `value3`: T3): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`value1` | T1 |
`value2` | T2 |
`value3` | T3 |

**Returns:** *TResult[]*

▸ **zipWith**<**T1**, **T2**, **T3**, **T4**, **TResult**>(`arrays1`: [List](../modules/____index_.md#list)‹T1›, `arrays2`: [List](../modules/____index_.md#list)‹T2›, `arrays3`: [List](../modules/____index_.md#list)‹T3›, `arrays4`: [List](../modules/____index_.md#list)‹T4›, `iteratee`: function): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:2089

**`see`** _.zipWith

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **TResult**

**Parameters:**

▪ **arrays1**: *[List](../modules/____index_.md#list)‹T1›*

▪ **arrays2**: *[List](../modules/____index_.md#list)‹T2›*

▪ **arrays3**: *[List](../modules/____index_.md#list)‹T3›*

▪ **arrays4**: *[List](../modules/____index_.md#list)‹T4›*

▪ **iteratee**: *function*

▸ (`value1`: T1, `value2`: T2, `value3`: T3, `value4`: T4): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`value1` | T1 |
`value2` | T2 |
`value3` | T3 |
`value4` | T4 |

**Returns:** *TResult[]*

▸ **zipWith**<**T1**, **T2**, **T3**, **T4**, **T5**, **TResult**>(`arrays1`: [List](../modules/____index_.md#list)‹T1›, `arrays2`: [List](../modules/____index_.md#list)‹T2›, `arrays3`: [List](../modules/____index_.md#list)‹T3›, `arrays4`: [List](../modules/____index_.md#list)‹T4›, `arrays5`: [List](../modules/____index_.md#list)‹T5›, `iteratee`: function): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:2093

**`see`** _.zipWith

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

▪ **TResult**

**Parameters:**

▪ **arrays1**: *[List](../modules/____index_.md#list)‹T1›*

▪ **arrays2**: *[List](../modules/____index_.md#list)‹T2›*

▪ **arrays3**: *[List](../modules/____index_.md#list)‹T3›*

▪ **arrays4**: *[List](../modules/____index_.md#list)‹T4›*

▪ **arrays5**: *[List](../modules/____index_.md#list)‹T5›*

▪ **iteratee**: *function*

▸ (`value1`: T1, `value2`: T2, `value3`: T3, `value4`: T4, `value5`: T5): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`value1` | T1 |
`value2` | T2 |
`value3` | T3 |
`value4` | T4 |
`value5` | T5 |

**Returns:** *TResult[]*

▸ **zipWith**<**T**, **TResult**>(...`iteratee`: [Array](regexpmatcharray.md#array)‹function | [List](../modules/____index_.md#list)‹T› | null | undefined›): *TResult[]*

Defined in node_modules/@types/lodash/ts3.1/common/array.d.ts:2097

**`see`** _.zipWith

**Type parameters:**

▪ **T**

▪ **TResult**

**Parameters:**

Name | Type |
------ | ------ |
`...iteratee` | [Array](regexpmatcharray.md#array)‹function &#124; [List](../modules/____index_.md#list)‹T› &#124; null &#124; undefined› |

**Returns:** *TResult[]*

___

## Util Methods

###  cond

▸ **cond**<**T**, **R**>(`pairs`: [Array](regexpmatcharray.md#array)‹[CondPair](../modules/____index_.md#condpair)‹T, R››): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:82

Creates a function that iterates over `pairs` and invokes the corresponding
function of the first predicate to return truthy. The predicate-function
pairs are invoked with the `this` binding and arguments of the created
function.

**`since`** 4.0.0

**`example`** 

var func = _.cond([
  [_.matches({ 'a': 1 }),           _.constant('matches A')],
  [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
  [_.stubTrue,                      _.constant('no match')]
]);

func({ 'a': 1, 'b': 2 });
// => 'matches A'

func({ 'a': 0, 'b': 1 });
// => 'matches B'

func({ 'a': '1', 'b': '2' });
// => 'no match'

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pairs` | [Array](regexpmatcharray.md#array)‹[CondPair](../modules/____index_.md#condpair)‹T, R›› | The predicate-function pairs. |

**Returns:** *function*

Returns the new composite function.

▸ (`Target`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`Target` | T |

___

###  iteratee

▸ **iteratee**<**TFunction**>(`func`: TFunction): *TFunction*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:423

Creates a function that invokes `func` with the arguments of the created
function. If `func` is a property name the created callback returns the
property value for a given element. If `func` is an object the created
callback returns `true` for elements that contain the equivalent object properties, otherwise it returns `false`.

**`example`** 

var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

// create custom iteratee shorthands
_.iteratee = _.wrap(_.iteratee, function(callback, func) {
  var p = /^(\S+)\s*([<>])\s*(\S+)$/.exec(func);
  return !p ? callback(func) : function(object) {
    return (p[2] == '>' ? object[p[1]] > p[3] : object[p[1]] < p[3]);
  };
});

_.filter(users, 'age > 36');
// => [{ 'user': 'fred', 'age': 40 }]

**Type parameters:**

▪ **TFunction**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`func` | TFunction |

**Returns:** *TFunction*

Returns the callback.

▸ **iteratee**(`func`: string | object): *function*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:427

**`see`** _.iteratee

**Parameters:**

Name | Type |
------ | ------ |
`func` | string &#124; object |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  rangeRight

▸ **rangeRight**(`start`: number, `end?`: undefined | number, `step?`: undefined | number): *number[]*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:933

This method is like `_.range` except that it populates values in
descending order.

**`example`** 

_.rangeRight(4);
// => [3, 2, 1, 0]

_.rangeRight(-4);
// => [-3, -2, -1, 0]

_.rangeRight(1, 5);
// => [4, 3, 2, 1]

_.rangeRight(0, 20, 5);
// => [15, 10, 5, 0]

_.rangeRight(0, -4, -1);
// => [-3, -2, -1, 0]

_.rangeRight(1, 4, 0);
// => [1, 1, 1]

_.rangeRight(0);
// => []

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The start of the range. |
`end?` | undefined &#124; number | The end of the range. |
`step?` | undefined &#124; number | The value to increment or decrement by. |

**Returns:** *number[]*

Returns the new array of numbers.

▸ **rangeRight**(`end`: number, `index`: string | number, `guard`: object): *number[]*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:937

**`see`** _.rangeRight

**Parameters:**

Name | Type |
------ | ------ |
`end` | number |
`index` | string &#124; number |
`guard` | object |

**Returns:** *number[]*

___

###  toPath

▸ **toPath**(`value`: any): *string[]*

Defined in node_modules/@types/lodash/ts3.1/common/util.d.ts:1133

Converts `value` to a property path array.

**`example`** 

_.toPath('a.b.c');
// => ['a', 'b', 'c']

_.toPath('a[0].b.c');
// => ['a', '0', 'b', 'c']

var path = ['a', 'b', 'c'],
    newPath = _.toPath(path);

console.log(newPath);
// => ['a', 'b', 'c']

console.log(path === newPath);
// => false

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | The value to convert. |

**Returns:** *string[]*

Returns the new property path array.
