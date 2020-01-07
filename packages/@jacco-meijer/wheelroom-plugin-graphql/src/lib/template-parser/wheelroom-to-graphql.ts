import { Fields as QbFields } from '@jacco-meijer/graphql-query-builder'
import { FieldType, firstUpperCase } from '@jacco-meijer/wheelroom'

interface TypeTable {
  [name: string]: QbFields
}

export const wheelroomToGraphql = (fieldName: string, field: FieldType) => {
  const multipleComponentFields: QbFields = {}
  if (
    (field.type === 'multipleComponents' || field.type === 'singleComponent') &&
    Array.isArray(field.allowedComponents)
  ) {
    field.allowedComponents.forEach((component: string) => {
      multipleComponentFields[firstUpperCase(component)] = { fragment: true }
    })
  }

  const typeTable: TypeTable = {
    date: {},
    dropdown: {},
    image: {
      fields: {
        title: {},
        // tslint:disable-next-line: object-literal-sort-keys
        description: {},
        fluid: {
          arguments: { maxWidth: '1024' },
          fields: {
            sizes: {},
            src: {},
            srcSet: {},
          },
        },
      } as QbFields,
    },
    longText: {
      fields: {
        [fieldName]: {},
      } as QbFields,
    },
    multipleComponents: {
      fields: {
        Node: {
          fields: multipleComponentFields,
          inlineFragment: true,
        },
      } as QbFields,
    },
    number: {},
    richText: {
      fields: {
        [fieldName]: {},
      } as QbFields,
    },
    shortText: {},
    singleComponent: {
      fields: {
        Node: {
          fields: multipleComponentFields,
          inlineFragment: true,
        },
      } as QbFields,
    },
    tags: {},
  }
  return typeTable[field.type!]
}
