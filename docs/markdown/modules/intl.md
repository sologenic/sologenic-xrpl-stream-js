[typescript](../README.md) › [Globals](../globals.md) › [Intl](intl.md)

# Module: Intl

## Index

### Interfaces

* [Collator](../interfaces/intl.collator.md)
* [CollatorOptions](../interfaces/intl.collatoroptions.md)
* [DateTimeFormat](../interfaces/intl.datetimeformat.md)
* [DateTimeFormatOptions](../interfaces/intl.datetimeformatoptions.md)
* [DateTimeFormatPart](../interfaces/intl.datetimeformatpart.md)
* [NumberFormat](../interfaces/intl.numberformat.md)
* [NumberFormatOptions](../interfaces/intl.numberformatoptions.md)
* [NumberFormatPart](../interfaces/intl.numberformatpart.md)
* [PluralRules](../interfaces/intl.pluralrules.md)
* [PluralRulesOptions](../interfaces/intl.pluralrulesoptions.md)
* [ResolvedCollatorOptions](../interfaces/intl.resolvedcollatoroptions.md)
* [ResolvedDateTimeFormatOptions](../interfaces/intl.resolveddatetimeformatoptions.md)
* [ResolvedNumberFormatOptions](../interfaces/intl.resolvednumberformatoptions.md)
* [ResolvedPluralRulesOptions](../interfaces/intl.resolvedpluralrulesoptions.md)

### Type aliases

* [DateTimeFormatPartTypes](intl.md#datetimeformatparttypes)
* [NumberFormatPartTypes](intl.md#numberformatparttypes)

### Variables

* [Collator](intl.md#collator)
* [DateTimeFormat](intl.md#datetimeformat)
* [NumberFormat](intl.md#numberformat)
* [PluralRules](intl.md#const-pluralrules)

## Type aliases

###  DateTimeFormatPartTypes

Ƭ **DateTimeFormatPartTypes**: *"day" | "dayPeriod" | "era" | "hour" | "literal" | "minute" | "month" | "second" | "timeZoneName" | "weekday" | "year"*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.intl.d.ts:22

___

###  NumberFormatPartTypes

Ƭ **NumberFormatPartTypes**: *"currency" | "decimal" | "fraction" | "group" | "infinity" | "integer" | "literal" | "minusSign" | "nan" | "plusSign" | "percentSign"*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.intl.d.ts:22

## Variables

###  Collator

• **Collator**: *object*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4230

#### Type declaration:

▸ (`locales?`: string | string[], `options?`: [CollatorOptions](../interfaces/intl.collatoroptions.md)): *[Collator](../interfaces/intl.collator.md)*

**Parameters:**

Name | Type |
------ | ------ |
`locales?` | string &#124; string[] |
`options?` | [CollatorOptions](../interfaces/intl.collatoroptions.md) |

* **new __type**(`locales?`: string | string[], `options?`: [CollatorOptions](../interfaces/intl.collatoroptions.md)): *[Collator](../interfaces/intl.collator.md)*

* **supportedLocalesOf**(`locales`: string | string[], `options?`: [CollatorOptions](../interfaces/intl.collatoroptions.md)): *string[]*

___

###  DateTimeFormat

• **DateTimeFormat**: *object*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4310

#### Type declaration:

▸ (`locales?`: string | string[], `options?`: [DateTimeFormatOptions](../interfaces/intl.datetimeformatoptions.md)): *[DateTimeFormat](../interfaces/intl.datetimeformat.md)*

**Parameters:**

Name | Type |
------ | ------ |
`locales?` | string &#124; string[] |
`options?` | [DateTimeFormatOptions](../interfaces/intl.datetimeformatoptions.md) |

* **new __type**(`locales?`: string | string[], `options?`: [DateTimeFormatOptions](../interfaces/intl.datetimeformatoptions.md)): *[DateTimeFormat](../interfaces/intl.datetimeformat.md)*

* **supportedLocalesOf**(`locales`: string | string[], `options?`: [DateTimeFormatOptions](../interfaces/intl.datetimeformatoptions.md)): *string[]*

___

###  NumberFormat

• **NumberFormat**: *object*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4267

#### Type declaration:

▸ (`locales?`: string | string[], `options?`: [NumberFormatOptions](../interfaces/intl.numberformatoptions.md)): *[NumberFormat](../interfaces/intl.numberformat.md)*

**Parameters:**

Name | Type |
------ | ------ |
`locales?` | string &#124; string[] |
`options?` | [NumberFormatOptions](../interfaces/intl.numberformatoptions.md) |

* **new __type**(`locales?`: string | string[], `options?`: [NumberFormatOptions](../interfaces/intl.numberformatoptions.md)): *[NumberFormat](../interfaces/intl.numberformat.md)*

* **supportedLocalesOf**(`locales`: string | string[], `options?`: [NumberFormatOptions](../interfaces/intl.numberformatoptions.md)): *string[]*

___

### `Const` PluralRules

• **PluralRules**: *object*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.intl.d.ts:43

#### Type declaration:

▸ (`locales?`: string | string[], `options?`: [PluralRulesOptions](../interfaces/intl.pluralrulesoptions.md)): *[PluralRules](../interfaces/intl.pluralrules.md)*

**Parameters:**

Name | Type |
------ | ------ |
`locales?` | string &#124; string[] |
`options?` | [PluralRulesOptions](../interfaces/intl.pluralrulesoptions.md) |

* **new __type**(`locales?`: string | string[], `options?`: [PluralRulesOptions](../interfaces/intl.pluralrulesoptions.md)): *[PluralRules](../interfaces/intl.pluralrules.md)*

* **supportedLocalesOf**(`locales`: string | string[], `options?`: [PluralRulesOptions](../interfaces/intl.pluralrulesoptions.md)): *string[]*
