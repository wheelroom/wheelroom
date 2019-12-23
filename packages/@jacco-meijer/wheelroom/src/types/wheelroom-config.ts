import { nodeModuleName } from './simple-types.js'

export interface ComponentField {
  components: string[]
  helpText: string
  initialContent: number
  localized: boolean
  maxLength: number
  required: boolean
  type: 'date' | 'image' | 'multipleComponents' | 'number' | 'richText' | 'tags'
}

export interface WheelroomComponent {
  /** Fields for this component */
  fields: {
    [fieldName: string]: ComponentField
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

export interface Plugin {
  /** The module that exports the commands array */
  resolve: nodeModuleName
  /** Plugin options */
  options: any
}

export interface WheelroomConfig {
  /** Defaults used if not specified */
  fieldDefaults: {
    helpText: string
    localized: boolean
    required: boolean
    type: string
  }
  /** List of components */
  components: {
    [componentName: string]: WheelroomComponent
  }
  /** Plugins to load and their options */
  plugins: Plugin[]
}
