import React, { SVGProps } from 'react'
const componentId = 'svg-arrow-right-circle'
export const SvgArrowRightCircle = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-right-circle_svg__feather arrow-right-circle_svg__feather-arrow-right-circle"
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M12 16l4-4-4-4M8 12h8" />
    </svg>
  )
}
