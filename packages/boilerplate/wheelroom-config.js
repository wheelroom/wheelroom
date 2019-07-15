var questionSets = require('./wheelroom-question-sets')
var templateSets = require('./wheelroom-template-sets')

module.exports = {
  defaultComponentResolve: `@jacco-meijer/content-models`,
  components: {
    article: {},
    articleSection: {
      options: {
        variations: ['var 1', 'var 2'],
        overwriteVariations: true,
      },
    },
    globals: {
      resolve: '@jacco-meijer/content-models',
    },
    page: {
      resolve: `@jacco-meijer/content-models`,
      options: {
        initialPageSection: 'articleSection',
      },
    },
  },
  plugins: [
    {
      resolve: 'gatsby-theme-wheelroom',
      options: {
        defaultLocale: 'nl',
      },
    },
    {
      resolve: '@jacco-meijer/wheelroom-plugin-contentful',
      options: {
        defaultLocale: 'nl',
      },
    },
    {
      resolve: '@jacco-meijer/wheelroom-plugin-templates',
      options: {
        defaultTemplateResolve: `dist:templates`,
        templateSets: templateSets,
        questionSets: questionSets,
      },
    },
  ],
}
