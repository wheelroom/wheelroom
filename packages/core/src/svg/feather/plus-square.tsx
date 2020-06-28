import React, { SVGProps } from 'react'
const componentId = 'svg-plus-square'
export const SvgPlusSquare = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="plus-square_svg__feather plus-square_svg__feather-plus-square"
      id={componentId}
      width="100%"
    >
      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <path d="M12 8v8M8 12h8" />
    </svg>
  )
}
