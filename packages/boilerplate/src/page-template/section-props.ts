import { CoreSectionProps } from '../../src-core'
import { InjectedBlogSectionModel } from '../../src-blog-wheel'

/** These are suitable defaults, you probably want to add some props specific
 * for this project
 */
export interface SectionProps
  extends CoreSectionProps,
    InjectedBlogSectionModel {}
