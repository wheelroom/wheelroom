/**
 * Part of the mock output of the wheelroom binary. This output is part of the
 * input for a wheelroom command. Command handlers can be added by plugins.
 */

import { WheelroomComponents } from '@jacco-meijer/wheelroom'
export const componentsOutput: WheelroomComponents = {
  article: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      articleText: {
        helpText: 'Article text for article',
        initialContent: 'Demo content for article article text',
        localized: false,
        required: false,
        type: 'richText',
      },
      author: {
        helpText: 'Author for article',
        initialContent: 'Demo content for article author',
        localized: false,
        required: true,
        type: 'shortText',
      },
      createdAt: {
        system: true,
        type: 'date',
      },
      date: {
        helpText: 'Date for article',
        initialContent: 'Demo content for article date',
        localized: false,
        required: true,
        type: 'date',
      },
      heading: {
        helpText: 'Heading for article',
        initialContent: 'Demo content for article heading',
        localized: false,
        required: true,
        type: 'shortText',
      },
      image: {
        helpText: 'Image for article',
        initialContent: 'Demo content for article image',
        localized: false,
        required: false,
        type: 'image',
      },
      slug: {
        helpText: 'Slug for article',
        initialContent: 'demo-slug-article',
        localized: false,
        required: true,
        type: 'shortText',
        unique: true,
      },
      subHeading: {
        helpText: 'Sub heading for article',
        initialContent: 'Demo content for article sub heading',
        localized: false,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        initialContent: 'Demo content for article title',
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
        helpText: 'Article text for article section',
        initialContent: 'Demo content for article section article text',
        localized: true,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        initialContent: 'Demo content for article section title',
        localized: false,
        required: true,
        type: 'shortText',
      },
      variation: {
        helpText: 'Select a variation',
        initialContent: 'Demo content for article section variation',
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
        helpText: 'Articles for articles section',
        initialContent: 'Demo content for articles section articles',
        localized: false,
        required: false,
        type: 'multipleComponents',
      },
      heading: {
        helpText: 'Heading for articles section',
        initialContent: 'Demo content for articles section heading',
        localized: false,
        required: false,
        type: 'shortText',
      },
      maxArticles: {
        helpText: 'Max articles for articles section',
        initialContent: 5,
        localized: false,
        required: false,
        type: 'number',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        initialContent: 'Demo content for articles section title',
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
        helpText: 'Some text for example block',
        initialContent: 'Demo content for example block some text',
        localized: false,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        initialContent: 'Demo content for example block title',
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
        helpText: 'Some text for example part',
        initialContent: 'Demo content for example part some text',
        localized: false,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        initialContent: 'Demo content for example part title',
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
  globals: {
    fields: {
      __typename: {
        system: true,
        type: 'shortText',
      },
      addressLine1: {
        helpText: 'Address line1 for globals',
        initialContent: 'Demo content for globals address line1',
        localized: false,
        required: true,
        type: 'shortText',
      },
      addressLine2: {
        helpText: 'Address line2 for globals',
        initialContent: 'Demo content for globals address line2',
        localized: false,
        required: true,
        type: 'shortText',
      },
      emailAddress: {
        helpText: 'Email address for globals',
        initialContent: 'Demo content for globals email address',
        localized: false,
        required: true,
        type: 'shortText',
      },
      githubUrl: {
        helpText: 'Github url for globals',
        initialContent: 'Demo content for globals github url',
        localized: false,
        required: false,
        type: 'shortText',
      },
      heading: {
        helpText: 'Heading for globals',
        initialContent: 'Demo content for globals heading',
        localized: false,
        required: true,
        type: 'shortText',
      },
      linkedinUrl: {
        helpText: 'Linkedin url for globals',
        initialContent: 'Demo content for globals linkedin url',
        localized: false,
        required: false,
        type: 'shortText',
      },
      phoneNumber: {
        helpText: 'Phone number for globals',
        initialContent: 'Demo content for globals phone number',
        localized: false,
        required: false,
        type: 'shortText',
      },
      siteAuthor: {
        helpText: 'Site author for globals',
        initialContent: 'Demo content for globals site author',
        localized: false,
        required: false,
        type: 'shortText',
      },
      siteDescription: {
        helpText: 'Site description for globals',
        initialContent: 'Demo content for globals site description',
        localized: false,
        required: false,
        type: 'shortText',
      },
      siteKeywords: {
        helpText: 'Site keywords for globals',
        initialContent: 'Demo content for globals site keywords',
        localized: false,
        required: false,
        type: 'tags',
      },
      siteTitle: {
        helpText: 'Site title for globals',
        initialContent: 'Demo content for globals site title',
        localized: false,
        required: false,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        initialContent: 'Demo content for globals title',
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
        helpText: 'Image for page',
        initialContent: 'Demo content for page image',
        localized: false,
        required: false,
        type: 'image',
      },
      navigationTitle: {
        helpText: 'Navigation title for page',
        initialContent: 'Demo content for page navigation title',
        localized: false,
        required: true,
        type: 'shortText',
      },
      sections: {
        components: ['articleSection', 'articlesSection'],
        helpText: 'Select sections for this page',
        initialContent: 'Demo content for page sections',
        localized: false,
        required: true,
        type: 'multipleComponents',
      },
      seoDescription: {
        helpText: 'Seo description for page',
        initialContent: 'Demo content for page seo description',
        localized: false,
        maxLength: 155,
        required: true,
        type: 'shortText',
      },
      seoTitle: {
        helpText: 'Seo title for page',
        initialContent: 'Demo content for page seo title',
        localized: false,
        required: true,
        type: 'shortText',
      },
      title: {
        helpText: 'Never displayed, only used for listing within Contentful',
        initialContent: 'Demo content for page title',
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
