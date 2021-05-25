import React from 'react'
import {
  ALink,
  Any,
  CoreSiteMetadata,
  Flex,
  NcssNode,
  Sup,
  Wheel,
} from '@wheelroom/core'

export interface LegalNavigationNcssTree extends NcssNode {
  copyright: NcssNode
  promise: {
    link: NcssNode
    sup: NcssNode
  } & NcssNode
}

export interface LegalNavigationWheel extends Wheel {
  style: LegalNavigationNcssTree
}

export interface LegalNavigationProps {
  copyright: string
  hideCopyright?: boolean
  hideLegal?: boolean
  siteMetadata: CoreSiteMetadata
  supportWheelroom: boolean
  wheel: LegalNavigationWheel
}

export const LegalNavigation = (props: LegalNavigationProps) => {
  if (props.hideLegal) {
    return null
  }

  return (
    <Flex is={'div'} wheel={props.wheel}>
      {!props.hideCopyright && (
        <Any
          is="span"
          polyPreset={false}
          wheel={{
            ...props.wheel,
            style: props.wheel.style.copyright,
          }}
        >
          {props.copyright}
        </Any>
      )}
      {props.supportWheelroom && (
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
            wheel={{
              ...props.wheel,
              style: props.wheel.style.promise.link,
            }}
          >
            {props.siteMetadata.legal.description}
          </ALink>
          <Sup
            wheel={{
              ...props.wheel,
              style: props.wheel.style.promise.sup,
            }}
          >
            {' ' + props.siteMetadata.legal.version}
          </Sup>
        </Any>
      )}
    </Flex>
  )
}
