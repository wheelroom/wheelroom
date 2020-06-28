/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { getWheel, Hr } from '../../../src-core'
import { TopicSectionModelProps } from './model-props'

export const TopicSectionDividerVar = (props: TopicSectionModelProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'topicSection',
    sectionWheels: props.sectionWheels,
    variation: 'divider',
  })

  if (!wheel || !props.topics) {
    return null
  }

  return <Hr wheel={wheel} />
}
