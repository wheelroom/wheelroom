import { AlternateLocale } from './seo'

export interface SeoProps {
  alternateLocales?: AlternateLocale[]
  authorArray: (string | undefined)[]
  descriptionArray?: (string | undefined)[]
  headingArray?: (string | undefined)[]
  imageSrcArray?: (string | undefined)[]
  keywordsArray?: (string[] | undefined)[]
  locale: string
  meta: any[]
  siteVersion: string
}
