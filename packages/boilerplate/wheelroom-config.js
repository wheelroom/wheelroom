path = require('path')

module.exports = {
  defaultLocale: 'nl',
  defaultComponentResolve: `components`,
  initialPageSection: 'articleSection',
  resolveLocalModules: 'dist',
  componentTypes: {
    articleSection: {},
    // page: {
    //   resolve: `@jacco-meijer/content-models`,
    // },
  },
}
