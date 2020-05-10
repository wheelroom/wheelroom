/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { getWheel } from '../../themes/themes'
import { PageSectionProps } from '.'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'
import { Flex } from '../../wheelroom/wheels/element/grid'

export const PageSectionBlogVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = { ncss: {} }

  return (
    <Flex wheel={wheel} ncss={{ bg: 'amber' }}>
      Price table
    </Flex>
  )
}
