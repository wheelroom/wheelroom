import React, { SVGProps } from 'react'
const componentId = 'svg-pocket'
export const SvgPocket = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pocket_svg__feather pocket_svg__feather-pocket"
      id={componentId}
      width="100%"
    >
      <path d="M4 3h16a2 2 0 012 2v6a10 10 0 01-10 10A10 10 0 012 11V5a2 2 0 012-2z" />
      <path d="M8 10l4 4 4-4" />
    </svg>
  )
}
