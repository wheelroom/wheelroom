import chalk from 'chalk'
import { PushHandler } from '@wheelroom/push/plain'
import { getWheelroomPluginData } from '../lib/get-wheelroom-plugin-data'
import { getAndValidateEnv } from '../lib/get-and-validate-env'
import { pushModels } from '../push-models/push-models'
import { pushContent } from '../push-content/push-content'
import { getContentfulEnvironment } from '../lib/get-contentful-environment'

export const handler: PushHandler = async ({
  callCommand,
  callType,
  pluginData,
}) => {
  const log = console.log
  getAndValidateEnv()
  log(chalk.bold.underline(`Starting Contentful plugin`))
  if (!pluginData) return
  log(`Wheelroom project: ${process.env.WHEELROOM_PROJECT_NAME}`)

  const dataVarObj = getWheelroomPluginData({ dataVar: pluginData.dataVar })
  const validationsMap =
    dataVarObj?.['@wheelroom/plugin-contentful/plain']?.validations || {}
  const contentfulEnvironment = await getContentfulEnvironment()
  if (callCommand === 'push' && callType === 'models') {
    await pushModels({
      contentfulEnvironment,
      typeData: pluginData.types,
      validationsMap,
    })
  }
  if (callCommand === 'push' && callType === 'content') {
    await pushContent({
      contentfulEnvironment,
      typeData: pluginData.types,
    })
  }
}
