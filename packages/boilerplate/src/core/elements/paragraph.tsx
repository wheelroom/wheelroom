/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { defaultParagraphStyle } from '../styles/paragraph'
import { BlockLevelElementName, NcssProps } from './types'

export interface ParagraphProps {
  /** Render as another HTML element */
  is?: BlockLevelElementName
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
}

export const Paragraph = (props: ParagraphProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `${props.is}`
  const css = systemCss(
    { ncss: { label, ...defaultParagraphStyle, ...props.ncss } },
    currentThemeId
  )
  const attrs = {
    css,
  }
  return jsx(props.is || 'p', attrs, props.children)
}
