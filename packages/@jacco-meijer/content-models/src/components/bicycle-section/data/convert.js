const fs = require('fs')

const modify = existing => {
  let modified = {}
  modified.name = existing.name[0].trim()
  const description = existing.description[0]
  let url
  if (description.startsWith('http')) url = description
  if (description.includes('(http'))
    url = description.substring(
      description.lastIndexOf('(') + 1,
      description.lastIndexOf(')')
    )

  modified.url = url
  const coordinates = existing.Point[0].coordinates[0].split(',')
  modified.coordinates = [
    parseFloat(coordinates[0]),
    parseFloat(coordinates[1]),
  ]
  return modified
}

fs.readFile(
  './U-Stal bewaakte fietsenstallingen.json',
  (err, json) => {
    if (err) {
      console.log(err)
    } else {
      var data = JSON.parse(json.toString())
      console.log('data', data)

      var facilities = []
      data.forEach(facility => {
        console.log('facility', facility)
        facilities.push(modify(facility))
      })
      fs.writeFile('facilities.json', JSON.stringify(facilities), err => {
        if (err) {
          console.log(err)
        } else console.log('Done!')
      })
    }
  }
)
