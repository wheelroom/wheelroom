/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Spinner } from './spinner'
import { useContext } from 'react'
import { AdminCoreContext } from '@jacco-meijer/admin-core'
import { getPreviewPageStore } from '../getters'
import { PagePreviewState } from '../types'

/** 
 * Default preview update buttom 
 *
 * Once a proper admin panel is in place, fetching a preview can be triggered
 * from there.
 *
 */

export const PreviewUpdateButton = () => {
  const { adminCoreState } = useContext(AdminCoreContext)
  console.log('render: preview button', adminCoreState.modules)
  const store = getPreviewPageStore(adminCoreState)
  if (!store) {
    return null
  }
  const pagePreviewState: PagePreviewState = store.state
  if (!pagePreviewState.inPreviewMode) {
    return null
  }
  const fetch = () => {
    store.actions.fetchPage(adminCoreState)
  }

  return (
    <div
      onClick={fetch}
      css={{
        alignItems: 'center',
        backgroundColor: '#eee',
        borderColor: '#ccc',
        borderRadius: '10px',
        borderStyle: 'solid',
        borderWidth: '10px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        height: '70px',
        justifyContent: 'center',
        padding: '5px',
        position: 'fixed',
        right: '30px',
        top: '30px',
        width: '150px',
      }}
    >
      {store.state.isFetching ? <Spinner /> : 'Update'}
    </div>
  )
}
