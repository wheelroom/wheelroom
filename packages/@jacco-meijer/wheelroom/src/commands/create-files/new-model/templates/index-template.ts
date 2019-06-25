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

import { ComponentConfig } from '@jacco-meijer/wheelroom'
${
  ['global', 'subPage'].includes(wheelroomType)
    ? `import { query as ${componentType}Query } from './graphql'
`
    : ``
}${
  wheelroomType !== 'block'
    ? `import { fragment as ${componentType}Fragment } from './graphql'
`
    : ``
}import { model as ${componentType}Model } from './model'

${
  ['section', 'part', 'block'].includes(wheelroomType)
    ? `export * from './${componentFileName}'
`
    : ``
}export const ${componentType} = {
  ${
    wheelroomType !== 'block'
      ? `fragment: ${componentType}Fragment,
  `
      : ``
  }model: ${componentType}Model,
${
  wheelroomType === 'global' || wheelroomType === 'subPage'
    ? `  query: ${componentType}Query,
`
    : ``
}} as ComponentConfig
`
