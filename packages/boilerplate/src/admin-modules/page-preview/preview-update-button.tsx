import React from 'react'
import { Flex } from '../../views/core-elements/grid'
import { heading4Style } from '../../styles/heading'
import { Spinner } from '../../views/spinner/spinner'
import { useAdminModuleReducer } from 'gatsby-theme-admin-panel'
import { State } from './types'
import { getPreviewPageState } from './getters'
import { fetchPage } from './reducers'

export const PreviewUpdateButton = () => {
  const [adminModuleState] = useAdminModuleReducer()
  const state: State | undefined = getPreviewPageState(adminModuleState)
  if (!state || !state.inPreviewMode) {
    return null
  }
  const fetch = () => {
    fetchPage(adminModuleState)
  }

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
