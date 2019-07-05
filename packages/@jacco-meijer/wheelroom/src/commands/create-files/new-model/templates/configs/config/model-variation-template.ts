import {Vars } from '../../../create-new-model'

export const modelVariationTemplate = (vars: Vars) => `/**
 * Model definition
 *
 * Component type: ${vars.componentType}
 * Wheelroom type: ${vars.wheelroomType}
 *
 */

import { Model } from '@jacco-meijer/wheelroom'
import { variations } from './variations'

export const model = {
  contentBackend: 'contentful',
  description: '${vars.componentDescription}',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo ${vars.componentType} title',
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
        name: '${vars.componentDescription} variation',
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
${vars.modelFields}  },
  modelVersion: '1.0.0',
  name: '${vars.componentDescription}',
  type: '${vars.componentType}',
  wheelroomType: '${vars.wheelroomType}',
} as Model
`
