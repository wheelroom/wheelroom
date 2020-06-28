import React, { SVGProps } from 'react'
const componentId = 'svg-thermometer'
export const SvgThermometer = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="thermometer_svg__feather thermometer_svg__feather-thermometer"
      id={componentId}
      width="100%"
    >
      <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
    </svg>
  )
}
