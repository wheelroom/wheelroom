import React, { SVGProps } from 'react'
const componentId = 'svg-x'
export const SvgX = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="x_svg__feather x_svg__feather-x"
      id={componentId}
      width="100%"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}
