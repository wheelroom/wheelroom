/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { PageSectionProps } from '.'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'
import { Wheel } from '../../wheelroom/wheels/types'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'
import { pageSectionDividerStyle } from '../../themes/yosemite/page-section/divider/page-section-divider-style'
import { Hr } from '../../wheelroom/wheels/elements/hr'

export const PageSectionDividerVar = (props: PageSectionProps) => {
  const wheel: Wheel = {
    style: pageSectionDividerStyle,
    elementPresets,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  return <Hr wheel={wheel} />
}
