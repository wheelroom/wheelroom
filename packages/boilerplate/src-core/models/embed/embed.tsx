/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Any } from '../../elements/element/any'
import { Wheel } from '../../lib/wheel'
import { EmbedModelStyle } from './model-style-types'

export interface EmbedWheel extends Wheel {
  style: EmbedModelStyle
}

export interface EmbedWheelProps {
  /** Styling wheel */
  wheel: EmbedWheel
  /** Embed props */
  code?: string
  title?: string
  type?: string
}

export const Embed = (props: EmbedWheelProps) => {
  if (!props.type || props.type !== 'html') {
    return null
  }

  return (
    <Any
      is="div"
      wheel={{ ...props.wheel, style: props.wheel.style }}
      dangerouslySetInnerHTML={{ __html: props.code || '' }}
    />
  )
}
