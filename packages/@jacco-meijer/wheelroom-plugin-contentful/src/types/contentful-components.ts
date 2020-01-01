import { Fields } from './fields'

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
