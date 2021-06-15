import React from 'react'
import { Container, Fluid, Wheel, NcssNode, Wrapper } from '@wheelroom/core'
import { NavigationModel } from '../../navigation/model'
import {
  BrandNavigation,
  BrandNavigationNcssTree,
} from '../../navigation/variants/brand-navigation'

export interface FooterBrandNcssTree extends NcssNode {
  container: NcssNode
  brandNavigation: BrandNavigationNcssTree
  wrapper: NcssNode
}

interface FooterBrandWheel extends Wheel {
  style: FooterBrandNcssTree
}

export interface FooterBrandProps {
  containerStyle: 'container' | 'fluid'
  hideBrand: boolean
  logoElement: JSX.Element | undefined
  navigation: NavigationModel[]
  siteHeading: string | undefined
  wheel: FooterBrandWheel
}

export const FooterBrand = (props: FooterBrandProps) => {
  if (props.hideBrand === true) {
    return null
  }
  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <ContainerType
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        <BrandNavigation
          hideBranding={props.hideBrand}
          logoElement={props.logoElement}
          navigation={props.navigation}
          siteHeading={props.siteHeading}
          wheel={{
            ...props.wheel,
            style: props.wheel.style.brandNavigation,
          }}
        />
      </ContainerType>
    </Wrapper>
  )
}
