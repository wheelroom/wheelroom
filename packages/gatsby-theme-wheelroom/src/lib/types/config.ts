import { Model } from './model'

export interface ModelConfig {
  /** Model object to be applied, read from modelPath */
  model: Model
  /** Path to model definition */
  modelPath: string
  /** Name of the model */
  name: string
  /** Contentful graphql query that retrieves entries for this model */
  query: any
  /** Path to model definition */
  queryPath: string
  /** Package name in wich the model is defined */
  resolve: string
  /** Type of the model */
  type: 'page' | 'section' | 'global' | 'subPage'
}
