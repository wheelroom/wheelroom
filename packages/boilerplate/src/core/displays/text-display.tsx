import React from 'react'
import { PageSectionProps } from '../../components/page-section/page-section'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { Text } from '../../components/text'
import { Box, ContainerMaxWidth } from '../elements/grid'
import { NcssProps } from '../elements/types'
import { TextStyleTree } from '../views/text/core-text'

export interface TextDisplayStyleTree {
  text: TextStyleTree
  wrapper: NcssProps
  container: NcssProps
}

export const TextDisplay = (props: {
  pageSection: PageSectionProps
  styleTree: TextDisplayStyleTree
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
