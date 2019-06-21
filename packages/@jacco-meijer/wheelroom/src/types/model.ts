import { componentType } from './simple-types'

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
      linkType?: 'Entry'
      type: 'Link' | 'Symbol'
    }
    linkType?: 'Asset'
    localized?: boolean
    name: string
    required?: boolean
    type:
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
    validations?: any[]
  }
  /** Contentful editor widget id */
  widgetId?: string
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
  wheelroomType: 'page' | 'subPage' | 'section' | 'global'
}
