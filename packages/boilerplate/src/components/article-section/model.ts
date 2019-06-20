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
    articleText: {
      initialContent: 'Demo articleSection articleText',
      settings: {
        helpText: 'Generated field',
      },
      specs: {
        localized: true,
        name: 'articleText',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'richTextEditor',
    },

    title: {
      initialContent: 'Demo articleSection title',
      settings: {
        helpText: 'Title of the article',
      },
      specs: {
        name: 'Title',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    variation: {
      initialContent: 'No variations yet',
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
    },
  },
  modelVersion: '1.0.0',
  name: 'Article section',
  type: 'articleSection',
  wheelroomType: 'section',
} as Model
