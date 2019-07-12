export const handler = (argv: any) => {
  console.log('cf handler', argv)
  console.log(
    'Data I got:',
    argv.options['@jacco-meijer/wheelroom-plugin-templates']
  )
}
