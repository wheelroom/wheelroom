var questionSets = require('./wheelroom-question-sets')
var templateSets = require('./wheelroom-template-sets')

module.exports = {
  fieldDefaults: {
    localized: false,
    required: false,
    type: 'shortText',
  },
  components: {
    page: {
      fields: {
        navigationTitle: { required: true },
        image: { type: 'image' },
        seoDescription: { maxLength: 155, required: true },
        seoTitle: { required: true },
      },
      query: {
        mainQuery: true,
        type: 'page',
      },
    },
    globals: {
      fields: {
        addressLine1: { required: true },
        addressLine2: { required: true },
        emailAddress: { required: true },
        githubUrl: {},
        heading: { required: true },
        linkedinUrl: {},
        phoneNumber: {},
        siteAuthor: {},
        siteDescription: {},
        siteKeywords: { type: 'tags' },
        siteTitle: {},
      },
      query: {
        mainQuery: true,
        type: 'global',
      },
    },
    article: {
      fields: {
        articleText: { type: 'richtText' },
        author: { required: true },
        createdAt: { systemField: true },
        date: { type: 'date', required: true },
        heading: { required: true },
        image: { type: 'image' },
        subHeading: {},
        updatedAt: { systemField: true },
      },
      query: {
        limit: 10,
        mainQuery: true,
        type: 'subPage',
      },
    },
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
      query: {
        mainQuery: false,
        type: 'sectionOfPage',
      },
    },
    articlesSection: {
      fields: {
        articles: {
          type: 'multipleComponents',
          components: ['article'],
        },
        heading: {},
        maxArticles: {
          type: 'number',
          initialContent: 5,
        },
      },
      query: {
        mainQuery: false,
        type: 'sectionOfPage',
      },
    },
    examplePart: {
      fields: {
        someText: {},
      },
      query: {
        mainQuery: false,
        type: 'partOfSection',
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
