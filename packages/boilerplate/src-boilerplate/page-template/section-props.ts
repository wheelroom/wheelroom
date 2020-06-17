import { CoreSectionProps } from '../../src-core'
import { BlogProps } from '../../src-blog-wheel'
import { SiteMetadata } from './page-template'

export interface BlogNode {
  node: BlogProps
}

/** These are suitable defaults, you probably want to add some props specific
 * for this project
 */
export interface SectionProps extends CoreSectionProps {
  siteMetadata: SiteMetadata
  blog: BlogProps
  allBlog: {
    edges: BlogNode[]
  }
}
