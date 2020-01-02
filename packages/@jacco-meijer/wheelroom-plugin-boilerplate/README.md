# @jacco-meijer/wheelroom-plugin-boilerplate

This is a plugin for the `wheelroom` package.

## Commands

This plugin adds the `create-files` command which lets you create boilerplate
code from component data.

```
wheelroom create-files <template-set> <path> [options]
```

## Config

The plugin is configured by adding it to `wheelroom-config.js`

```
var templateSets = require('./wheelroom-template-sets')

module.exports = {
  components: {
      ...
  },
  plugins: [
    {
      resolve: '@jacco-meijer/wheelroom-plugin-boilerplate',
      options: {
        templateSets: templateSets,
      },
    },
  ],
}
```
