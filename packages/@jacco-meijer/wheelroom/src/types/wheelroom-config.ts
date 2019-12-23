import { Backends } from './backends'
import { Components } from './components'
import { Plugin } from './plugins'

export interface WheelroomConfig {
  components: Components
  backends: Backends
  plugins: Plugin[]
}
