import React, { Fragment } from 'react'
import { Box, ContainerMaxWidth } from '../elements/grid'
import { TopicProps, Topic } from '../../components/topic'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { PageSectionProps } from '../../components/page-section/page-section'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../styles/image'
import { commonVideoDescriptionStyle, commonVideoStyle } from '../styles/video'

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
        pageSectionActions={props.pageSection.actions}
        pageSectionInfo={pageSectionInfo}
        fullTopicAsLink={true}
        styleTree={{
          wrapper: {
            flexDirection: topicOptions.hideMedia
              ? ['column', 'row']
              : ['column', 'row'],
            w: topicOptions.hideMedia ? [1, 1 / 2, 1 / 3] : 1,
          },
          media: {
            wrapper: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'normal',
              w: [1 / 3, 1 / 4, 1 / 4],
              p: 3,
            },
            image: {
              img: commonImageImgStyle,
              picture: commonImagePictureStyle,
              figcaption: commonImageFigcaptionStyle,
            },
            video: {
              description: commonVideoDescriptionStyle,
              video: commonVideoStyle,
            },
          },
          content: {
            wrapper: {
              display: 'flex',
              flexDirection: 'column',
              w: [1, 2 / 3, 3 / 4],
              p: 3,
            },
            contentActions: {
              wrapper: {
                display: 'flex',
              },
            },
          },
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
          py: [3, 6, 8],
        }}
      >
        <ContainerMaxWidth
          ncss={{
            flexDirection: topicOptions.hideMedia
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
