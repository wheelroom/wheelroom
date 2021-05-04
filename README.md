# Wheelroom

Wheelroom connects your code base within 5 minutes to many services like
Contentful and Netlify. The Wheelroom boilerplate includes content models, page
sections, wheelroom themes, example content and much more.

## Why Wheelroom?

Wheelroom is an open source project and created for developers that want to work
with the latest technology and services. Wheelroom seamlessly connects many
services and renders a data driven client side interface. Check for more
information the plugins or start building your own project with the Wheelroom
boilerplate.

## About this repo

This is a monorepo with javascript/typescript projects that share types and
libraries.

## Apps

- None yet

## Starters

- [gatsby-starter](./starters/gatsby-starter/README.md)
- [nextjs-starter](./starters/nextjs-starter/README.md)

## Packages

- [any](./packages/any/README.md)
- [make](./packages/make/README.md)

## Contributors

Feel free to contribute to the open source Wheelroom project. Do you have
question or a feature request, please read our [contributing guidelines](./CONTRIBUTING.md).

- [Jacco Meijer](https://github.com/jaccomeijer)
- [Thijs Krooswijk](https://github.com/thijskrooswijk)

## Root packages

- babel
- dotenv
- emotion
- eslint (import, prettier, react, react-hooks)
- jest
- node types
- npm script helpers (npm-run-all, rimraf)
- prettier
- react
- typescript
- webpack (cli, dev-server, html-webpack-plugin)

## Known issues

### Vscode React import

React 17 introduced a new JSX transform which does not require react to be
imported in every file. Support for this was added in TypeScript 4.1. However
vscode is still suggesting/requiring the react import before other JSX import
fixes are suggested.

Typescript 4.3 should solve this.

See: https://github.com/microsoft/TypeScript/issues/41762
