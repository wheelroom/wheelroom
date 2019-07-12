import { Argv } from 'yargs'

export const listHandler = async (argv: Argv) => {
  console.log('argv', argv)

  //   componentConfigs.forEach(async (config: ComponentConfig) => {
  //     console.log(`============================
  // Component type:       ${config.model.type}
  // Wheelroom type:       ${config.model.wheelroomType}
  // Model version:        ${config.model.modelVersion}
  // Source module:        ${config.sourceModule}
  // Overwrite variations: ${config.overwriteVariations}
  // Variations:           ${config.variations.length ? config.variations : 'None'}
  // Has graphql fragment: ${config.fragment ? 'Yes' : 'No'}
  // Has graphql query:    ${config.query ? 'Yes' : 'No'}
  // `)
  //   })
}
