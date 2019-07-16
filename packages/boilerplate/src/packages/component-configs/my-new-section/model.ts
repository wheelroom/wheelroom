/**
 * Model definition
 *
 * Component type: myNewSection
 * Wheelroom type: section
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'
import { variations } from './variations'

export const model = {
  contentBackend: 'contentful',
  description: 'My new section',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo myNewSection title',
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
        name: 'My new section variation',
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
    author: {
      initialContent: 'Demo content for myNewSection/author',
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
      initialContent: 'Demo content for myNewSection/bodyText',
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
      initialContent: 'Demo content for myNewSection/heading',
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
  },
  modelVersion: '1.0.0',
  name: 'My new section',
  type: 'myNewSection',
  wheelroomType: 'section',
} as Model
