import chalk from 'chalk'
import { Control } from 'contentful-management/types'

export interface GetModelControl {
  fieldId: string
  fieldTag: Record<string, string>
}

export const getModelControl = ({ fieldId, fieldTag }: GetModelControl) => {
  let control: Control | undefined
  if (fieldTag['@widget'] || fieldTag['@helpText']) {
    control = {
      fieldId,
      widgetNamespace: 'builtin',
      widgetId: fieldTag['@widget'],
      settings: { helpText: fieldTag['@helpText'] },
    }
    console.log(chalk.red(`Adding editor control for field ${fieldId}`))
  }
  return control
}
