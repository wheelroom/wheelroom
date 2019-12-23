import { modelFields } from '../helpers/model-fields.js'

export const componentReadme = (vars) => {
  // Skip this template if not present in filter array
  if (
    !vars.options.filter.includes(vars.component.component.model.wheelroomType)
  ) {
    return
  }

  const fields = modelFields(vars.component.component.model)
  const componentAttributes = fields
    .map((fieldName) => `${fieldName}="Value goes here" `)
    .join('')

  return `# ${vars.componentName.pascalCase}

Wheelroom type: ${vars.component.component.model.wheelroomType}

\`\`\`jsx
import { ${vars.componentName.pascalCase} } from './${vars.componentName.kebabCase}.js'
<${vars.componentName.pascalCase} ${componentAttributes} />
\`\`\`
`
}
