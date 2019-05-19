const runMigration = require('contentful-migration/built/bin/cli').runMigration
const result = require('dotenv').config()
const path = require('path')

if (result.error) {
  throw result.error
}

const createModel = ({ jsPath }) => {
  const options = {
    filePath: path.resolve(jsPath),
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_CMA_TOKEN,
  }

  return runMigration(options)
}

const createContentType = (data) => {
  if (data.model.name && data.model.description && data.model.displayField) {
    data.contentType = data.migration
      .createContentType(data.model.type)
      .name(data.model.name)
      .description(data.model.description)
      .displayField(data.model.displayField)

    // data.errorMessage = error.message
    //   throw new ProcessError(data)
  } else {
    data.contentType = data.migration.editContentType(type)
  }

  return data
}

const createFields = (data) => {
  for (var fieldName in data.model.fields) {
    let field = data.contentType.createField(fieldName)

    for (var spec in data.model.fields[fieldName].specs) {
      field[spec](data.model.fields[fieldName].specs[spec])
    }

    if (!data.model.fields[fieldName].widgetId) continue

    data.contentType.changeEditorInterface(
      fieldName,
      data.model.fields[fieldName].widgetId,
      data.model.fields[fieldName].settings
    )
  }
  return data
}

const handleError = (error) => {
  console.error('Migration helper:', error.message)
}

const processMigration = (data) => {
  return Promise.resolve(data)
}

const doMigration = ({ migration, context, jsonPath }) => {
  const model = require(path.resolve(jsonPath))

  let data = {
    migration,
    model,
    contentType: null,
    errorMessage: null,
  }

  return processMigration(data)
    .then(createContentType)
    .then(createFields)
    .catch(handleError)
}

module.exports = {
  createModel,
  doMigration,
}
