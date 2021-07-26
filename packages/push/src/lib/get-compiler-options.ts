import ts from 'typescript'

export const getCompilerOptions = () => {
  const configFileName = ts.findConfigFile(
    './',
    ts.sys.fileExists,
    // TODO: Make this a config option
    'tsconfig.json'
  )
  const configFile = ts.readConfigFile(configFileName!, ts.sys.readFile)
  const compilerOptions = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    './'
  )
  return compilerOptions
}
