import { ComponentConfig } from './components-map'
import { Model } from './model'

export interface ModelApiContext {
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
