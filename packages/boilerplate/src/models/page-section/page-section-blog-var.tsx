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
import { Li, Ul } from '../../wheelroom/wheels/element/self'
import { BlogProps } from '../blog/blog'
import { Action } from '../../wheelroom/wheels/model/action/action'

export const PageSectionBlogVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    pageSectionFreestylePreset,
    getSectionStyle('text').base,
  ])
  const allBlog: BlogProps[] = (props.allBlog as any).edges.map(
    (edge: any) => edge.node
  )
  return (
    <Wrapper wheel={{ ...wheel, style: wheel.style.wrapper }}>
      <Ul wheel={wheel} ncss={{ listStyle: 'none' }}>
        {allBlog.map((blog: BlogProps, index: number) => {
          return (
            <Li key={index} wheel={wheel}>
              <Action wheel={wheel} page={{ path: '/blog/' + blog.slug }}>
                {blog.navigationHeading}
              </Action>
            </Li>
          )
        })}
      </Ul>
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
