import React from 'react'
import { Box, ContainerMaxWidth } from '../../../core/elements/grid'
import { PageSectionProps } from '../page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { Topic } from '../../topic'

export const BlockDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const block = props.pageSection.topics.map((topic, index) => (
    <Topic
      key={index}
      {...topic}
      pageSectionActions={props.pageSection.actions}
      text={{
        ...props.pageSection.text,
        locale: props.pageSection.locale,
      }}
      pageSectionInfo={pageSectionInfo}
      fullTopicAsLink={false}
      imageWrapperStyle={{}}
      imageProps={{
        pictureNcss: {
          display: 'block',
          h: '1px',
          position: 'relative',
          pb: '65.25%',
        },
        imgNcss: { h: 1, objectFit: 'cover', position: 'absolute' },
      }}
      contentWrapperStyle={{}}
      headerWrapperStyle={{}}
      actionWrapperStyle={{}}
      topicWrapperStyle={{ px: [0, 3], py: [3, 3], w: [1, 1 / 2, 1 / 3] }}
    />
  ))
  return <Blocks>{block}</Blocks>
}

const Blocks = (props: { children: any }) => (
  <Box
    is="div"
    ncss={{
      label: 'wrapper',
      bg: 'bg',
      py: 8,
    }}
  >
    <ContainerMaxWidth
      ncss={{
        alignItems: ['center', 'initial'],
        flexDirection: ['column', 'row'],
        flexWrap: 'wrap',
        justifyContent: 'center',
        m: 'auto',
        p: 0,
        w: 1,
      }}
    >
      {props.children}
    </ContainerMaxWidth>
  </Box>
)
