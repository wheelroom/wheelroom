import { ContentfulAction, refB } from './action'
import { ContentfulAsset, refA } from './asset'

console.log(refA, refB)
/**
 * Topic model, a heading, an abstract and a call to action
 * @wheelroom
 *   {@plugin contentful} {@type testTopic} {@displayField heading}
 */
export interface ContentfulTopic {
  sys?: {
    id: string
  }
  /** @wheelroom {@type Symbol} */
  abstract?: string
  /**
   * Can we access the description field here?
   * @wheelroom
   *   {@type Array} {@itemsType Link} {@itemsLinkType Entry}
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
   *   {@type Array} {@itemsType Link} {@itemsLinkType Asset}
   */
  mediaCollection?: {
    items: ContentfulAsset[]
  }
  /** @wheelroom {@type Link} {@linkType Asset} */
  poster?: ContentfulAsset
}

export const myTopics: ContentfulTopic[] = [
  {
    abstract: 'This is the abstract',
    actionsCollection: {
      items: [
        {
          heading: 'Hello',
          anchor: 'anchor',
        },
      ],
    },
    heading: 'Heres the heading',
  },
]

export const notAnArray: ContentfulTopic = {
  abstract: 'This is the abstract',
  heading: 'Heres the heading',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notExported: ContentfulTopic[] = [
  {
    abstract: 'This is the abstract',
    heading: 'Heres the heading',
  },
]

type NotTagged = { thisVariable: string }
export const notTaggedVariable: NotTagged[] = [
  {
    thisVariable: 'is not tagged',
  },
]
