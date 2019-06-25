export const readmeTemplate = (
  componentFileName: string,
  componentClassName: string,
  componentAttributes: string,
  wheelroomType: string
) =>
  `## ${componentClassName}

Wheelroom type: ${wheelroomType}

${
  ['section', 'part', 'block'].includes(wheelroomType)
    ? `\`\`\`jsx
import { ${componentClassName} } from './${componentFileName}'
<${componentClassName} ${componentAttributes} />
\`\`\`
`
    : `## No views

Global and subPage components have no view. 
`
}
`
