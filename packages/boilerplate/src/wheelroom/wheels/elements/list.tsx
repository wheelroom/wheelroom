/** @jsx jsx */
import { jsx } from '@emotion/core'
import { listReset } from './list-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'
import { mergeNcss } from '../../lib/merge-ncss'

export interface ListProps {
  /** Styling wheel */
  wheel: Wheel
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
}

const getNcss = (props: ListProps, is: string) => {
  const label = { ncss: { label: 'list' } }
  return mergeNcss([
    label,
    listReset,
    props.wheel.elementPresets[is],
    props.wheel.style,
    props,
  ])
}

export const Li = (props: ListProps) => {
  const ncss = getNcss(props, 'li')
  const attrs = {
    css: styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, ncss),
  }
  return jsx('li', attrs, props.children)
}

export const Ol = (props: ListProps) => {
  const ncss = getNcss(props, 'ol')
  const attrs = {
    css: styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, ncss),
  }
  return jsx('ol', attrs, props.children)
}

export const Ul = (props: ListProps) => {
  const ncss = getNcss(props, 'ul')
  const attrs = {
    css: styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, ncss),
  }
  return jsx('ul', attrs, props.children)
}
