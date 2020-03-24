import React, { Fragment } from 'react'
import { SingleImage } from './single-image'
import { Box, Container } from '../../../core/elements/grid'
import { TopicProps } from '../../topic'
import { PageSectionProps } from '../page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'

export interface ImagesProps {
  topics: TopicProps[]
}

export const Images = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const images = props.pageSection.topics.map((topic, index) => (
    <SingleImage key={index} topic={topic} />
  ))
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
          {images}
        </Container>
      </Box>
    </Fragment>
  )
}
