#!/usr/bin/env node

import * as dotenv from 'dotenv'
import { Argv, CommandBuilder } from 'yargs'
import * as yargs from 'yargs'
import { createContent } from '../commands/create-content/create-content'
import { createFragmentFiles } from '../commands/create-files/fragment/create-fragment-files'
import { createNewModel } from '../commands/create-files/new-model/create-new-model'
import { createModels } from '../commands/create-models/create-models'
import { deleteContent } from '../commands/delete-content/delete-content'
import { list } from '../commands/list/list'
import { getComponentConfigs } from '../config/config'
import { ContentfulApiContext } from '../types/contentful-api-context'

const dotEnvResult = dotenv.config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}

const cmdList = async () => {
  const componentConfigs = await getComponentConfigs()
  await list(componentConfigs)
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
    case 'fragments':
      const componentConfigs = await getComponentConfigs()
      await createFragmentFiles(componentConfigs, values.path)
      break

    case 'new-model':
      await createNewModel(values.path)
      break

    default:
      console.log(`Unknown target: ${values.target}`)
      break
  }
}

const builderCreateFiles: CommandBuilder = (yargs2: Argv) =>
  yargs2
    .positional('target', {
      describe: `fragments|new-model
fragments: create files with required graphql fragments
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
    command: 'list',
    describe: 'list configured models',
    handler: cmdList,
  })
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
