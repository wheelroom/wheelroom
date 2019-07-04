# Bicycle data

[Raw data](./U-Stal%20bewaakte%20fietsenstallingen.json) is pulled of the internet.

[convert.js](./convert.js) is a bit of node code that reads the waw data and saves this into
[facilities.json](./facilities.json).

[facilities.json](./facilities.json) is used by `gatsby-config.js` to create a data node:

```
'gatsby-transformer-json',
{
  resolve: 'gatsby-source-filesystem',
  options: {
    path: './src/models/sections/bicycle/data/facilities.json',
  },
},
```
