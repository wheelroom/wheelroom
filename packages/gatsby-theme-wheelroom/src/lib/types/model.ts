export interface Link {
  linkTo: string
  linkType: string
  type: string
}

export interface Field {
  /** Wheelroom content used to create a demo entry */
  initialContent?: string | Link
  /** Contentful editor settings */
  settings?: {
    helpText: string
  }
  /** Contentful field specs */
  specs: {
    localized?: boolean
    name: string
    required?: boolean
    type: string
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
  type: string
  /** Wheelroom model type */
  wheelroomType: 'page' | 'subPage' | 'section' | 'global'
}
