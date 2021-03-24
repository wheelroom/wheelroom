import React from 'react'
import { PageProps } from 'gatsby'
import { Ul, Li } from '@wheelroom/any/elements'

const Home = (props: PageProps) => {
  return (
    <Ul css={{ backgroundColor: 'lightblue' }}>
      <Li css={{ color: 'red' }}>Hello from a typescript world!</Li>
    </Ul>
  )
}

export default Home
