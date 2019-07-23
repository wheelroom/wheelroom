import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

/** Get fields from a configured model */
export const modelFields = (model: Model) => Object.keys(model.fields).sort()
