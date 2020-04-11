import React, { SVGProps } from 'react'
import { systemCss } from '../../wheelroom/styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-rewind'
export const SvgRewind = (props: IconProps) => {
  const currentThemeId: any = useGetCurrentThemeId()
  const strokeWidth = props.strokeWidth || 2
  const css = systemCss(
    {
      ncss: props.ncss,
    },
    currentThemeId
  )
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="rewind_svg__feather rewind_svg__feather-rewind"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M11 19l-9-7 9-7v14zM22 19l-9-7 9-7v14z" />
    </svg>
  )
}
