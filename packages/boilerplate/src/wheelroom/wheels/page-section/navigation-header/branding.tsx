import React, { Fragment } from 'react'
import { Flex } from '../../elements/grid'
import { GLink } from '../../elements/g-link'
import { Strong } from '../../elements/strong'
import { BrandingPreset } from './presets/branding-preset'
import { Wheel } from '../../types'

interface LogoWheel extends Wheel {
  style: BrandingPreset
}

export const Branding = (props: {
  logo: string | JSX.Element
  version?: string
  wheel: LogoWheel
}) => {
  // When a React element is passed, use that
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
        <sup>
          <small>{' ' + props.version}</small>
        </sup>
      </Fragment>
    )
  }

  return (
    <Flex
      is="div"
      role="banner"
      wheel={{ ...props.wheel, style: props.wheel.style }}
    >
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
