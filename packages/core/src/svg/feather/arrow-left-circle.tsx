import React, { SVGProps } from 'react'
const componentId = 'svg-arrow-left-circle'
export const SvgArrowLeftCircle = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-left-circle_svg__feather arrow-left-circle_svg__feather-arrow-left-circle"
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M12 8l-4 4 4 4M16 12H8" />
    </svg>
  )
}
