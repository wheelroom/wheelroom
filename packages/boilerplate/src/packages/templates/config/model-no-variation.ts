export const modelNoVariation = (vars: any) => `/**
 * Model definition
 *
 * Component type: ${vars.componentType}
 * Wheelroom type: ${vars.wheelroomType}
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

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
    // tslint:disable-next-line: object-literal-sort-keys
${vars.modelFields}  },
  modelVersion: '1.0.0',
  name: '${vars.componentDescription}',
  type: '${vars.componentType}',
  wheelroomType: '${vars.wheelroomType}',
} as Model
`
