import path from 'path'
import ts from 'typescript'

export type WrVariable = {
  fileName?: string
  isArray?: boolean
  isObject?: boolean
  isExported?: boolean
  isTyped?: boolean
  name?: string
  type?: string
  value?: string
}

export interface ParseWrVariable {
  node: ts.Node
  sourceFile: ts.SourceFile
}

export const parseWrVariable = ({ node, sourceFile }: ParseWrVariable) => {
  const wrVariable: WrVariable = {}
  if (node.kind === ts.SyntaxKind.FirstStatement) {
    node.forEachChild((node) => {
      if (node.kind === ts.SyntaxKind.ExportKeyword)
        wrVariable.isExported = true
      if (node.kind === ts.SyntaxKind.VariableDeclarationList) {
        node.forEachChild((node) => {
          if (node.kind === ts.SyntaxKind.VariableDeclaration) {
            let name = ''
            let objectType = ''
            let arrayType = ''
            let objectValue = ''
            let arrayValue = ''
            node.forEachChild((node) => {
              if (node.kind === ts.SyntaxKind.VariableDeclaration) {
                name = node.getText(sourceFile)
              }
              if (node.kind === ts.SyntaxKind.Identifier) {
                name = node.getText(sourceFile)
              }
              if (node.kind === ts.SyntaxKind.TypeReference) {
                objectType = node.getText(sourceFile)
              }
              if (node.kind === ts.SyntaxKind.ObjectLiteralExpression) {
                objectValue = node.getText(sourceFile)
              }
              if (node.kind === ts.SyntaxKind.ArrayType) {
                arrayType = node.getText(sourceFile)
              }
              if (node.kind === ts.SyntaxKind.ArrayLiteralExpression) {
                arrayValue = node.getText(sourceFile)
              }
            })
            if (arrayType) arrayType = arrayType.replace('[]', '')
            wrVariable.fileName = path.resolve(sourceFile.fileName)
            wrVariable.isArray = !!arrayValue
            wrVariable.isObject = !!objectValue
            wrVariable.isTyped = !!arrayType || !!objectType
            wrVariable.name = name
            wrVariable.type = arrayType || objectType
            wrVariable.value = arrayValue || objectValue
          }
        })
      }
    })
  }
  return wrVariable
}
