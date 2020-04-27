import { command as createContentCmd } from './create-content/command'
import { command as createModelsCmd } from './create-models/command'
import { command as deleteContentCmd } from './delete-content/command'
import { command as deleteModelsCmd } from './delete-models/command'
import { command as listModlesCmd } from './list-models/command'
import { command as replaceCntentCmd } from './replace-content/command'

export const commands = [
  createContentCmd,
  createModelsCmd,
  deleteContentCmd,
  deleteModelsCmd,
  listModlesCmd,
  replaceCntentCmd,
]
