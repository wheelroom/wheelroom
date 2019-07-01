export const modelTemplate = (
  componentDescription: string,
  modelFields: string,
  componentType: string,
  wheelroomType: string
) => `/**
 * Model definition
 *
 * Component type: ${componentType}
 * Wheelroom type: ${wheelroomType}
 *
 */

import { Model } from '@jacco-meijer/wheelroom'
${
  ['section', 'part', 'block'].includes(wheelroomType)
    ? `import { variations } from './variations'
`
    : ``
}
export const model = {
  contentBackend: 'contentful',
  description: '${componentDescription}',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo ${componentType} title',
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
${
  ['section', 'part', 'block'].includes(wheelroomType)
    ? `    variation: {
      initialContent: Object.keys(variations)[0],
      settings: {
        helpText: 'Select variation',
      },
      specs: {
        name: '${componentDescription} variation',
        required: true,
        type: 'Symbol',
        validations: [
          {
            in: Object.keys(variations),
          },
        ],
      },
      widgetId: 'dropdown',
    },`
    : ``
}${modelFields}
  },
  modelVersion: '1.0.0',
  name: '${componentDescription}',
  type: '${componentType}',
  wheelroomType: '${wheelroomType}',
} as Model
`
