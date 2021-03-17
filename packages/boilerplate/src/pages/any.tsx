import React from 'react'
import { Ul, Li } from '@wheelroom/any'

const BlueList = (props: any) => (
  <Ul css={{ backgroundColor: 'lightBlue', color: 'white' }} {...props} />
)

const MyItem = (props: any) => (
  <Li
    css={{ backgroundColor: 'lightYellow', color: 'black', padding: '10px' }}
    {...props}
  />
)

const AnyPage = () => (
  <BlueList>
    <MyItem>no styling</MyItem>
    <MyItem css={{ color: 'blue', label: 'special-label' }}>
      blue styling
    </MyItem>
    <MyItem css={{ color: 'red' }}>red styling</MyItem>
  </BlueList>
)

export default AnyPage
