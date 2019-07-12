import { getModule } from '../config/get-module'
import { WheelroomConfig } from '../types/wheelroom-config'

export const commandsFromPlugins = async (config: WheelroomConfig) => {
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
