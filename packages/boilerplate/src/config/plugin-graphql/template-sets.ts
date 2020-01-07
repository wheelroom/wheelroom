import { TemplateSets } from '@jacco-meijer/wheelroom-plugin-graphql'
import { fragment } from './fragment'
import { query } from './query'

export const templateSets: TemplateSets = {
  gatsbyjs: {
    fragment: {
      filterGraphQLSetting: 'fragment',
      path: '%component-name%/fragment.tsx',
      template: fragment,
    },
    query: {
      filterGraphQLSetting: 'createPageQuery',
      path: '%component-name%/query.tsx',
      template: query,
    },
  },
}
