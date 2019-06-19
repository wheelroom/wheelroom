export const modelTemplate = (
  componentDescription: string,
  modelFields: string,
  componentType: string
) => `import { Model } from '@jacco-meijer/wheelroom'
import { variations } from './variations'

export const model = {
  contentBackend: 'contentful',
  description: '${componentDescription}',
  displayField: 'title',
  fields: {
 ${modelFields}
    title: {
      initialContent: 'Demo ${componentType} title',
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
    },
  },
  modelVersion: '1.0.0',
  name: '${componentDescription}',
  type: '${componentType}',
  wheelroomType: 'subPage',
} as Model
`
