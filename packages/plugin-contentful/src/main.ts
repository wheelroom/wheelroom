import { inspect } from 'util'
import { PushHandler } from '@wheelroom/push/plain'
import { config } from 'dotenv'
import contentful from 'contentful-management'

export const handler: PushHandler = async ({ callType, pushData }) => {
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

  if (!pushData) return
  for (const wrType of Object.values(pushData)) {
    console.log(`============ ${wrType.interface.typeName}`)
    const contentType = await client.contentType.get({
      contentTypeId: (wrType.interface.interfaceTags || {})['@type'],
    })
    console.log('CONTENTFUL', inspect(contentType, false, 10, true))

    console.log(
      'PLUGIN IS INSPECTING',
      callType,
      inspect(pushData, false, 10, true)
    )

    for (const wrVar of wrType.variables) {
      const valueText = wrVar.value || ''
      const valueArray = eval(valueText)
      console.log(
        'Data to send to platdform',
        inspect(valueArray, false, 10, true)
      )
    }
  }
}
