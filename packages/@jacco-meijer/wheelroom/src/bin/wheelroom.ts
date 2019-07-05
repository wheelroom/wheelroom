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

const cmdList = async (args: { filter: string }) => {
  const componentConfigs = await getComponentConfigs({ filter: args.filter })
  await list(componentConfigs)
}

const cmdCreateModels = async (args: { filter: string }) => {
  const context = {
    componentConfigs: await getComponentConfigs({ filter: args.filter }),
  } as ContentfulApiContext
  await createModels(context)
}

const cmdCreateContent = async (args: { filter: string }) => {
  const context = {
    componentConfigs: await getComponentConfigs({ filter: args.filter }),
  } as ContentfulApiContext
  await createContent(context)
}

const cmdDeleteContent = async (args: { filter: string }) => {
  const context = {
    componentConfigs: await getComponentConfigs({ filter: args.filter }),
  } as ContentfulApiContext
  await deleteContent(context)
}

const cmdCreateFragments = async (args: { filter: string; path: string }) => {
  const componentConfigs = await getComponentConfigs({ filter: args.filter })
  await createFragmentFiles(componentConfigs, args.path)
}

const builderCreateFragments: CommandBuilder = (yargs2: Argv) =>
  yargs2.positional('path', {
    describe: 'where to create the files',
    type: 'string',
  })

const cmdCreateNewModel = async (args: {
  filter: string
  componentPath: string
  configPath: string
}) => {
  await createNewModel(args.componentPath, args.configPath)
}

const builderCreateNewModel: CommandBuilder = (yargs2: Argv) =>
  yargs2
    .positional('component-path', {
      describe: 'where to create the component files',
      type: 'string',
    })
    .positional('config-path', {
      describe: 'where to create the component config files',
      type: 'string',
    })

let params = yargs
  .command({
    command: 'list [options]',
    describe: 'list configured models',
    handler: cmdList,
  })
  .command({
    command: 'create-models [options]',
    describe: 'create or update configured models',
    handler: cmdCreateModels,
  })
  .command({
    command: 'create-content [options]',
    describe: 'create demo content for configured models',
    handler: cmdCreateContent,
  })
  .command({
    command: 'delete-content [options]',
    describe: 'remove all demo content for configured models',
    handler: cmdDeleteContent,
  })
  .command({
    builder: builderCreateFragments,
    command: 'create-fragments <path> [options]',
    describe: 'create files with required graphql fragments',
    handler: cmdCreateFragments as any,
  })
  .command({
    builder: builderCreateNewModel,
    command: 'create-new-model <component-path> <config-path> [options]',
    describe: 'create all files needed for setting up a new model',
    handler: cmdCreateNewModel as any,
  })
  .command({
    command: '*',
    handler: () => {
      console.log(`Use --help flag for options`)
    },
  })
  .alias('f', 'filter')
  .describe('f', 'Filter by componentType').argv

// Prevent ts warning
params = params
