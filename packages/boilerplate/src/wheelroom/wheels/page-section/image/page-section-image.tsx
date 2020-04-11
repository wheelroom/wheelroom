import React from 'react'
import { Box, Container, ContainerMaxWidth } from '../../elements/grid'
import { TopicProps } from '../../../../models/topic'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { Topic } from '../../topic/topic'
import { PageSectionImagePreset } from './page-section-image-preset'

export const PageSectionImage = (props: {
  /** Contains the topic to render */
  pageSection: PageSectionProps
  /** Styles to use */
  treeStyle: PageSectionImagePreset
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
          .slice(0, 2)
          .map((topic: TopicProps, index: number) => (
            <Topic
              topic={topic}
              key={index}
              pageSectionActions={props.pageSection.actions}
              pageSectionInfo={pageSectionInfo}
              useHeadingElement="h3"
              treeStyle={props.treeStyle.topic}
            />
          ))}
      </ContainerType>
    </Box>
  )
}
