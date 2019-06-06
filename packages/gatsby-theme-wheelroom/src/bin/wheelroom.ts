#!/usr/bin/env node

import * as dotenv from 'dotenv'
import * as yargs from 'yargs'
import { getModelConfigs } from '../lib/config/get-model-configs'
import { applyModels } from '../lib/model-api/apply-models'
import { createContent } from '../lib/model-api/create-content'
import { deleteContent } from '../lib/model-api/delete-content'
import { Context } from '../lib/types/context'

const dotEnvResult = dotenv.config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}

const cmdApplyModels = async () => {
  const context = {
    modelConfigs: await getModelConfigs(),
  } as Context
  await applyModels(context)
}

const cmdCreateContent = async () => {
  const context = {
    modelConfigs: await getModelConfigs(),
  } as Context
  await createContent(context)
}

const cmdDeleteContent = async () => {
  const context = {
    modelConfigs: await getModelConfigs(),
  } as Context
  await deleteContent(context)
}

const params = yargs
  .command({
    command: 'apply-models',
    describe: 'migrate all configured models',
    handler: cmdApplyModels,
  })
  .command({
    command: 'create-content',
    describe: 'create demo content for configured models',
    handler: cmdCreateContent,
  })
  .command({
    command: 'delete-content',
    describe: 'remove all demo content for configured models',
    handler: cmdDeleteContent,
  })
  .command({
    command: '*',
    handler: () => {
      console.log('Use --help flag for options')
    },
  }).argv
