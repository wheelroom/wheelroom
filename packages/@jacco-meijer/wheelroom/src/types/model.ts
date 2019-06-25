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

/**
 * MODELS, QUERIES and FRAGMENTS
 * - query: used by Gatsby to retrieve data when building static pages
 * - fragment: a Graphql fragment that is part of a (page-) query
 * - model: used to create models at the headless CMS (Contentful) and to create
 *   initial content
 *
 * WHEELROOM TYPES
 *
 * All wheelroom types define a model, depending on the type a query and/or a
 * query fragment are defined
 *
 * - page: defines a query for retrieving pages
 * - subPage: defines a query for retrieving subPages and a fragment defining
 *   fields
 * - section: has a fragment defining fields, receives content as part of a page
 * - global: defines a query for retrieving globals and a fragment defining fields
 * - part: has a fragment defining fields, retrieves content as part of a section
 * - block: no query or fragment, retrieves content as part of a richText field
 *
 */
export type wheelroomType =
  | 'block'
  | 'global'
  | 'page'
  | 'part'
  | 'section'
  | 'subPage'

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
