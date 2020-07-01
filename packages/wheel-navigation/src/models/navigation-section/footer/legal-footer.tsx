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
  NcssNode,
  Sup,
} from '@wheelroom/core'

export interface LegalFooterNcssTree {
  container: NcssNode
  legal: {
    promise: {
      link: NcssNode
      sup: NcssNode
    } & NcssNode
  } & NcssNode
  wrapper: NcssNode
}

interface LegalFooterWheel extends Wheel {
  style: LegalFooterNcssTree
}

export interface LegalFooterProps {
  containerStyle: 'container' | 'fluid'
  siteMetadata: CoreSiteMetadata
  hideLegalFooter: boolean
  wheel: LegalFooterWheel
}

export const LegalFooter = (props: LegalFooterProps) => {
  if (props.hideLegalFooter === true) {
    return null
  }
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
