import { wrapWithProvider } from '@jacco-meijer/admin-core'
import { wrapWithUseAdminModules } from './src/admin-resources/wrap-with-use-admin-modules'

export const wrapRootElement = wrapWithProvider
export const wrapPageElement = wrapWithUseAdminModules
