import { componentVariations, overwriteVariations } from './simple-types'

/** Build up internally and used in PassedToPlugin, used to do all component
 * processing
 */
export interface ComponentConfig {
  /** Graphql fragment for this model, used to generate files */
  fragment?: any
  /** Model object to be applied */
  model: any
  /** Contentful graphql query that retrieves entries for this model, imported from queryPath */
  query?: any
  /** Module component is imported from */
  sourceModule: string
  /** Additional component variations */
  variations: componentVariations
  /** Value true removes the original variations from the model  */
  overwriteVariations: overwriteVariations
}
