import { ContentfulModel } from './types/entries'

export const contentModelByIds = (contentTypes: any): ContentfulModel => {
  return contentTypes.items.reduce((outerResult: any, contentType: any) => {
    outerResult[contentType.name] = contentType.fields.reduce(
      (innerResult: any, field: any) => {
        innerResult[field.id] = field
        return innerResult
      },
      {}
    )
    return outerResult
  }, {})
}
