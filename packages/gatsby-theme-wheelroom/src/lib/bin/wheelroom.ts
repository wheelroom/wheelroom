#!/usr/bin/env node

import * as dotenv from 'dotenv'
import * as yargs from 'yargs'
import { applyModels, getModelContext, getModels } from '../model-api'

const dotEnvResult = dotenv.config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}

const migrate = async () => {
  const context = getModelContext()
  await getModels(context)
  await applyModels(context)
}

const params = yargs
  .command({
    command: 'migrate',
    describe: 'migrate all configured models',
    handler: migrate,
  })
  .command({
    command: '*',
    handler: () => {
      console.log('Use --help flag for options')
    },
  }).argv
