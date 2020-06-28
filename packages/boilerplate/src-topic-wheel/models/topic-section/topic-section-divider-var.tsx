/**
 * Component variation
 *
 * Component type: topicSection
 * Variation: Divider
 *
 */

import React from 'react'
import { getWheel, Hr } from '../../../src-core'
import { TopicSectionModel } from './model-props'

export const TopicSectionDividerVar = (props: TopicSectionModel) => {
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
