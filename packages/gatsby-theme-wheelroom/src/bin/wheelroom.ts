#!/usr/bin/env node

import * as dotenv from 'dotenv'
import * as yargs from 'yargs'
import { applyModels } from '../commands/apply-models'
import { createContent } from '../commands/create-content'
import { deleteContent } from '../commands/delete-content'
import { getComponentConfigs } from '../lib/config/config'
import { ModelApiContext } from '../lib/types/model-api-context'

const dotEnvResult = dotenv.config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}

const cmdApplyModels = async () => {
  const context = {
    componentConfigs: await getComponentConfigs(),
  } as ModelApiContext
  await applyModels(context)
}

const cmdCreateContent = async () => {
  const context = {
    componentConfigs: await getComponentConfigs(),
  } as ModelApiContext
  await createContent(context)
}

const cmdDeleteContent = async () => {
  const context = {
    componentConfigs: await getComponentConfigs(),
  } as ModelApiContext
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
