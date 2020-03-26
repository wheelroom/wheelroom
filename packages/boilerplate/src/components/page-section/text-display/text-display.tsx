import React from 'react'
import { PageSectionProps } from '../page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { Text } from '../../text'
import { Box, ContainerMaxWidth } from '../../../core/elements/grid'

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
        py: 3,
      }}
    >
      <ContainerMaxWidth>
        <Text {...props.pageSection.text} />
      </ContainerMaxWidth>
    </Box>
  )
}
