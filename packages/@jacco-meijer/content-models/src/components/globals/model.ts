/**
 * Model definition
 *
 * Component type: globals
 * Wheelroom type: global
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

export const model = {
  contentBackend: 'contentful',
  description: 'Globals',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo globals title',
      settings: {
        helpText: 'Never displayed, only used for listing within Contentful',
      },
      specs: {
        name: 'Title',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    // tslint:disable-next-line: object-literal-sort-keys
    addressLine1: {
      initialContent: 'Demo content for globals/addressLine1',
      settings: {
        helpText: 'First line of the global address',
      },
      specs: {
        name: 'Address line 1',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    addressLine2: {
      initialContent: 'Demo content for globals/addressLine2',
      settings: {
        helpText: 'Seconnd line of the global address',
      },
      specs: {
        name: 'Address line 2',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    emailAddress: {
      initialContent: 'Demo content for globals/emailAddress',
      settings: {
        helpText: 'Global email address',
      },
      specs: {
        name: 'Email address',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    githubUrl: {
      initialContent: 'Demo content for globals/githubUrl',
      settings: {
        helpText: 'Full url including protocol to Github profile',
      },
      specs: {
        name: 'githubUrl',
        required: false,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    heading: {
      initialContent: 'Demo content for globals/heading',
      settings: {
        helpText: 'Site heading',
      },
      specs: {
        name: 'Heading',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    linkedinUrl: {
      initialContent: 'Demo content for globals/linkedinUrl',
      settings: {
        helpText: 'Full url including protocol to Linkedin profile',
      },
      specs: {
        name: 'Linkedin url',
        required: false,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    phoneNumber: {
      initialContent: 'Demo content for globals/phoneNumber',
      settings: {
        helpText: 'Site phone number',
      },
      specs: {
        name: 'Phone number',
        required: false,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    siteAuthor: {
      initialContent: 'Demo content for globals/siteAuthor',
      settings: {
        helpText: 'The global site author used for SEO',
      },
      specs: {
        name: 'Site author',
        required: false,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    siteDescription: {
      initialContent: 'Demo content for globals/siteDescription',
      settings: {
        helpText: 'The global site description used for SEO',
      },
      specs: {
        name: 'Site description',
        required: false,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    siteKeywords: {
      initialContent: ['demo', 'keywords', 'site', 'wheelroom'],
      settings: {
        helpText: 'Global site keywords used for SEO',
      },
      specs: {
        items: {
          type: 'Symbol',
        },
        name: 'Site keywords',
        required: false,
        type: 'Array',
      },
      widgetId: 'tagEditor',
    },
    siteTitle: {
      initialContent: 'Demo content for globals/siteTitle',
      settings: {
        helpText: 'Global title used for seo',
      },
      specs: {
        name: 'Site title',
        required: false,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
  },
  modelVersion: '1.0.0',
  name: 'Globals',
  type: 'globals',
  wheelroomType: 'global',
} as Model
