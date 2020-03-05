/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { ListElementName } from './styles'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'

export interface ListProps {
  /** Render as another HTML element */
  is?: ListElementName
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: any
}

export const List = (props: ListProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `List-${props.is}`
  const css = systemCss(
    {
      ncss: { label, ...props.ncss },
    },
    currentThemeId
  )
  const attrs = {
    css,
  }
  return jsx(props.is || 'ul', attrs, props.children)
}
