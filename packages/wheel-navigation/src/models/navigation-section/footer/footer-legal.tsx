import React from 'react'
import {
  Container,
  CoreSiteMetadata,
  Fluid,
  Wheel,
  NcssNode,
} from '@wheelroom/core'
import {
  LegalNavigation,
  LegalNavigationNcssTree,
} from '../../navigation/variants/legal-navigation'

export interface FooterLegalNcssTree extends NcssNode {
  container: NcssNode
  legalNavigation: LegalNavigationNcssTree
}

interface FooterLegalWheel extends Wheel {
  style: FooterLegalNcssTree
}

export interface FooterLegalProps {
  containerStyle: 'container' | 'fluid'
  copyright: string
  hideCopyright: boolean
  hideLegal: boolean
  siteMetadata: CoreSiteMetadata
  supportWheelroom: boolean
  wheel: FooterLegalWheel
}

export const FooterLegal = (props: FooterLegalProps) => {
  if (props.hideLegal === true) {
    return null
  }
  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <ContainerType
      wheel={{ ...props.wheel, style: props.wheel.style.container }}
    >
      <LegalNavigation
        copyright={props.copyright}
        hideCopyright={props.hideCopyright}
        hideLegal={props.hideLegal}
        siteMetadata={props.siteMetadata}
        supportWheelroom={props.supportWheelroom}
        wheel={{ ...props.wheel, style: props.wheel.style.legalNavigation }}
      />
    </ContainerType>
  )
}
