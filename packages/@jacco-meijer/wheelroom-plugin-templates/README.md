# @jacco-meijer/wheelroom-plugin-templates

This is a plugin for the `wheelroom` package.

## Commands

This plugin adds the `create-files` command which lets you create files from
templates and component data.

```
wheelroom create-files <template-set> <path> [options]
```

## Config

The plugin is configured by adding it to `wheelroom-config.js`

```
var templateSets = require('./wheelroom-template-sets')
var questionSets = require('./wheelroom-question-sets')

module.exports = {
  components: {
      ...
  },
  plugins: [
    {
      resolve: '@jacco-meijer/wheelroom-plugin-templates',
      options: {
        defaultTemplateResolve: `dist:templates`,
        templateSets: templateSets,
        questionSets: questionSets,
      },
    },
  ],
}
```

## Template sets

Template sets define which templates are used and where they are resolved from.
They are grouped in template sets.

A template set is defined by these fields.

* **loopComponents:** If defined, all templates are called with each individual
  component.
* **questions:** Optional questions object. See below.
* **templates:** Object with template names. See below.

This is an example template set configuration.

```
module.exports = [
  {
    name: 'mySet',
    loopComponents: true,
    templates: {
      fragmentTemplate: {
        path: '%component%.ts',
        options: {},
      },
    },
  },
  {
    name: 'myOtherSet',
    questions: 'newModel',
    templates: {
      componentTemplate: {
        path: '%component%/%component%.ts',
        options: {},
      },
      componentBasicVarTemplate: {
        path: '%component%/%component%-basic-var.ts',
        options: {},
      },
    },
  },
]
```

## Templates

The templates are defined by a key that serves as template name and an object
with these fields:

* **path:** Where to create the file. It may contain a sub string `%component%` which
  is replaced by the dashed version of the camelCase componentName.

  If `loopComponents` is not set, no component will will be available. In that
  case the `questions` can be used to ask for a componentName. If the
  `componentName` field is present in the answers, that field will be converted
  to camelCase and used.
* **options:** Optional data passed to each template.
* **resolve:** Name of npm module where to resolve the template. The plugin can
  have a `defaultTemplateResolve` property which serves as default. The module
  is expected to export a templates object. The keys are the template names that
  correspond to the names in the template set configuration. The values should
  be functions that expect a `vars` property and return the file content. If
  nothing is returned, the file is not created.

## Questions

If defined, the object is passed to the npm `inquirer` module, the answers
object will be passed to each template. See `inquirer` documentation for more
details.
   
This is an example questions object:

```
module.exports = {
  newModel: [
    {
      default: 'My new component',
      message: 'What is the name of the component?',
      name: 'componentName',
      type: 'input',
    },
    {
      default: false,
      message: 'Do you need localized fields?',
      name: 'localizedFields',
      type: 'confirm',
    },
  ],
}
```

