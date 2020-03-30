import React, { Fragment } from 'react'
import { Box, Container } from '../../../core/elements/grid'
import { PageSectionProps } from '../page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { TopicProps } from '../../topic'
import { Image } from '../../../core/elements/image'
import {
  commonImageImgStyle,
  commonImageFigcaptionStyle,
  commonImagePictureStyle,
} from '../../../core/styles/image'

export const GalleryDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  return (
    <Fragment>
      <Box
        is="div"
        ncss={{
          label: 'Wrapper',
          bg: 'bg',
          py: [3, 6, 8],
        }}
      >
        <Container
          ncss={{
            flexDirection: ['column', 'row'],
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {props.pageSection.topics
            .slice(0, 4)
            .map((topic: TopicProps, index: number) => (
              <Image
                styleTree={{
                  picture: { w: [1, 1 / 2], p: 3 },
                }}
                styleTreeBase={{
                  img: commonImageImgStyle,
                  picture: commonImagePictureStyle,
                  figcaption: commonImageFigcaptionStyle,
                }}
                key={index}
                media={topic?.media}
              />
            ))}
        </Container>
      </Box>
    </Fragment>
  )
}
