import { WheelroomConfig } from '../../types/wheelroom-config'
import { getModule } from '../get-module'

/** Import commands by resolving them as configured in wheelroom config */
export const getCommands = async (config: WheelroomConfig) => {
  const commands = [] as any[]
  await Promise.all(
    config.plugins.map(async plugin => {
      const module = await getModule(plugin.resolve)
      module.commands.forEach((command: any) => {
        commands.push(command)
      })
    })
  )
  return commands
}
