import React, { SVGProps } from 'react'
const componentId = 'svg-menu'
export const SvgMenu = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="menu_svg__feather menu_svg__feather-menu"
      id={componentId}
      width="100%"
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  )
}
