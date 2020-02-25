import { RegisterModule, useAdminModuleReducer } from 'gatsby-theme-admin-panel'
import { useReducer, useEffect } from 'react'
import { pagePreviewReducer } from './reducers'
import { initialState } from './initial-state'
import queryString from 'query-string'
import { useLocation } from '@reach/router'

const registerPagePreview: RegisterModule = {
  type: 'REGISTER_MODULE',
  moduleId: 'pagePreview',
  module: {
    heading: 'Page preview admin module',
    options: {},
    order: 1,
    path: '/admin/page-preview',
  },
}

export const usePagePreview = () => {
  const [, adminModuleDispatch] = useAdminModuleReducer()
  const queryParams = queryString.parse(useLocation().search)
  initialState.inPreviewMode = 'preview' in queryParams
  const [state, dispatch] = useReducer(pagePreviewReducer, initialState)
  console.log('starting to register', state)

  useEffect(() => {
    console.log('registering')
    registerPagePreview.module.useReducer = [state, dispatch]
    adminModuleDispatch(registerPagePreview)
  }, [state])
}
