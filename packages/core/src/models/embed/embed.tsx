/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel } from '../../lib/wheel'
import { Any } from '../../elements/any'
import { EmbedNcssTree } from './ncss-tree'
import { Iframe } from '../../elements/self'

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
  if (props.type === 'html') {
    return (
      <Any
        is="div"
        wheel={{ ...props.wheel, style: props.wheel.style.html }}
        dangerouslySetInnerHTML={{ __html: props.code || '' }}
      />
    )
  }
  if (props.type === 'youtube' && props.code) {
    return (
      <Iframe
        wheel={{ ...props.wheel, style: props.wheel.style.youtube }}
        src={props.code} // https://www.youtube.com/embed/ALy6e7GbDRQ
        allowfullscreen
        width="560"
        height="315"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
    )
  }
  return null
}
