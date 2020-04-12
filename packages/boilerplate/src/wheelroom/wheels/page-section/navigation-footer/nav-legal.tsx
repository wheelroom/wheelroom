import React from 'react'
import { Container, Flex } from '../../elements/grid'
import { Any } from '../../elements/any'
import { ALink } from '../../elements/a-link'
import { SiteMetadata } from '../../../../page-template'
import { Wheel } from '../../types'
import { NavLegalPreset } from './presets/nav-legal-preset'

interface NavLegalWheel extends Wheel {
  style: NavLegalPreset
}

export const NavLegal = (props: {
  siteMetadata: SiteMetadata
  wheel: NavLegalWheel
}) => {
  return (
    <Container ncss={props.wheel.style.container.ncss} wheel={props.wheel}>
      <Flex ncss={props.wheel.style.innerContainer.ncss} wheel={props.wheel}>
        <Any is="span" ncss={props.wheel.style.text.ncss} wheel={props.wheel}>
          <ALink
            ncss={props.wheel.style.link.ncss}
            href={props.siteMetadata.legal.url}
            wheel={props.wheel}
          >
            {props.siteMetadata.legal.description}
          </ALink>
          <sup>
            <small>{' ' + props.siteMetadata.legal.version}</small>
          </sup>
        </Any>
      </Flex>
    </Container>
  )
}
