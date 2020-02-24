/* eslint-disable */

const React = require('react')
const { initPagePreview } = require('./src/admin-modules/page-preview/init')

// This wrapper has the root element around and can therefore access the admin
// module provider
const Wrapper = ({ children }) => {
  initPagePreview()
  return <div>{children}</div>
}

export const wrapPageElement = ({ element, props }) => {
  return <Wrapper {...props}>{element}</Wrapper>
}

export const onServiceWorkerUpdateReady = () => window.location.reload(true)
