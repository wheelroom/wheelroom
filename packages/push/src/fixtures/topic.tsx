import { ContentfulAction, refB } from './action'
import { ContentfulAsset, refA } from './asset'

console.log(refA, refB)
/**
 * Topic model, a heading, an abstract and a call to action
 * @wheelroom {@plugin contentful}
 */
export interface ContentfulTopic {
  sys?: {
    id: string
  }
  /** @wheelroom {@type Symbol} */
  abstract?: string
  /**
   * @wheelroom
   *   {@type Array} {@arrayType Link} {@linkType ContentfulAction}
   */
  actionsCollection?: {
    items: ContentfulAction[]
  }
  /** @wheelroom {@type Symbol} */
  heading?: string
  /** @wheelroom {@type Symbol} */
  icon?: string
  /**
   * @wheelroom
   *   {@type Array} {@arrayType Link} {@linkType Asset}
   */
  mediaCollection?: {
    items: ContentfulAsset[]
  }
  /** @wheelroom {@type Link} {@linkType Asset} */
  poster?: ContentfulAsset
}
