import React from 'react'
import { Box, ContainerMaxWidth } from '../elements/grid'
import { Topic } from '../../components/topic'
import { defaultHeading2Style } from '../styles/heading'
import { PageSectionProps } from '../../components/page-section/page-section'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import {
  commonImagePictureStyle,
  commonImageImgStyle,
  commonImageFigcaptionStyle,
} from '../styles/image'
import { commonVideoDescriptionStyle, commonVideoStyle } from '../styles/video'

export const FeaturedDisplay = (props: { pageSection: PageSectionProps }) => {
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
        py: [3, 6, 8],
      }}
    >
      <ContainerMaxWidth
        ncss={{
          justifyContent: 'center',
          flexDirection: ['column', 'row'],
          alignItems: ['center', 'baseline'],
        }}
      >
        <Topic
          {...topic}
          pageSectionActions={props.pageSection.actions}
          pageSectionInfo={pageSectionInfo}
          useHeadingElement="h3"
          styleTree={{
            wrapper: {
              flexDirection: ['column', 'column', 'row'],
              justifyContent: 'space-evenly',
            },
            media: {
              wrapper: {
                display: 'flex',
                flexDirection: 'column',
                w: [1, 1, 1 / 2.5],
                mb: [3, 3, 0],
              },
              image: {
                img: commonImageImgStyle,
                picture: {
                  ...commonImagePictureStyle,
                  p: 3,
                },
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
                w: [1, 1, 1 / 2.5],
              },
              contentText: {
                heading: defaultHeading2Style,
              },
              contentActions: {
                wrapper: {
                  display: 'flex',
                },
              },
            },
          }}
        />
      </ContainerMaxWidth>
    </Box>
  )
}
