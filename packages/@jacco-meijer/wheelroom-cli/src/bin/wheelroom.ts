#!/usr/bin/env node

import * as dotenv from 'dotenv'
import * as yargs from 'yargs'
import { Argv, CommandBuilder } from 'yargs'
import { applyModels } from '../lib/commands/apply-models'
import { createContent } from '../lib/commands/create-content'
import { deleteContent } from '../lib/commands/delete-content'
import { getComponentConfigs } from '../lib/config/config'
import { generateFiles } from '../lib/generate-files/generate-files'
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

const cmdGenerateFiles = async (values: { target: string; path: string }) => {
  switch (values.target) {
    case 'components':
      const componentConfigs = await getComponentConfigs()
      await generateFiles(componentConfigs, values.path)

      break
    default:
      console.log(`Unknown target: ${values.target}`)
      break
  }
}

const builderGenerateFiles: CommandBuilder = (yargs2: Argv) =>
  yargs2
    .positional('target', {
      describe:
        "only 'components'for now:\ncreate files with required graphql fragments",
      type: 'string',
    })
    .positional('path', {
      describe: 'where to create the files',
      type: 'string',
    })

let params = yargs
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
    builder: builderGenerateFiles,
    command: 'generate-files <target> <path>',
    describe: 'generate boilerplate files',
    handler: cmdGenerateFiles as any,
  })
  .command({
    command: '*',
    handler: () => {
      console.log('Use --help flag for options')
    },
  }).argv

// Prevent ts warning
params = params
