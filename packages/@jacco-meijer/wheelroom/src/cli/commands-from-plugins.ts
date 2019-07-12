import { getModule } from '../config/get-module'
import { WheelroomConfig } from '../types/wheelroom-config'

export const commandsFromPlugins = (config: WheelroomConfig) => {
  console.log(config.plugins)
  config.plugins.forEach((plugin) => {
    console.log('resolve', plugin.resolve)
    // const options = plugin.options
    getModule(plugin.resolve)
  })
  return []
}
