import React, { SVGProps } from 'react'
const componentId = 'svg-arrow-right'
export const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-right_svg__feather arrow-right_svg__feather-arrow-right"
      id={componentId}
      width="100%"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
