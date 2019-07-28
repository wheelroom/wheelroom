import { Model } from './model'

export interface CurrentModel {
  modelOptions: {
    /** When demo page content is created, this section is used */
    initialPageSection?: string
    /** Additional component variations */
    variations?: string[]
    /** List of fields for which the 'localized' property is set to true  */
    localizedFields?: string[]
  }
  /** Model object to be applied */
  model: Model
}
