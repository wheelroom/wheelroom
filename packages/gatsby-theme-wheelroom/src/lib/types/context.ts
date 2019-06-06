import { ModelConfig } from './config'
import { Model } from './model'

export interface Context {
  /** Contentful Management Client */
  contentfulClient?: any
  /** Contentful contentType object */
  contentType?: any
  /** Current model being applied */
  currentModel: Model
  /** Contentful editorInterface object */
  editorInterface?: any
  /** Contentful environment object */
  environment?: any
  /** Array of all models configs to be applied */
  modelConfigs?: ModelConfig[]
  /** Contentful space object */
  space?: any
}
