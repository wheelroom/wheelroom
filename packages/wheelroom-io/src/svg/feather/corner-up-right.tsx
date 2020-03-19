import React, { SVGProps } from 'react'
import { systemCss } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-corner-up-right'
export const SvgCornerUpRight = (props: IconProps) => {
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
      className="corner-up-right_svg__feather corner-up-right_svg__feather-corner-up-right"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M15 14l5-5-5-5" />
      <path d="M4 20v-7a4 4 0 014-4h12" />
    </svg>
  )
}
