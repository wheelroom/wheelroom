import React, { Fragment } from 'react'
import { Box, ContainerMaxWidth } from '../elements/grid'
import { Topic } from '../../components/topic'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { PageSectionProps } from '../../components/page-section/page-section'
import { smallParagraphStyle } from '../styles/paragraph'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../styles/image'
import { commonVideoDescriptionStyle, commonVideoStyle } from '../styles/video'

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
            pageSectionInfo={pageSectionInfo}
            useHeadingElement="h4"
            styleTree={{
              wrapper: {
                w: 1,
              },
              media: {
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
                contentText: {
                  abstract: { ...smallParagraphStyle, color: 'text' },
                },
                contentActions: {
                  wrapper: {
                    mx: 'auto',
                  },
                  link: {
                    mx: 2,
                    fontSize: [5, 6],
                    lineHeight: [3, 4],
                  },
                },
              },
            }}
          />
        </ContainerMaxWidth>
      </Box>
    </Fragment>
  )
}
