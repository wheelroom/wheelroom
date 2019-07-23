import { Vars } from '../../types/vars'
import { componentFields } from '../helpers/component-fields'

export const configReadme = (vars: Vars) => {
  const fields = componentFields(vars.answers.componentFields)
  const fieldsList = [...fields, 'variation']
    .sort()
    .map(
      (fieldName: string) => `- ${fieldName}
`
    )
    .join('')

  return `# ${vars.componentName.pascalCase}

Wheelroom type: ${vars.answers.wheelroomType}

## Component fields

${fieldsList}

`
}
