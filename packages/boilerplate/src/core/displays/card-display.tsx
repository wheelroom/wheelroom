import React from 'react'
import { Box, ContainerMaxWidth } from '../primary-elements/grid'
import { PageSectionProps } from '../../components/page-section/page-section'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { Topic } from '../../components/topic/topic'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../styles/image'
import { commonVideoDescriptionStyle, commonVideoStyle } from '../styles/video'

export const CardDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }

  const cards = props.pageSection.topics.map((topic, index) => (
    <Topic
      key={index}
      {...topic}
      pageSectionActions={props.pageSection.actions}
      pageSectionInfo={pageSectionInfo}
      fullTopicAsLink={true}
      styleTree={{
        wrapper: {
          ...{
            bg: 'bg',
            color: 'cardsShadow',
            flex: '1',
            maxWidth: '280px',
            minWidth: '280px',
            m: 2,
          },
          ...(pageSectionInfo.topicOptions.hideAction
            ? {}
            : {
                border: '1px solid',
                borderColor: 'cardsBorder',
                borderRadius: 3,
                boxShadow: '0 0 16px',
                transition: 'transform .25s ease',
                ':hover': {
                  cursor: 'pointer',
                  transform: 'scale(1.05)',
                },
              }),
        },
        media: {
          wrapper: {
            p: 3,
          },
          image: {
            img: { ...commonImageImgStyle, h: 1, objectFit: 'cover' },
            picture: {
              ...commonImagePictureStyle,
              display: 'block',
              h: '178px',
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
            flex: '1 1 auto',
          },
          contentText: {
            wrapper: {
              display: 'block',
              flex: '1 1 auto',
            },
          },
          contentActions: {
            wrapper: {
              flex: '0',
            },
          },
        },
      }}
    />
  ))
  return <CardWrapper>{cards}</CardWrapper>
}

const CardWrapper = (props: { children: any }) => (
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
        px: [2, 5, 7],
        w: 1,
      }}
    >
      {props.children}
    </ContainerMaxWidth>
  </Box>
)
