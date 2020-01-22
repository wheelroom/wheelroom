import { command as createContentCmd } from './create-content/command'
import { command as createModelsCmd } from './create-models/command'
import { command as createSiteCmd } from './create-site/command'
import { command as deleteContentCmd } from './delete-content/command'

export const commands = [
  createContentCmd,
  createModelsCmd,
  deleteContentCmd,
  createSiteCmd,
]
