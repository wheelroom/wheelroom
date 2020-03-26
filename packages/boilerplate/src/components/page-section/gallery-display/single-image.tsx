import React, { Fragment } from 'react'
import { Box } from '../../../core/elements/grid'
import { TopicProps } from '../../topic'
import { Image } from '../../../core/elements/image'

export interface SingleImageProps {
  topic?: TopicProps
}

export const SingleImage = (props: SingleImageProps) => {
  return (
    <Fragment>
      <Box
        is="div"
        ncss={{
          label: 'Image',
          display: 'flex',
          w: [1 / 3, 1 / 4, 1 / 6],
          p: 2,
        }}
      >
        <Image media={props.topic?.media} />
      </Box>
    </Fragment>
  )
}
