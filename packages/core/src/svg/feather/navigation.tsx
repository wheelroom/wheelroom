import React, { SVGProps } from 'react'
const componentId = 'svg-navigation'
export const SvgNavigation = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="navigation_svg__feather navigation_svg__feather-navigation"
      id={componentId}
      width="100%"
    >
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  )
}
