import React from 'react'
import {
  ALink,
  Any,
  Container,
  CoreSiteMetadata,
  Flex,
  Fluid,
  Wheel,
  Wrapper,
  NcssProps,
  ALinkElementStyle,
  NcssObjectProps,
  Sup,
} from '../../../../src-core'

export interface LegalFooterWheelStyle {
  wrapper: NcssObjectProps
  container: NcssObjectProps
  legal: {
    ncss: NcssProps
    promise: {
      ncss: NcssProps
      link: ALinkElementStyle
      sup: NcssObjectProps
    }
  }
}

interface LegalWheel extends Wheel {
  style: LegalFooterWheelStyle
}

export interface LegalFooterProps {
  containerStyle: 'container' | 'fluid'
  siteMetadata: CoreSiteMetadata
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
