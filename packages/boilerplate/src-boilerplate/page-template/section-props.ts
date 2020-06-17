import { CoreSectionProps } from '../../src-core'
import { InjectedBlogSectionProps } from '../../src-blog-wheel'
import { SiteMetadata } from './page-template'

/** These are suitable defaults, you probably want to add some props specific
 * for this project
 */
export interface SectionProps
  extends CoreSectionProps,
    InjectedBlogSectionProps {
  siteMetadata: SiteMetadata
}
