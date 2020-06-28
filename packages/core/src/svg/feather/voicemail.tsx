import React, { SVGProps } from 'react'
const componentId = 'svg-voicemail'
export const SvgVoicemail = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="voicemail_svg__feather voicemail_svg__feather-voicemail"
      id={componentId}
      width="100%"
    >
      <circle cx={5.5} cy={11.5} r={4.5} />
      <circle cx={18.5} cy={11.5} r={4.5} />
      <path d="M5.5 16h13" />
    </svg>
  )
}
