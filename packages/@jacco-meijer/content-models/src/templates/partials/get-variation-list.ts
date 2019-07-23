import { Vars } from '../../types/vars'

export const getVariationList = (variations: string[], vars: Vars) =>
  variations
    .map(
      (
        fieldName: string
      ) => `  '${fieldName}': ${vars.componentName.pascalCase}BasicVar,
`
    )
    .join('')
