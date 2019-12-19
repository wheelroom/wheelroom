import { Vars } from '../../types/vars.js'

export const getVariationList = (variations: string[], vars: Vars) =>
  variations
    .map(
      (
        fieldName: string
      ) => `  '${fieldName}': ${vars.componentName.pascalCase}BasicVar,
`
    )
    .join('')
