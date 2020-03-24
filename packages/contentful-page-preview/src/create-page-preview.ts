import * as contentful from 'contentful'
import { contentModelByIds } from './content-model-by-ids'
import { PreviewSecrets } from './types/preview-secrets'
import {
  GatsbyFields,
  ContentfulModel,
  ContentfulEntry,
  ContentfulField,
  GatsbyField,
} from './types/entries'

/**
 * Given a Contentful entry ID and secrets, this factory creates objects that:
 *
 * - fetches the entry from Contentful
 * - fetches the content model from Contentful
 * - adapts Contentful data to match Gatsby Graphql schema
 * - returns React props for Gatbsy
 *
 * TODO: Refactor into separate files
 *
 */

/** Contains member variables and methods for the object createPagePreview returns */
interface PagePreviewMembers {
  _client?: any
  _cfConfig: any
  _contentModel: ContentfulModel
  _cfEntry?: ContentfulEntry
  _PREFIX: string
  _include?: number
  _maxDepth?: number
  _fetch: () => void
  _processCfEntry: (
    cfEntry: ContentfulEntry,
    level: number
  ) => GatsbyFields | undefined
  _processCfField: (
    /** Contentful content type id */
    contentTypeId: string,
    /** Contentful and Gatbsy field name */
    fieldName: string,
    cfField: ContentfulField,
    level: number
  ) => GatsbyField
  getGatbsyFields: () => GatsbyFields | undefined
}

interface CreatePagePreviewContext {
  previewSecrets: PreviewSecrets
  /** Entry id to fetch from Contentful */
  entryId: string
  /** Fetch content for this specific locale */
  locale?: string
  /** Include parameter added to the Contentful query (defaults to 5) */
  include?: number
  /** Maximum depth processing circular refs (defaults to 5) */
  maxDepth?: number
}

const firstUpperCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)

const reportMissingType = (
  name: string,
  value: any,
  contentType: any,
  cfField: ContentfulField
) => {
  console.log(
    `Error: missing '${name}' with value '${value}'`,
    contentType,
    cfField
  )
}

export const createPagePreview = (context: CreatePagePreviewContext) => {
  const pagePreview: PagePreviewMembers = {
    async getGatbsyFields() {
      await this._fetch()
      if (!this._cfEntry) {
        return
      }
      const gatsbyFields = this._processCfEntry(this._cfEntry, 0)
      return gatsbyFields
    },
    async _fetch() {
      if (!(this._cfConfig.accessToken && this._cfConfig.space)) {
        console.error(
          `Could not initialize Contentful client:
    AccessToken: ${this._cfConfig.accessToken}
    Space; ${this._cfConfig.space}`
        )
        return
      }
      if (this._cfConfig.accessToken && this._cfConfig.space) {
        if (!context.entryId) {
          console.log(
            'Warning: no entryId found, getting the first entry avaiable'
          )
        }
        try {
          this._client = contentful.createClient(this._cfConfig)
          const query: any = {
            'sys.id': context.entryId,
            include: this._include || 5,
          }
          if (context.locale) {
            query.locale = context.locale
          }
          const entries = await this._client.getEntries(query)
          this._cfEntry = entries.items[0]
          const contentTypeId = this._cfEntry.sys.contentType.sys.id
          const contentTypes = await this._client.getContentTypes(contentTypeId)
          // console.log('ContentTypes', JSON.stringify(contentTypes, null, 2))

          this._contentModel = contentModelByIds(contentTypes)
        } catch (error) {
          console.log(`Could not fetch ${context.entryId}: ${error.message}`)
        }
      }
    },

    _processCfEntry(cfEntry: ContentfulEntry, level: number) {
      const resovedEntry: GatsbyFields = {}
      const maxDepth = this._maxDepth || 5

      if (level > maxDepth) {
        return
      }

      if (!(typeof cfEntry === 'object' && 'fields' in cfEntry)) {
        return
      }

      const contentTypeId = cfEntry.sys.contentType.sys.id
      resovedEntry.__typename = this._PREFIX + firstUpperCase(contentTypeId)

      // Loop all Contentful fields and convert to Gatsby
      Object.entries(cfEntry.fields).forEach(
        ([fieldName, cfFieldValue]: [string, any]) => {
          resovedEntry[fieldName] = this._processCfField(
            contentTypeId,
            fieldName,
            cfFieldValue,
            level
          )
        }
      )
      return resovedEntry
    },

    _processCfField(
      /** Contentful content type id */
      contentTypeId: string,
      /** Contentful and Gatbsy field name */
      fieldName: string,
      cfField: ContentfulField,
      level: number
    ) {
      const contentType = this._contentModel[contentTypeId][fieldName]

      switch (contentType.type) {
        case 'Array':
          switch (contentType.items.type) {
            case 'Link':
              const gatsbyArray: any[] = []
              cfField.forEach((entry: any) => {
                const gEntry = this._processCfEntry(entry, level + 1)
                if (gEntry) {
                  gatsbyArray.push(gEntry)
                }
              })
              return gatsbyArray
              break
            case 'Symbol':
              return cfField
              break
            default:
              reportMissingType(
                'Array/items.type',
                contentType.items.type,
                contentType,
                cfField
              )
              break
          }
        case 'Date':
        case 'Integer':
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
              return this._processCfEntry(cfField, level + 1)
              break
            case 'Asset':
              const fileUrl =
                (cfField.fields &&
                  cfField.fields.file &&
                  cfField.fields.file.url) ||
                '//placehold.it/512'
              return {
                description: cfField.fields && cfField.fields.description,
                title: cfField.fields && cfField.fields.title,
                fluid: {
                  sizes: '(max-width: 1024px) 100vw, 1024px',
                  src: fileUrl + '?w=1024&q=50',
                  srcSet:
                    fileUrl +
                    '?w=256&h=256&q=50 256w,\n' +
                    fileUrl +
                    '?w=512&h=512&q=50 512w,\n' +
                    fileUrl +
                    '?w=1024&h=1023&q=50 1024w,\n' +
                    fileUrl +
                    '?w=1026&h=1025&q=50 1026w',
                },
              }
              break
            default:
              reportMissingType(
                'Link/linkType',
                contentType.linkType,
                contentType,
                cfField
              )
              break
          }

        default:
          reportMissingType('type', contentType.type, contentType, cfField)
          break
      }
    },
    _include: context.include,
    _maxDepth: context.maxDepth,
    _PREFIX: 'Contentful',
    _cfConfig: {
      accessToken: context.previewSecrets.previewToken,
      host: 'preview.contentful.com',
      space: context.previewSecrets.spaceId,
    },
    _contentModel: {},
  }
  if (context.previewSecrets.environment) {
    // Pass CONTENTFUL_ENVIRONMENT only when available
    pagePreview._cfConfig.environment = context.previewSecrets.environment
  }

  return pagePreview
}
