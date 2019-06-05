#!/usr/bin/env node

import * as dotenv from 'dotenv'
import { applyModels, getModelContext, getModels } from '../model-api'

const dotEnvResult = dotenv.config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}

const main = async () => {
  const context = getModelContext()
  await getModels(context)
  await applyModels(context)
}

main().then(() => {
  console.log('done')
})
