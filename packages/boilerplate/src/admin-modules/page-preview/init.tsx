import { useEffect } from 'react'
import {
  useAdminModuleReducer,
  RegisterModuleAction,
} from 'gatsby-theme-admin-panel'

const registerModule: RegisterModuleAction = {
  type: 'REGISTER_MODULE',
  moduleId: 'pagePreview',
  module: {
    data: {},
    heading: 'Page preview admin module',
    options: {},
    order: 1,
    path: '/admin/page-preview',
  },
}

export const intPagePreview = () => {
  const [, adminModuleDispatch] = useAdminModuleReducer()
  useEffect(() => {
    console.log('initializing module')
    adminModuleDispatch(registerModule)
  }, [])
}
