/**
 * Component variation
 *
 * Component type: blogSection
 * Variation: List
 *
 */

import React from 'react'
import { BlogSectionProps } from './blog-section'
import { Wheel } from '../../wheelroom/wheels/types'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { ThemeId } from '../../admin-resources/theme-info'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { pageSectionFreestylePreset } from '../../wheelroom/wheels/section/freestyle/page-section-freestyle-preset'
import { BlogProps } from '../blog/blog'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { Wrapper, Container } from '../../wheelroom/wheels/element/grid'
import { Ul, Li } from '../../wheelroom/wheels/element/self'
import { Action } from '../../wheelroom/wheels/model/action/action'

export const BlogSectionListVar = (props: BlogSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    pageSectionFreestylePreset,
    getSectionStyle('text').base,
  ])
  if (!props.blog) {
    return null
  }
  const allBlog: BlogProps[] = (props.allBlog as any).edges.map(
    (edge: any) => edge.node
  )
  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds}
      pageSectionProps={props}
    >
      <Wrapper wheel={{ ...wheel, style: wheel.style.wrapper }}>
        <Container wheel={{ ...wheel, style: wheel.style.container }}>
          <Ul wheel={wheel} ncss={{ listStyle: 'none' }}>
            {allBlog.map((blog: BlogProps, index: number) => {
              return (
                <Li key={index} wheel={wheel}>
                  <Action wheel={wheel} page={{ path: '/blog/' + blog.slug }}>
                    {blog.heading}
                  </Action>
                </Li>
              )
            })}
          </Ul>
        </Container>
      </Wrapper>
    </ScrollSpy>
  )
}
