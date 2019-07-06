path = require('path')

module.exports = {
  defaultLocale: 'nl',
  defaultComponentResolve: `@jacco-meijer/content-models`,
  initialPageSection: 'articleSection',
  localComponentsMap: path.resolve('./dist/component-configs/components-map.js'),
  componentTypes: {
    articleSection: {},
    myNewComponent: {
      resolve: 'localComponentsMap',
    },
    page: {
      resolve: `@jacco-meijer/content-models`,
    },
  },
}
