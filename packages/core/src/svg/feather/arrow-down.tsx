import React, { SVGProps } from 'react'
const componentId = 'svg-arrow-down'
export const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-down_svg__feather arrow-down_svg__feather-arrow-down"
      id={componentId}
      width="100%"
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  )
}
