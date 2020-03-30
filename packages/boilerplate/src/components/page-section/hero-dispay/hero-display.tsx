import React, { Fragment } from 'react'
import { paragraphHeroStyle } from '../../../core/styles/paragraph'
import { Box, Container } from '../../../core/elements/grid'
import { Topic } from '../../topic'
import { buttonPrimaryStyle } from '../../../core/styles/button'
import { PageSectionProps } from '../page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { commonImageImgStyle, commonImagePictureStyle, commonImageFigcaptionStyle } from '../../../core/styles/image'

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
            text={{
              ...props.pageSection.text,
              locale: props.pageSection.locale,
            }}
            pageSectionInfo={pageSectionInfo}
            topicWrapperStyle={{
              position: 'relative',
              px: [2, 5, 7],
              py: 9,
              w: 1,
            }}
            mediaProps={{
              styleTree: {
                img: { h: 1, objectFit: 'cover' },
                picture: { h: '170px', w: 1 },
              },
              styleTreeBase: {
                img: commonImageImgStyle,
                picture: commonImagePictureStyle,
                figcaption: commonImageFigcaptionStyle,
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
