# @jacco-meijer/wheelroom-plugin-graphql

This is a plugin for the `wheelroom` package.

## Commands

This plugin adds the `create-graphql` command which lets you create
boilerplate graphql. Intended use is generating files for Gatsbyjs, a static
site generator.

```
wheelroom create-graphql <template-set> <path> [options]
```

## Config

The plugin is configured by adding it to `wheelroom-config.js`

```typescript
module.exports = {
  components: {
      ...
  },
  plugins: [
    {
      resolve: '@jacco-meijer/wheelroom-plugin-graphql',
      options: {
        path: 'src/gatspby-graphql',
      },
    },
  ],
}
```
