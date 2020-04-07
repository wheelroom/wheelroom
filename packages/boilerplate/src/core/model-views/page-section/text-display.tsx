import React from 'react'
import { PageSectionProps } from '../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { Text } from '../../../models/text'
import { Box, ContainerMaxWidth } from '../../elements/grid'
import { NcssProps } from '../../elements/types'
import { TextStyleTree } from '../text/core-text'

export interface TextTreeStyleTree {
  text: TextStyleTree
  wrapper: NcssProps
  container: NcssProps
}

export const TextTree = (props: {
  pageSection: PageSectionProps
  styleTree: TextTreeStyleTree
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasText) {
    return null
  }
  const styleTree = props.styleTree || {}
  return (
    <Box is="div" ncss={styleTree.wrapper}>
      <ContainerMaxWidth ncss={styleTree.container}>
        <Text
          {...props.pageSection.text}
          locale={props.pageSection.locale}
          styleTree={styleTree.text}
        />
      </ContainerMaxWidth>
    </Box>
  )
}
