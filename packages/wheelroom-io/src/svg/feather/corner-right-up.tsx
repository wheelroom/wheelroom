import React, { SVGProps } from 'react'
import { systemCss } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-corner-right-up'
export const SvgCornerRightUp = (props: IconProps) => {
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
      className="corner-right-up_svg__feather corner-right-up_svg__feather-corner-right-up"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M10 9l5-5 5 5" />
      <path d="M4 20h7a4 4 0 004-4V4" />
    </svg>
  )
}
