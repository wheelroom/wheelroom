import React, { SVGProps } from 'react'
const componentId = 'svg-mouse-pointer'
export const SvgMousePointer = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mouse-pointer_svg__feather mouse-pointer_svg__feather-mouse-pointer"
      id={componentId}
      width="100%"
    >
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3zM13 13l6 6" />
    </svg>
  )
}
