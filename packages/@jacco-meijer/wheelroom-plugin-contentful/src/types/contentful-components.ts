import { ContentfulFields } from './contentful-fields'

/**
 * This object is used only iside of the wheelroom-plugin-contentful. The fields
 * object has parts that mimic the contentful API.
 */
export interface ContentfulComponents {
  [componentName: string]: ContentfulComponent
}

export interface ContentfulComponent {
  /** Contentful description of this model, filled with %Component name% */
  description: string
  /** Contentful field to use for listing, in this case always 'title' */
  displayField: string
  /** Contentful field definitions */
  fields: ContentfulFields
  /** Contentful id that is used when creating an instance of this component */
  id?: string
  /** Wheelroom model version number */
  modelVersion: string
  /** Contentful component type, filled with %componentName% */
  type: string
}
