import { TypeData } from '@wheelroom/push/plain'
import { Environment } from 'contentful-management/types'

export interface PushTypes {
  contentfulEnvironment: Environment
  typeData: TypeData
}

export const pushContent = async ({ typeData }: PushTypes) => {
  for (const wrType of Object.values(typeData)) {
    for (const wrVar of wrType.variables) {
      const valueFn = new Function(`return ${wrVar.value}`)
      const valueArray = valueFn()
      console.log('Data to send to Contentful', valueArray)
    }
  }
}
