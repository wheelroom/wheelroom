import React, { SVGProps } from 'react'
const componentId = 'svg-anchor'
export const SvgAnchor = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="anchor_svg__feather anchor_svg__feather-anchor"
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={5} r={3} />
      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
    </svg>
  )
}
