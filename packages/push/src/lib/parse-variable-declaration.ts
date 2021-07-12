import ts from 'typescript'

export type ParseVariableDeclarationResult = {
  name?: string
  type?: string
  value?: string
  isObject?: boolean
  isArray?: boolean
}

export interface ParseVariableDeclaration {
  node: ts.Node
  sourceFile: ts.SourceFile
}

export const parseVariableDeclaration = ({
  node,
  sourceFile,
}: ParseVariableDeclaration) => {
  const result: ParseVariableDeclarationResult = {}
  if (node.kind === ts.SyntaxKind.FirstStatement) {
    node.forEachChild((node) => {
      if (node.kind === ts.SyntaxKind.VariableDeclarationList) {
        node.forEachChild((node) => {
          if (node.kind === ts.SyntaxKind.VariableDeclaration) {
            let name = ''
            let objectType = ''
            let arrayType = ''
            let objectValue = ''
            let arrayValue = ''
            node.forEachChild((node) => {
              // console.log('===', ts.SyntaxKind[node.kind])
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
            result.name = name
            result.type = arrayType || objectType
            result.value = arrayValue || objectValue
            result.isArray = !!arrayType && !!arrayValue
            result.isObject = !!objectType && !!objectValue
          }
        })
      }
    })
  }
  return result
}
