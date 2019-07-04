/**
 * Model definition
 *
 * Component type: bicycleMap
 * Wheelroom type: block
 *
 */

import { Model } from '@jacco-meijer/wheelroom'
import { variations } from './variations'

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
      initialContent: variations[0],
      settings: {
        helpText: 'Select variation',
      },
      specs: {
        name: 'Bicycle map variation',
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
  wheelroomType: 'part',
} as Model
