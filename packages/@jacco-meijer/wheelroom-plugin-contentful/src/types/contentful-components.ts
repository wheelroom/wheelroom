export interface ContentfulComponents {
  [componentName: string]: ContentfulComponent
}

export interface ContentfulComponent {
  /** Contentful description of this model, filled with %Component name% */
  description: string
  /** Contentful field to use for listing, in this case always 'title' */
  displayField: string
  /** Contentful field definitions */
  fields: Fields
  /** Wheelroom model version number */
  modelVersion: string
  /** Contentful component type, filled with %componentName% */
  type: string
}

export interface Fields {
  [fieldId: string]: Field
}

export interface Field {
  /** Wheelroom content used to create a demo entry */
  initialContent?: initialContent
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

export type initialContent =
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

export type wheelroomType =
  | 'block'
  | 'global'
  | 'page'
  | 'part'
  | 'section'
  | 'subPage'
