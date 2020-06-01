/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { Action } from '../../wheelroom/wheels/model/action/action'
import { BlogProps } from '../blog/blog'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { Li, Ul } from '../../wheelroom/wheels/element/self'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { pageSectionFreestylePreset } from '../../wheelroom/wheels/section/freestyle/page-section-freestyle-preset'
import { PageSectionProps } from '../page-section/page-section'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'
import { Wrapper, Container } from '../../wheelroom/wheels/element/grid'

export const PageSectionBlogListVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    pageSectionFreestylePreset,
    getSectionStyle('text').base,
  ])
  if (!props.blog) {
    return <NotImplemented pageSection={props} wheel={wheel} />
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
