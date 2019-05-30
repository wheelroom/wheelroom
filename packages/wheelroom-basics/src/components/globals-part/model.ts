export const GlobalsPartModel = {
  description: 'Globals part',
  displayField: 'title',
  fields: {
    addressLine1: {
      specs: {
        name: 'Address line 1',
        required: true,
        type: 'Symbol',
      },
    },
    addressLine2: {
      specs: {
        name: 'Address line 2',
        required: true,
        type: 'Symbol',
      },
    },
    emailAddress: {
      specs: {
        name: 'Email address',
        required: true,
        type: 'Symbol',
      },
    },
    heading: {
      specs: {
        name: 'Heading',
        required: true,
        type: 'Symbol',
      },
    },
    siteAuthor: {
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
}
