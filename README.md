# ember-cli-deploy-version-file

A small ember-cli-deploy plugin to generate a `version.json` file which will be deployed.

## Compatibility

- Node.js v10 or above

## Installation

```
ember install ember-cli-deploy-version-file
```

## Usage

```js
// config/deploy.js

let ENV = {
  // other plugins...

  'version-file': {},
};
```

By default, it will use the version from `package.json` and expose it in the file `/version.json` at the root of your build:

```json
{ "version": "1.0.0" }
```

You can also overwrite the defaults by providing configuration:

```js
// config/deploy.js

let ENV = {
  // other plugins...

  'version-file': {
    version: '1.2.0',
    fileName: 'assets/custom-version.json',
    propertyName: 'release',
  },
};
```

Will result in a file `assets/custom-version.json` with the content:

```json
{ "release": "1.2.0" }
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
