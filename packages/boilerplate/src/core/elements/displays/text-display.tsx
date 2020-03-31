import React from 'react'
import { PageSectionProps } from '../../../components/page-section/page-section'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { Text } from '../../../components/text'
import { Box, ContainerMaxWidth } from '../primary/grid'
import { textStyleTree } from '../../../styles/style-trees/text-style-tree'

export const TextDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasText) {
    return null
  }
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
