import React, { Fragment } from 'react'
import { Box, ContainerMaxWidth } from '../../../core/elements/grid'
import { Topic } from '../../topic'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../page-section'
import { smallParagraphStyle } from '../../../core/styles/paragraph'

export const VideoDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const topic = props.pageSection.topics[0]
  return (
    <Fragment>
      <Box
        is="div"
        ncss={{
          label: 'wrapper',
          bg: 'bg',
          py: [3, 6, 8],
        }}
      >
        <ContainerMaxWidth>
          <Topic
            {...topic}
            pageSectionActions={props.pageSection.actions}
            text={{
              ...props.pageSection.text,
              locale: props.pageSection.locale,
            }}
            pageSectionInfo={pageSectionInfo}
            topicWrapperStyle={{
              w: 1,
            }}
            contentWrapperStyle={{}}
            useHeading="h4"
            paragraphStyle={{ ...smallParagraphStyle, color: 'text' }}
            actionWrapperStyle={{
              mx: 'auto',
            }}
            actionStyle={{
              mx: 2,
              fontSize: [5, 6],
              lineHeight: [3, 4],
            }}
          />
        </ContainerMaxWidth>
      </Box>
    </Fragment>
  )
}
