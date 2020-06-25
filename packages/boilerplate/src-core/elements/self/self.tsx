/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styledSystem } from '@wheelroom/styled-system'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from '../element'
import { ElementStyles } from '../types/element-styles'
import { NcssObjectProps } from '../../lib/ncss'
import { selfBlockquoteReset } from './self-blockquote-reset'
import { selfCodeReset } from './self-code-reset'
import { selfDdReset, selfDlReset, selfDtReset } from './self-dl-reset'
import { selfHrReset } from './self-hr-reset'
import { selfListReset } from './self-list-reset'
import { selfPreReset } from './self-pre-reset'
import { selfStrongReset } from './self-strong-reset'
import {
  selfTableReset,
  selfTdReset,
  selfThReset,
  selfTrReset,
} from './self-table-reset'
import { selfTimeReset } from './self-time-reset'

export type SelfReset = NcssObjectProps

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
    props.wheel.wrSystemConfig,
    props.wheel.wrSystemTheme,
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

export const Dd = (props: ElementProps) => {
  return getSelf(props, selfDdReset, 'dd')
}

export const Dl = (props: ElementProps) => {
  return getSelf(props, selfDlReset, 'dl')
}

export const Dt = (props: ElementProps) => {
  return getSelf(props, selfDtReset, 'dt')
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

export const Th = (props: ElementProps) => {
  return getSelf(props, selfThReset, 'th')
}

export const Tr = (props: ElementProps) => {
  return getSelf(props, selfTrReset, 'tr')
}

export const Time = (props: ElementProps) => {
  return getSelf(props, selfTimeReset, 'time')
}

export const Ul = (props: ElementProps) => {
  return getSelf(props, selfListReset, 'ul')
}
