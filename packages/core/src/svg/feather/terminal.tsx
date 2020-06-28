import React, { SVGProps } from 'react'
const componentId = 'svg-terminal'
export const SvgTerminal = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="terminal_svg__feather terminal_svg__feather-terminal"
      id={componentId}
      width="100%"
    >
      <path d="M4 17l6-6-6-6M12 19h8" />
    </svg>
  )
}
