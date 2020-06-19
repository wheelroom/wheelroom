import { NamedPaths } from 'gatsby-theme-wheelroom'
import { StyledSystemTheme, StyledSystemConfig } from '@wheelroom/styled-system'
import { ElementStyles } from '../elements/types/element-styles'
import { PageProps } from '../models/page/model-types'
import { GlobalsProps } from '../models/globals/model-types'
import { CoreSiteMetadata } from './core-site-metadata'

/** Passed to a Wheelroom page section (wheel) */
export interface SectionWheels {
  styles: {
    [wheelId: string]: {
      [variation: string]: any
    }
  }
  elementStyles: ElementStyles
  themes: {
    [themeId: string]: StyledSystemTheme
  }
  defaultTheme: string
  styledSystemConfig: StyledSystemConfig
}

/** These are suitable defaults, you probably want to add some props specific
 * for this project
 */
export interface CoreSectionProps {
  /** Page props */
  page: PageProps
  /** Globals */
  globals: GlobalsProps

  /** Contentful type name */
  __typename: string
  /** Active theme id from theme switcher admin module */
  activeThemeId: string
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
