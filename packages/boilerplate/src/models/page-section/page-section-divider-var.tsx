/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { Box } from '../../wheelroom/wheels/elements/grid'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { PageSectionProps } from '.'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'
import { Wheel } from '../../wheelroom/wheels/types'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'

export const PageSectionDividerVar = (props: PageSectionProps) => {
  const wheel: Wheel = {
    style: { ncss: { py: 6, w: 1, h: '0px' } },
    elementPresets,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  return <Box is="div" wheel={wheel} />
}
