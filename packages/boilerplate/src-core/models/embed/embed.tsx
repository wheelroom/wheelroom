/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel } from '../../lib/wheel'
import { Any } from '../../elements/element/any'
import { EmbedNcssTree } from './ncss-tree'

export interface EmbedWheel extends Wheel {
  style: EmbedNcssTree
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
