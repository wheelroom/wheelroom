import React from 'react'
import { Container } from '../../element/grid'
import { Any } from '../../element/any'
import { ALink } from '../../element/a-link'
import { SiteMetadata } from '../../../../page-template'
import { Wheel } from '../../types'
import { LegalWheelStyle } from './presets/legal-preset'
import { Sup } from '../../element/paragraph'

interface LegalWheel extends Wheel {
  style: LegalWheelStyle
}

export const Legal = (props: {
  siteMetadata: SiteMetadata
  wheel: LegalWheel
}) => {
  return (
    <Container wheel={{ ...props.wheel, style: props.wheel.style }}>
      <Any
        is="span"
        polyPreset={false}
        wheel={{
          ...props.wheel,
          style: props.wheel.style.promise,
        }}
      >
        <ALink
          href={props.siteMetadata.legal.url}
          wheel={{ ...props.wheel, style: props.wheel.style.promise.link }}
        >
          {props.siteMetadata.legal.description}
        </ALink>
        <Sup wheel={{ ...props.wheel, style: props.wheel.style.promise.sup }}>
          {' ' + props.siteMetadata.legal.version}
        </Sup>
      </Any>
    </Container>
  )
}
