import { Fields as QbFields } from '@jacco-meijer/graphql-query-builder'
import { WheelroomComponent } from '@jacco-meijer/wheelroom'

interface TypeTable {
  [name: string]: QbFields
}

const typeTable: TypeTable = {
  global: {
    edges: {
      fields: {
        node: {
          fields: {
            id: {},
            node_locale: {},
          },
        },
      },
    } as QbFields,
  },
  page: {
    edges: {
      fields: {
        node: {
          fields: {
            id: {},
            node_locale: {},
            path: {},
            pathName: {},
          },
        },
      },
    } as QbFields,
  },
  subPage: {
    edges: {
      fields: {
        node: {
          fields: {
            id: {},
            node_locale: {},
            slug: {},
          },
        },
      },
    },
  } as QbFields,
}

export const getWheelroomQuery = (component: WheelroomComponent): QbFields => {
  if ('graphQL' in component && 'createPageQuery' in component.graphQL) {
    const fields = typeTable[component.graphQL.createPageQuery!]
    return fields
  }
  return {}
}
