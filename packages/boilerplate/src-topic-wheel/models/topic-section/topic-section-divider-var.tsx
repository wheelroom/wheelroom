/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { getWheel, ScrollSpy, Hr } from '../../../src-core'
import { TopicSectionProps } from './model-types'

export const TopicSectionDividerVar = (props: TopicSectionProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'topicSection',
    sectionWheels: props.sectionWheels,
    variation: 'divider',
  })

  if (!wheel || !props.topics) {
    return null
  }

  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <Hr wheel={wheel} />
    </ScrollSpy>
  )
}
