#!/usr/bin/env node

import * as dotenv from 'dotenv'
import { listCmdBuilder } from '../commands/list/command'
import { baseCli } from './base-cli'

const dotEnvResult = dotenv.config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}

const main = (argv: string[]) => {
  const cli = baseCli(argv)

  return cli.command(listCmdBuilder).parse(argv)
}

main(process.argv.slice(2))
