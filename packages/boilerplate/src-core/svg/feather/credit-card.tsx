import React, { SVGProps } from 'react'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel } from '../../lib/wheel'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
  wheel: Wheel;
}
const componentId = 'svg-credit-card'
export const SvgCreditCard = (props: IconProps) => {
  const strokeWidth = props.strokeWidth || 2
  const css = styledSystem(
    props.wheel.wrSystemConfig,
    props.wheel.wrSystemTheme,
    {
      ncss: props.ncss,
    }
  )
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
