import React from 'react'
import { ALink } from '../../../elements/a-link'
import { Any } from '../../../elements/any'
import { Container, Flex, Fluid, Wrapper } from '../../../elements/grid'
import { SiteMetadata } from '../../../../page-template/page-template'
import { Sup } from '../../../elements/paragraph'
import { Wheel } from '../../../lib/get-wheel'
import { LegalFooterWheelStyle } from './presets/legal-footer-preset'

interface LegalWheel extends Wheel {
  style: LegalFooterWheelStyle
}

export interface LegalFooterProps {
  containerStyle: 'container' | 'fluid'
  siteMetadata: SiteMetadata
  wheel: LegalWheel
}

export const LegalFooter = (props: LegalFooterProps) => {
  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <ContainerType
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        <Flex
          is={'div'}
          wheel={{ ...props.wheel, style: props.wheel.style.legal }}
        >
          <Any
            is="span"
            polyPreset={false}
            wheel={{
              ...props.wheel,
              style: props.wheel.style.legal.promise,
            }}
          >
            <ALink
              href={props.siteMetadata.legal.url}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.legal.promise.link,
              }}
            >
              {props.siteMetadata.legal.description}
            </ALink>
            <Sup
              wheel={{
                ...props.wheel,
                style: props.wheel.style.legal.promise.sup,
              }}
            >
              {' ' + props.siteMetadata.legal.version}
            </Sup>
          </Any>
        </Flex>
      </ContainerType>
    </Wrapper>
  )
}
