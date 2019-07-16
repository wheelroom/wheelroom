import { Model } from './model'

export interface CurrentModel {
  modelOptions: {
    /** When demo page content is created, this section is used */
    initialPageSection?: string
    /** Additional component variations */
    variations?: string[]
    /** Value true removes the original variations from the model  */
    overwriteVariations?: boolean
  }
  /** Model object to be applied */
  model: Model
}
