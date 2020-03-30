import React, { Fragment } from 'react'
import { Box, Container } from '../../../core/elements/grid'
import { Topic, TopicProps } from '../../topic'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../page-section'
import { smallParagraphStyle } from '../../../core/styles/paragraph'
import {
  commonImageFigcaptionStyle,
  commonImageImgStyle,
  commonImagePictureStyle,
} from '../../../core/styles/image'

export const ImageDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  return (
    <Fragment>
      <Box
        is="div"
        ncss={{
          label: 'wrapper',
          bg: 'bg',
          py: [3, 6, 8],
        }}
      >
        <Container
          ncss={{
            flexDirection: ['column', 'row'],
          }}
        >
          {props.pageSection.topics
            .slice(0, 2)
            .map((topic: TopicProps, index: number) => (
              <Topic
                {...topic}
                key={index}
                pageSectionActions={props.pageSection.actions}
                text={{
                  ...props.pageSection.text,
                  locale: props.pageSection.locale,
                }}
                pageSectionInfo={pageSectionInfo}
                topicWrapperStyle={{
                  w: 1,
                }}
                mediaProps={{
                  styleTree: {
                    picture: {
                      display: 'block',
                      px: 0,
                      py: 3,
                    },
                  },
                  styleTreeBase: {
                    img: commonImageImgStyle,
                    picture: commonImagePictureStyle,
                    figcaption: commonImageFigcaptionStyle,
                  },
                }}
                contentWrapperStyle={{}}
                useHeadingElement="h4"
                paragraphStyle={{ ...smallParagraphStyle, color: 'text' }}
                actionWrapperStyle={{
                  mx: 'auto',
                }}
                actionStyle={{
                  mx: 2,
                  fontSize: [3, 4],
                  lineHeight: [3],
                }}
              />
            ))}
        </Container>
      </Box>
    </Fragment>
  )
}
