import { Model } from '../../lib/types/model'

export const model = {
  contentBackend: 'contentful',
  description: 'Globals part',
  displayField: 'title',
  fields: {
    addressLine1: {
      initialContent: 'Demo address line 1',
      specs: {
        name: 'Address line 1',
        required: true,
        type: 'Symbol',
      },
    },
    addressLine2: {
      initialContent: 'Demo address line 2',
      specs: {
        name: 'Address line 2',
        required: true,
        type: 'Symbol',
      },
    },
    emailAddress: {
      initialContent: 'Demo email address',
      specs: {
        name: 'Email address',
        required: true,
        type: 'Symbol',
      },
    },
    heading: {
      initialContent: 'Demo heading',
      specs: {
        name: 'Heading',
        required: true,
        type: 'Symbol',
      },
    },
    siteAuthor: {
      initialContent: 'Demo site author',
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
      initialContent: 'Demo site description',
      settings: {
        helpText: 'The global site description used for SEO',
      },
      specs: {
        localized: true,
        name: 'Site description',
        required: false,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    siteKeywords: {
      initialContent: ['demo', 'site', 'keywords'],
      settings: {
        helpText: 'Global site keywords used for SEO',
      },
      specs: {
        items: {
          type: 'Symbol',
        },
        localized: true,
        name: 'Site keywords',
        required: false,
        type: 'Array',
      },
      widgetId: 'tagEditor',
    },
    siteTitle: {
      initialContent: 'Demo site title',
      settings: {
        helpText: 'The global site title used for SEO',
      },
      specs: {
        localized: true,
        name: 'Site title',
        required: false,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    title: {
      initialContent: 'Demo globals title',
      specs: {
        name: 'Title',
        required: true,
        type: 'Symbol',
      },
    },
  },
  modelVersion: '1.0.0',
  name: 'Globals part',
  type: 'globalsPart',
  wheelroomType: 'global',
} as Model
