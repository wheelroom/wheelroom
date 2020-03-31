import React from 'react'
import { Box, ContainerMaxWidth } from '../primary-elements/grid'
import { PageSectionProps } from '../../components/page-section/page-section'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { Topic } from '../../components/topic'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../styles/image'
import { commonVideoDescriptionStyle, commonVideoStyle } from '../styles/video'

export const QuoteDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const quote = props.pageSection.topics.map((topic, index) => (
    <Topic
      key={index}
      {...topic}
      pageSectionActions={props.pageSection.actions}
      pageSectionInfo={pageSectionInfo}
      fullTopicAsLink={false}
      useHeadingElement={'p'}
      useAbstractElement={'blockquote'}
      styleTree={{
        wrapper: { alignItems: 'center' },
        media: {
          wrapper: {
            p: 3,
          },
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
              overflow: 'hidden',
              position: 'relative',
              h: '178px',
              w: '178px',
              mx: 'auto',
              borderRadius: '50%',
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
            textAlign: 'center',
            flexDirection: 'column',
          },
          contentText: {
            wrapper: { textAlign: 'center' },
            heading: { order: 1, my: 3, ':before': { content: '"— "' } },
            abstract: {
              label: 'blockquote',
              mx: [0, 5],
              my: [5],
              fontSize: [7, 8, 9],
              fontStyle: 'italic',
            },
          },
          contentActions: {
            wrapper: {
              mx: 'auto',
            },
          },
        },
      }}
    />
  ))
  return <Quotes>{quote}</Quotes>
}

const Quotes = (props: { children: any }) => (
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
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.children}
    </ContainerMaxWidth>
  </Box>
)
