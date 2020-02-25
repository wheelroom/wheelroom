import React, { useEffect, useReducer } from 'react'
import { registerPagePreview } from './page-preview/register'
import { useAdminModuleReducer } from 'gatsby-theme-admin-panel'
import { pagePreviewReducer } from './page-preview/reducers'
import { initialState } from './page-preview/initial-state'

// This wrapper has the root element around and can therefore access the admin
// module provider
const Wrapper = (props: any) => {
  const [dispatch, state] = useReducer(pagePreviewReducer, initialState)
  const [, adminModuleDispatch] = useAdminModuleReducer()
  useEffect(() => {
    adminModuleDispatch({
      type: 'SET_PAGE_PROPS',
      pageProps: props,
    })

    // Add other inits here
    registerPagePreview.module.useReducer = [dispatch, state]
    adminModuleDispatch(registerPagePreview)
  }, [])

  return <div>{props.children}</div>
}

export const wrapWithModulesInit = (args: any) => {
  return <Wrapper {...args.props}>{args.element}</Wrapper>
}
