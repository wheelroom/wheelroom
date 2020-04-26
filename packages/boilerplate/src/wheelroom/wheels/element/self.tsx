/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ListElementStyle, selfListReset } from './resets/self-list-reset'
import { styledSystem, StyledSystemTheme } from '@wheelroom/styled-system'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'
import {
  BlockquoteElementStyle,
  selfBlockquoteReset,
} from './resets/self-blockquote-reset'
import { CodeElementStyle, selfCodeReset } from './resets/self-code-reset'
import { HrElementStyle, selfHrReset } from './resets/self-hr-reset'
import { PreElementStyle, selfPreReset } from './resets/self-pre-reset'
import { StrongElementStyle, selfStrongReset } from './resets/self-strong-reset'
import {
  TableElementStyle,
  selfTableReset,
  selfTdReset,
  selfTrReset,
} from './resets/self-table-reset'
import { ElementStyles } from './types/element-styles'

export type SelfReset =
  | ListElementStyle
  | BlockquoteElementStyle
  | CodeElementStyle
  | HrElementStyle
  | PreElementStyle
  | StrongElementStyle
  | TableElementStyle

export const getSelf = (
  props: ElementProps,
  reset: SelfReset,
  elementName: keyof ElementStyles,
  extraAttrs: any = {},
  htmlName = ''
) => {
  const label = { ncss: { label: elementName } }
  const ncss = mergeNcss([
    label,
    reset,
    props.wheel.elementStyles[elementName],
    props.wheel.style,
    props,
  ])
  const attrs: any = getElementAttrs(props, extraAttrs)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    (props.wheel.theme as unknown) as StyledSystemTheme,
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

export const Td = (props: ElementProps) => {
  return getSelf(props, selfTdReset, 'td')
}

export const Tr = (props: ElementProps) => {
  return getSelf(props, selfTrReset, 'tr')
}

export const Ul = (props: ElementProps) => {
  return getSelf(props, selfListReset, 'ul')
}
