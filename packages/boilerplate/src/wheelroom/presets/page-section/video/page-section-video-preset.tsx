import React from 'react'
import { Box, Container, ContainerMaxWidth } from '../../../elements/grid'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { TopicPreset } from '../../topic/topic-preset'
import { PageSectionVideoPresetStyle } from './page-section-video-preset-style'
import { TopicProps } from '../../../../models/topic'

export const PageSectionVideoPreset = (props: {
  /** Contains the topic to render */
  pageSection: PageSectionProps
  /** Styles to use */
  treeStyle: PageSectionVideoPresetStyle
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
          .slice(0, 1)
          .map((topic: TopicProps, index: number) => (
            <TopicPreset
              topic={topic}
              key={index}
              pageSectionActions={props.pageSection.actions}
              pageSectionInfo={pageSectionInfo}
              treeStyle={props.treeStyle.topic}
            />
          ))}
      </ContainerType>
    </Box>
  )
}
