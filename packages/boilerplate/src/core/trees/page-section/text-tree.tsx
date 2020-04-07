import React from 'react'
import { PageSectionProps } from '../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { Text } from '../../../models/text'
import { Box, ContainerMaxWidth } from '../../elements/grid'
import { NcssProps } from '../../elements/types'
import { TextStyleTree } from '../text/core-text'

export interface TextTreeStyle {
  text: TextStyleTree
  wrapper: NcssProps
  container: NcssProps
}

export const TextTree = (props: {
  pageSection: PageSectionProps
  treeStyle: TextTreeStyle
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasText) {
    return null
  }
  const treeStyle = props.treeStyle || {}
  return (
    <Box is="div" ncss={treeStyle.wrapper}>
      <ContainerMaxWidth ncss={treeStyle.container}>
        <Text
          {...props.pageSection.text}
          locale={props.pageSection.locale}
          treeStyle={treeStyle.text}
        />
      </ContainerMaxWidth>
    </Box>
  )
}
