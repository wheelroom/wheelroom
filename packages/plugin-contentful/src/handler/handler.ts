import chalk from 'chalk'
import { PushHandler } from '@wheelroom/push/plain'
import { getContentfulEnvironment } from '../lib/get-contentful-environment'
import { getWheelroomPluginData } from '../lib/get-wheelroom-plugin-data'
import { getAndValidateEnv } from '../lib/get-and-validate-env'
import { pushTypes } from '../lib/push-types'

export const handler: PushHandler = async ({
  callCommand,
  callType,
  pluginData,
}) => {
  getAndValidateEnv()
  console.log(chalk.bold.underline(`Starting Contentful plugin`))
  if (!pluginData) return
  console.log(`Wheelroom project: ${process.env.WHEELROOM_PROJECT_NAME}`)

  const dataVarObj = getWheelroomPluginData({ dataVar: pluginData.dataVar })
  const validationsMap =
    dataVarObj['@wheelroom/plugin-contentful/plain']?.validations || {}
  const environment = await getContentfulEnvironment()
  if (callCommand === 'push') {
    await pushTypes({
      callType,
      environment,
      typeData: pluginData.types,
      validationsMap,
    })
  }
}
