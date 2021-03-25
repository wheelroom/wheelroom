import React from 'react'
import { PageProps } from 'gatsby'
import { Ul, Li } from '@wheelroom/any/elements'
import { globalReset } from '@wheelroom/any/resets/global-reset'

const Home = (props: PageProps) => {
  console.log('global resets', globalReset)
  return (
    <Ul css={{ backgroundColor: 'lightblue' }}>
      <Li css={{ color: 'red' }}>Hello from a typescript world!</Li>
    </Ul>
  )
}

export default Home
