import React, { SVGProps } from 'react'
const componentId = 'svg-smartphone'
export const SvgSmartphone = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="smartphone_svg__feather smartphone_svg__feather-smartphone"
      id={componentId}
      width="100%"
    >
      <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
      <path d="M12 18h.01" />
    </svg>
  )
}
