import React from 'react'
import { Box, ContainerMaxWidth } from '../elements/grid'
import { PageSectionProps } from '../../components/page-section/page-section'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { Topic } from '../../components/topic'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../styles/image'
import { commonVideoDescriptionStyle, commonVideoStyle } from '../styles/video'

export const BlockDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }

  const block = props.pageSection.topics.map((topic, index) => (
    <Topic
      key={index}
      {...topic}
      pageSectionActions={props.pageSection.actions}
      pageSectionInfo={pageSectionInfo}
      fullTopicAsLink={false}
      styleTree={{
        wrapper: { px: [0, 3], py: [3, 3], w: [1, 1 / 2, 1 / 3] },
        media: {
          image: {
            img: {
              ...commonImageImgStyle,
              w: 1,
              h: 1,
              objectFit: 'cover',
              position: 'absolute',
            },
            picture: {
              ...commonImagePictureStyle,
              display: 'block',
              h: '0px',
              position: 'relative',
              pb: '65.25%',
            },
            figcaption: commonImageFigcaptionStyle,
          },
          video: {
            description: commonVideoDescriptionStyle,
            video: { ...commonVideoStyle },
          },
        },
        content: {
          wrapper: {
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
          },
          contentText: {
            wrapper: {
              display: 'block',
              flex: '1 1 auto',
            },
          },
        },
      }}
    />
  ))
  return <Blocks>{block}</Blocks>
}

const Blocks = (props: { children: any }) => (
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
        alignItems: ['center', 'initial'],
        flexDirection: ['column', 'row'],
        flexWrap: 'wrap',
        justifyContent: 'center',
        m: 'auto',
        p: 0,
        w: 1,
      }}
    >
      {props.children}
    </ContainerMaxWidth>
  </Box>
)
