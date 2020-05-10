/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { PageSectionProps } from '.'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'
import { Wrapper, Container } from '../../wheelroom/wheels/element/grid'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { pageSectionFreestylePreset } from '../../wheelroom/wheels/section/freestyle/page-section-freestyle-preset'
import { Text } from '../../wheelroom/wheels/model/text/text'

export const PageSectionBlogVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    pageSectionFreestylePreset,
    getSectionStyle('text').base,
  ])
  return (
    <Wrapper wheel={{ ...wheel, style: wheel.style.wrapper }}>
      <Container wheel={{ ...wheel, style: wheel.style.container }}>
        <Text
          locale={props.locale}
          wheel={{ ...wheel, style: wheel.style.text }}
          text={{ text: props.blog.text, __typename: '', title: '' }}
        />
      </Container>
    </Wrapper>
  )
}
