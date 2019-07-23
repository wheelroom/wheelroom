/**
 * Model definition
 *
 * Component type: footerSection
 * Wheelroom type: section
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

export const model = {
  contentBackend: 'contentful',
  description: 'Footer section',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo footerSection title',
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
    variation: {
      initialContent: 'firstVariation',
      settings: {
        helpText: 'Select variation',
      },
      specs: {
        name: 'Footer section variation',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'dropdown',
    },
    // tslint:disable-next-line: object-literal-sort-keys
    addressHeading: {
      initialContent: 'Demo content for globals/addressHeading',
      settings: {
        helpText: 'Heading above address',
      },
      specs: {
        name: 'Address heading',
        required: false,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    contactHeading: {
      initialContent: 'Demo content for globals/contactHeading',
      settings: {
        helpText: 'Heading above contact details',
      },
      specs: {
        name: 'Contact heading',
        required: false,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    navigation: {
      initialContent: 'navigation',
      settings: {
        helpText: 'Select a navigation for this footer',
      },
      specs: {
        linkType: 'Entry',
        name: 'Navigation',
        required: false,
        type: 'Link',
        validations: [
          {
            linkContentType: ['navigation'],
          },
        ],
      },
      widgetId: 'entryLinkEditor',
    },
  },
  modelVersion: '1.0.0',
  name: 'Footer section',
  type: 'footerSection',
  wheelroomType: 'section',
} as Model
