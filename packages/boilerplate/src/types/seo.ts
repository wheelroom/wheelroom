export interface SeoTags {
  author?: string
  first_name?: string
  gender?: string
  last_name?: string
  modified_time?: string
  published_time?: string
  section?: string
  username?: string
  [tagName: string]: string | undefined
}

export interface SeoContentTypeInfo {
  type: 'article' | 'none'
  tags: SeoTags
}

export interface AlterNateLocale {
  href: string
  hrefLang: string
}

export interface SeoProps {
  contentTypeInfo?: SeoContentTypeInfo
  description?: string
  image?: string
  keywords?: string[]
  locale: string
  alternateLocales: AlterNateLocale[]
  meta: []
  siteAuthor: string
  siteDescription: string
  siteKeywords: string[]
  siteTitle: string
  siteVersion: string
  title: string
}
