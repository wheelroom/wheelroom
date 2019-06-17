import { Model } from './model'

export interface ComponentConfig {
  /** Graphql fragment for this model, used to generate files */
  fragment?: any
  /** Model object to be applied */
  model: Model
  /** Contentful graphql query that retrieves entries for this model, imported from queryPath */
  query?: any
  /** Additional component variations */
  variations: string[]
  /** Value true removes the original variations from the model  */
  overwriteVariations: boolean
}

export interface ComponentsMap {
  [componentType: string]: ComponentConfig
}
