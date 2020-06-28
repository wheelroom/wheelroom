import React, { SVGProps } from 'react'
const componentId = 'svg-circle'
export const SvgCircle = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="circle_svg__feather circle_svg__feather-circle"
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={10} />
    </svg>
  )
}
