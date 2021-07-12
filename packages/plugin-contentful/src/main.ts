import { inspect } from 'util'
import { PushHandler } from '@wheelroom/push/plain'
import { config } from 'dotenv'
import contentful from 'contentful-management'

export const handler: PushHandler = async ({ callType, typeData }) => {
  const nodeEnv = process.env.NODE_ENV || 'development'
  const envPath = `.env.${nodeEnv}`
  config({ path: envPath })
  console.log(
    `Wheelroom project: ${process.env.WHEELROOM_PROJECT_NAME}`,
    callType
  )

  const client = contentful.createClient(
    {
      accessToken: process.env.CONTENTFUL_CMA_TOKEN!,
    },
    {
      type: 'plain',
      defaults: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        environmentId: process.env.CONTENTFUL_ENVIRONMENT,
      },
    }
  )

  if (!typeData) return
  for (const wrType of Object.values(typeData)) {
    console.log(`============ Fetching ${wrType.interface.typeName} ...`)
    const contentType = await client.contentType.get({
      contentTypeId: (wrType.interface.interfaceTags || {})['@type'],
    })
    // console.log('CONTENTFUL', inspect(contentType, false, 10, true))
    if (contentType)
      console.log(`Content type exists: ${contentType.description}`)

    console.log(
      'PLUGIN IS INSPECTING',
      inspect(wrType.interface.description, false, 10, true)
    )

    if (wrType.variables.length === 0) {
      console.log(`${contentType.name} does not define data variables`)
    }
    for (const wrVar of wrType.variables) {
      const valueFn = new Function(`return ${wrVar.value}`)
      const valueArray = valueFn()
      console.log(
        'Data to send to Contentful',
        inspect(valueArray, false, 10, true)
      )
    }
  }
}
