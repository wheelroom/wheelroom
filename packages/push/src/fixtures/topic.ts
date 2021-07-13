import { ContentfulAction, refB } from './action'
import { ContentfulAsset, refA } from './asset'

console.log(refA, refB)
/**
 * This desciption is not used
 * @wheelroom
 * - {@plugin contentful}
 * - {@type testTopic}
 * - {@displayField heading}
 * - {@description Topic model, a heading, an abstract and a call to action}
 */
export interface ContentfulTopic {
  sys?: {
    id: string
  }

  /** @wheelroom
   * - {@type Symbol}
   * - {@validation shortString} */
  abstract?: string

  /**
   * @wheelroom
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@validation action}
   * - {@description Action field, this is the description}
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
   *  - {@type Array}
   *  - {@itemsType Link}
   *  - {@itemsLinkType Asset}
   */
  mediaCollection?: {
    items: ContentfulAsset[]
  }

  /** @wheelroom
   * - {@type Link}
   * - {@linkType Asset}
   */
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

export const wheelroomPluginData = {
  contentful: {
    validations: {
      dropdown: { in: ['item A', 'item B', 'item C'] },
      media: { linkMimetypeGroup: ['image', 'video'] },
      action: { linkContentType: ['action'] },
      shortString: { size: { max: 155, min: 0 } },
      camelCase: {
        message: 'Please use camel case: onlyCamelCaseAllowed',
        regexp: { pattern: '^[a-z]+([A-Z][a-z0-9]+)*$' },
      },
      path: {
        message: 'Please use a valid path: /this/is/a/valid/path/with/:slug',
        regexp: { pattern: '^\\/[a-z0-9:\\._/~%\\-\\+&\\#\\?!=\\(\\)@]*$' },
      },
      url: {
        message: 'Please use a valid url: https://this/is/a/valid/url',
        regexp: {
          pattern:
            '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$',
        },
      },
    },
  },
}
