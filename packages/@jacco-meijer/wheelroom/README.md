# @jacco-meijer/wheelroom

Site framework based on Gatsby and Contentful.

This package contains the `wheelroom` command and works together with
`gatsby-theme-wheelroom`. It uses the theme configuration to:

- Create Contentful models
- Create Contentful demo entries
- Generate Graphql fragments for each model to be used with `gatsby-theme-wheelroom`

## Config

Wheelroom expects a config file `wheelroom-config.js`

```
path = require('path')

module.exports = {
  defaultLocale: 'nl',
  pageTemplate: path.resolve('./src/page-template.tsx'),
  defaultComponentResolve: `components`,
  resolveLocalModules: 'dist',
  componentTypes: {
    articleSection: {},
    page: {
      resolve: `@jacco-meijer/content-models`,
    },
  },
}
```
