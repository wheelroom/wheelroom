/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { elementStyles } from '../../themes/yosemite/element-styles'
import { PageSectionProps } from '.'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'
import { Wheel } from '../../wheelroom/wheels/types'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'
import { pageSectionDividerStyle } from '../../themes/yosemite/page-section/page-section-divider-style'
import { Hr } from '../../wheelroom/wheels/elements/self'

export const PageSectionDividerVar = (props: PageSectionProps) => {
  const wheel: Wheel = {
    style: pageSectionDividerStyle,
    elementStyles,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  return <Hr wheel={wheel} />
}
