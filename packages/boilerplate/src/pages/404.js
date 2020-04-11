import { Box, ContainerMaxWidth } from '../wheelroom/wheels/elements//grid'
import { Paragraph } from '../wheelroom/wheels/elements/paragraph'
import { H1 } from '../wheelroom/wheels/elements/heading'

import React from 'react'

const NotFoundPage = () => (
  <Box
    is="div"
    ncss={{
      py: [3, 6, 8],
    }}
  >
    <ContainerMaxWidth>
      <Box>
        <H1 ncss={{ color: 'caviar' }}>404. That’s an error.</H1>
        <Paragraph ncss={{ color: 'caviar' }}>
          So sorry, this path doesn&#39;t exist!
        </Paragraph>
      </Box>
    </ContainerMaxWidth>
  </Box>
)

export default NotFoundPage
