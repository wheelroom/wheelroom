/**
 * Model definition
 *
 * Component type: articleSection
 * Wheelroom type: section
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'
import { variations } from './variations'

export const model = {
  contentBackend: 'contentful',
  description: 'Article section',
  displayField: 'title',
  fields: {
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
      initialContent: variations[0],
      settings: {
        helpText: 'Select variation',
      },
      specs: {
        name: 'Article section variation',
        required: true,
        type: 'Symbol',
        validations: [
          {
            in: variations,
          },
        ],
      },
      widgetId: 'dropdown',
    },
    // tslint:disable-next-line: object-literal-sort-keys
    articleText: {
      initialContent: 'Demo articleSection articleText',
      settings: {
        helpText: 'For inline variation, full text of the article',
      },
      specs: {
        localized: true,
        name: 'Article text',
        required: false,
        type: 'RichText',
      },
      widgetId: 'richTextEditor',
    },
  },
  modelVersion: '1.0.0',
  name: 'Article section',
  type: 'articleSection',
  wheelroomType: 'section',
} as Model
