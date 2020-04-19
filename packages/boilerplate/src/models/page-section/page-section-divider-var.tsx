/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { elementStyles } from '../../themes/yosemite/elements/element-styles'
import { PageSectionProps } from '.'
import { styledSystemConfig } from '../../themes/yosemite/styled-system/styled-system-config'
import { Wheel } from '../../wheelroom/wheels/types'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'
import { sectionDividerStyle } from '../../themes/yosemite/sections/section-divider-style'
import { Hr } from '../../wheelroom/wheels/elements/self'

export const PageSectionDividerVar = (props: PageSectionProps) => {
  const wheel: Wheel = {
    style: sectionDividerStyle,
    elementStyles,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  return <Hr wheel={wheel} />
}
