export interface Translations {
  /** Optional field translations */
  helpText?: {
    [locale: string]: string
  }
  name?: {
    [locale: string]: string
  }
}

export interface CheckboxTranslations extends Translations {
  items?: {
    [locale: string]: string[]
  }
}
export interface DropdownTranslations extends Translations {
  items?: {
    [locale: string]: string[]
  }
}
