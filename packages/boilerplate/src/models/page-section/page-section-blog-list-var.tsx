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
import { Li, Ul } from '../../wheelroom/wheels/element/self'
import { BlogProps } from '../blog'
import { Action } from '../../wheelroom/wheels/model/action/action'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'

export const PageSectionBlogListVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    pageSectionFreestylePreset,
    getSectionStyle('text').base,
  ])
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
                    {blog.navigationHeading}
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
