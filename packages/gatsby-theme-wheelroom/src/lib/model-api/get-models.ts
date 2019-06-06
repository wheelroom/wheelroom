import {
  getGatsbyConfig,
  getModelConfig,
  getPackageDir,
} from '../config/config'
import { Context, ModelInfo } from '../types/model-api'

export const getModels = async (context: Context) => {
  context.models = []
  const gatsbyConfig = await getGatsbyConfig()
  context.models = getModelConfig(gatsbyConfig)

  await Promise.all(
    context.models.map(async (model: ModelInfo) => {
      try {
        // TODO: This needs error checking, reporting and documentation
        console.log(`Importing model ${model.name} from ${model.resolve}`)
        const modelPath = getPackageDir(model.resolve) + model.modelPath
        const importedModel = await import(modelPath)
        model.model = importedModel.default

        if (['glboal', 'subPath', 'page'].includes(model.type)) {
          console.log(`Importing query ${model.name} from ${model.resolve}`)
          const queryPath = getPackageDir(model.resolve) + model.queryPath
          const importedQuery = await import(queryPath)
          model.query = importedQuery.default
        }
      } catch (error) {
        console.log(error)
      }
    })
  )
}
