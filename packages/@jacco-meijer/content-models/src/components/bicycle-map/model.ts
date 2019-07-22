/**
 * Model definition
 *
 * Component type: bicycleMap
 * Wheelroom type: block
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

export const model = {
  contentBackend: 'contentful',
  description: 'Bicycle map',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo bicycleMap title',
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
        name: 'Bicycle map variation',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'dropdown',
    },
    // tslint:disable-next-line: object-literal-sort-keys
    mapHeight: {
      initialContent: 300,
      settings: {
        helpText: 'Set the fixed height of the map in pixels',
      },
      specs: {
        name: 'Height of the map',
        required: false,
        type: 'Integer',
      },
      widgetId: 'numberEditor',
    },
  },
  modelVersion: '1.0.0',
  name: 'Bicycle map',
  type: 'bicycleMap',
  wheelroomType: 'block',
} as Model
