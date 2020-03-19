import { ContentfulFields } from './contentful-fields'

/**
 * This object is used only inside wheelroom-plugin-contentful. The fields
 * object has parts that mimic the contentful API.
 *
 * Each component has a componentId key, this id is used when creating an
 * instance of the component.
 *
 */

export type ContentfulComponents = ContentfulComponent[]

export interface ContentfulComponent {
  /** Id that is used when creating an instance of the component */
  componentId: string
  /** Contentful description of this model, filled with %Component name% */
  description: string
  /** Contentful field to use for listing, in this case always 'title' */
  displayField: string
  /** Contentful field definitions */
  fields: ContentfulFields
  /** Wheelroom model version number */
  modelVersion: string
  /** Contentful component type, filled with %componentName% */
  type: string
}
