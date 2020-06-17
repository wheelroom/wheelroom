import React from 'react'

const wrapper = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  margin: '7% auto 0',
  maxWidth: '390px',
  minHeight: '180px',
}

const container = {
  width: '100%',
}

const content = {
  padding: '16px',
  color: 'black',
}

const NotFoundPage = () => (
  <div style={wrapper}>
    <div style={container}>
      <div style={content}>
        <a href="/">Wheelroom</a>
        <h1>404. That’s an error.</h1>
        <p>So sorry, this path doesn&#39;t exist!</p>
      </div>
    </div>
  </div>
)

export default NotFoundPage
