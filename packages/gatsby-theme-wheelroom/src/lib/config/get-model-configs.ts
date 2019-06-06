import { ModelConfig } from '../types/config'
import { Model } from '../types/model'
import { getGatsbyConfig, getModelConfig, getPackageDir } from './config'

export const getModelConfigs = async () => {
  const gatsbyConfig = await getGatsbyConfig()
  const modelConfigs = getModelConfig(gatsbyConfig)

  await Promise.all(
    modelConfigs.map(async (model: ModelConfig) => {
      try {
        // TODO: This needs error checking, reporting and documentation
        console.log(`Importing model ${model.name} from ${model.resolve}`)
        const modelPath = getPackageDir(model.resolve) + model.modelPath
        const importedModel = await import(modelPath)
        model.model = importedModel.default

        if (['global', 'subPage', 'page'].includes(model.type)) {
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
  return modelConfigs
}
