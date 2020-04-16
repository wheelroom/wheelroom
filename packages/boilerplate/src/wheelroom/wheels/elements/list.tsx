/** @jsx jsx */
import { jsx } from '@emotion/core'
import { listPreset } from './list-preset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'

export interface ListProps {
  /** Styling wheel */
  wheel: Wheel
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
}

const getNcss = (props: ListProps, is: string) => {
  const label = 'list'
  const ncss = {
    label,
    ...listPreset.ncss,
    ...props.wheel.elementPresets[is].ncss,
    ...props.wheel.style.ncss,
    ...props.ncss,
  }
  return ncss
}

export const Li = (props: ListProps) => {
  const ncss = getNcss(props, 'li')
  const attrs = {
    css: styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
      ncss,
    }),
  }
  return jsx('li', attrs, props.children)
}

export const Ol = (props: ListProps) => {
  const ncss = getNcss(props, 'ol')
  const attrs = {
    css: styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
      ncss,
    }),
  }
  return jsx('ol', attrs, props.children)
}

export const Ul = (props: ListProps) => {
  const ncss = getNcss(props, 'ul')
  const attrs = {
    css: styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
      ncss,
    }),
  }
  return jsx('ul', attrs, props.children)
}
