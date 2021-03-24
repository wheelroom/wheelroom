import React from 'react'
import { PageProps } from 'gatsby'
import { Ul, Li } from '@wheelroom/any/elements'
import { Any, AnyComponent } from '@wheelroom/any/Any'
import { globalReset } from '@wheelroom/any/resets'

const Home = (props: PageProps) => {
  console.log(props)
  console.log(Any, AnyComponent)
  console.log(globalReset)
  // console.log(Ul, Li)
  return (
    <div>
      code not yet running because something is wrong in the -any- tsconfig
    </div>
  )
  // return (
  //   <Ul>
  //     <Li css={{ color: 'red' }}>Hello from a typescript world!</Li>
  //   </Ul>
  // )
}

export default Home
