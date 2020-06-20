/**
 * Component variation
 *
 * Component type: blogSection
 * Variation: Blog
 *
 */

import React from 'react'
import { ScrollSpy, getWheel } from '../../../src-core'
import { Blog } from './blog/blog'
import { BlogSectionProps } from './model-types'

export const BlogSectionBlogVar = (props: BlogSectionProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'blogSection',
    sectionWheels: props.sectionWheels,
    variation: 'blog',
  })

  if (!wheel || !props.blog) {
    return null
  }
  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <Blog
        locale={props.locale}
        blog={props.blog}
        containerStyle="container"
        wheel={wheel}
      />
    </ScrollSpy>
  )
}
