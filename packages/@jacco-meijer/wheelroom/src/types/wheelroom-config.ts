import { nodeModuleName } from './simple-types'

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
  variations: string[]
  query: {
    /** When set this query runs for all pages */
    mainQuery: boolean
    type: 'page' | 'global' | 'subPage' | 'sectionOfPage' | 'partOfSection'
  }
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
