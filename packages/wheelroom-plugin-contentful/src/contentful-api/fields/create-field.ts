import { ContentfulField } from '../../types/contentful-fields'
import { Context } from '../../types/context'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const richTextFromMarkdown = require('@contentful/rich-text-from-markdown')
  .richTextFromMarkdown
/**
 *
 * Take the context and a ContentfulField and add createContentData to the right
 * place in the structure. Also, add the default locale
 *
 */

export const createField = async ({
  context,
  field,
  createContentData,
}: {
  context: Context
  field: ContentfulField
  createContentData: any
}) => {
  const defaultLocale = context.contentfulApi.defaultLocale.code
  const missingField = {
    [defaultLocale]: 'createField: missing fieldType: ' + field.specs.type,
  }
  switch (field.specs.type) {
    case 'Boolean':
    case 'Date':
    case 'Integer':
    case 'Symbol':
    case 'Text':
      return {
        [defaultLocale]: createContentData,
      }
      break

    case 'Array':
      const arrayItems = field.specs.items || ({} as any)
      switch (arrayItems.type) {
        case 'Link':
          return {
            [defaultLocale]: (createContentData as []).map((data: string) => {
              return {
                sys: {
                  id: data,
                  linkType: 'Entry',
                  type: 'Link',
                },
              }
            }),
          }
          break

        case 'Boolean':
        case 'Date':
        case 'Integer':
        case 'Symbol':
        case 'Text':
          return {
            [defaultLocale]: createContentData,
          }
        default:
          return missingField
      }
      break

    case 'RichText':
      const document = await richTextFromMarkdown(createContentData)
      return {
        [defaultLocale]: document,
      }

    case 'Link':
      switch (field.specs.linkType) {
        case 'Asset':
          return {
            [defaultLocale]: {
              sys: {
                id: 'demoAsset',
                linkType: 'Asset',
                type: 'Link',
              },
            },
          }

        case 'Entry':
          return {
            [defaultLocale]: {
              sys: {
                id: createContentData,
                linkType: 'Entry',
                type: 'Link',
              },
            },
          }
        default:
          return missingField
      }
      break

    default:
      return missingField
  }
}
