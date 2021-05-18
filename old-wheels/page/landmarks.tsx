import React, { Fragment } from 'react'
import { Landmark, getLandmark } from './landmark'
/**
 *
 * This element wraps the landmark element specified in sections.jsx around each
 * section. Note that the landmarks are added in a fixed order as shown in the
 * Fragment below. As a consequence the order of the sections is bound to the
 * order of the landmarks below.
 *
 * To change this behaviour, change the getLandmark method in landmark.tsx
 *
 */
export const Landmarks = (props: any) => {
  const landMarkedChildren = {
    aside: [],
    footer: [],
    header: [],
    main: [],
  } as any

  React.Children.forEach(props.children, (child) => {
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
      <main role="main" id="content">
        {landMarkedChildren.main}
      </main>
      <aside>{landMarkedChildren.aside}</aside>
      <footer role="contentinfo">{landMarkedChildren.footer}</footer>
    </Fragment>
  )
}
