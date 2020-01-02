import {
  WheelroomComponent,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'
import { TemplateSet } from './template-sets'
import { OverwritePolicy } from './write-file-context'

export interface WriteTemplatesContext {
  basePath: string
  componentName?: string
  dryRun?: boolean
  lastOverwritePolicy?: OverwritePolicy
  templatePath?: string
  templateSet: TemplateSet
  wheelroomComponent?: WheelroomComponent
  wheelroomComponents: WheelroomComponents
  yes?: boolean
}
