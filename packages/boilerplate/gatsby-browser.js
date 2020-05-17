import { wrapWithProvider } from '@wheelroom/admin-core'
import { wrapWithUseAdminModules } from './src/admin-resources/wrap-with-use-admin-modules'

export const wrapRootElement = wrapWithProvider
export const wrapPageElement = wrapWithUseAdminModules

// eslint-disable-next-line no-undef
export const onServiceWorkerUpdateReady = () => window.location.reload(true)
