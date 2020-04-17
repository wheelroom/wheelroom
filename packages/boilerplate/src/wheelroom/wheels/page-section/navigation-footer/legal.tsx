import React from 'react'
import { Container } from '../../elements/grid'
import { Any } from '../../elements/any'
import { ALink } from '../../elements/a-link'
import { SiteMetadata } from '../../../../page-template'
import { Wheel } from '../../types'
import { LegalPreset } from './presets/legal-preset'
import { Sup } from '../../elements/paragraph'

interface LegalWheel extends Wheel {
  style: LegalPreset
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
