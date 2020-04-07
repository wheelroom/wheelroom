import React from 'react'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { Box, ContainerMaxWidth } from '../../../elements/grid'
import {
  PageSectionTextTreeStyle,
  pageSectionTextTreeStyle,
} from './page-section-text-tree-style'
import { TextTree } from '../../text/text-tree'

export const PageSectionTextTree = (props: {
  pageSection: PageSectionProps
  treeStyle: PageSectionTextTreeStyle
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasText) {
    return null
  }
  const treeStyle = props.treeStyle || {}
  return (
    <Box is="div" ncss={treeStyle.wrapper}>
      <ContainerMaxWidth ncss={treeStyle.container}>
        <TextTree
          {...props.pageSection.text}
          locale={props.pageSection.locale}
          treeStyle={pageSectionTextTreeStyle}
          text={props.pageSection.text}
        />
      </ContainerMaxWidth>
    </Box>
  )
}
