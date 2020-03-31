import React, { Fragment } from 'react'
import { Box, Container } from '../primary-elements/grid'
import { Topic, TopicProps } from '../../components/topic'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { PageSectionProps } from '../../components/page-section/page-section'
import { smallParagraphStyle } from '../styles/paragraph'
import {
  commonImageFigcaptionStyle,
  commonImageImgStyle,
  commonImagePictureStyle,
} from '../styles/image'
import { commonVideoDescriptionStyle, commonVideoStyle } from '../styles/video'

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
                useHeadingElement="h4"
                styleTree={{
                  wrapper: {
                    w: 1,
                  },
                  media: {
                    image: {
                      img: commonImageImgStyle,
                      picture: {
                        ...commonImagePictureStyle,
                        display: 'block',
                        px: 0,
                        py: 3,
                      },
                      figcaption: commonImageFigcaptionStyle,
                    },
                    video: {
                      description: commonVideoDescriptionStyle,
                      video: commonVideoStyle,
                    },
                  },
                  content: {
                    contentText: {
                      abstract: { ...smallParagraphStyle, color: 'text' },
                    },
                    contentActions: {
                      wrapper: {
                        mx: 'auto',
                      },
                      link: {
                        mx: 2,
                        fontSize: [3, 4],
                        lineHeight: [3],
                      },
                    },
                  },
                }}
              />
            ))}
        </Container>
      </Box>
    </Fragment>
  )
}
