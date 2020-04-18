/** @jsx jsx */
import { jsx } from '@emotion/core'
import { SelfListReset, selfListReset } from './resets/self-list-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'
import {
  SelfBlockquoteReset,
  selfBlockquoteReset,
} from './resets/self-blockquote-reset'
import { SelfCodeReset, selfCodeReset } from './resets/self-code-reset'
import { SelfHrReset, selfHrReset } from './resets/self-hr-reset'
import { SelfPreReset, selfPreReset } from './resets/self-pre-reset'
import { SelfStrongReset, selfStrongReset } from './resets/self-strong-reset'
import { SelfTableReset, selfTableReset } from './resets/self-table-reset'

export type SelfReset =
  | SelfListReset
  | SelfBlockquoteReset
  | SelfCodeReset
  | SelfHrReset
  | SelfPreReset
  | SelfStrongReset
  | SelfTableReset

export const getSelf = (
  props: ElementProps,
  reset: SelfReset,
  elementName: string,
  extraAttrs: any = {},
  htmlName = ''
) => {
  const label = { ncss: { label: elementName } }
  const ncss = mergeNcss([
    label,
    reset,
    props.wheel.elementPresets[elementName],
    props.wheel.style,
    props,
  ])
  const attrs: any = getElementAttrs(props, extraAttrs)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    ncss
  )
  return jsx(htmlName || elementName, attrs, props.children)
}

export const Blockquote = (props: ElementProps) => {
  return getSelf(props, selfBlockquoteReset, 'blockquote')
}

export const Code = (props: ElementProps) => {
  return getSelf(props, selfCodeReset, 'code')
}

export const Hr = (props: ElementProps) => {
  return getSelf(props, selfHrReset, 'hr')
}

export const Li = (props: ElementProps) => {
  return getSelf(props, selfListReset, 'li')
}

export const Ol = (props: ElementProps) => {
  return getSelf(props, selfListReset, 'ol')
}

export const Pre = (props: ElementProps) => {
  return getSelf(props, selfPreReset, 'pre')
}

export const Strong = (props: ElementProps) => {
  return getSelf(props, selfStrongReset, 'strong')
}

export const Table = (props: ElementProps) => {
  return getSelf(props, selfTableReset, 'table')
}

export const Ul = (props: ElementProps) => {
  return getSelf(props, selfListReset, 'ul')
}
