import { NamedPaths } from 'gatsby-theme-wheelroom'
import { PageModelProps } from '../models/page/model-types'
import { GlobalsModelProps } from '../models/globals/model-props'
import { CoreSiteMetadata } from './core-site-metadata'
import { SectionWheels } from './section-wheels'

/** These are suitable defaults, you probably want to add some props specific
 * for this project
 */
export interface CoreSectionProps {
  /** Page props */
  page: PageModelProps
  /** Globals */
  globals: GlobalsModelProps

  /** Contentful type name */
  __typename: string
  /** Active theme id from theme switcher admin module */
  activeThemeId?: string
  /** Used for section anyalytics */
  eventId?: string
  /** index can be used by sections */
  index: number
  /** the current (two characters) locale */
  locale: string
  /** an object with path names and there actual (localized) paths */
  namedPaths: NamedPaths
  /** Section wheels */
  sectionWheels: SectionWheels
  /** Section variation */
  variation?: string
  /** Default site metadata */
  siteMetadata: CoreSiteMetadata
}
