import React, { Fragment } from 'react'
import { paragraphHeroStyle } from '../styles/paragraph'
import { Box, Container } from '../elements/grid'
import { Topic } from '../../components/topic'
import { buttonPrimaryStyle } from '../styles/button'
import { PageSectionProps } from '../../components/page-section/page-section'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../styles/image'
import { commonVideoDescriptionStyle, commonVideoStyle } from '../styles/video'

const heroActionStyle = {
  ...buttonPrimaryStyle,
  fontSize: [5, 6],
  py: [2, 3],
  px: [3, 4],
}

export const HeroDisplay = (props: { pageSection: PageSectionProps }) => {
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
        }}
      >
        <Container
          ncss={{
            px: 0,
          }}
        >
          <Topic
            {...topic}
            pageSectionActions={props.pageSection.actions}
            pageSectionInfo={pageSectionInfo}
            useHeadingElement={pageSectionInfo.index <= 1 ? 'h1' : 'h2'}
            styleTree={{
              wrapper: {
                position: 'relative',
                px: [2, 5, 7],
                py: 9,
                w: 1,
              },
              media: {
                wrapper: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  zIndex: -1,
                },
                image: {
                  img: { ...commonImageImgStyle, h: 1, objectFit: 'cover' },
                  picture: { ...commonImagePictureStyle, h: '170px', w: 1 },
                  figcaption: commonImageFigcaptionStyle,
                },
                video: {
                  description: commonVideoDescriptionStyle,
                  video: commonVideoStyle,
                },
              },
              content: {
                wrapper: {
                  maxWidth: '1440px',
                  m: 'auto',
                  p: 3,
                  w: 1,
                },
                contentText: {
                  wrapper: {
                    maxWidth: ['480px', '640px'],
                    w: 1,
                  },
                  heading: { mb: 0, color: 'caviar' },
                  abstract: paragraphHeroStyle,
                },
                contentActions: {
                  wrapper: { mb: 0, maxWidth: '480px' },
                  link: heroActionStyle,
                },
              },
            }}
          />
        </Container>
      </Box>
    </Fragment>
  )
}
