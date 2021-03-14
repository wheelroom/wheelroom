import React from 'react'
import { Container, Fluid, Wheel, NcssNode, Wrapper } from '@wheelroom/core'
import { NavigationModel } from '../../navigation/model'
import {
  CardNavigation,
  CardNavigationNcssTree,
} from '../../navigation/variants/card-navigation'

export interface FooterCardNcssTree extends NcssNode {
  container: NcssNode
  cardNavigation: CardNavigationNcssTree
  wrapper: NcssNode
}

interface FooterCardWheel extends Wheel {
  style: FooterCardNcssTree
}

export interface FooterCardProps {
  containerStyle: 'container' | 'fluid'
  hideCard: boolean
  navigation: NavigationModel[]
  wheel: FooterCardWheel
}

export const FooterCard = (props: FooterCardProps) => {
  if (props.hideCard === true) {
    return null
  }
  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <ContainerType
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        <CardNavigation
          wheel={{
            ...props.wheel,
            style: props.wheel.style.cardNavigation,
          }}
          maxSegments={10}
          navigation={props.navigation}
          hideCard={props.hideCard}
        />
      </ContainerType>
    </Wrapper>
  )
}
