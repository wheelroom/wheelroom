import React, { SVGProps } from 'react'
import { systemCss } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-corner-right-down'
export const SvgCornerRightDown = (props: IconProps) => {
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
      className="corner-right-down_svg__feather corner-right-down_svg__feather-corner-right-down"
      css={css}
      id={componentId}
      width="100%"
      {...props}
    >
      <path d="M10 15l5 5 5-5" />
      <path d="M4 4h7a4 4 0 014 4v12" />
    </svg>
  )
}
