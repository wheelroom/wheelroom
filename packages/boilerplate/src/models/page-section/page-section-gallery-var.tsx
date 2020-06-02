/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Gallery
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getSectionStyle, getWheel } from '../../themes/themes'
import { pageSectionGalleryPreset } from '../../wheelroom/wheels/section/page/presets/page-section-gallery-preset'
import { PageSectionProps } from './page-section'
import { PageSection } from '../../wheelroom/wheels/section/page/page-section'
import { ThemeId } from '../../admin-resources/theme-info'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'

export const PageSectionGalleryVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { topic: topicPreset },
    pageSectionGalleryPreset,
    getSectionStyle('gallery').base,
  ])

  if (!props.topics) {
    return null
  }

  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <PageSection
        containerStyle="container"
        maxTopics={4}
        topicOptions={props.topicOptions || {}}
        topics={props.topics}
        wheel={wheel}
      />
    </ScrollSpy>
  )
}
