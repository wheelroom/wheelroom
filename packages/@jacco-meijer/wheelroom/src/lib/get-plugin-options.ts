import { WheelroomConfig } from '../types/wheelroom-config.js'

export const getPluginOptions = (config: WheelroomConfig) => {
  return config.plugins.reduce((result: any, plugin) => {
    result[plugin.resolve] = plugin.options
    return result
  }, {})
}
