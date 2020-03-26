import React from 'react'
import { TopicProps, Topic } from '../../topic'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { Box, ContainerMaxWidth, Flex } from '../../../core/elements/grid'
import { PageSectionProps } from '../page-section'

const topicWrapperStyle = {
  label: 'topic-wrapper',
  flexDirection: ['column', 'column', 'row'],
  flexWrap: 'wrap',
}

/**
 *
 * Requires two topics
 *
 * - Two topics:
 *
 */

export const FeaturedTwoTopics = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  return (
    <Box
      is="div"
      ncss={{
        label: 'wrapper',
        bg: 'bg',
        py: [3, 6, 8],
      }}
    >
      <ContainerMaxWidth
        ncss={{
          flexDirection: ['column', 'row'],
        }}
      >
        <Flex ncss={topicWrapperStyle}>
          {props.pageSection.topics.map((topic: TopicProps, index: number) => (
            <Topic
              key={index}
              {...topic}
              text={{
                ...props.pageSection.text,
                locale: props.pageSection.locale,
              }}
              pageSectionInfo={pageSectionInfo}
              forceReverse={index % 2 === 0}
              topicWrapperStyle={{
                flexDirection: ['column', 'row'],
                w: 1,
              }}
              mediaWrapperStyle={{
                display: 'flex',
                alignItems: 'center',
                p: 3,
                w: 1,
              }}
              contentWrapperStyle={{
                display: 'flex',
                flexDirection: 'column',
                w: 1,
              }}
              useHeading="h3"
            />
          ))}
        </Flex>
      </ContainerMaxWidth>
    </Box>
  )
}
