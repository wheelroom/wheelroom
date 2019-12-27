import { TemplateSet } from '../types/options'

export const getTemplateSet = (
  selectedTemplateSet: string,
  templateSets: TemplateSet[]
) => {
  for (const templateSet of templateSets) {
    if (templateSet.name === selectedTemplateSet) {
      return templateSet
    }
  }
  return null
}

export const getAvailableTemplateSets = (templateSets: TemplateSet[]) => {
  return templateSets.map(templateSet => templateSet.name)
}
