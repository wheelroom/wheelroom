import React, { SVGProps } from 'react'
const componentId = 'svg-plus'
export const SvgPlus = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="plus_svg__feather plus_svg__feather-plus"
      id={componentId}
      width="100%"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}
