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
  // Get data var and valildations
  const dataVarFn = new Function(`return ${dataVar.value}`)
  const dataVarObj = dataVarFn() as WheelroomPluginData
  return dataVarObj
}
