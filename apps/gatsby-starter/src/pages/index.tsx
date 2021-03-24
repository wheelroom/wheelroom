import React from 'react'
import { PageProps } from 'gatsby'
import { Ul, Li } from '@wheelroom/any'

const Home = (props: PageProps) => {
  console.log(props.data)
  return (
    <Ul>
      <Li css={{ color: 'red' }}>Hello from a typescript world!</Li>
    </Ul>
  )
}

export default Home
