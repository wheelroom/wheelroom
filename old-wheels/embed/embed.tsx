/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel } from '../../lib/wheel'
import { Any } from '../../elements/any'
import { EmbedNcssTree } from './ncss-tree'
import { Iframe } from '../../elements/iframe'
import { EmbedModel } from './model'

export interface EmbedWheel extends Wheel {
  style: EmbedNcssTree
}

export interface EmbedProps extends EmbedModel {
  wheel: EmbedWheel
}

export const Embed = (props: EmbedProps) => {
  const __html = (props.code && props.code.code) || ''
  if (props.type === 'html') {
    return (
      <Any
        is="div"
        wheel={{ ...props.wheel, style: props.wheel.style.html }}
        dangerouslySetInnerHTML={{ __html }}
      />
    )
  }
  if (props.type === 'youtube' && props.code) {
    return (
      <Any
        is="div"
        wheel={{ ...props.wheel, style: props.wheel.style.youtube }}
      >
        <Iframe
          wheel={{ ...props.wheel }}
          iframeProps={{
            src: props.code.code,
            allowFullScreen: '1',
            frameBorder: '0',
            allow:
              'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
          }}
        />
      </Any>
    )
  }
  return null
}
