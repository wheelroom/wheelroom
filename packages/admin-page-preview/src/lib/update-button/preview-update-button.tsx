/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Spinner } from './spinner'
import { useContext } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
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
      role="button"
      aria-label="Update preview content"
      onClick={fetch}
      css={{
        backdropFilter: 'saturate(180%) blur(20px)',
        backgroundColor: 'rgba(255,255,255,0.3)',
        boxShadow: 'rgba(0,0,0,0.3) 0 0 6px, rgba(0,0,0,0.15) 0 1px 6px',
        border: '1px solid rgba(255,255,255,.5)',
        borderRadius: '10px',
        cursor: 'pointer',
        fontFamily:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        fontSize: '16px',
        color: '#222',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        right: '24px',
        bottom: '16px',
        height: '48px',
        width: '160px',
      }}
    >
      {store.state.isFetching ? <Spinner /> : 'Update preview'}
    </div>
  )
}
