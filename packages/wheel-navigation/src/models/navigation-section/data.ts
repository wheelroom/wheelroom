import { NavigationSectionFooterData } from './footer/data'
import { NavigationSectionHeaderData } from './header/data'
import { NavigationSectionSitemapData } from './sitemap/data'

export interface NavigationSectionData {
  header: NavigationSectionHeaderData
  footer: NavigationSectionFooterData
  sitemap: NavigationSectionSitemapData
}
