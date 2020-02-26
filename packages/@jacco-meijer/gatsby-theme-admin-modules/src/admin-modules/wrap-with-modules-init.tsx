import React, { useEffect, useReducer, useContext } from 'react'
import { AdminModuleContext } from 'gatsby-theme-admin-panel'
import queryString from 'query-string'
import { useLocation } from '@reach/router'
import { registerPagePreview } from './page-preview/register'
import { pagePreviewReducer } from './page-preview/reducers'
import { initialState } from './page-preview/initial-state'
import {useActions} from './page-preview/actions'

// This wrapper has the root element around and can therefore access the admin
// module provider
const PageWrapper = (props: any) => {
  console.log('render: page wrapper')
  const { adminPanelDispatch } = useContext(AdminModuleContext)

  const [pagePreviewState, pagePreviewDispatch] = useReducer(
    pagePreviewReducer,
    initialState
  )
  const queryParams = queryString.parse(useLocation().search)
  initialState.inPreviewMode = 'preview' in queryParams

  registerPagePreview.module.store = {
    actions: useActions(pagePreviewState, pagePreviewDispatch),
    state: pagePreviewState,
    dispatch: pagePreviewDispatch,
  }
  useEffect(() => {
    console.log('use-effect: page wrapper running (once)')
    console.log('-> registering module')
    adminPanelDispatch(registerPagePreview)

    console.log('-> setting page props')
    adminPanelDispatch({
      type: 'SET_PAGE_PROPS',
      pageProps: props,
    })
  }, [])

  return <div>{props.children}</div>
}

export const wrapWithModulesInit = (args: any) => {
  return <PageWrapper {...args.props}>{args.element}</PageWrapper>
}
