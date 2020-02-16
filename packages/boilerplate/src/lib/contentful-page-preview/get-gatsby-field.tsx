import { getGatsbyFields } from './get-gatsby-fields'
import { ContentfulField, GatsbyField } from './types/entries'

export const getGatsbyField = (
  contentModel: any,
  contentTypeId: string,
  fieldName: string,
  cfField: ContentfulField
): GatsbyField => {
  const contentType = contentModel[contentTypeId][fieldName]

  switch (contentType.type) {
    case 'Array':
      const gatsbyArray: any[] = []
      cfField.forEach((entry: any) => {
        if ('fields' in entry) {
          gatsbyArray.push(getGatsbyFields(contentModel, entry))
        }
      })
      return gatsbyArray
    case 'Symbol':
      return cfField
      break
    case 'RichText':
      return { json: cfField }
      break
    case 'Text':
      return { [fieldName]: cfField }
    case 'Link':
      switch (contentType.linkType) {
        case 'Entry':
          return getGatsbyFields(contentModel, cfField)
          break
        case 'Asset':
          return {
            description: cfField.fields.description,
            title: cfField.fields.title,
            fluid: {
              sizes: '(max-width: 1024px) 100vw, 1024px',
              src: cfField.fields.file.url + '?w=1024&q=50',
              srcSet:
                cfField.fields.file.url +
                '?w=256&h=256&q=50 256w,\n' +
                cfField.fields.file.url +
                '?w=512&h=512&q=50 512w,\n' +
                cfField.fields.file.url +
                '?w=1024&h=1023&q=50 1024w,\n' +
                cfField.fields.file.url +
                '?w=1026&h=1025&q=50 1026w',
            },
          }
          break
        default:
          console.log(
            'TODO: CF',
            contentType.type,
            contentType.linkType,
            cfField
          )
          break
      }

    default:
      console.log('TODO: CF', contentType.type, contentType.linkType, cfField)
      break
  }
}
