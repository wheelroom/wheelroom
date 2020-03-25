import React, { Fragment } from 'react'
import { Box, ContainerMaxWidth } from '../../../core/elements/grid'
import { TopicProps, Topic } from '../../topic'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../page-section'

export const FeaturedListDisplay = (props: {
  pageSection: PageSectionProps
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  const topicOptions = pageSectionInfo.topicOptions
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const featuredList = props.pageSection.topics.map(
    (topic: TopicProps, index: number) => (
      <Topic
        key={index}
        {...topic}
        text={{
          ...props.pageSection.text,
          locale: props.pageSection.locale,
        }}
        pageSectionInfo={pageSectionInfo}
        fullTopicAsLink={true}
        topicWrapperStyle={{
          flexDirection: topicOptions.hideImage
            ? ['column', 'row']
            : ['column', 'row'],
          w: topicOptions.hideImage ? [1, 1 / 2, 1 / 3] : 1,
        }}
        imageWrapperStyle={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'normal',
          w: [1 / 3, 1 / 4, 1 / 4],
          p: 3,
        }}
        contentWrapperStyle={{
          display: 'flex',
          flexDirection: 'column',
          w: [1, 2 / 3, 3 / 4],
          p: 3,
        }}
        actionWrapperStyle={{
          display: 'flex',
        }}
      />
    )
  )
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
        <ContainerMaxWidth
          ncss={{
            flexDirection: topicOptions.hideImage
              ? ['column', 'row']
              : ['column'],
          }}
        >
          {featuredList}
        </ContainerMaxWidth>
      </Box>
    </Fragment>
  )
}
