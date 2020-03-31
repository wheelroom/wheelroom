import React from 'react'
import { Box, ContainerMaxWidth } from '../primary/grid'
import { PageSectionProps } from '../../../components/page-section/page-section'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { Topic } from '../../../components/topic'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../../styles/image'
import { commonVideoDescriptionStyle, commonVideoStyle } from '../../styles/video'

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
      mediaWrapperStyle={{
        p: 3,
      }}
      mediaProps={{
        styleTree: {
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
          description: commonVideoDescriptionStyle,
          video: commonVideoStyle,
        },
      }}
      topicWrapperStyle={{ alignItems: 'center' }}
      contentWrapperStyle={{
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
      }}
      useHeadingElement={'p'}
      headingStyle={{ order: 1, my: 3, ':before': { content: '"— "' } }}
      headerWrapperStyle={{ textAlign: 'center' }}
      actionWrapperStyle={{ mx: 'auto' }}
      useAbstractElement={'blockquote'}
      paragraphStyle={{
        label: 'blockquote',
        mx: [0, 5],
        my: [5],
        fontSize: [7, 8, 9],
        fontStyle: 'italic',
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
