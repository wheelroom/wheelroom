import React from 'react'
import { Box, ContainerMaxWidth } from '../../../core/elements/grid'
import { Topic } from '../../topic'
import { heading2Style } from '../../../core/styles/heading'
import { PageSectionProps } from '../page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'

export const FeaturedDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const topic = props.pageSection.topics[0]
  return (
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
          justifyContent: 'center',
          flexDirection: ['column', 'row'],
          alignItems: ['center', 'baseline'],
        }}
      >
        <Topic
          {...topic}
          text={{
            ...props.pageSection.text,
            locale: props.pageSection.locale,
          }}
          pageSectionInfo={pageSectionInfo}
          topicWrapperStyle={{
            flexDirection: ['column', 'column', 'row'],
            justifyContent: 'space-evenly',
          }}
          imageProps={{
            pictureNcss: {
              p: 3,
            },
          }}
          imageWrapperStyle={{
            display: 'flex',
            flexDirection: 'column',
            w: [1, 1, 1 / 2.5],
            mb: [3, 3, 0],
          }}
          contentWrapperStyle={{
            display: 'flex',
            flexDirection: 'column',
            w: [1, 1, 1 / 2.5],
          }}
          headerWrapperStyle={{}}
          headingStyle={{ ...heading2Style }}
          useHeading="h3"
          actionWrapperStyle={{
            display: 'flex',
          }}
        />
      </ContainerMaxWidth>
    </Box>
  )
}
