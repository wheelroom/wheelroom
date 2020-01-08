import { Fields as QbFields } from '@jacco-meijer/graphql-query-builder'
import {
  FieldType,
  FieldTypeName,
  firstUpperCase,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'

type TypeTable = Record<FieldTypeName, QbFields>

export const wheelroomToGraphql = (
  components: WheelroomComponents,
  fieldName: string,
  field: FieldType
): QbFields => {
  const allowedRef: QbFields = {
    Node: {
      fields: {},
    },
  }
  if (
    (field.type === 'multipleComponents' || field.type === 'singleComponent') &&
    Array.isArray(field.allowedComponents)
  ) {
    if (field.expandFragmentRef) {
      field.allowedComponents.forEach((compName: string) => {
        const refFields = components[compName].fields
        Object.entries(refFields).forEach(
          ([rFieldName, rField]: [string, FieldType]) => {
            allowedRef.Node.fields![fieldName] = wheelroomToGraphql(
              components,
              rFieldName,
              rField
            )
          }
        )
      })
    } else {
      allowedRef.Node.inlineFragment = true
      field.allowedComponents.forEach((compName: string) => {
        allowedRef.Node.fields![firstUpperCase(compName)] = { fragment: true }
      })
    }
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
      fields: allowedRef,
    },
    number: {},
    richText: {
      fields: {
        [fieldName]: {},
      } as QbFields,
    },
    shortText: {},
    singleComponent: {
      fields: allowedRef,
    },
    tags: {},
  }
  return typeTable[field.type]
}
