/**
 * Part of the mock output of the wheelroom binary. This output is part of the
 * input for a wheelroom command. Command handlers can be added by plugins.
 */

import { WheelroomComponents } from '@jacco-meijer/wheelroom'
export const argvComponents: WheelroomComponents = {
  article: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      articleText: {
        localized: false,
        required: false,
        type: 'richText',
      },
      author: {
        localized: false,
        required: true,
        type: 'shortText',
      },
      createdAt: {
        system: true,
        type: 'date',
      },
      date: {
        localized: false,
        required: true,
        type: 'date',
      },
      heading: {
        localized: false,
        required: true,
        type: 'shortText',
      },
      image: {
        localized: false,
        required: false,
        type: 'image',
      },
      slug: {
        initialContent: 'demo-slug-article',
        localized: false,
        required: true,
        type: 'shortText',
        unique: true,
      },
      subHeading: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        localized: false,
        required: true,
        type: 'shortText',
      },
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
  articleSection: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      articleText: {
        localized: true,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        localized: false,
        required: true,
        type: 'shortText',
      },
      variation: {
        helpText: 'Select a variation',
        items: [
          'Inline article text, specific to this section',
          'Linked article text, derived from slug in url',
        ],
        localized: false,
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
  articlesSection: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      articles: {
        components: ['article'],
        localized: false,
        required: false,
        type: 'multipleComponents',
      },
      heading: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      maxArticles: {
        initialContent: 5,
        localized: false,
        required: false,
        type: 'number',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        localized: false,
        required: true,
        type: 'shortText',
      },
    },
    graphQL: {
      fragment: true,
      pageSection: true,
    },
    modelVersion: '1.0.0',
  },
  exampleBlock: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      someText: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        localized: false,
        required: true,
        type: 'shortText',
      },
    },
    graphQL: {
      fragment: false,
      pageSection: false,
    },
    modelVersion: '1.0.0',
  },
  examplePart: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      someText: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        localized: false,
        required: true,
        type: 'shortText',
      },
    },
    graphQL: {
      fragment: true,
      pageSection: false,
    },
    modelVersion: '1.0.0',
  },
  featuredPageSection: {
    fields: {
      featuredPage: {
        component: 'page',
        helpText: 'Select a page',
        localized: false,
        required: true,
        type: 'singleComponent',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        localized: false,
        required: true,
        type: 'shortText',
      },
      variation: {
        helpText: 'Select a variation',
        items: [
          'Inline article text, specific to this section',
          'Linked article text, derived from slug in url',
        ],
        localized: false,
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
  globals: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      addressLine1: {
        localized: false,
        required: true,
        type: 'shortText',
      },
      addressLine2: {
        localized: false,
        required: true,
        type: 'shortText',
      },
      emailAddress: {
        localized: false,
        required: true,
        type: 'shortText',
      },
      githubUrl: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      heading: {
        localized: false,
        required: true,
        type: 'shortText',
      },
      linkedinUrl: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      phoneNumber: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      siteAuthor: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      siteDescription: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      siteKeywords: {
        localized: false,
        required: false,
        type: 'tags',
      },
      siteTitle: {
        localized: false,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        localized: false,
        required: true,
        type: 'shortText',
      },
    },
    graphQL: {
      createPageQuery: 'global',
      fragment: true,
    },
    modelVersion: '1.0.0',
  },
  page: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      image: {
        localized: false,
        required: false,
        type: 'image',
      },
      navigationTitle: {
        localized: false,
        required: true,
        type: 'shortText',
      },
      sections: {
        components: ['articleSection', 'articlesSection'],
        helpText: 'Select sections for this page',
        localized: false,
        required: true,
        type: 'multipleComponents',
      },
      seoDescription: {
        localized: false,
        maxLength: 155,
        required: true,
        type: 'shortText',
      },
      seoTitle: {
        localized: false,
        required: true,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        localized: false,
        required: true,
        type: 'shortText',
      },
    },
    graphQL: {
      createPageQuery: 'page',
      fragment: true,
    },
    modelVersion: '1.0.0',
  },
}
