export interface Translations {
  /** Optional field translations */
  helpText?: {
    [locale: string]: string
  }
  items?: {
    [locale: string]: string[]
  }
  name?: {
    [locale: string]: string
  }
  [property: string]: any
}
