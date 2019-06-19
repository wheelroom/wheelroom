import {
  applyVariationField,
  createEntry,
  getEntry,
  getFields,
  publishEntry,
  updateEntry,
} from '../contentful-api/content'
import { getClient, getEnvironment, getSpace } from '../contentful-api/init'
import { ContentfulApiContext } from '../types/contentful-api-context'
import { createAsset } from './create-asset'

const finish = async (context: ContentfulApiContext) => {
  console.log(`Succesfully created content for: ${context.currentModel.type}`)
  return context
}

const handleError = (error: Error) => {
  console.log(error.message)
}

export const createContentForModel = async (context: ContentfulApiContext) => {
  try {
    await getClient(context)
    await getSpace(context)
    await getEnvironment(context)

    getFields(context)
    applyVariationField(context)
    await getEntry(context)
    await updateEntry(context)
    await createEntry(context)
    await publishEntry(context)
    await finish(context)
  } catch (error) {
    handleError(error)
  }
}

export const createContent = async (context: ContentfulApiContext) => {
  await createAsset(context)
  for (const componentConfig of context.componentConfigs) {
    console.log(
      `Creating content for model ${componentConfig.model.type} =============`
    )
    context.entry = null
    context.fields = {}
    context.currentModel = componentConfig.model
    context.variationField = {
      overwriteVariations: componentConfig.overwriteVariations,
      variations: componentConfig.variations,
    }
    await createContentForModel(context)
  }
}
