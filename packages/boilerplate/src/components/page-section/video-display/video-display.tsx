import React from 'react'
import { PageSectionProps } from '../page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { Box, Container } from '../../../core/elements/grid'
import { Topic } from '../../topic'
import { defaultParagraphStyle } from '../../../core/styles/paragraph'

export const VideoDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const topic = props.pageSection.topics[0]
  return (
    <Box
      is="div"
      ncss={{
        label: 'wrapper',
        bg: 'bg',
      }}
    >
      <Container
        ncss={{
          px: 0,
        }}
      >
        <Topic
          {...topic}
          pageSectionActions={props.pageSection.actions}
          text={{
            ...props.pageSection.text,
            locale: props.pageSection.locale,
          }}
          pageSectionInfo={pageSectionInfo}
          topicWrapperStyle={{}}
          imageProps={{}}
          imageWrapperStyle={{}}
          contentWrapperStyle={{}}
          headerWrapperStyle={{}}
          headingStyle={{}}
          useHeading="h3"
          paragraphStyle={defaultParagraphStyle}
          actionWrapperStyle={{}}
          actionStyle={{}}
        />
      </Container>
    </Box>
  )
}
