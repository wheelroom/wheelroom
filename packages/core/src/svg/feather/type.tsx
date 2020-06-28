import React, { SVGProps } from 'react'
const componentId = 'svg-type'
export const SvgType = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="type_svg__feather type_svg__feather-type"
      id={componentId}
      width="100%"
    >
      <path d="M4 7V4h16v3M9 20h6M12 4v16" />
    </svg>
  )
}