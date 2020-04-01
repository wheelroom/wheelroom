/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { ListElementName, NcssProps } from './types'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { defaultListStyle } from '../../styles/core-elements/list'

export interface ListProps {
  /** Render as another HTML element */
  is?: ListElementName
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
}

export const List = (props: ListProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `List-${props.is}`
  const css = systemCss(
    {
      ncss: { label, ...defaultListStyle, ...props.ncss },
    },
    currentThemeId
  )
  const attrs = {
    css,
  }
  return jsx(props.is || 'ul', attrs, props.children)
}
