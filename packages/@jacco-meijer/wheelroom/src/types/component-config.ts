import { Model } from './model'
import {
  componentLocale,
  componentVariations,
  overwriteVariations,
} from './simple-types'

/** Build up internally, used to do all component processing like create-files and create-models */
export interface ComponentConfig {
  /** default locale */
  defaultLocale: componentLocale
  /** Graphql fragment for this model, used to generate files */
  fragment?: any
  /** Model object to be applied */
  model: Model
  /** Contentful graphql query that retrieves entries for this model, imported from queryPath */
  query?: any
  /** Additional component variations */
  variations: componentVariations
  /** Value true removes the original variations from the model  */
  overwriteVariations: overwriteVariations
}
