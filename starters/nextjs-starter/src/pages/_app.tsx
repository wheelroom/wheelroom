import { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalReset } from '@wheelroom/any/resets/global-reset'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Global styles={globalReset} />
    <Component {...pageProps} />
  </>
)

export default App
