import { Component } from '@jacco-meijer/wheelroom'
import { CurrentModel } from '../types/current-model.js'

export const getCurrentModel = (component: Component) => {
  const currentModel = {
    model: component.component.model,
    modelOptions: component.options,
  } as CurrentModel
  return currentModel
}
