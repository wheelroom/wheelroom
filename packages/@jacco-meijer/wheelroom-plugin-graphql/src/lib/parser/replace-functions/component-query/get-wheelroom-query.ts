import { Fields as QbFields } from '@jacco-meijer/graphql-query-builder'
import { AsQuery, WheelroomComponent } from '@jacco-meijer/wheelroom'

type TypeTable = Record<AsQuery, QbFields>

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
  if ('settings' in component && 'asQuery' in component.settings) {
    const fields = typeTable[component.settings.asQuery || 'page']
    return fields
  }
  return {}
}
