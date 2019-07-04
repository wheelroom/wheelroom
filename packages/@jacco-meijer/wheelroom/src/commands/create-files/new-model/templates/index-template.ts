export const indexTemplate = (
  componentFileName: string,
  componentType: string,
  wheelroomType: string
) => `/**
 * Component index
 *
 * Component type: ${componentType}
 * Wheelroom type: ${wheelroomType}
 *
 */

import { ComponentsMapItem } from '@jacco-meijer/wheelroom'
${
  ['global', 'subPage'].includes(wheelroomType)
    ? `import { query } from './graphql'
import { variations } from './variations'
`
    : ``
}${
  wheelroomType !== 'block'
    ? `import { fragment } from './graphql'
`
    : ``
}import { model } from './model'
${
  ['section', 'part', 'block'].includes(wheelroomType)
    ? `import { variations } from './variations'
export * from './${componentFileName}'
`
    : ``
}export const ${componentType} = {
${
  wheelroomType !== 'block'
    ? `  fragment,
`
    : ``
}  model,
${
  wheelroomType === 'global' || wheelroomType === 'subPage'
    ? `  query,
`
    : ``
}  variations,
} as ComponentsMapItem
`
