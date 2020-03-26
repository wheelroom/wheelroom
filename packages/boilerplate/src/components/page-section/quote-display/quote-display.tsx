import React from 'react'
import { Box, ContainerMaxWidth } from '../../../core/elements/grid'
import { PageSectionProps } from '../page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { Topic } from '../../topic'

export const QuoteDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const quote = props.pageSection.topics.map((topic, index) => (
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
      mediaWrapperStyle={{
        p: 3,
      }}
      mediaProps={{
        pictureNcss: {
          display: 'block',
          overflow: 'hidden',
          position: 'relative',
          h: '178px',
          w: '178px',
          mx: 'auto',
          borderRadius: '50%',
        },
        imgNcss: { w: 1, h: 1, objectFit: 'cover', position: 'absolute' },
      }}
      topicWrapperStyle={{ alignItems: 'center' }}
      contentWrapperStyle={{
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
      }}
      useHeading={'p'}
      headingStyle={{ order: 1, my: 3, ':before': { content: '"— "' } }}
      headerWrapperStyle={{ textAlign: 'center' }}
      actionWrapperStyle={{ mx: 'auto' }}
      useParagraph={'blockquote'}
      paragraphStyle={{
        label: 'blockquote',
        mx: [0, 5],
        my: [5],
        fontSize: [7, 8, 9],
        fontStyle: 'italic',
      }}
    />
  ))
  return <Quotes>{quote}</Quotes>
}

const Quotes = (props: { children: any }) => (
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
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.children}
    </ContainerMaxWidth>
  </Box>
)
