/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'

export interface ParagraphProps {
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: any
}

export const Paragraph = (props: ParagraphProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId

  return (
    <p css={systemCss({ ncss: props.ncss }, currentThemeId)}>
      {props.children}
    </p>
  )
}
