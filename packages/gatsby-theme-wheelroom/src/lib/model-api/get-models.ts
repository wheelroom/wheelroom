import { getGatsbyConfig, getModelConfig } from '../config/config'
import { Context, ModelInfo } from './types'

export const getModels = async (context: Context) => {
  context.models = []
  const gatsbyConfig = await getGatsbyConfig()
  context.models = getModelConfig(gatsbyConfig)

  await Promise.all(
    context.models.map(async model => {
      try {
        // TODO: This needs error checking, reporting and documentation
        const importedModel = await import(model.modelPath)
        model.model = importedModel.default

        const importedQuery = await import(model.queryPath)
        model.query = importedQuery.default

      } catch (error) {
        console.log(error)
      }
    })
  )
}
