import React, { SVGProps } from 'react'
const componentId = 'svg-bar-chart'
export const SvgBarChart = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="bar-chart_svg__feather bar-chart_svg__feather-bar-chart"
      id={componentId}
      width="100%"
    >
      <path d="M12 20V10M18 20V4M6 20v-4" />
    </svg>
  )
}
