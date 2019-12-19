import { command as createContentCmd } from './create-content/command.js'
import { command as createModelsCmd } from './create-models/command.js'
import { command as deleteContentCmd } from './delete-content/command.js'

export const commands = [createContentCmd, createModelsCmd, deleteContentCmd]
