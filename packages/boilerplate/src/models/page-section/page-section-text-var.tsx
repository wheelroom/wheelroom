/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Text
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { Wheel } from '../../wheelroom/wheels/types'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'

export const PageSectionTextVar = (props: PageSectionProps) => {
  // const pageSectionInfo = getPageSectionInfo(props)

  // const treeStyle = deepMerge({}, pageSectionTextTreeStyle)

  // addCssLabels('text', treeStyle)

  // if (pageSectionInfo.hasText) {
  //   return <PageSectionText pageSection={props} treeStyle={treeStyle} />
  // }

  const wheel: Wheel = {
    style: {},
    elementPresets,
    theme: yosemiteLight,
    styledSystemConfig,
  }

  return <NotImplemented pageSection={props} wheel={wheel} />
}
