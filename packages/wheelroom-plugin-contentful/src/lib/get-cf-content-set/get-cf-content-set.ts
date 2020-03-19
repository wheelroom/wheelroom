import { WheelroomComponents } from '@wheelroom/wheelroom'
import {
  WheelroomContentSet,
  ContentfulContentSet,
} from '../../types/content-set'
import { cfContentSetFromComponents } from '../get-cf-components/content-set-from-components'
import { cfContentSetFromWrContentSet } from '../get-cf-components/content-set-from-content-set'

export const getCfContentSet = (
  wrComponents: WheelroomComponents,
  wrContentSet?: WheelroomContentSet
): ContentfulContentSet => {
  // If no content is set, create one based on component names and initial
  // content
  let cfContentSet: ContentfulContentSet
  if (wrContentSet) {
    cfContentSet = cfContentSetFromWrContentSet(wrContentSet, wrComponents)
  } else {
    cfContentSet = cfContentSetFromComponents(wrComponents)
  }
  return cfContentSet
}
