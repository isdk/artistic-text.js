import colors from 'ansi-colors'

import figlet from 'figlet'

const textSync = figlet.textSync

const excludeFonts = new Set([
  'Gradient', 'Hex', 'Trek', 'Term', 'Runic', 'Runyc', 'Rot13', 'Octal', 'Mshebrew210', 'Mike', '1Row', 'DWhistled',
  'Tengwar', 'Small Tengwar', 'Benjamin',
])

const fonts = figlet.fontsSync().filter((f: string) => !excludeFonts.has(f))

function getRandomInt(size: number) {
  return Math.floor(Math.random() * size);
}

export interface ArtisticTextOptions extends figlet.Options {
  color?: string
}

/**
 * Generates artistic text with custom fonts and colors.
 *
 * This function create styled text with a random or specified font, and applies color.
 *
 * @param {string} s - The text to be styled.
 * @param {ArtisticTextOptions} [options={}] - Optional configuration for the text styling.
 * @param {string} [options.color='gray'] - The color to apply to the text. Use 'none' for no color.
 * @param {string} [options.font] - The font to use for the text. If not provided, a random font is selected.
 * @returns {string} The styled text.
 *
 * @example
 * // Generate text with a random font and gray color
 * console.log(artisticText('Hello World'));
 *
 * @example
 * // Generate text with a specific font and color
 * console.log(artisticText('Hello World', { font: '3D-ASCII', color: 'blue' }));
 */
export function artisticText(s: string, options: ArtisticTextOptions = {}) {
  const color = (options.color || 'gray')
  if (!options.font) {
    // '3D-ASCII'
    options.font = fonts[getRandomInt(fonts.length)]
  }
      // horizontalLayout: 'default',
      // verticalLayout: 'default',
  let result = textSync(s, options)
  if (color !== 'none') {
    // @ts-ignore
    result = colors[color](result)
  }
  return result
}

// import cfonts from 'cfonts'

// export function uText(s: string, options: any = {}) {
//   cfonts.say(s, options)
// }
