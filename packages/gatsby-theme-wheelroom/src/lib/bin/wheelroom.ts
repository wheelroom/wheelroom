#!/usr/bin/env node

import * as dotenv from 'dotenv'
import * as yargs from 'yargs'
import * as packageJson from '../../../package.json'
import { applyModels, getModelContext, getModels } from '../model-api'

const dotEnvResult = dotenv.config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}

const main = async () => {
  // console.log('hang in there!')
  // const argv = yargs.command('serve', 'Start the server.').argv
  // console.log('argv', argv)

  const context = getModelContext()
  await getModels(context)
  await applyModels(context)
}

main().then(() => {
  console.log('done')
})
