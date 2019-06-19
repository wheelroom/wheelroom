export const variationsTemplate = (
  componentFileName: string,
  componentClassName: string
) => `// These constants are ID's and used within the Contentful (editor) UI

import { ${componentClassName}BasicVar } from './${componentFileName}-basic-var'

export const variations = {
  'No variations yet': ${componentClassName}BasicVar,
}
`
