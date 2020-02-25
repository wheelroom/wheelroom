/* eslint-disable */

const { wrapWithModulesInit } = require('./src/admin-modules/wrap-with-modules-init')
export const wrapPageElement = wrapWithModulesInit
export const onServiceWorkerUpdateReady = () => window.location.reload(true)
