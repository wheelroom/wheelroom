import React, { SVGProps } from 'react'
const componentId = 'svg-pie-chart'
export const SvgPieChart = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pie-chart_svg__feather pie-chart_svg__feather-pie-chart"
      id={componentId}
      width="100%"
    >
      <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
    </svg>
  )
}
