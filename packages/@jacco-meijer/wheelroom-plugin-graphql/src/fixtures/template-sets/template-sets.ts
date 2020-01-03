import { TemplateSets } from '../../types/template-sets'
import { fragment } from './fragment'
import { query } from './query'

export const templateSets: TemplateSets = {
  gatsbyjs: {
    fragment: {
      filterGraphQLSetting: 'fragment',
      path: '%component-name%-fragment.js',
      template: fragment,
    },
    query: {
      filterGraphQLSetting: 'createPageQuery',
      path: '%component-name%-query.js',
      template: query,
    },
  },
}
