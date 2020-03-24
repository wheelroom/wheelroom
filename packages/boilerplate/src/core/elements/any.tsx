/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { NcssProps } from './types'

export interface AnyProps {
  /** Render as another HTML element */
  is: any
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
}

export const Any = (props: AnyProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `Any-${props.is}`
  const css = systemCss(
    {
      ncss: { label, ...props.ncss },
    },
    currentThemeId
  )
  const attrs = {
    css,
  }
  return jsx(props.is || 'div', attrs, props.children)
}
