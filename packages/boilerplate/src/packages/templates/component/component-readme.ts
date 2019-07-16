import { getComponentFields } from '../partials/get-component-fields'
import { Vars } from '../types/vars'

export const componentReadme = (vars: Vars) => {
  // Skip this template if not present in filter array
  if (!vars.options.filter.includes(vars.answers.wheelroomType)) {
    return
  }

  const fields = getComponentFields(vars.answers.componentFields)
  const componentAttributes = fields
    .map((fieldName: string) => `${fieldName}="Value goes here" `)
    .join('')

  return `# ${vars.componentName.pascalCase}

Wheelroom type: ${vars.answers.wheelroomType}

\`\`\`jsx
import { ${vars.componentName.pascalCase} } from './${vars.componentName.dashCase}'
<${vars.componentName.pascalCase} ${componentAttributes} />
\`\`\`
`
}
