import { Fragment } from 'react'
import React from 'react'
import { PageSectionProps } from '../components/page-section/page-section'
import { getPageSectionInfo } from './get-page-section-info'
import { systemCss } from '../styled-system/system-css'
import { jsx } from '@emotion/core'

const getLandmark = (
  pageProps: PageSectionProps,
  sectionCount: number
): string => {
  const info = getPageSectionInfo(pageProps)
  if (info.index === 0 && (info.variation === 'hero' || info.hasNavigation)) {
    return 'header'
  }
  if (info.index === sectionCount - 1 && info.hasNavigation) {
    return 'footer'
  }

  return 'main'
}

export const Landmark = (props: {
  variation: string
  children: any
  key: number
}) => {
  const label = 'variation-' + props.variation || 'single'
  const css = systemCss({
    ncss: { label },
  })
  const attrs = {
    css,
  }
  return jsx('section', attrs, props.children)
}

/**
 *
 * This element wraps the landmark element specified in sections.jsx around each
 * section. Not that the landmarks are added in a fixed order as shown in the
 * Fragment below. As a consequence the order of the sections is bound to the
 * order of the landmarks below.
 *
 * To change this behaviour, change the getLandmark method above.
 *
 */
export const Landmarks = (props: any) => {
  const landMarkedChildren = {
    aside: [],
    footer: [],
    header: [],
    main: [],
  } as any

  React.Children.forEach(props.children, child => {
    landMarkedChildren[
      getLandmark(child.props, React.Children.count(props.children))
    ].push(
      <Landmark key={child.props.index} variation={child.props.variation}>
        {child}
      </Landmark>
    )
  })

  return (
    <Fragment>
      <header role="banner">{landMarkedChildren.header}</header>
      <main role="main">{landMarkedChildren.main}</main>
      <aside>{landMarkedChildren.aside}</aside>
      <footer role="contentinfo">{landMarkedChildren.footer}</footer>
    </Fragment>
  )
}
