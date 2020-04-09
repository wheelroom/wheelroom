import React from 'react'
import { Box, Container, ContainerMaxWidth } from '../../../elements/grid'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { TopicProps } from '../../../../models/topic'
import { PageSectionGalleryTreeStyle } from './page-section-gallery-tree-style'
import { TopicTree } from '../../topic/topic-tree'

export const PageSectionGalleryTree = (props: {
  /** Contains the topic to render */
  pageSection: PageSectionProps
  /** Styles to use */
  treeStyle: PageSectionGalleryTreeStyle
  /** Use a max width or fluid container */
  containerStyle: 'maxWidth' | 'fluid'
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const ContainerType =
    props.containerStyle === 'maxWidth' ? ContainerMaxWidth : Container
  return (
    <Box is="div" ncss={props.treeStyle.wrapper.ncss}>
      <ContainerType ncss={props.treeStyle.container.ncss}>
        {props.pageSection.topics
          .slice(0, 4)
          .map((topic: TopicProps, index: number) => (
            <TopicTree
              topic={topic}
              key={index}
              pageSectionInfo={pageSectionInfo}
              treeStyle={props.treeStyle.topic}
            />
          ))}
      </ContainerType>
    </Box>
  )
}
