import React, { Fragment } from 'react'
import { Flex } from '../../elements/grid'
import { GLink } from '../../elements/g-link'
import { Strong } from '../../elements/self'
import { BrandingWheelStyle } from './presets/branding-preset'
import { Wheel } from '../../types'
import { Sup } from '../../elements/paragraph'

interface LogoWheel extends Wheel {
  style: BrandingWheelStyle
}

export const Branding = (props: {
  logo: string | JSX.Element
  version?: string
  wheel: LogoWheel
}) => {
  /**
   * When a React element is passed, use that
   */
  let logo
  let ariaLabel = `Back to ${props.logo} homepage`
  if (React.isValidElement(props.logo)) {
    logo = props.logo
    ariaLabel = 'Back to homepage'
  }
  if (typeof props.logo === 'string') {
    logo = (
      <Fragment>
        <Strong wheel={{ ...props.wheel, style: props.wheel.style.logo }}>
          {props.logo}
        </Strong>
        <Sup wheel={{ ...props.wheel, style: props.wheel.style.sup }}>
          {' ' + props.version}
        </Sup>
      </Fragment>
    )
  }

  return (
    <Flex is="div" wheel={props.wheel}>
      <GLink
        to="/"
        ariaLabel={ariaLabel}
        wheel={{ ...props.wheel, style: props.wheel.style.link }}
      >
        {logo}
      </GLink>
    </Flex>
  )
}
