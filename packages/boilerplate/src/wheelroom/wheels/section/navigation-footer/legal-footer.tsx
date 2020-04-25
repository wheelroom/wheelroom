import React from 'react'
import { Container, Flex, Fluid, Wrapper } from '../../element/grid'
import { Any } from '../../element/any'
import { ALink } from '../../element/a-link'
import { SiteMetadata } from '../../../../page-template'
import { Wheel } from '../../types'
import { LegalFooterWheelStyle } from './presets/legal-footer-preset'
import { Sup } from '../../element/paragraph'

interface LegalWheel extends Wheel {
  style: LegalFooterWheelStyle
}

export const LegalFooter = (props: {
  siteMetadata: SiteMetadata
  containerStyle: 'container' | 'fluid'
  wheel: LegalWheel
}) => {
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
