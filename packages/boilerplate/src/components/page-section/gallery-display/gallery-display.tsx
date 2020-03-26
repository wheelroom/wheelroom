import React, { Fragment } from 'react'
import { SingleImage } from './single-image'
import { Box, Container } from '../../../core/elements/grid'
import { PageSectionProps } from '../page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { TopicProps } from '../../topic'

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
          py: 8,
        }}
      >
        <Container
          ncss={{
            label: 'Container',
            maxWidth: '1280px',
            m: 'auto',
            justifyContent: 'center',
            px: [2, 5, 7],
            w: 1,
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {props.pageSection.topics
            .filter((topic: TopicProps, index: number) => index <= 4)
            .map((topic: TopicProps, index: number) => (
              <SingleImage key={index} topic={topic} />
            ))}
        </Container>
      </Box>
    </Fragment>
  )
}
