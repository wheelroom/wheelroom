export const getModelFields = (fields, vars) =>
  fields
    .map(
      (fieldName) => `    ${fieldName}: {
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
