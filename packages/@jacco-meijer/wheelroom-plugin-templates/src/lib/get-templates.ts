import { getModule } from '@jacco-meijer/wheelroom'
import { TemplateConfig, TemplateConfigs } from '../types/options'
import { Resolvers, TemplateToBeResolved } from '../types/resolvers'
import { Template, Templates } from '../types/templates'

/** Resolve is configured per template. Here we group templates by the module
 * they are resolved from. To be able to fetch the template more efficently
 */
const getResolvers = (
  templates: TemplateConfigs,
  defaultTemplateResolve: string
) => {
  const resolvers = {} as Resolvers
  Object.entries(templates).forEach(
    ([name, template]: [string, TemplateConfig]) => {
      const templateResolve = template.resolve || defaultTemplateResolve
      if (!(templateResolve in resolvers)) {
        resolvers[templateResolve] = []
      }
      resolvers[templateResolve].push({
        options: template.options,
        templateName: name,
      })
    }
  )
  return resolvers
}

export const getTemplates = async (
  templates: TemplateConfigs,
  defaultTemplateConfigResolve: string
) => {
  const fetchedTemplates = {} as Templates
  const resolvers = getResolvers(templates, defaultTemplateConfigResolve)
  await Promise.all(
    Object.entries(resolvers).map(
      async ([moduleName, templatesToResolve]: [
        string,
        TemplateToBeResolved[]
      ]) => {
        const module = await getModule(moduleName)
        if (!module) {
          return
        }
        console.log(`Imported template module ${moduleName}`)
        if (module && !module.templates) {
          console.log(`Could not find templates object in ${moduleName}`)
          return
        }

        templatesToResolve.forEach((toBeResolved: TemplateToBeResolved) => {
          if (toBeResolved.templateName in module.templates) {
            const newTemplate = {
              options: toBeResolved.options,
              sourceModule: moduleName,
              template: module.templates[toBeResolved.templateName],
            } as Template

            fetchedTemplates[toBeResolved.templateName] = newTemplate
          } else {
            console.log(
              `Could not find ${toBeResolved.templateName} in ${moduleName}`
            )
          }
        })
      }
    )
  )

  return fetchedTemplates
}
