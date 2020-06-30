import { CoreSectionProps } from '@wheelroom/core'
import { InjectedBlogSectionModel } from '@wheelroom/wheel-blog'

/** These are suitable defaults, you probably want to add some props specific
 * for this project
 */
export interface SectionProps
  extends CoreSectionProps,
    InjectedBlogSectionModel {}
