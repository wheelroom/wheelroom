import ts from 'typescript'
import { getCompilerOptions } from '../lib/get-compiler-options'
import { interfaceToDocProperty } from '../lib/interface-to-doc-property'
import { isExportedNode } from '../lib/is-exported-node'
import { parseWheelroomTags } from '../lib/parse-wheelroom-tags'
import { callPushHandler } from '../lib/call-push-handler'
import { WheelroomTags } from '../../build/plain'

export interface PushModels {
  file: string
}

export const pushModels = async ({ file }: PushModels) => {
  const compilerOptions = getCompilerOptions()
  const program = ts.createProgram([file], compilerOptions.options)
  const checker = program.getTypeChecker()

  for (const sourceFile of program.getSourceFiles()) {
    if (sourceFile.isDeclarationFile) continue
    const tagsList: WheelroomTags[] = []
    console.log('===\nSource:', sourceFile.fileName)
    ts.forEachChild(sourceFile, (node: ts.Node) => {
      if (
        !isExportedNode({ node }) ||
        !ts.isInterfaceDeclaration(node) ||
        !node.name
      )
        return
      const type = checker.getTypeAtLocation(node)
      if (!type) return
      const docProperty = interfaceToDocProperty({ type, checker })
      const tags = parseWheelroomTags({ docProperty })
      if (!tags) return
      tagsList.push(tags)
    })
    for (const tags of tagsList) {
      await callPushHandler({ wheelroomTags: tags })
    }
  }
}
