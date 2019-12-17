import { Vars } from '../../types/vars'
import { modelFields } from '../helpers/model-fields'

export const componentReadme = (vars: Vars) => {
  // Skip this template if not present in filter array
  if (
    !vars.options.filter.includes(vars.component.component.model.wheelroomType)
  ) {
    return
  }

  const fields = modelFields(vars.component.component.model)
  const componentAttributes = fields
    .map((fieldName: string) => `${fieldName}="Value goes here" `)
    .join('')

  return `# ${vars.componentName.pascalCase}

Wheelroom type: ${vars.component.component.model.wheelroomType}

\`\`\`jsx
import { ${vars.componentName.pascalCase} } from './${vars.componentName.dashCase}'
<${vars.componentName.pascalCase} ${componentAttributes} />
\`\`\`
`
}
