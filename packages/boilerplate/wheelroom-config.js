path = require('path')

module.exports = {
  defaultLocale: 'nl',
  pageTemplate: path.resolve('./src/page-template.tsx'),
  defaultComponentResolve: `components`,
  resolveLocalModules: 'dist',
  componentTypes: {
    articleSection: {},
    // page: {
    //   resolve: `@jacco-meijer/content-models`,
    // },
  },
}
