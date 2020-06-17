import { TemplateSets } from '@wheelroom/wheelroom-plugin-graphql'
import { fragment } from './fragment'
import { query } from './query'

export const graphqlTemplates: TemplateSets = {
  gatsbyjs: {
    fragment: {
      filterComponentSetting: 'asFragment',
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
