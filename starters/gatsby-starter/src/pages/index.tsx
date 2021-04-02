import React from 'react'
import { PageProps } from 'gatsby'
import { Ul, Li } from '@wheelroom/any/elements'
import { globalReset } from '@wheelroom/any/resets/global-reset'

const HomePage = (props: PageProps) => {
  console.log('global resets', globalReset)
  console.log('props', props)
  return (
    <Ul css={{ label: 'Ul', backgroundColor: 'lightblue' }}>
      <Li css={{ label: 'Li', color: 'red' }}>
        Hello from a typescript world!
      </Li>
    </Ul>
  )
}

export default HomePage
