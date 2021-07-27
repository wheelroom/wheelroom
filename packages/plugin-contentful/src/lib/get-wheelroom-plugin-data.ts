import { ContentTypeFieldValidation } from 'contentful-management/types'
import { WrVariable } from '@wheelroom/push/plain'

export type ValidationsMap = {
  [validationName: string]: ContentTypeFieldValidation
}

export type WheelroomPluginData = {
  '@wheelroom/plugin-contentful/plain'?: {
    validations?: ValidationsMap
  }
}

export interface GetWheelroomPluginData {
  dataVar: WrVariable
}

export const getWheelroomPluginData = ({ dataVar }: GetWheelroomPluginData) => {
  const dataVarFn = new Function(`return ${dataVar.value}`)
  const dataVarObj = dataVarFn() as WheelroomPluginData
  const data = dataVarObj?.['@wheelroom/plugin-contentful/plain']

  return data
}
