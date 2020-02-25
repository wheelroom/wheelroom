import * as React from 'react'
import { FluidImage, Image } from '../image/image'

interface AvatarImageBoxProps {
  image: FluidImage
}

export const AvatarImageBox = (props: AvatarImageBoxProps) => {
  return (
    <Image
      {...{
        clipPath: 'circle(45% at center)',
        height: '100%',
        image: props.image,
        objectFit: 'cover',
      }}
    />
  )
}
