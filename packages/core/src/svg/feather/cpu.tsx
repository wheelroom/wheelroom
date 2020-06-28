import React, { SVGProps } from 'react'
const componentId = 'svg-cpu'
export const SvgCpu = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cpu_svg__feather cpu_svg__feather-cpu"
      id={componentId}
      width="100%"
    >
      <rect x={4} y={4} width={16} height={16} rx={2} ry={2} />
      <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  )
}
