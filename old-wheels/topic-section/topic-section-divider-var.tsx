/**
 * Component variation
 *
 * Component type: topicSection
 * Variation: Divider
 *
 */

import React from 'react'
import { getSectionWheel, Hr } from '@wheelroom/core'
import { TopicSectionModel } from './model'

export const TopicSectionDividerVar = (props: TopicSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.theme || props.activeThemeId,
    wheelId: 'topicSection',
    sectionWheels: props.sectionWheels,
    variation: 'divider',
  })

  if (!sectionWheel) {
    return null
  }
  const { wheel } = sectionWheel

  return <Hr wheel={wheel} />
}
