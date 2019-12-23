export interface Components {
  [componentName: string]: Component
}

interface Component {
  /** Fields for this component */
  fields: {
    [fieldName: string]: Field
  }
  /** Defines which queries are generated */
  graphQL: {
    /** When set the model is retreived when generating a static version of the site */
    createPageQuery?: 'page' | 'global' | 'subPage'
    /** When set a fragment file is generated for use by a static site generator */
    fragment?: boolean
    /** The query is limited to the numer of items set here */
    limit?: number
    /** When set, the model is listed as a page section when editing pages */
    pageSection?: boolean
  }
  /** Used for comparing Contentful model version with repository model version  */
  modelVersion: string
  variations: string[]
}

interface Field {
  components: string[]
  helpText: string
  initialContent: number
  localized: boolean
  maxLength: number
  required: boolean
  unique: boolean
  type: 'date' | 'image' | 'multipleComponents' | 'number' | 'richText' | 'tags'
}
