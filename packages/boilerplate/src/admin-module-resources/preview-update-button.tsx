import React from 'react'
import { Flex } from '../views/core-elements/grid'
import { heading4Style } from '../styles/heading'
import { Spinner } from '../views/spinner/spinner'

export const PreviewUpdateButton = () => {
  const fetch = () => {
    console.log('fetch here')
  }
  const state = { isFetching: false }

  return (
    <Flex
      onClick={fetch}
      ncss={{
        ...heading4Style,
        alignItems: 'center',
        bg: 'cyan',
        borderColor: 'green',
        borderRadius: '10px',
        borderStyle: 'solid',
        borderWidth: 4,
        cursor: 'pointer',
        height: '70px',
        justifyContent: 'center',
        p: 2,
        position: 'fixed',
        right: '30px',
        top: '30px',
        width: '150px',
      }}
    >
      {state.isFetching ? <Spinner /> : 'Update'}
    </Flex>
  )
}
