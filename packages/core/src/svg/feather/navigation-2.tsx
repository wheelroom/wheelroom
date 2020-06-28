import React, { SVGProps } from 'react'
const componentId = 'svg-navigation2'
export const SvgNavigation2 = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="navigation-2_svg__feather navigation-2_svg__feather-navigation-2"
      id={componentId}
      width="100%"
    >
      <path d="M12 2l7 19-7-4-7 4 7-19z" />
    </svg>
  )
}
