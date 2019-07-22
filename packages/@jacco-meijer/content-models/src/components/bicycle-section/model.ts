/**
 * Model definition
 *
 * Component type: bicycleSection
 * Wheelroom type: section
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

export const model = {
  contentBackend: 'contentful',
  description: 'Bicycle section',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo bicycleSection title',
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
        name: 'Bicycle section variation',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'dropdown',
    },
    // tslint:disable-next-line: object-literal-sort-keys
    text: {
      initialContent: 'Demo content for bicycleSection/text',
      settings: {
        helpText: 'Full section text',
      },
      specs: {
        name: 'Section text',
        required: false,
        type: 'RichText',
      },
      widgetId: 'richTextEditor',
    },
  },
  modelVersion: '1.0.0',
  name: 'Bicycle section',
  type: 'bicycleSection',
  wheelroomType: 'section',
} as Model
