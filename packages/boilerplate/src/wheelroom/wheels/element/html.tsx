/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styledSystem } from '@wheelroom/styled-system'
import { NcssProps, Wheel } from '../types'
import { mergeNcss } from '../../lib/merge-ncss'
import { htmlReset } from './resets/html-reset'

export interface HtmlElementStyle {
  ncss: NcssProps
}

export interface HtmlProps {
  /** Styling wheel */
  wheel: Wheel
  code?: string
  title?: string
  type?: string
}

export const Html = (props: HtmlProps) => {
  if (!props.type) {
    return null
  }

  const htmlLabel = { ncss: { label: 'html' } }

  if (props.type === 'html') {
    return (
      <div
        css={styledSystem(
          props.wheel.styledSystemConfig,
          props.wheel.theme,
          mergeNcss([
            htmlLabel,
            htmlReset,
            props.wheel.elementStyles.html,
            props.wheel.style,
          ])
        )}
        dangerouslySetInnerHTML={{ __html: props.code }}
      />
    )
  } else return null
}