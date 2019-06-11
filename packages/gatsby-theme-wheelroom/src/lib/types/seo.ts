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

export interface ContentTypeInfo {
  type: string
  tags: SeoTags
}

export interface SeoProps {
  contentTypeInfo: ContentTypeInfo
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
