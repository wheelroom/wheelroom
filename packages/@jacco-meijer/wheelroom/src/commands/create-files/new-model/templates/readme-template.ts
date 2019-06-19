export const readmeTemplate = (
  componentFileName: string,
  componentClassName: string,
  componentAttributes: string
) => `## ${componentClassName}

\`\`\`jsx
import { ${componentClassName} } from './${componentFileName}'
<${componentClassName} ${componentAttributes} />
\`\`\`
`
