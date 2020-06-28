import React, { SVGProps } from 'react'
const componentId = 'svg-check'
export const SvgCheck = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="check_svg__feather check_svg__feather-check"
      id={componentId}
      width="100%"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}
