import React, { SVGProps } from 'react'
const componentId = 'svg-dollar-sign'
export const SvgDollarSign = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="dollar-sign_svg__feather dollar-sign_svg__feather-dollar-sign"
      id={componentId}
      width="100%"
    >
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  )
}
