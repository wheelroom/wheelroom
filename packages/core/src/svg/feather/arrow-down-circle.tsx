import React, { SVGProps } from 'react'
const componentId = 'svg-arrow-down-circle'
export const SvgArrowDownCircle = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-down-circle_svg__feather arrow-down-circle_svg__feather-arrow-down-circle"
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M8 12l4 4 4-4M12 8v8" />
    </svg>
  )
}
