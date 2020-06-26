/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel } from '../../lib/wheel'
import { Any } from '../../elements/element/any'
import { EmbedModelNcssTree } from './model-style-types'

export interface EmbedWheel extends Wheel {
  style: EmbedModelNcssTree
}

export interface EmbedProps {
  wheel: EmbedWheel
  code?: string
  title?: string
  type?: string
}

export const Embed = (props: EmbedProps) => {
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
