import React from 'react'
import { Wheel, Container, Fluid, Wrapper } from '../../../../src-core'
import { Text } from '../../text/text'
import { TextProps } from '../../text/model-types'
import { TextSectionWheelStyle } from './text-section-preset'

export interface TextSectionWheel extends Wheel {
  style: TextSectionWheelStyle
}

export const TextSection = (props: {
  /** Locale needed for rendering rich text */
  locale: string
  /** Text to render */
  text: TextProps
  /** Styling wheel */
  wheel: TextSectionWheel
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
