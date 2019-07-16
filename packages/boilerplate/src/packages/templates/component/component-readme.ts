export const componentReadme = (vars: any) =>
  `# ${vars.componentClassName}

Wheelroom type: ${vars.wheelroomType}

\`\`\`jsx
import { ${vars.componentClassName} } from './${vars.componentFileName}'
<${vars.componentClassName} ${vars.componentAttributes} />
\`\`\`
`
