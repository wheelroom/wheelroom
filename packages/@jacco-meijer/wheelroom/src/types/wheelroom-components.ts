import { WheelroomFields } from './wheelroom-fields'

export interface WheelroomComponents {
  [componentName: string]: WheelroomComponent
}

export interface WheelroomComponent {
  /** Fields for this component */
  fields: WheelroomFields
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
}
