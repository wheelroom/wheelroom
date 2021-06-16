import { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalReset } from '@wheelroom/any/react'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Global styles={globalReset} />
    <Component {...pageProps} />
  </>
)

export default App
