[**@isdk/artistic-text**](../README.md)

***

[@isdk/artistic-text](../globals.md) / artisticText

# Function: artisticText()

> **artisticText**(`s`, `options`?): `string`

Defined in: [src/artistic-text.ts:41](https://github.com/isdk/artistic-text.js/blob/9225f67ad4c233f912d0842ab94b02142f6400e9/src/artistic-text.ts#L41)

Generates artistic text with custom fonts and colors.

This function create styled text with a random or specified font, and applies color.

## Parameters

### s

`string`

The text to be styled.

### options?

[`ArtisticTextOptions`](../interfaces/ArtisticTextOptions.md) = `{}`

Optional configuration for the text styling.

## Returns

`string`

The styled text.

## Examples

```ts
// Generate text with a random font and gray color
console.log(artisticText('Hello World'));
```

```ts
// Generate text with a specific font and color
console.log(artisticText('Hello World', { font: '3D-ASCII', color: 'blue' }));
```
