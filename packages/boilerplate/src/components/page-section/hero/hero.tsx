import React, { Fragment } from 'react'
import { heading1Style } from '../../../core/styles/heading'
import { paragraphHeroStyle } from '../../../core/styles/paragraph'
import { Box, Container } from '../../../core/elements/grid'
import { Topic } from '../../topic'
import { buttonPrimaryStyle } from '../../../core/styles/button'
import { PageSectionProps } from '../page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'

const heroActionStyle = {
  ...buttonPrimaryStyle,
  fontSize: [5, 6],
  py: [2, 3],
  px: [3, 4],
}

export const Hero = (props: { pageSection: PageSectionProps }) => {
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
            pageSectionInfo={pageSectionInfo}
            topicWrapperStyle={{
              position: 'relative',
              px: [2, 5, 7],
              py: 9,
              w: 1,
            }}
            imageProps={{
              pictureNcss: { h: '170px', w: 1 },
              imgNcss: { h: 1, objectFit: 'cover' },
            }}
            imageWrapperStyle={{
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
            headingStyle={{ ...heading1Style, mb: 0, color: 'caviar' }}
            useHeading="h1"
            paragraphStyle={{ ...paragraphHeroStyle }}
            actionWrapperStyle={{ mb: 0, maxWidth: '480px' }}
            actionStyle={heroActionStyle}
          />
        </Container>
      </Box>
    </Fragment>
  )
}
