#!/usr/bin/env node

import * as dotenv from 'dotenv'
import * as yargs from 'yargs'
import { applyModels, getModelContext, getModels } from '../model-api'

import { createContent } from '../model-api/create-content'

const dotEnvResult = dotenv.config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}

const migrate = async () => {
  const context = getModelContext()
  await getModels(context)
  await applyModels(context)
}

const content = async () => {
  const context = getModelContext()
  await getModels(context)
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
