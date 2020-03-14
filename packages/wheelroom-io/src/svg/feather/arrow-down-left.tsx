import React, { SVGProps } from 'react'
import { systemCss } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-arrow-down-left'
export const SvgArrowDownLeft = (props: IconProps) => {
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
      className="arrow-down-left_svg__feather arrow-down-left_svg__feather-arrow-down-left"
      css={css}
      id={componentId}
      width="100%"
      {...props}
    >
      <path d="M17 7L7 17M17 17H7V7" />
    </svg>
  )
}
