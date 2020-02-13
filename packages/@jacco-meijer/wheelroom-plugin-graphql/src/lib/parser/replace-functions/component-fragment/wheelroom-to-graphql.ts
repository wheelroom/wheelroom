import { Fields as QbFields } from '@jacco-meijer/graphql-query-builder'
import {
  FieldType,
  FieldTypeName,
  firstUpperCase,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'

type TypeTable = Record<FieldTypeName, QbFields>

interface WheelroomToGraphql {
  components: WheelroomComponents
  fieldName: string
  field: FieldType
  recursiveCall?: boolean
}

export const wheelroomToGraphql = (context: WheelroomToGraphql): QbFields => {
  const reference: QbFields = {}
  if (
    (context.field.type === 'multipleComponents' ||
      context.field.type === 'singleComponent') &&
    Array.isArray(context.field.allowedComponents)
  ) {
    if (context.field.expandFragmentRef) {
      if (Object.keys(context.components).length === 1) {
        console.log(`Warning: expandFragmentRef detected with only one component present, did you use a filter?
  - The %componentFragment(prefix:x)% needs another component to be able to expand the reference`)
      }
      context.field.allowedComponents.forEach((compName: string) => {
        if (!(compName in context.components)) {
          // Most probably the filter argument is active
          return
        }
        const refFields = context.components[compName].fields
        Object.entries(refFields).forEach(
          ([rFieldName, rField]: [string, FieldType]) => {
            // Do not do any more recursion on multipleComponents or
            // singleComponent fields
            if (
              rField.type !== 'multipleComponents' &&
              rField.type !== 'singleComponent' &&
              !context.recursiveCall
            ) {
              reference[rFieldName] = wheelroomToGraphql({
                ...context,
                field: rField,
                fieldName: rFieldName,
                recursiveCall: true,
              })
            }
          }
        )
      })
    } else {
      reference.Node = {
        fields: {},
      }
      reference.Node.inlineFragment = true
      context.field.allowedComponents.forEach((compName: string) => {
        reference.Node.fields![firstUpperCase(compName)] = { fragment: true }
      })
    }
  }

  const typeTable: TypeTable = {
    date: {},
    dropdown: {},
    image: {
      fields: {
        title: {},
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
        [context.fieldName]: {},
      } as QbFields,
    },
    multipleComponents: {
      fields: reference,
    },
    number: {},
    richText: {
      fields: {
        json: {},
      } as QbFields,
    },
    shortText: {},
    singleComponent: {
      fields: reference,
    },
    tags: {},
  }
  return typeTable[context.field.type]
}
