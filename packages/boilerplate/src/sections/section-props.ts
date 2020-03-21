import { NamedPaths } from 'gatsby-theme-wheelroom'
import { GlobalsProps } from '../components/globals'
import { PageProps } from '../components/page'
import { SiteMetadata } from '../page-template'

/** These are suitable defaults, you probably want to add some props specific
 * for this project
 */
export interface SectionProps {
  /** index can be used by sections */
  index: number
  /** the current (two characters) locale */
  locale: string
  /** an object with path names and there actual (localized) paths */
  namedPaths: NamedPaths

  globals: GlobalsProps
  page: PageProps
  siteMetadata: SiteMetadata
}
