/**
 * Defines the boilerplate content set. In English.
 *
 *
 */

import { WheelroomReplaceSet } from '@wheelroom/wheelroom-plugin-contentful'

export interface ReplaceSets {
  [replaceSetName: string]: WheelroomReplaceSet
}

export const replaceSets: ReplaceSets = {
  variationReplace: {
    pageSection: {
      fields: {
        variation: {
          pattern: /(headline)(.*)/,
          replacement: 'hero$2',
        },
      },
    },
  },
}
