export const indexTemplate = (
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
  wheelroomType === 'global' || wheelroomType === 'subPage'
    ? `import { query as ${componentType}Query } from './graphql'
`
    : ``
}import { fragment as ${componentType}Fragment } from './graphql'
import { model as ${componentType}Model } from './model'

export const ${componentType} = {
  fragment: ${componentType}Fragment,
  model: ${componentType}Model,
${
  wheelroomType === 'global' || wheelroomType === 'subPage'
    ? `  query: ${componentType}Query,
`
    : ``
}} as ComponentConfig
`
