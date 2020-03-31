import React from 'react'
import { PageSectionProps } from '../../components/page-section/page-section'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { Text } from '../../components/text'
import { Box, ContainerMaxWidth } from '../elements/grid'
import { textStyleTree } from '../../styles/style-trees/text-style-tree'
import { TopicStyleTree } from '../views/topic/core-topic'
import { NcssProps } from '../elements/types'

export interface TextDisplayStyleTree {
  topic: TopicStyleTree
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
    <Box
      is="div"
      ncss={{
        label: 'wrapper',
        bg: 'bg',
      }}
    >
      <ContainerMaxWidth
        ncss={{
          px: 3,
        }}
      >
        <Text
          {...props.pageSection.text}
          locale={props.pageSection.locale}
          styleTree={textStyleTree}
        />
      </ContainerMaxWidth>
    </Box>
  )
}
