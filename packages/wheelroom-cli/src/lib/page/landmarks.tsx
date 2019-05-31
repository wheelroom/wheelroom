import { Fragment } from 'react'
import * as React from 'react'

// This element wraps the landmark element specified in sections.jsx around each
// section. Not that the landmarks are added in a fixed order as shown in the
// Fragment below. As a consequence the order of the sections is bound to the
// order of the landmarks below.
//

const Landmarks = props => {
  const landMarkedChildren = {
    aside: [],
    footer: [],
    header: [],
    main: [],
  }

  React.Children.forEach(props.children, child => {
    landMarkedChildren[child.props.landMark].push(child)
  })

  return (
    <Fragment>
      <header>{landMarkedChildren.header}</header>
      <main>{landMarkedChildren.main}</main>
      <aside>{landMarkedChildren.aside}</aside>
      <footer>{landMarkedChildren.footer}</footer>
    </Fragment>
  )
}

export default Landmarks
