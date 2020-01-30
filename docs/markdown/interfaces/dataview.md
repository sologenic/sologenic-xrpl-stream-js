[typescript](../README.md) › [Globals](../globals.md) › [DataView](dataview.md)

# Interface: DataView

## Hierarchy

* **DataView**

## Index

### Properties

* [[Symbol.toStringTag]](dataview.md#[symbol.tostringtag])
* [buffer](dataview.md#buffer)
* [byteLength](dataview.md#bytelength)
* [byteOffset](dataview.md#byteoffset)

### Methods

* [getBigInt64](dataview.md#getbigint64)
* [getBigUint64](dataview.md#getbiguint64)
* [getFloat32](dataview.md#getfloat32)
* [getFloat64](dataview.md#getfloat64)
* [getInt16](dataview.md#getint16)
* [getInt32](dataview.md#getint32)
* [getInt8](dataview.md#getint8)
* [getUint16](dataview.md#getuint16)
* [getUint32](dataview.md#getuint32)
* [getUint8](dataview.md#getuint8)
* [setBigInt64](dataview.md#setbigint64)
* [setBigUint64](dataview.md#setbiguint64)
* [setFloat32](dataview.md#setfloat32)
* [setFloat64](dataview.md#setfloat64)
* [setInt16](dataview.md#setint16)
* [setInt32](dataview.md#setint32)
* [setInt8](dataview.md#setint8)
* [setUint16](dataview.md#setuint16)
* [setUint32](dataview.md#setuint32)
* [setUint8](dataview.md#setuint8)

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:268

___

###  buffer

• **buffer**: *[ArrayBuffer](arraybuffer.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1569

___

###  byteLength

• **byteLength**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1570

___

###  byteOffset

• **byteOffset**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1571

## Methods

###  getBigInt64

▸ **getBigInt64**(`byteOffset`: number, `littleEndian?`: undefined | false | true): *bigint*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:603

Gets the BigInt64 value at the specified byte offset from the start of the view. There is
no alignment constraint; multi-byte values may be fetched from any offset.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be retrieved.  |
`littleEndian?` | undefined &#124; false &#124; true | - |

**Returns:** *bigint*

___

###  getBigUint64

▸ **getBigUint64**(`byteOffset`: number, `littleEndian?`: undefined | false | true): *bigint*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:610

Gets the BigUint64 value at the specified byte offset from the start of the view. There is
no alignment constraint; multi-byte values may be fetched from any offset.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be retrieved.  |
`littleEndian?` | undefined &#124; false &#124; true | - |

**Returns:** *bigint*

___

###  getFloat32

▸ **getFloat32**(`byteOffset`: number, `littleEndian?`: undefined | false | true): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1577

Gets the Float32 value at the specified byte offset from the start of the view. There is
no alignment constraint; multi-byte values may be fetched from any offset.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be retrieved.  |
`littleEndian?` | undefined &#124; false &#124; true | - |

**Returns:** *number*

___

###  getFloat64

▸ **getFloat64**(`byteOffset`: number, `littleEndian?`: undefined | false | true): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1584

Gets the Float64 value at the specified byte offset from the start of the view. There is
no alignment constraint; multi-byte values may be fetched from any offset.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be retrieved.  |
`littleEndian?` | undefined &#124; false &#124; true | - |

**Returns:** *number*

___

###  getInt16

▸ **getInt16**(`byteOffset`: number, `littleEndian?`: undefined | false | true): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1598

Gets the Int16 value at the specified byte offset from the start of the view. There is
no alignment constraint; multi-byte values may be fetched from any offset.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be retrieved.  |
`littleEndian?` | undefined &#124; false &#124; true | - |

**Returns:** *number*

___

###  getInt32

▸ **getInt32**(`byteOffset`: number, `littleEndian?`: undefined | false | true): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1604

Gets the Int32 value at the specified byte offset from the start of the view. There is
no alignment constraint; multi-byte values may be fetched from any offset.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be retrieved.  |
`littleEndian?` | undefined &#124; false &#124; true | - |

**Returns:** *number*

___

###  getInt8

▸ **getInt8**(`byteOffset`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1591

Gets the Int8 value at the specified byte offset from the start of the view. There is
no alignment constraint; multi-byte values may be fetched from any offset.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be retrieved.  |

**Returns:** *number*

___

###  getUint16

▸ **getUint16**(`byteOffset`: number, `littleEndian?`: undefined | false | true): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1618

Gets the Uint16 value at the specified byte offset from the start of the view. There is
no alignment constraint; multi-byte values may be fetched from any offset.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be retrieved.  |
`littleEndian?` | undefined &#124; false &#124; true | - |

**Returns:** *number*

___

###  getUint32

▸ **getUint32**(`byteOffset`: number, `littleEndian?`: undefined | false | true): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1625

Gets the Uint32 value at the specified byte offset from the start of the view. There is
no alignment constraint; multi-byte values may be fetched from any offset.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be retrieved.  |
`littleEndian?` | undefined &#124; false &#124; true | - |

**Returns:** *number*

___

###  getUint8

▸ **getUint8**(`byteOffset`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1611

Gets the Uint8 value at the specified byte offset from the start of the view. There is
no alignment constraint; multi-byte values may be fetched from any offset.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be retrieved.  |

**Returns:** *number*

___

###  setBigInt64

▸ **setBigInt64**(`byteOffset`: number, `value`: bigint, `littleEndian?`: undefined | false | true): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:619

Stores a BigInt64 value at the specified byte offset from the start of the view.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be set. |
`value` | bigint | The value to set. |
`littleEndian?` | undefined &#124; false &#124; true | If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.  |

**Returns:** *void*

___

###  setBigUint64

▸ **setBigUint64**(`byteOffset`: number, `value`: bigint, `littleEndian?`: undefined | false | true): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:628

Stores a BigUint64 value at the specified byte offset from the start of the view.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be set. |
`value` | bigint | The value to set. |
`littleEndian?` | undefined &#124; false &#124; true | If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.  |

**Returns:** *void*

___

###  setFloat32

▸ **setFloat32**(`byteOffset`: number, `value`: number, `littleEndian?`: undefined | false | true): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1634

Stores an Float32 value at the specified byte offset from the start of the view.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be set. |
`value` | number | The value to set. |
`littleEndian?` | undefined &#124; false &#124; true | If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.  |

**Returns:** *void*

___

###  setFloat64

▸ **setFloat64**(`byteOffset`: number, `value`: number, `littleEndian?`: undefined | false | true): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1643

Stores an Float64 value at the specified byte offset from the start of the view.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be set. |
`value` | number | The value to set. |
`littleEndian?` | undefined &#124; false &#124; true | If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.  |

**Returns:** *void*

___

###  setInt16

▸ **setInt16**(`byteOffset`: number, `value`: number, `littleEndian?`: undefined | false | true): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1659

Stores an Int16 value at the specified byte offset from the start of the view.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be set. |
`value` | number | The value to set. |
`littleEndian?` | undefined &#124; false &#124; true | If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.  |

**Returns:** *void*

___

###  setInt32

▸ **setInt32**(`byteOffset`: number, `value`: number, `littleEndian?`: undefined | false | true): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1668

Stores an Int32 value at the specified byte offset from the start of the view.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be set. |
`value` | number | The value to set. |
`littleEndian?` | undefined &#124; false &#124; true | If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.  |

**Returns:** *void*

___

###  setInt8

▸ **setInt8**(`byteOffset`: number, `value`: number): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1650

Stores an Int8 value at the specified byte offset from the start of the view.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be set. |
`value` | number | The value to set.  |

**Returns:** *void*

___

###  setUint16

▸ **setUint16**(`byteOffset`: number, `value`: number, `littleEndian?`: undefined | false | true): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1684

Stores an Uint16 value at the specified byte offset from the start of the view.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be set. |
`value` | number | The value to set. |
`littleEndian?` | undefined &#124; false &#124; true | If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.  |

**Returns:** *void*

___

###  setUint32

▸ **setUint32**(`byteOffset`: number, `value`: number, `littleEndian?`: undefined | false | true): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1693

Stores an Uint32 value at the specified byte offset from the start of the view.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be set. |
`value` | number | The value to set. |
`littleEndian?` | undefined &#124; false &#124; true | If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.  |

**Returns:** *void*

___

###  setUint8

▸ **setUint8**(`byteOffset`: number, `value`: number): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1675

Stores an Uint8 value at the specified byte offset from the start of the view.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`byteOffset` | number | The place in the buffer at which the value should be set. |
`value` | number | The value to set.  |

**Returns:** *void*
