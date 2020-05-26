/** @jsx jsx */
import { jsx } from '@emotion/core'
import { NcssProps, Wheel } from '../../types'
import { Any } from '../../element/any'

export interface EmbedStyle {
  ncss: NcssProps
}

export interface EmbedProps {
  /** Styling wheel */
  wheel: Wheel
  /** Embed props */
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
      wheel={{ ...props.wheel, style: props.wheel.style.embed }}
      dangerouslySetInnerHTML={{ __html: props.code || '' }}
    />
  )
}
