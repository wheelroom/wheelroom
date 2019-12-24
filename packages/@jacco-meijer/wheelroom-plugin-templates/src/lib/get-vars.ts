import { Component } from '@jacco-meijer/wheelroom'
import { Template } from '../types/templates.js'

export const getVars = (
  answers: any,
  template: Template,
  component?: Component,
  componentName?: string
) => {
  const vars = {
    answers,
    options: template.options,
  } as any

  if (component) {
    vars.component = component
    vars.componentName = {}
  } else {
    // See if we have a componentName answer
    if (answers && answers.componentName) {
      vars.componentName = {}
    }
  }
  return vars
}
