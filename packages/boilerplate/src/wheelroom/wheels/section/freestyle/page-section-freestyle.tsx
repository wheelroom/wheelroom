import React from 'react'
import { Container, Fluid, Wrapper } from '../../element/grid'
import { Text } from '../../model/text/text'
import { Wheel } from '../../types'
import { FreestyleWheelStyle } from './page-section-freestyle-preset'
import { TextProps } from '../../../../models/text/text'

export interface FreestyleWheel extends Wheel {
  style: FreestyleWheelStyle
}

export const PageSectionFreestyle = (props: {
  /** Locale needed for rendering rich text */
  locale: string
  /** Text to render */
  text: TextProps
  /** Styling wheel */
  wheel: FreestyleWheel
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
}) => {
  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <ContainerType
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        <Text
          locale={props.locale}
          wheel={{ ...props.wheel, style: props.wheel.style.text }}
          text={props.text}
        />
      </ContainerType>
    </Wrapper>
  )
}
