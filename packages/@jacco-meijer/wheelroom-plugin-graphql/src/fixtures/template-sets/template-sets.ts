import { TemplateSets } from '../../types/template-sets'
import { fragment } from './fragment'
import { queries } from './queries'

export const templateSets: TemplateSets = {
  gatsbyjs: {
    fragment: {
      filterGraphQLSetting: 'fragment',
      path: '%component-name%-fragment.js',
      template: fragment,
    },
    query: {
      filterGraphQLSetting: 'createPageQuery',
      path: 'graphql-queries.js',
      template: queries,
    },
  },
}
