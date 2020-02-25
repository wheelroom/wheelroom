path = require('path')
svgrCliUtil = require('@svgr/cli/lib/util')
module.exports = {
  svgProps: { width: '100%', id: '{componentId}' },
  template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
  ) {
    const typeScriptTpl = template.smart({ plugins: ['typescript'] })
    return typeScriptTpl.ast`
    import React, { SVGProps } from 'react';
    const componentId = '${svgrCliUtil.transformFilename(
      opts.state.componentName,
      'kebab'
    )}';
    export const ${componentName} = (props: SVGProps<SVGSVGElement>) => ${jsx};
  `
  },
  indexTemplate(files) {
    const exportEntries = files.map(file => {
      const basename = path.basename(file, path.extname(file))
      return `export * from './${basename}'`
    })
    return exportEntries.join('\n') + `\n`
  },
}
