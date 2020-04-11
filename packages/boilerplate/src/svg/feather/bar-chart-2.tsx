import React, { SVGProps } from 'react'
import { systemCss } from '../../wheelroom/styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-bar-chart2'
export const SvgBarChart2 = (props: IconProps) => {
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
      className="bar-chart-2_svg__feather bar-chart-2_svg__feather-bar-chart-2"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  )
}
