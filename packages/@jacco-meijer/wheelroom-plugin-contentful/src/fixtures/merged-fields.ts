import { ContentfulComponents } from '../types/contentful-components'

export const mergedFields: ContentfulComponents = {
  article: {
    description: 'Article',
    displayField: 'title',
    fields: {
      articleText: {
        initialContent: 'Demo content for article text',
        settings: {
          helpText: 'Article text for article',
        },
        specs: {
          localized: false,
          name: 'Article text',
          required: false,
          type: 'RichText',
        },
        widgetId: 'richTextEditor',
      },
      author: {
        initialContent: 'Demo content for author',
        settings: {
          helpText: 'Author for article',
        },
        specs: {
          localized: false,
          name: 'Author',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      date: {
        initialContent: '2019-06-03T00:00+01:00',
        settings: {
          helpText: 'Date for article',
        },
        specs: {
          localized: false,
          name: 'Date',
          required: true,
          type: 'Date',
        },
        widgetId: 'datePicker',
      },
      heading: {
        initialContent: 'Demo content for heading',
        settings: {
          helpText: 'Heading for article',
        },
        specs: {
          localized: false,
          name: 'Heading',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      image: {
        initialContent: 'demoAsset',
        settings: {
          helpText: 'Image for article',
        },
        specs: {
          linkType: 'Asset',
          localized: false,
          name: 'Image',
          required: false,
          type: 'Link',
          validations: [
            {
              linkMimetypeGroup: ['image'],
            },
          ],
        },
        widgetId: 'assetLinkEditor',
      },
      slug: {
        initialContent: 'demo-slug-article',
        settings: {
          helpText: 'Slug for article',
        },
        specs: {
          localized: false,
          name: 'Slug',
          required: true,
          type: 'Symbol',
          validations: [
            {
              unique: true,
            },
          ],
        },
        widgetId: 'singleLine',
      },
      subHeading: {
        initialContent: 'Demo content for sub heading',
        settings: {
          helpText: 'Sub heading for article',
        },
        specs: {
          localized: false,
          name: 'Sub heading',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      title: {
        initialContent: 'Demo content for title',
        settings: {
          helpText: 'Never displayed, only used for listing within Contentful',
        },
        specs: {
          localized: false,
          name: 'Title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
    },
    modelVersion: '1.0.0',
    type: 'article',
  },
  articleSection: {
    description: 'Article section',
    displayField: 'title',
    fields: {
      articleText: {
        initialContent: 'Demo content for article text',
        settings: {
          helpText: 'Article text for article section',
        },
        specs: {
          localized: true,
          name: 'Article text',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      title: {
        initialContent: 'Demo content for title',
        settings: {
          helpText: 'Never displayed, only used for listing within Contentful',
        },
        specs: {
          localized: false,
          name: 'Title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      variation: {
        initialContent: 'Inline article text, specific to this section',
        settings: {
          helpText: 'Select a variation',
        },
        specs: {
          localized: false,
          name: 'Variation',
          required: true,
          type: 'Symbol',
          validations: [
            {
              in: [
                'Inline article text, specific to this section',
                'Linked article text, derived from slug in url',
              ],
            },
          ],
        },
        widgetId: 'dropdown',
      },
    },
    modelVersion: '1.0.0',
    type: 'articleSection',
  },
  articlesSection: {
    description: 'Articles section',
    displayField: 'title',
    fields: {
      articles: {
        initialContent: 'article',
        settings: {
          helpText: 'Articles for articles section',
        },
        specs: {
          items: {
            linkType: 'Entry',
            type: 'Link',
            validations: [
              {
                linkContentType: ['article'],
              },
            ],
          },
          localized: false,
          name: 'Articles',
          required: false,
          type: 'Array',
        },
        widgetId: 'entryLinksEditor',
      },
      heading: {
        initialContent: 'Demo content for heading',
        settings: {
          helpText: 'Heading for articles section',
        },
        specs: {
          localized: false,
          name: 'Heading',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      maxArticles: {
        initialContent: 5,
        settings: {
          helpText: 'Max articles for articles section',
        },
        specs: {
          localized: false,
          name: 'Max articles',
          required: false,
          type: 'Integer',
        },
        widgetId: 'numberEditor',
      },
      title: {
        initialContent: 'Demo content for title',
        settings: {
          helpText: 'Never displayed, only used for listing within Contentful',
        },
        specs: {
          localized: false,
          name: 'Title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
    },
    modelVersion: '1.0.0',
    type: 'articlesSection',
  },
  exampleBlock: {
    description: 'Example block',
    displayField: 'title',
    fields: {
      someText: {
        initialContent: 'Demo content for some text',
        settings: {
          helpText: 'Some text for example block',
        },
        specs: {
          localized: false,
          name: 'Some text',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      title: {
        initialContent: 'Demo content for title',
        settings: {
          helpText: 'Never displayed, only used for listing within Contentful',
        },
        specs: {
          localized: false,
          name: 'Title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
    },
    modelVersion: '1.0.0',
    type: 'exampleBlock',
  },
  examplePart: {
    description: 'Example part',
    displayField: 'title',
    fields: {
      someText: {
        initialContent: 'Demo content for some text',
        settings: {
          helpText: 'Some text for example part',
        },
        specs: {
          localized: false,
          name: 'Some text',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      title: {
        initialContent: 'Demo content for title',
        settings: {
          helpText: 'Never displayed, only used for listing within Contentful',
        },
        specs: {
          localized: false,
          name: 'Title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
    },
    modelVersion: '1.0.0',
    type: 'examplePart',
  },
  globals: {
    description: 'Globals',
    displayField: 'title',
    fields: {
      addressLine1: {
        initialContent: 'Demo content for address line1',
        settings: {
          helpText: 'Address line1 for globals',
        },
        specs: {
          localized: false,
          name: 'Address line1',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      addressLine2: {
        initialContent: 'Demo content for address line2',
        settings: {
          helpText: 'Address line2 for globals',
        },
        specs: {
          localized: false,
          name: 'Address line2',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      emailAddress: {
        initialContent: 'Demo content for email address',
        settings: {
          helpText: 'Email address for globals',
        },
        specs: {
          localized: false,
          name: 'Email address',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      githubUrl: {
        initialContent: 'Demo content for github url',
        settings: {
          helpText: 'Github url for globals',
        },
        specs: {
          localized: false,
          name: 'Github url',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      heading: {
        initialContent: 'Demo content for heading',
        settings: {
          helpText: 'Heading for globals',
        },
        specs: {
          localized: false,
          name: 'Heading',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      linkedinUrl: {
        initialContent: 'Demo content for linkedin url',
        settings: {
          helpText: 'Linkedin url for globals',
        },
        specs: {
          localized: false,
          name: 'Linkedin url',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      phoneNumber: {
        initialContent: 'Demo content for phone number',
        settings: {
          helpText: 'Phone number for globals',
        },
        specs: {
          localized: false,
          name: 'Phone number',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      siteAuthor: {
        initialContent: 'Demo content for site author',
        settings: {
          helpText: 'Site author for globals',
        },
        specs: {
          localized: false,
          name: 'Site author',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      siteDescription: {
        initialContent: 'Demo content for site description',
        settings: {
          helpText: 'Site description for globals',
        },
        specs: {
          localized: false,
          name: 'Site description',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      siteKeywords: {
        initialContent: ['tag me', 'tag you', 'tag us'],
        settings: {
          helpText: 'Site keywords for globals',
        },
        specs: {
          items: {
            type: 'Symbol',
          },
          localized: false,
          name: 'Site keywords',
          required: false,
          type: 'Array',
        },
        widgetId: 'tagEditor',
      },
      siteTitle: {
        initialContent: 'Demo content for site title',
        settings: {
          helpText: 'Site title for globals',
        },
        specs: {
          localized: false,
          name: 'Site title',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      title: {
        initialContent: 'Demo content for title',
        settings: {
          helpText: 'Never displayed, only used for listing within Contentful',
        },
        specs: {
          localized: false,
          name: 'Title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
    },
    modelVersion: '1.0.0',
    type: 'globals',
  },
  page: {
    description: 'Page',
    displayField: 'title',
    fields: {
      image: {
        initialContent: 'demoAsset',
        settings: {
          helpText: 'Image for page',
        },
        specs: {
          linkType: 'Asset',
          localized: false,
          name: 'Image',
          required: false,
          type: 'Link',
          validations: [
            {
              linkMimetypeGroup: ['image'],
            },
          ],
        },
        widgetId: 'assetLinkEditor',
      },
      navigationTitle: {
        initialContent: 'Demo content for navigation title',
        settings: {
          helpText: 'Navigation title for page',
        },
        specs: {
          localized: false,
          name: 'Navigation title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      sections: {
        initialContent: 'articleSection',
        settings: {
          helpText: 'Select sections for this page',
        },
        specs: {
          items: {
            linkType: 'Entry',
            type: 'Link',
            validations: [
              {
                linkContentType: ['articleSection', 'articlesSection'],
              },
            ],
          },
          localized: false,
          name: 'Sections',
          required: true,
          type: 'Array',
        },
        widgetId: 'entryLinksEditor',
      },
      seoDescription: {
        initialContent: 'Demo content for seo description',
        settings: {
          helpText: 'Seo description for page',
        },
        specs: {
          localized: false,
          name: 'Seo description',
          required: true,
          type: 'Symbol',
          validations: [
            {
              size: {
                max: 155,
                min: 0,
              },
            },
          ],
        },
        widgetId: 'singleLine',
      },
      seoTitle: {
        initialContent: 'Demo content for seo title',
        settings: {
          helpText: 'Seo title for page',
        },
        specs: {
          localized: false,
          name: 'Seo title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      title: {
        initialContent: 'Demo content for title',
        settings: {
          helpText: 'Never displayed, only used for listing within Contentful',
        },
        specs: {
          localized: false,
          name: 'Title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
    },
    modelVersion: '1.0.0',
    type: 'page',
  },
}
