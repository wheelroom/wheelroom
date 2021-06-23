import util from 'util'
import { DocEntry } from './push'

export const processModel = (docEntry: DocEntry) => {
  if (!docEntry.name) return
  if (!docEntry.jSDocTags?.length) {
    console.log(`Could not find js doc tags for ${docEntry.name}`)
    return
  }
  const wheelroomTags = docEntry.jSDocTags?.find(
    (tag) => tag.name === 'wheelroom'
  )
  if (!wheelroomTags) {
    console.log(`Could not find @wheelroom for ${docEntry.name}`)
    return
  }
  const wheelroomTagText = wheelroomTags?.text?.find(
    (text) => text.kind === 'text'
  )
  if (!wheelroomTagText?.text.includes('@platform')) {
    console.log(`Could not find @platform inline for ${docEntry.name}`)
    return
  }
  const regexp = wheelroomTagText?.text.match(/{(@[a-zA-z]+) ([^{]*)}/)
  console.log(`Sending ${docEntry.name} to`, regexp && regexp[2])
}

export const sendToPlatform = (docEntries: DocEntry[]) => {
  const inspect = util.inspect(docEntries, false, 10, true)
  console.log(inspect)
  docEntries.forEach((docEntry: DocEntry) => {
    processModel(docEntry)
  })
}
