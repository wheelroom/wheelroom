import React, { SVGProps } from 'react'
const componentId = 'svg-arrow-down-right'
export const SvgArrowDownRight = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-down-right_svg__feather arrow-down-right_svg__feather-arrow-down-right"
      id={componentId}
      width="100%"
    >
      <path d="M7 7l10 10M17 7v10H7" />
    </svg>
  )
}
