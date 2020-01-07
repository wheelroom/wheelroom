export interface ContentfulFields {
  [fieldId: string]: ContentfulField
}

export interface ContentfulField {
  /** Wheelroom content used to create a demo entry */
  createContentData?: CreateContentData
  /** Contentful editor settings */
  settings?: {
    helpText?: string
  }
  /** Contentful field specs */
  specs: {
    /** Items for field type Array */
    items?: {
      /** LinkType for itemType Link */
      linkType?: linkType
      type: contentType
      validations?: any[]
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

export type CreateContentData =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | boolean[]

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
