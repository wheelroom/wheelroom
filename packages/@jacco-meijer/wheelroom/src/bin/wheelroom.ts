#!/usr/bin/env node

import * as dotenv from 'dotenv'
import * as yargs from 'yargs'
import { Argv, CommandBuilder } from 'yargs'
import { createContent } from '../commands/create-content/create-content'
import { createFiles } from '../commands/create-files/create-files'
import { createModels } from '../commands/create-models/create-models'
import { deleteContent } from '../commands/delete-content/delete-content'
import { getComponentConfigs } from '../config/config'
import { ContentfulApiContext } from '../types/contentful-api-context'

const dotEnvResult = dotenv.config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}

const cmdCreateModels = async () => {
  const context = {
    componentConfigs: await getComponentConfigs(),
  } as ContentfulApiContext
  await createModels(context)
}

const cmdCreateContent = async () => {
  const context = {
    componentConfigs: await getComponentConfigs(),
  } as ContentfulApiContext
  await createContent(context)
}

const cmdDeleteContent = async () => {
  const context = {
    componentConfigs: await getComponentConfigs(),
  } as ContentfulApiContext
  await deleteContent(context)
}

const cmdCreateFiles = async (values: { target: string; path: string }) => {
  switch (values.target) {
    case 'components':
      const componentConfigs = await getComponentConfigs()
      await createFiles(componentConfigs, values.path)

      break
    default:
      console.log(`Unknown target: ${values.target}`)
      break
  }
}

const builderCreateFiles: CommandBuilder = (yargs2: Argv) =>
  yargs2
    .positional('target', {
      describe: `components|new-model
components: create files with required graphql fragments
new-model: create all files needed for setting up a new model
`,
      type: 'string',
    })
    .positional('path', {
      describe: 'where to create the files',
      type: 'string',
    })

let params = yargs
  .command({
    command: 'create-models',
    describe: 'create or update configured models',
    handler: cmdCreateModels,
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
    builder: builderCreateFiles,
    command: 'create-files <target> <path>',
    describe: 'create boilerplate files',
    handler: cmdCreateFiles as any,
  })
  .command({
    command: '*',
    handler: () => {
      console.log(`Use --help flag for options`)
    },
  }).argv

// Prevent ts warning
params = params
