var questionSets = require('./wheelroom-question-sets')
var templateSets = require('./wheelroom-template-sets')

newConfig = {
  articleSection: {
    fields: {
      articleText: {
        localized: true,
      },
    },
    variations: [
      'Inline article text, specific to this section',
      'Linked article text, derived from slug in url',
    ],
  },
}

module.exports = {
  defaultComponentResolve: `@jacco-meijer/content-models`,
  components: {
    article: {},
    articleSection: {
      options: {
        localizedFields: ['articleText'],
        variations: [
          'Inline article text, specific to this section',
          'Linked article text, derived from slug in url',
        ],
      },
    },
    globals: {
      options: {
        localizedFields: [
          'addressLine1',
          'addressLine2',
          'emailAddress',
          'heading',
          'siteAuthor',
          'siteDescription',
          'siteKeywords',
          'siteTitle',
        ],
        skipFields: ['githubUrl', 'linkedinUrl'],
      },
    },
    myNewComponent: {
      resolve: 'dist:component-configs',
    },
    page: {
      resolve: `@jacco-meijer/content-models`,
      options: {
        initialPageSection: 'articleSection',
        localizedFields: [
          'navigationTitle',
          'path',
          'seoDescription',
          'seoTitle',
        ],
      },
    },
  },
  plugins: [
    {
      resolve: '@jacco-meijer/wheelroom-plugin-contentful',
      options: {
        defaultLocale: 'nl',
      },
    },
    {
      resolve: '@jacco-meijer/wheelroom-plugin-templates',
      options: {
        defaultTemplateResolve: `@jacco-meijer/content-models`,
        templateSets: templateSets,
        questionSets: questionSets,
      },
    },
  ],
}
