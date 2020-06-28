import React, { SVGProps } from 'react'
const componentId = 'svg-minus-square'
export const SvgMinusSquare = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="minus-square_svg__feather minus-square_svg__feather-minus-square"
      id={componentId}
      width="100%"
    >
      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <path d="M8 12h8" />
    </svg>
  )
}
