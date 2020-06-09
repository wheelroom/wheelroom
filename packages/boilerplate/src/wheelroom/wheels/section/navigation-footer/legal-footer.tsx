import React from 'react'
import { ALink } from '../../element/a-link'
import { Any } from '../../element/any'
import { Container, Flex, Fluid, Wrapper } from '../../element/grid'
import { LegalFooterWheelStyle } from './presets/legal-footer-preset'
import { SiteMetadata } from '../../../../page-template'
import { Sup } from '../../element/paragraph'
import { Wheel } from '../../types'

interface LegalWheel extends Wheel {
  style: LegalFooterWheelStyle
}

export interface LegalFooterProps {
  containerStyle: 'container' | 'fluid'
  siteMetadata: SiteMetadata
  wheel: LegalWheel
}

export const LegalFooter = (props: LegalFooterProps) => {
  console.log(props)
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
