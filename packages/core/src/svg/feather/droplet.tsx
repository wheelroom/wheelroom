import React, { SVGProps } from 'react'
const componentId = 'svg-droplet'
export const SvgDroplet = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="droplet_svg__feather droplet_svg__feather-droplet"
      id={componentId}
      width="100%"
    >
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
  )
}
