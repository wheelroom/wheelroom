#!/usr/bin/env node

import * as dotenv from 'dotenv'
import * as yargs from 'yargs'
import { getModelConfigs } from '../lib/config/get-model-configs'
import { applyModels } from '../lib/model-api/apply-models'
import { Context } from '../lib/types/context'

import { createContent } from '../lib/model-api/create-content'

const dotEnvResult = dotenv.config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}

const migrate = async () => {
  const context = {
    modelConfigs: await getModelConfigs(),
  } as Context
  await applyModels(context)
}

const content = async () => {
  const context = {
    modelConfigs: await getModelConfigs(),
  } as Context
  await createContent(context)
}

const params = yargs
  .command({
    command: 'migrate',
    describe: 'migrate all configured models',
    handler: migrate,
  })
  .command({
    command: 'content',
    describe: 'create demo content for configured models',
    handler: content,
  })
  .command({
    command: '*',
    handler: () => {
      console.log('Use --help flag for options')
    },
  }).argv
