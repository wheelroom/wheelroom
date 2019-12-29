import { Components } from '@jacco-meijer/wheelroom'

export const components: Components = {
  article: {
    fields: {
      articleText: {
        type: 'richText',
      },
      author: {
        required: true,
      },
      createdAt: {
        system: true,
        type: 'date',
      },
      date: {
        required: true,
        type: 'date',
      },
      heading: {
        required: true,
      },
      image: {
        type: 'image',
      },
      slug: {
        initialContent: 'demo-slug-article',
        required: true,
        unique: true,
      },
      subHeading: {},
      updatedAt: {
        system: true,
        type: 'date',
      },
    },
    graphQL: {
      createPageQuery: 'subPage',
      fragment: true,
      limit: 10,
    },
    modelVersion: '1.0.0',
  },
  // Sections are retrieved as a part of a page
  articleSection: {
    fields: {
      articleText: {
        localized: true,
      },
      variation: {
        helpText: 'Select a variation',
        items: [
          'Inline article text, specific to this section',
          'Linked article text, derived from slug in url',
        ],
        required: true,
        type: 'dropdown',
      },
    },
    graphQL: {
      fragment: true,
      pageSection: true,
    },
    modelVersion: '1.0.0',
  },
  // Sections are retrieved as a part of a page
  articlesSection: {
    fields: {
      articles: {
        components: ['article'],
        type: 'multipleComponents',
      },
      heading: {},
      maxArticles: {
        initialContent: 5,
        type: 'number',
      },
    },
    graphQL: {
      fragment: true,
      pageSection: true,
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
  globals: {
    fields: {
      addressLine1: {
        required: true,
      },
      addressLine2: {
        required: true,
      },
      emailAddress: {
        required: true,
      },
      githubUrl: {},
      heading: {
        required: true,
      },
      linkedinUrl: {},
      phoneNumber: {},
      siteAuthor: {},
      siteDescription: {},
      siteKeywords: {
        type: 'tags',
      },
      siteTitle: {},
    },
    graphQL: {
      createPageQuery: 'global',
      fragment: true,
    },
    modelVersion: '1.0.0',
  },
  page: {
    fields: {
      image: {
        type: 'image',
      },
      navigationTitle: {
        required: true,
      },
      sections: {
        components: '%pageSectionsArray%',
        helpText: 'Select sections for this page',
        required: true,
        type: 'multipleComponents',
      },
      seoDescription: {
        maxLength: 155,
        required: true,
      },
      seoTitle: {
        required: true,
      },
    },
    graphQL: {
      createPageQuery: 'page',
      fragment: true,
    },
    modelVersion: '1.0.0',
  },
}
