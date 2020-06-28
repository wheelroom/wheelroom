import React, { SVGProps } from 'react'
const componentId = 'svg-rotate-cw'
export const SvgRotateCw = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="rotate-cw_svg__feather rotate-cw_svg__feather-rotate-cw"
      id={componentId}
      width="100%"
    >
      <path d="M23 4v6h-6" />
      <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
    </svg>
  )
}
