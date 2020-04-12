/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Gallery
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { Wheel } from '../../wheelroom/wheels/types'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { styledSystemThemeDark } from '../../themes/yosemite/styled-system-theme-dark'
import { styledSystemConfig } from '../../themes/yosemite/styled-system/config'

export const PageSectionGalleryVar = (props: PageSectionProps) => {
  // const pageSectionInfo = getPageSectionInfo(props)

  // const treeStyle = deepMerge(
  //   { topic: topicPreset },
  //   { ...pageSectionGalleryTreeStyle }
  // )

  // if (pageSectionInfo.hasTopic) {
  //   return (
  //     <PageSectionGallery
  //       containerStyle="fluid"
  //       pageSection={props}
  //       treeStyle={treeStyle}
  //     />
  //   )
  // }

  const wheel: Wheel = {
    style: {},
    elementPresets,
    styledSystemTheme: styledSystemThemeDark,
    styledSystemConfig,
  }

  return <NotImplemented pageSection={props} wheel={wheel} />
}
