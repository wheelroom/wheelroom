import React, { SVGProps } from 'react'
const componentId = 'svg-film'
export const SvgFilm = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="film_svg__feather film_svg__feather-film"
      id={componentId}
      width="100%"
    >
      <rect x={2} y={2} width={20} height={20} rx={2.18} ry={2.18} />
      <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
    </svg>
  )
}
