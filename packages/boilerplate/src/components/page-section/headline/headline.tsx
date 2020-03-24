import React, { Fragment } from 'react'
import { Box, ContainerMaxWidth } from '../../../core/elements/grid'
import { Topic } from '../../topic'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../page-section'
import { heading1Style } from '../../../core/styles/heading'
import { paragraphHeroStyle } from '../../../core/styles/paragraph'

/**
 *
 * Requires one topic or a text.
 *
 * - Only a topic: the topic is displayed
 * - Only a text: the text is displayed
 * - Topic and text: the topic image is displayed with the text
 *
 */

export const Headline = (props: { pageSection: PageSectionProps }) => {
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
          py: 8,
        }}
      >
        <ContainerMaxWidth>
          <Topic
            {...topic}
            pageSectionInfo={pageSectionInfo}
            topicWrapperStyle={{
              w: 1,
            }}
            contentWrapperStyle={{
              display: 'flex',
              textAlign: 'center',
              flexDirection: 'column',
            }}
            useHeading="h2"
            headingStyle={{ ...heading1Style }}
            paragraphStyle={{ ...paragraphHeroStyle, color: 'text' }}
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
