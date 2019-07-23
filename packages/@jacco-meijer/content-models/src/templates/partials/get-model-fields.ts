import { Vars } from '../../types/vars'

export const getModelFields = (fields: string[], vars: Vars) =>
  fields
    .map(
      (fieldName: string) => `    ${fieldName}: {
      initialContent: 'Demo content for ${vars.componentName.camelCase}/${fieldName}',
      settings: {
        helpText: 'Describe how to use the field ${fieldName}',
      },
      specs: {
        name: '${fieldName}',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
`
    )
    .join('')
