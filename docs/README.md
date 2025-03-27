**@isdk/artistic-text**

***

# @isdk/artistic-text

[![npm version](https://badge.fury.io/js/@isdk%2Fartistic-text.svg)](https://badge.fury.io/js/@isdk%2Fartistic-text)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

`@isdk/artistic-text` is a library that generates stylized ASCII art text with customizable fonts and color.

## Features

- Random font selection from supported Figlet fonts
- Custom color support via ANSI colors
- Specify font and color options
- Exclude problematic fonts by default

## Installation

You can install `@isdk/artistic-text`:

```bash
npm install @isdk/artistic-text
```

## Usage

```typescript
import { artisticText } from '@isdk/artistic-text';

// Basic usage with default options
console.log(artisticText('Hello World'));

// Custom configuration
console.log(artisticText('Node.js', {
  font: '3D-ASCII',
  color: 'blue'
}));
```

### Options

| Option       | Type   | Description |
|--------------|--------|-------------|
| font         | string | Font name (default: random selection from supported fonts) |
| color        | string | Text color (supports all ansi-colors names, default: 'gray'; use 'none' to disable) |
| Other options| -      | Accepts all figlet Options                 |

## Contributing

We welcome contributions from the community! Here are some ways you can help:

* **Bug Reports**: If you find a bug, please open an issue on the [GitHub Issues page](https://github.com/isdk/artistic-text.js/issues).
* **Feature Requests**: If you have an idea for a new feature, feel free to open an issue to discuss it.
* **Pull Requests**: If you want to contribute code, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](_media/LICENSE-MIT) file for details.
