import React from 'react'
import { Container, Fluid, Wrapper } from '../../elements/grid'
import { Wheel } from '../../types/wheel'
import { PageSectionBlockWheelStyle } from './presets/page-section-block-preset'
import { PageSectionCardWheelStyle } from './presets/page-section-card-preset'
import { PageSectionFeaturedWheelStyle } from './presets/page-section-featured-preset'
import { PageSectionHeadlineWheelStyle } from './presets/page-section-headline-preset'
import { PageSectionHeroWheelStyle } from './presets/page-section-hero-preset'
import { PageSectionQuoteWheelStyle } from './presets/page-section-quote-preset'
import { PageSectionShowcaseWheelStyle } from './presets/page-section-showcase-preset'

export interface PageSectionWheel extends Wheel {
  style:
    | PageSectionBlockWheelStyle
    | PageSectionCardWheelStyle
    | PageSectionFeaturedWheelStyle
    | PageSectionHeadlineWheelStyle
    | PageSectionHeroWheelStyle
    | PageSectionShowcaseWheelStyle
    | PageSectionQuoteWheelStyle
}

export interface PageSectionWheelProps {
  /** Styling wheel */
  wheel: PageSectionWheel
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Page section children */
  children: any
}

export const PageSection = (props: PageSectionWheelProps) => {
  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <ContainerType
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        {props.children}
      </ContainerType>
    </Wrapper>
  )
}
