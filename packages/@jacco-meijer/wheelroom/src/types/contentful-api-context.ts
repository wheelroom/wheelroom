import { ComponentConfig } from './components-map'
import { Model } from './model'

export interface ContentfulApiContext {
  /** Contentful asset object */
  asset: any
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
  /** Contentful variation field configured by config */
  variationField: {
    /** Additional component variations */
    variations: string[]
    /** Value true removes the original variations from the model  */
    overwriteVariations: boolean
  }
  /** Contentful editorInterface object */
  editorInterface: any
  /** Contentful environment object */
  environment: any
  /** Array of all models configs to be applied */
  componentConfigs: ComponentConfig[]
  /** Contentful space object */
  space: any
  /** Contentful upload object */
  upload?: any
}
