/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel } from '../../lib/wheel'
import { Any } from '../../elements/any'
import { EmbedNcssTree } from './ncss-tree'
import { Iframe } from '../../elements/iframe'

export interface EmbedWheel extends Wheel {
  style: EmbedNcssTree
}

export interface EmbedProps {
  wheel: EmbedWheel
  code: {
    code: string
  }
  title?: string
  type?: string
}

export const Embed = (props: EmbedProps) => {
  if (props.type === 'html') {
    return (
      <Any
        is="div"
        wheel={{ ...props.wheel, style: props.wheel.style.html }}
        dangerouslySetInnerHTML={{ __html: props.code.code || '' }}
      />
    )
  }
  if (props.type === 'youtube' && props.code) {
    console.log('code', props.code)
    return (
      <Iframe
        wheel={{ ...props.wheel, style: props.wheel.style.youtube }}
        iframeProps={{
          src: 'https://youtu.be/embed/' + props.code.code,
          allowfullscreen: true,
          frameborder: '0',
          allow:
            'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
        }}
      />
    )
  }
  return null
}
