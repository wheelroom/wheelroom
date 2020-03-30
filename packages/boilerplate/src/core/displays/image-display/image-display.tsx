import React, { Fragment } from 'react'
import { Box, Container } from '../../elements/grid'
import { Topic, TopicProps } from '../../../components/topic'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../components/page-section/page-section'
import { smallParagraphStyle } from '../../styles/paragraph'
import {
  commonImageFigcaptionStyle,
  commonImageImgStyle,
  commonImagePictureStyle,
} from '../../styles/image'
import {
  commonVideoDescriptionStyle,
  commonVideoStyle,
} from '../../styles/video'

export const ImageDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
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
        <Container
          ncss={{
            flexDirection: ['column', 'row'],
          }}
        >
          {props.pageSection.topics
            .slice(0, 2)
            .map((topic: TopicProps, index: number) => (
              <Topic
                {...topic}
                key={index}
                pageSectionActions={props.pageSection.actions}
                pageSectionInfo={pageSectionInfo}
                topicWrapperStyle={{
                  w: 1,
                }}
                mediaProps={{
                  styleTree: {
                    img: commonImageImgStyle,
                    picture: {
                      ...commonImagePictureStyle,
                      display: 'block',
                      px: 0,
                      py: 3,
                    },
                    figcaption: commonImageFigcaptionStyle,
                    description: commonVideoDescriptionStyle,
                    video: commonVideoStyle,
                  },
                }}
                contentWrapperStyle={{}}
                useHeadingElement="h4"
                paragraphStyle={{ ...smallParagraphStyle, color: 'text' }}
                actionWrapperStyle={{
                  mx: 'auto',
                }}
                actionStyle={{
                  mx: 2,
                  fontSize: [3, 4],
                  lineHeight: [3],
                }}
              />
            ))}
        </Container>
      </Box>
    </Fragment>
  )
}
