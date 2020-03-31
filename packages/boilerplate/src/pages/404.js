import { Box, ContainerMaxWidth } from '../core/elements//grid'
import { Paragraph } from '../core/elements/paragraph'
import { H1 } from '../core/elements/heading'
import { commonParagraphStyle } from '../core/styles/paragraph'

import React from 'react'

const NotFoundPage = () => (
  <Box
    is="div"
    ncss={{
      label: 'wrapper',
      py: [3, 6, 8],
    }}
  >
    <ContainerMaxWidth>
      <Box>
        <H1 ncss={{ color: 'caviar' }}>404. That’s an error.</H1>
        <Paragraph ncss={{ ...commonParagraphStyle, color: 'caviar' }}>
          So sorry, this path doesn&#39;t exist!
        </Paragraph>
      </Box>
    </ContainerMaxWidth>
  </Box>
)

export default NotFoundPage
