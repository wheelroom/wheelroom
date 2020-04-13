import React from 'react'
import { Container, Flex } from '../../elements/grid'
import { Any } from '../../elements/any'
import { ALink } from '../../elements/a-link'
import { SiteMetadata } from '../../../../page-template'
import { Wheel } from '../../types'
import { NavFooterLegalPreset } from './presets/nav-footer-legal-preset'

interface NavLegalWheel extends Wheel {
  style: NavFooterLegalPreset
}

export const NavFooterLegal = (props: {
  siteMetadata: SiteMetadata
  wheel: NavLegalWheel
}) => {
  return (
    <Container
      wheel={{ ...props.wheel, style: props.wheel.style.container.ncss }}
    >
      <Flex
        wheel={{ ...props.wheel, style: props.wheel.style.innerContainer.ncss }}
      >
        <Any
          is="span"
          wheel={{
            ...props.wheel,
            style: props.wheel.style.innerContainer.ncss,
          }}
        >
          <ALink
            href={props.siteMetadata.legal.url}
            wheel={{ ...props.wheel, style: props.wheel.style.link.ncss }}
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
