import { ComponentConfig } from './component-config'
import { componentLocale } from './simple-types'

/** Build up internally, used to do all component processing
 */
export interface PassedToPlugins {
  /** default locale */
  defaultLocale: componentLocale
  /** Component data passed to plugin for processing */
  componentConfigs: ComponentConfig[]
}
