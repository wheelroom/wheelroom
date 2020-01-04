import { WheelroomComponents } from '@jacco-meijer/wheelroom'
import { TemplateDefinition, TemplateSet } from './template-sets'

export interface WriteTemplatesContext {
  basePath: string
  templateSet: TemplateSet
  wheelroomComponents: WheelroomComponents
  yes?: boolean | undefined
}

export interface GetFileListContext {
  basePath: string
  templateSet: TemplateSet
  templateDefinition?: TemplateDefinition
  wheelroomComponents: WheelroomComponents
}
