import React from 'react'
import { TopicProps, Topic } from '../../topic'
import { Box, ContainerMaxWidth, Flex } from '../../../core/elements/grid'
import { PageSectionProps } from '../page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'

const topicWrapperStyle = {
  label: 'topic-wrapper',
  flexDirection: ['column', 'column', 'row'],
  flexWrap: 'wrap',
}

/**
 *
 * Requires four or more topics
 *
 * - Four topics: the four topics
 *
 */

export const FeaturedMultipleTopics = (props: {
  pageSection: PageSectionProps
}) => {
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
        py: 8,
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
              topicWrapperStyle={{
                flexDirection: 'column',
                w: [1, 1, 1 / 2],
              }}
              imageWrapperStyle={{
                display: 'flex',
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
