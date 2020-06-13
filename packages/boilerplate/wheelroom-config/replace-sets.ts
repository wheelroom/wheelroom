/**
 * Defines an example replace set.
 *
 * Needs further documentation
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
        // Replace page-section variation name:
        // "variationName" to "variationName-wr"
        //
        // variation: {
        //   pattern: /(.*)/,
        //   replacement: '$1-wr',
        // },
      },
    },
  },
}
