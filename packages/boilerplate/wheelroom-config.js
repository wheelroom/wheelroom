path = require('path')

module.exports = {
  defaultLocale: 'nl',
  defaultComponentResolve: `@jacco-meijer/content-models`,
  initialPageSection: 'articleSection',
  // resolveLocalModules: 'dist',
  localComponentsMap: path.resolve('./src/local-components-map.ts'),
  componentTypes: {
    articleSection: {},
    demo: {
      resolve: 'localComponentsMap',
    },
    page: {
      resolve: `@jacco-meijer/content-models`,
    },
  },
}
