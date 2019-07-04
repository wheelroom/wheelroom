import { ComponentsMap } from '@jacco-meijer/wheelroom'

import { article } from './article'
import { articleSection } from './article-section'
import { articlesSection } from './articles-section'
import { authorSection } from './author-section'
import { bicycleMap } from './bicycle-map'
import { bicycleSection } from './bicycle-section'
import { bicycleText } from './bicycle-text'
import { featuredPageSection } from './featured-page-section'
import { footerSection } from './footer-section'
import { globals } from './globals'
import { navigation } from './navigation'
import { openerSection } from './opener-section'
import { page } from './page'

export * from './article'
export * from './article-section'
export * from './articles-section'
export * from './author-section'
export * from './featured-page-section'
export * from './footer-section'
export * from './opener-section'
export * from './bicycle-section'
export * from './author-section'

export const componentsMap = {
  article,
  articleSection,
  articlesSection,
  authorSection,
  bicycleMap,
  bicycleSection,
  bicycleText,
  featuredPageSection,
  footerSection,
  globals,
  navigation,
  openerSection,
  page,
} as ComponentsMap
