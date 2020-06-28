import React, { SVGProps } from 'react'
const componentId = 'svg-umbrella'
export const SvgUmbrella = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="umbrella_svg__feather umbrella_svg__feather-umbrella"
      id={componentId}
      width="100%"
    >
      <path d="M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7" />
    </svg>
  )
}
