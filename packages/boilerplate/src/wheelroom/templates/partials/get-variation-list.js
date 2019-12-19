export const getVariationList = (variations, vars) =>
  variations
    .map(
      fieldName => `  '${fieldName}': ${vars.componentName.pascalCase}BasicVar,
`
    )
    .join('')
