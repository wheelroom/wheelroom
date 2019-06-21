import { componentType } from './simple-types'

export type contentType =
  | 'Array'
  | 'Boolean'
  | 'Date'
  | 'Integer'
  | 'Link'
  | 'Location'
  | 'Object'
  | 'RichText'
  | 'Symbol'
  | 'Text'

export type linkType = 'Asset' | 'Entry'

export type widgetID =
  | 'assetLinkEditor'
  | 'assetLinksEditor'
  | 'assetGalleryEditor'
  | 'boolean'
  | 'datePicker'
  | 'entryLinkEditor'
  | 'entryLinksEditor'
  | 'entryCardEditor'
  | 'entryCardsEditor'
  | 'numberEditor'
  | 'rating'
  | 'locationEditor'
  | 'objectEditor'
  | 'urlEditor'
  | 'slugEditor'
  | 'listInput'
  | 'checkbox'
  | 'tagEditor'
  | 'multipleLine'
  | 'markdown'
  | 'singleLine'
  | 'dropdown'
  | 'radio'
  | 'richTextEditor'

export type wheelroomType = 'page' | 'subPage' | 'section' | 'global'

export interface Field {
  /** Wheelroom content used to create a demo entry */
  initialContent?: string | string[]
  /** Contentful editor settings */
  settings?: {
    helpText: string
  }
  /** Contentful field specs */
  specs: {
    /** Items for field type Array */
    items?: {
      /** LinkType for itemType Link */
      linkType?: linkType
      type: contentType
    }
    linkType?: linkType
    localized?: boolean
    name: string
    required?: boolean
    type: contentType
    validations?: any[]
  }
  /** Contentful editor widget id */
  widgetId?: widgetID
}

export interface Model {
  /** Backend, for now only contentful is supported */
  contentBackend: 'contentful'
  /** Contentful description of this model */
  description: string
  /** Contentful field to use for listing */
  displayField: string
  /** Contentful field definitions */
  fields: {
    [fieldId: string]: Field
  }
  /** Wheelroom model version number */
  modelVersion: string
  /** Contentful model name */
  name: string
  /** Contentful model type */
  type: componentType
  /** Wheelroom model type */
  wheelroomType: wheelroomType
}
