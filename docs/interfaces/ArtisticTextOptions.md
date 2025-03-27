[**@isdk/artistic-text**](../README.md)

***

[@isdk/artistic-text](../globals.md) / ArtisticTextOptions

# Interface: ArtisticTextOptions

Defined in: [src/artistic-text.ts:18](https://github.com/isdk/artistic-text.js/blob/9225f67ad4c233f912d0842ab94b02142f6400e9/src/artistic-text.ts#L18)

## Extends

- `Options`

## Properties

### color?

> `optional` **color**: `string`

Defined in: [src/artistic-text.ts:19](https://github.com/isdk/artistic-text.js/blob/9225f67ad4c233f912d0842ab94b02142f6400e9/src/artistic-text.ts#L19)

***

### font?

> `optional` **font**: `Fonts`

Defined in: node\_modules/.pnpm/@types+figlet@1.7.0/node\_modules/@types/figlet/index.d.ts:315

#### Inherited from

`figlet.Options.font`

***

### horizontalLayout?

> `optional` **horizontalLayout**: `KerningMethods`

Defined in: node\_modules/.pnpm/@types+figlet@1.7.0/node\_modules/@types/figlet/index.d.ts:316

#### Inherited from

`figlet.Options.horizontalLayout`

***

### printDirection?

> `optional` **printDirection**: `number`

Defined in: node\_modules/.pnpm/@types+figlet@1.7.0/node\_modules/@types/figlet/index.d.ts:318

#### Inherited from

`figlet.Options.printDirection`

***

### showHardBlanks?

> `optional` **showHardBlanks**: `boolean`

Defined in: node\_modules/.pnpm/@types+figlet@1.7.0/node\_modules/@types/figlet/index.d.ts:319

#### Inherited from

`figlet.Options.showHardBlanks`

***

### verticalLayout?

> `optional` **verticalLayout**: `KerningMethods`

Defined in: node\_modules/.pnpm/@types+figlet@1.7.0/node\_modules/@types/figlet/index.d.ts:317

#### Inherited from

`figlet.Options.verticalLayout`

***

### whitespaceBreak?

> `optional` **whitespaceBreak**: `boolean`

Defined in: node\_modules/.pnpm/@types+figlet@1.7.0/node\_modules/@types/figlet/index.d.ts:331

This option works in conjunction with "width".
If this option is set to true, then the library will attempt to break text up on whitespace when limiting the width.

#### Default

```ts
false
```

#### Inherited from

`figlet.Options.whitespaceBreak`

***

### width?

> `optional` **width**: `number`

Defined in: node\_modules/.pnpm/@types+figlet@1.7.0/node\_modules/@types/figlet/index.d.ts:325

This option allows you to limit the width of the output.
For example, if you want your output to be a max of 80 characters wide, you would set this option to 80.

#### Default

```ts
undefined
```

#### Inherited from

`figlet.Options.width`
