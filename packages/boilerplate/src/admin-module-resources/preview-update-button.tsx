import React, { useContext } from 'react'
import { Flex } from '../views/core-elements/grid'
import { heading4Style } from '../styles/heading'
import { Spinner } from '../views/spinner/spinner'
import { AdminModuleContext } from 'gatsby-theme-admin-panel'
import { AdminModuleState } from '@jacco-meijer/gatsby-theme-admin-modules'
import { getPreviewPageStore } from '@jacco-meijer/gatsby-theme-admin-modules'

export const PreviewUpdateButton = () => {
  const { adminPanelState } = useContext(AdminModuleContext)

  const store = getPreviewPageStore(adminPanelState)

  const state: AdminModuleState | undefined = store && store.state
  if (!state || !state.inPreviewMode) {
    return null
  }
  const fetch = () => {
    store?.actions.fetchPage(adminPanelState)
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
