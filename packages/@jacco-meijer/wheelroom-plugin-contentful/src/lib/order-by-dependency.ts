import {
  WheelroomComponent,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'

const compare = (
  cfComponentA: WheelroomComponent,
  cfComponentB: WheelroomComponent
) => {
  let comparison = 0
  // Find fields with references
  const isReferingTo = []
  Object.entries(cfComponentB.fields).forEach((field: FieldType) => {
    if (field.type === 'multipleComponents' && field.initialContent) {
      isReferingTo.push(...field.initialContent)
    }
    if (field.type === 'singleComponent' && field.initialContent) {
      isReferingTo.push(field.initialContent)
    }
  })

  return comparison
}

export const orderByDependency = (wrComponents: WheelroomComponents) => {
  const wrComponentsArray = Object.keys(wrComponents).map(k => wrComponents[k])
  wrComponentsArray.sort(compare)
}
