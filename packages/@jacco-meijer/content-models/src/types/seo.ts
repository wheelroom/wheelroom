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

interface SeoContentTypeInfoInt {
  type: string
  tags: SeoTags
}

export type SeoContentTypeInfo = SeoContentTypeInfoInt | null

export interface SeoProps {
  contentTypeInfo: SeoContentTypeInfo | null
  description: string
  image: string
  keywords: string[]
  locale: string
  locales: []
  meta: []
  siteAuthor: string
  siteDescription: string
  siteKeywords: string
  siteTitle: string
  siteVersion: string
  title: string
}
