import React from 'react'
import { Box, ContainerMaxWidth } from '../core/elements/grid'
import { H1 } from '../core/elements/heading'
import { Paragraph } from '../core/elements/paragraph'
import { commonHeadingStyle, heading1Style } from '../core/styles/heading'
import { commonParagraphStyle } from '../core/styles/paragraph'

const NotFoundPage = () => (
  <Box
    is="div"
    ncss={{
      label: 'wrapper',
      py: 8,
    }}
  >
    <ContainerMaxWidth>
      <Box>
        <H1 ncss={{ ...commonHeadingStyle, ...heading1Style, color: 'caviar' }}>
          404. That’s an error.
        </H1>
        <Paragraph ncss={{ ...commonParagraphStyle, color: 'caviar' }}>
          So sorry, this path doesn&#39;t exist!
        </Paragraph>
      </Box>
    </ContainerMaxWidth>
  </Box>
)

export default NotFoundPage
