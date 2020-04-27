import { Context } from '../types/context'

const getFieldType = (field: any) => {
  let type = 'plain'
  if (typeof field === 'object' && field.sys) {
    type = field.sys.type
  }
  if (typeof field === 'object' && field.nodeType) {
    type = 'richText'
  }
  if (Array.isArray(field)) {
    type = 'array'
  }
  return type
}

export const getFieldValueFromEntry = (context: Context, fieldId: string) => {
  const defaultLocale = context.contentfulApi.defaultLocale.code
  const entry = context.contentfulApi.entry
  const fields = entry.fields
  const field = fields[fieldId][defaultLocale]
  const type = getFieldType(field)
  switch (type) {
    case 'plain':
      return field
    case 'array':
      return field.map((element: any) => {
        const elementType = getFieldType(element)
        switch (elementType) {
          case 'plain':
            return element
          case 'Link':
            return element.sys.id
          default:
            console.log('Warning: element type not found:', elementType)
        }
      })
    case 'richText':
      return field
    case 'Link':
      return field.sys.id
    default:
      console.log('Warning: type not found:', type)
  }

  return field
}
