import React, { SVGProps } from 'react'
import { systemCss } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-truck'
export const SvgTruck = (props: IconProps) => {
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
      className="truck_svg__feather truck_svg__feather-truck"
      css={css}
      id={componentId}
      width="100%"
      {...props}
    >
      <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
      <circle cx={5.5} cy={18.5} r={2.5} />
      <circle cx={18.5} cy={18.5} r={2.5} />
    </svg>
  )
}
