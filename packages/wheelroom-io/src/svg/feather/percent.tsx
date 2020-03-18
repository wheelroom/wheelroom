import React, { SVGProps } from 'react'
import { systemCss } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-percent'
export const SvgPercent = (props: IconProps) => {
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
      className="percent_svg__feather percent_svg__feather-percent"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M19 5L5 19" />
      <circle cx={6.5} cy={6.5} r={2.5} />
      <circle cx={17.5} cy={17.5} r={2.5} />
    </svg>
  )
}
