/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Video
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { Wheel } from '../../wheelroom/wheels/types'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'

export const PageSectionVideoVar = (props: PageSectionProps) => {
  // const pageSectionInfo = getPageSectionInfo(props)

  // const treeStyle = deepMerge(
  //   { topic: topicPreset },
  //   {
  //     ...videoTreeStyle,
  //   }
  // )

  // if (pageSectionInfo.hasTopic) {
  //   return (
  //     <PageSectionVideo
  //       containerStyle="fluid"
  //       pageSection={props}
  //       treeStyle={treeStyle}
  //     />
  //   )
  // }

  const wheel: Wheel = {
    style: {},
    elementPresets,
    theme: yosemiteDark,
    styledSystemConfig,
  }

  return <NotImplemented pageSection={props} wheel={wheel} />
}
