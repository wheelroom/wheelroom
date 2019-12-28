export const components = {
  page: {
    fields: {
      navigationTitle: { required: true },
      image: { type: 'image' },
      sections: {
        components: '%pageSectionsArray%',
        type: 'multipleComponents',
        helpText: 'Select sections for this page',
        required: true,
      },
      seoDescription: { maxLength: 155, required: true },
      seoTitle: { required: true },
    },
    graphQL: {
      fragment: true,
      createPageQuery: 'page',
    },
    modelVersion: '1.0.0',
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
    graphQL: {
      fragment: true,
      createPageQuery: 'gobal',
    },
    modelVersion: '1.0.0',
  },
  article: {
    fields: {
      articleText: { type: 'richtText' },
      author: { required: true },
      createdAt: { system: true },
      date: { type: 'date', required: true },
      heading: { required: true },
      image: { type: 'image' },
      slug: {
        unique: true,
        required: true,
        initialContent: 'demo-slug-article',
      },
      subHeading: {},
      updatedAt: { system: true },
    },
    graphQL: {
      fragment: true,
      limit: 10,
      createPageQuery: 'subPage',
    },
    modelVersion: '1.0.0',
  },
  // Sections are retrieved as a part of a page
  articleSection: {
    fields: {
      articleText: {
        localized: true,
      },
    },
    graphQL: {
      fragment: true,
      pageSection: true,
    },
    modelVersion: '1.0.0',
    variation: {
      type: 'dropdown',
      helpText: 'Select a variation',
      inValidation: [
        'Inline article text, specific to this section',
        'Linked article text, derived from slug in url',
      ],
      required: true,
    },
  },
  // Sections are retrieved as a part of a page
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
    graphQL: {
      fragment: true,
      pageSection: true,
    },
    modelVersion: '1.0.0',
  },
  // Parts are retrieved as a part of a section
  examplePart: {
    fields: {
      someText: {},
    },
    graphQL: {
      fragment: true,
      pageSection: false,
    },
    modelVersion: '1.0.0',
  },
  // Blocks are used as an embedded part of a Contentful richText field
  exampleBlock: {
    fields: {
      someText: {},
    },
    graphQL: {
      fragment: false,
      pageSection: false,
    },
    modelVersion: '1.0.0',
  },
}
