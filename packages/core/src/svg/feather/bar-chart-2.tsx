import React, { SVGProps } from 'react'
const componentId = 'svg-bar-chart2'
export const SvgBarChart2 = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="bar-chart-2_svg__feather bar-chart-2_svg__feather-bar-chart-2"
      id={componentId}
      width="100%"
    >
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  )
}
