import React, { SVGProps } from 'react'
const componentId = 'svg-align-justify'
export const SvgAlignJustify = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="align-justify_svg__feather align-justify_svg__feather-align-justify"
      id={componentId}
      width="100%"
    >
      <path d="M21 10H3M21 6H3M21 14H3M21 18H3" />
    </svg>
  )
}
