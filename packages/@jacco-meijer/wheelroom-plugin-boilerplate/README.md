# @jacco-meijer/wheelroom-plugin-boilerplate

This is a plugin for the `wheelroom` package.

## Commands

This plugin adds the `create-boilerplate` command which lets you create boilerplate
code from component data.

```
wheelroom create-boilerplate <template-set> <path> [options]
```

## Config

The plugin is configured by adding it to `wheelroom-config.js`

```javascript
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
