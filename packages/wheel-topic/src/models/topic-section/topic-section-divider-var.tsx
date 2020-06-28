/**
 * Component variation
 *
 * Component type: topicSection
 * Variation: Divider
 *
 */

import React from 'react'
import { getWheel, Hr } from '@wheelroom/core'
import { TopicSectionModel } from './model'

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
