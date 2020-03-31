import React, { Fragment } from 'react'
import { paragraphHeroStyle } from '../styles/paragraph'
import { Box, Container } from '../primary-elements/grid'
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
            topicWrapperStyle={{
              position: 'relative',
              px: [2, 5, 7],
              py: 9,
              w: 1,
            }}
            mediaProps={{
              styleTree: {
                img: { ...commonImageImgStyle, h: 1, objectFit: 'cover' },
                picture: { ...commonImagePictureStyle, h: '170px', w: 1 },
                figcaption: commonImageFigcaptionStyle,
                description: commonVideoDescriptionStyle,
                video: commonVideoStyle,
              },
            }}
            mediaWrapperStyle={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: -1,
            }}
            contentWrapperStyle={{
              maxWidth: '1440px',
              m: 'auto',
              p: 3,
              w: 1,
            }}
            headerWrapperStyle={{
              maxWidth: ['480px', '640px'],
              w: 1,
            }}
            headingStyle={{ mb: 0, color: 'caviar' }}
            useHeadingElement={pageSectionInfo.index <= 1 ? 'h1' : 'h2'}
            paragraphStyle={{ ...paragraphHeroStyle }}
            actionWrapperStyle={{ mb: 0, maxWidth: '480px' }}
            actionStyle={heroActionStyle}
          />
        </Container>
      </Box>
    </Fragment>
  )
}
