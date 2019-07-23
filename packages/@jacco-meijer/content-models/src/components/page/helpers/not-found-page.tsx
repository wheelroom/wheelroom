import * as React from 'react'
import Helmet from 'react-helmet'

export const NotFoundPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="robots" content="noindex, nofollow" />
      <title>NOT FOUND</title>
    </Helmet>

    <h1>NOT FOUND</h1>
    <p>So sorry, this path doesn&#39;t exist!</p>
  </div>
)
