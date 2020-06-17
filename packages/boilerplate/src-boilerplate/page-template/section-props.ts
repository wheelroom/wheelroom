import { NamedPaths } from 'gatsby-theme-wheelroom'
import { BlogProps, GlobalsProps, PageProps, SectionWheels } from '../wheelroom'

import { SiteMetadata } from './page-template'

export interface BlogNode {
  node: BlogProps
}

/** These are suitable defaults, you probably want to add some props specific
 * for this project
 */
export interface SectionProps {
  /** Contentful type name */
  __typename: string
  /** index can be used by sections */
  index: number
  /** the current (two characters) locale */
  locale: string
  /** an object with path names and there actual (localized) paths */
  namedPaths: NamedPaths
  /** Active theme id from theme switcher admin module */
  activeThemeId: string
  /** Section wheels */
  sectionWheels: SectionWheels

  globals: GlobalsProps
  page: PageProps
  siteMetadata: SiteMetadata
  blog: BlogProps
  allBlog: {
    edges: BlogNode[]
  }
}
