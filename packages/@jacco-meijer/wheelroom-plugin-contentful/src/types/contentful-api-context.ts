import { Components } from '@jacco-meijer/wheelroom'
import { Model } from './model'
import { componentVariations, overwriteVariations } from './simple-types'

export interface ContentfulApiContext {
  /** Contentful asset object */
  asset: any
  /** Wheelroom components */
  components: Components
  /** Contentful Management Client */
  contentfulClient: any
  /** Contentful contentType object */
  contentType: any
  /** Current model being applied */
  currentModel: Model
  /** Contentful demo entry */
  entry: any
  /** Contentful field data for demo entry */
  fields: any
  /** When demo page content is created, this section is used */
  initialPageSection: string
  /** Contentful variation field configured by config */
  variationField: {
    /** Additional component variations */
    variations: componentVariations
    /** Value true removes the original variations from the model  */
    overwriteVariations: overwriteVariations
  }
  /** Contentful editorInterface object */
  editorInterface: any
  /** Contentful environment object */
  environment: any
  /** Contentful space object */
  space: any
  /** Contentful upload object */
  upload?: any
}
