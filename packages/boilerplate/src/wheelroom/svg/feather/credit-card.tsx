import React, { SVGProps } from 'react'
import { Wheel } from '../../wheels/types'
import { styledSystem } from '@wheelroom/styled-system'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any
  wheel: Wheel
}
const componentId = 'svg-credit-card'
export const SvgCreditCard = (props: IconProps) => {
  const strokeWidth = props.strokeWidth || 2
  const css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: props.ncss,
  })
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="credit-card_svg__feather credit-card_svg__feather-credit-card"
      css={css}
      id={componentId}
      width="100%"
    >
      <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
      <path d="M1 10h22" />
    </svg>
  )
}
