## @eslint/eslintrc

This package provides an implementation for ESLint's configuration system.

### Installation

```bash
npm install @eslint/eslintrc
```

### Usage

The package exports a default function that can be used to load and validate ESLint configurations. This function can be used in a Node.js script or a web browser.

#### Node.js

```javascript
const { ESLint } = require('@eslint/eslintrc');

async function main() {
  const eslint = new ESLint({
    // Configuration options
  });

  // Load and validate the configuration
  const config = await eslint.calculateConfigForFile('./path/to/file.js');

  console.log(config);
}

main();
```

#### Web browser

```javascript
const { ESLint } = window.eslint;

async function main() {
  const eslint = new ESLint({
    // Configuration options
  });

  // Load and validate the configuration
  const config = await eslint.calculateConfigForFile('./path/to/file.js');

  console.log(config);
}

main();
```

### API

#### `ESLint` Class

The `ESLint` class provides the core functionality for loading and validating ESLint configurations. It has the following methods:

* **`calculateConfigForFile(filePath)`**: Asynchronously calculates and returns the ESLint configuration for the given file path.
* **`calculateConfigForFileSync(filePath)`**: Synchronously calculates and returns the ESLint configuration for the given file path.

### Configuration

The following configuration options can be passed to the `ESLint` constructor:

* **`useEslintrc`**: This option controls whether ESLint should load the configuration from `.eslintrc` files. If set to `false`, ESLint will only use the options provided in the constructor.
* **`configFile`**: This option specifies the path to a custom configuration file. If provided, ESLint will use this file instead of loading a configuration from `.eslintrc` files.
* **`ignore`**: This option specifies a list of paths or globs to ignore. ESLint will not lint files that match these paths or globs.
* **`rulePaths`**: This option specifies a list of paths to directories containing custom rules. ESLint will load these rules in addition to the built-in rules.
* **`parser`**: This option specifies the parser to use. If not provided, ESLint will try to infer the parser from the file extension.
* **`parserOptions`**: This option provides additional options to the parser.
* **`env`**: This option specifies the environment to use. ESLint will automatically load the globals for the given environment.
* **`globals`**: This option specifies a list of global variables to be used in the linting process.
* **`plugins`**: This option specifies a list of plugins to use. ESLint will load these plugins in addition to the built-in plugins.
* **`rules`**: This option specifies a dictionary of rules to use. The keys are the rule names, and the values are either a severity level (`0`, `1`, or `2`) or a dictionary of options to pass to the rule.

### Examples

#### Loading the configuration from `.eslintrc` files

```javascript
const eslint = new ESLint({
  useEslintrc: true,
});

const config = await eslint.calculateConfigForFile('./path/to/file.js');
```

#### Loading the configuration from a custom file

```javascript
const eslint = new ESLint({
  configFile: './path/to/eslint.config.js',
});

const config = await eslint.calculateConfigForFile('./path/to/file.js');
```

#### Ignoring specific files

```javascript
const eslint = new ESLint({
  ignore: ['node_modules', 'dist'],
});

const config = await eslint.calculateConfigForFile('./path/to/file.js');
```

#### Loading custom rules

```javascript
const eslint = new ESLint({
  rulePaths: ['./path/to/rules'],
});

const config = await eslint.calculateConfigForFile('./path/to/file.js');
```

#### Specifying the parser

```javascript
const eslint = new ESLint({
  parser: '@babel/eslint-parser',
});

const config = await eslint.calculateConfigForFile('./path/to/file.js');
```

#### Specifying environment variables

```javascript
const eslint = new ESLint({
  env: {
    browser: true,
    node: true,
  },
});

const config = await eslint.calculateConfigForFile('./path/to/file.js');
```

#### Specifying global variables

```javascript
const eslint = new ESLint({
  globals: {
    console: true,
    window: true,
  },
});

const config = await eslint.calculateConfigForFile('./path/to/file.js');
```

#### Specifying plugins

```javascript
const eslint = new ESLint({
  plugins: ['react'],
});

const config = await eslint.calculateConfigForFile('./path/to/file.js');
```

#### Specifying rules

```javascript
const eslint = new ESLint({
  rules: {
    'no-console': 'warn',
    'semi': ['error', 'always'],
  },
});

const config = await eslint.calculateConfigForFile('./path/to/file.js');
```
