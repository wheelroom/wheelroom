/**
 * Model definition
 *
 * Component type: articleSection
 * Wheelroom type: section
 *
 */

import { Model } from '@jacco-meijer/wheelroom'
import { variations } from './variations'

export const model = {
  contentBackend: 'contentful',
  description: 'Article section',
  displayField: 'title',
  fields: {
    author: {
      initialContent: 'Demo content for articleSection/author',
      settings: {
        helpText: 'Describe how to use the field author',
      },
      specs: {
        localized: false,
        name: 'author',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    bodyText: {
      initialContent: 'Demo content for articleSection/bodyText',
      settings: {
        helpText: 'Describe how to use the field bodyText',
      },
      specs: {
        localized: false,
        name: 'bodyText',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    heading: {
      initialContent: 'Demo content for articleSection/heading',
      settings: {
        helpText: 'Describe how to use the field heading',
      },
      specs: {
        localized: false,
        name: 'heading',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },

    title: {
      initialContent: 'Demo articleSection title',
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
      initialContent: Object.keys(variations)[0],
      settings: {
        helpText: 'Select variation',
      },
      specs: {
        name: 'Article section variation',
        required: true,
        type: 'Symbol',
        validations: [
          {
            in: Object.keys(variations),
          },
        ],
      },
      widgetId: 'dropdown',
    },  },
  modelVersion: '1.0.0',
  name: 'Article section',
  type: 'articleSection',
  wheelroomType: 'section',
} as Model
