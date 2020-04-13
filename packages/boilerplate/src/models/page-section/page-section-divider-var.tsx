/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { Box } from '../../wheelroom/wheels/elements/grid'
import { Wheel } from '../../wheelroom/wheels/types'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'

export const PageSectionDividerVar = () => {
  const wheel: Wheel = {
    style: { ncss: { py: 6, w: 1, h: '0px' } },
    elementPresets,
    theme: yosemiteLight,
    styledSystemConfig,
  }

  return <Box is="div" wheel={wheel} />
}
