import { Model } from './model'

export interface ComponentConfig {
  /** Id of the model */
  componentId?: string
  /** Graphql fragment for this model, used to generate files */
  fragment?: any
  /** Model object to be applied */
  model: Model
  /** Contentful graphql query that retrieves entries for this model, imported from queryPath */
  query?: any
  /** Type of the model */
  type: 'page' | 'section' | 'global' | 'subPage'
}

export interface ComponentsMap {
  [componentId: string]: ComponentConfig
}
