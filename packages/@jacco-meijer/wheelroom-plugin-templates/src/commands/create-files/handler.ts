export const handler = (argv: any) => {
  console.log('cf handler')
  console.log(
    'Data I got:',
    argv.options['@jacco-meijer/wheelroom-plugin-templates']
  )
  console.log('Components:', argv.components)
  console.log('templateSet:', argv.templateSet)
  console.log('path:', argv.path)
}
