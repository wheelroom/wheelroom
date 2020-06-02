/**
 * Component variation
 *
 * Component type: blogSection
 * Variation: List
 *
 */

import React from 'react'
import { AllBlogProps } from '../blog/blog'
import { BlogList } from '../../wheelroom/wheels/model/blog-list/blog-list'
import { blogSectionPreset } from '../../wheelroom/wheels/section/blog/presets/blog-section-preset'
import { BlogSectionProps } from './blog-section'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'
import { Wrapper, Container } from '../../wheelroom/wheels/element/grid'

export const BlogSectionListVar = (props: BlogSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([blogSectionPreset, getSectionStyle('blog').base])
  if (!props.allBlog) {
    return null
  }
  const allBlog: AllBlogProps = (props.allBlog as any).edges.map(
    (edges: any) => edges.node
  )
  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <Wrapper wheel={{ ...wheel, style: wheel.style.wrapper }}>
        <Container wheel={{ ...wheel, style: wheel.style.container }}>
          <BlogList
            allBlog={allBlog}
            containerStyle="container"
            locale={props.locale}
            topicOptions={props.topicOptions}
            wheel={wheel}
          />
        </Container>
      </Wrapper>
    </ScrollSpy>
  )
}
