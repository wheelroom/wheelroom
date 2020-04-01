/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import {
  defaultParagraphStyle,
  commonParagraphStyle,
} from '../../styles/core-elements/paragraph'
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
    {
      ncss: {
        label,
        ...commonParagraphStyle,
        ...defaultParagraphStyle,
        ...props.ncss,
      },
    },
    currentThemeId
  )
  const attrs = {
    css,
  }
  return jsx(props.is || 'p', attrs, props.children)
}
