export const components = {
  page: {
    fields: {
      navigationTitle: { required: true },
      image: { fieldType: 'image' },
      sections: {
        components: '%pageSectionsArray%',
        fieldType: 'multipleComponents',
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
      siteKeywords: { fieldType: 'tags' },
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
      articleText: { fieldType: 'richtText' },
      author: { required: true },
      createdAt: { systemField: true },
      date: { fieldType: 'date', required: true },
      heading: { required: true },
      image: { fieldType: 'image' },
      slug: {
        unique: true,
        required: true,
        initialContent: 'demo-slug-article',
      },
      subHeading: {},
      updatedAt: { systemField: true },
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
      fieldType: 'dropdown',
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
        fieldType: 'multipleComponents',
        components: ['article'],
      },
      heading: {},
      maxArticles: {
        fieldType: 'number',
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
