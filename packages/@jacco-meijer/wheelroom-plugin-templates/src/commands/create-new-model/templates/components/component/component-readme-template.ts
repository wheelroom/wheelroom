import { Vars } from '../../../create-new-model'

export const componentReadmeTemplate = (vars: Vars) =>
  `# ${vars.componentClassName}

Wheelroom type: ${vars.wheelroomType}

\`\`\`jsx
import { ${vars.componentClassName} } from './${vars.componentFileName}'
<${vars.componentClassName} ${vars.componentAttributes} />
\`\`\`
`
