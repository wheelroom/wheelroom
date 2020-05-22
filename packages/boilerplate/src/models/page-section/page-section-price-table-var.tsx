/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { Flex } from '../../wheelroom/wheels/element/grid'
import { getWheel } from '../../themes/themes'
import { PageSectionProps } from '.'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'

export const PageSectionPriceTableVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = { ncss: {} }

  // eslint-disable-next-line no-undef
  console.log('props.topicTables', props.topicTables)

  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds}
      pageSectionProps={props}
    >
      <Flex wheel={wheel} ncss={{ bg: 'amber' }}>
        Price table
      </Flex>
    </ScrollSpy>
  )
}
