import React from 'react'
import { Container, Flex } from '../../elements/grid'
import { Any } from '../../elements/any'
import { ALink } from '../../elements/a-link'
import { SiteMetadata } from '../../../../page-template'
import { Wheel } from '../../types'
import { LegalPreset } from './presets/legal-preset'

interface LegalWheel extends Wheel {
  style: LegalPreset
}

export const Legal = (props: {
  siteMetadata: SiteMetadata
  wheel: LegalWheel
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
