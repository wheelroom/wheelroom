import { TemplateSets } from '@jacco-meijer/wheelroom-plugin-graphql'
import { fragment } from './fragment'
import { query } from './query'

export const templateSets: TemplateSets = {
  gatsbyjs: {
    fragment: {
      filterComponentSetting: 'fragment',
      path: '%component-name%/fragment.js',
      template: fragment,
    },
    query: {
      filterComponentSetting: 'asQuery',
      path: '%component-name%/query.js',
      template: query,
    },
  },
}
