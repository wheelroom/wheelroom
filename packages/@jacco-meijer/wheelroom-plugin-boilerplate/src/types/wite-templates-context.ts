import {
  WheelroomComponent,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'
import { TemplateSet } from './template-sets'

export interface WriteTemplatesContext {
  basePath: string
  templateSet: TemplateSet
  wheelroomComponents: WheelroomComponents
  yes?: boolean | undefined
}

export interface GetFileListContext {
  basePath: string
  componentName?: string
  templatePath?: string
  templateSet: TemplateSet
  wheelroomComponent?: WheelroomComponent
  wheelroomComponents: WheelroomComponents
}
