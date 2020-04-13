import React from 'react'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { Box, Container, ContainerMaxWidth } from '../../elements/grid'
import { Text } from '../../text/text'
import { Wheel } from '../../types'
import { PageSectionFreestylePreset } from './page-section-freestyle-preset'

export interface PageSectionFreestyleWheel extends Wheel {
  style: PageSectionFreestylePreset
}

export const PageSectionFreestyle = (props: {
  /** Contains the topic to render */
  pageSection: PageSectionProps
  /** Styling wheel */
  wheel: PageSectionFreestyleWheel
  /** Use a max width or fluid container */
  containerStyle: 'maxWidth' | 'fluid'
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasText) {
    return null
  }
  const ContainerType =
    props.containerStyle === 'maxWidth' ? ContainerMaxWidth : Container
  return (
    <Box is="div" wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <ContainerType
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        <Text
          {...props.pageSection.text}
          locale={props.pageSection.locale}
          wheel={{ ...props.wheel, style: props.wheel.style.text }}
          text={props.pageSection.text}
        />
      </ContainerType>
    </Box>
  )
}
