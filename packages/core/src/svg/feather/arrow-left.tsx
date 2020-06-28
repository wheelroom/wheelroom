import React, { SVGProps } from 'react'
const componentId = 'svg-arrow-left'
export const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-left_svg__feather arrow-left_svg__feather-arrow-left"
      id={componentId}
      width="100%"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  )
}
