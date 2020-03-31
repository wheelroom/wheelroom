import React, { Fragment } from 'react'
import { Box, Container } from '../elements/grid'
import { PageSectionProps } from '../../components/page-section/page-section'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { TopicProps } from '../../components/topic'
import { Image, ImageStyleTree } from '../elements/image'
import { NcssProps } from '../elements/types'

export interface GalleryDisplayStyleTree {
  image: ImageStyleTree
  wrapper: NcssProps
  container: NcssProps
}

export const GalleryDisplay = (props: {
  pageSection: PageSectionProps
  styleTree: GalleryDisplayStyleTree
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const styleTree = props.styleTree || {}
  return (
    <Fragment>
      <Box is="div" ncss={styleTree.wrapper}>
        <Container ncss={styleTree.container}>
          {props.pageSection.topics
            .slice(0, 4)
            .map((topic: TopicProps, index: number) => (
              <Image
                styleTree={styleTree.image}
                key={index}
                media={topic?.media}
              />
            ))}
        </Container>
      </Box>
    </Fragment>
  )
}
