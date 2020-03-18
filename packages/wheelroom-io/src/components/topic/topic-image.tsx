/**
 * Component variation
 *
 * Component type: topic
 * Variation: Single
 *
 */

import React from 'react'
import { Image } from '../../core/elements/image'

export const TopicImage = (props: any) => {
  return (
    <Image
      image={props.image}
      objectFit="cover"
      height="184px"
      margin="16px"
      {...props}
    />
  )
}
