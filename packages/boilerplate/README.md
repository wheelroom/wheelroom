# boilerplate

Example repo on how to use
[@jacco-meijer/wheelroom](https://www.npmjs.com/package/@jacco-meijer/wheelroom)
and
[gatsby-theme-wheelroom](https://www.npmjs.com/package/gatsby-theme-wheelroom)

## Required

This has been developed and tested on macOS. Ubuntu should not give any
problems. Windows has never been tried, there's possibly some unresolved path
issues there. I'd be happy to know.

The boilerplate depends on [nodeJS](https://nodejs.org) and uses
[Typescript](https://www.typescriptlang.org).

## Getting started

### Clone boilerplate

Copy the boilerplate code into a new folder and open a terminal in that folder.

You can use the commands below. Create an empty repository at Github and replace
`YOUR_GIT_URL_HERE` below with the url of this empty repository.

```bash
git clone --depth 1 git@github.com:jaccomeijer/wheelroom.git your-site
cd your-site
git filter-branch --prune-empty --subdirectory-filter packages/boilerplate master
git remote set-url origin YOUR_GIT_URL_HERE
git push -u origin master
```

### Install node modules

```bash
npm install
```

### Setup Contentful tokens

Create a new `.env` by copying the template:

```bash
cp .env-template .env
```

Open `.env` in an editor and replace `paste_here` with the correct values. The
`CONTENTFUL_SPACE_ID` and `CONTENTFUL_DELIVERY_TOKEN` are found within the
Contentful web ui at `Settings -> API keys`. To obtain the
`CONTENTFUL_CMA_TOKEN`, you need to install the Contentful cli:

```bash
npm install -g contentful-cli
```

```bash
contentful login
```

You don't have to paste the token back in the terminal. Just having it in `.env`
is enough.

### Compile wheelroom config

Compile the config from typescript to javascript:

```bash
npm run compile-config
```

### Test config by listing all components

Wheelroom can now list the available models configured in [config-components.ts](./src/config/wheelroom/config-components.ts):

```bash
npm run wr:ls
```

### Create Contentul models

Create the configured models in your Contentful space and check the Contentful
web ui.

```bash
npm run wr:cm
```

### Create Contentful content set

Create a dummy image asset and the boilerplate content set found in
[content-sets.ts](./src/config/plugin-contentful/content-sets.ts).

```bash
# Run this twice
npm run wr:cc
```

> **_NOTE_:** You need to run it twice because on the first run some references
have not yet been created. To prevent this, a future version should learn how to
handle circular references. A page has an opener, an opener has navigation and
navigation has pages.


### Start development server

Start Gatsby and browse to: http://localhost:8000

```bash
npm run develop
```


## Next steps

### Page template

You can edit [src/page-template.tsx](src/page-template.tsx). E.g. add
`console.log(props)` to the `PageTemplate` and inspect the `pageContext` prop.
It contains the `pageId` key used in the query in
[src/page-template.tsx](src/page-template.tsx):

```graphql
query($pageId: String, $globalsId: String) {
  site {
    siteMetadata {
      siteVersion
    }
  }
  page: contentfulPage(id: { eq: $pageId }) {
    ...Page
  }
  globals: contentfulGlobals(id: { eq: $globalsId }) {
    ...Globals
  }
}
```

### Set the default locale for Contentful

Set the `defaultLocale` option in [gatsby-config.js](gatsby-config.js) for the `gatsby-theme-wheelroom` plugin.

Paths for this locale won't have the locale prefix: `/en-US/some-page`.


### Add a new component

New components are added in a few steps:

- Add the component and compile the new config
- Create the new model at Contentful
- Generate Graphql fragments and queries
- Create React boilerplate code
- Update the section list
- Restart Gatsby


#### Add the component and compile the new config

Add a new component to
[config-components.ts](./src/config/wheelroom/config-components.ts).

Compile config:

```bash
npm run compile-config
```

> **_NOTE:_** This runs: `tsc --project src/config/tsconfig.json`. It runs the
typescript compiler with the settings in `src/config/tsconfig.ts`.

#### Create the new model at Contentful

Add a single model to Contentful:

```bash
npm run wr:cm -- --filter newComponent
```

> **_NOTE:_** This runs: `WHEELROOM_CONFIG=compiled-config/wheelroom-config.js
wheelroom create-models`. It sets the config and runs the `create-models`
command added by
[wheelroom-plugin-contentful](https://www.npmjs.com/package/@jacco-meijer/wheelroom-plugin-contentful).


#### Create Graphql fragments and queries

Generate graphql for this new component:

```bash
npm run wr:cg -- --filter newComponent
```

> **_NOTE:_** This runs: `WHEELROOM_CONFIG=compiled-config/wheelroom-config.js
wheelroom create-graphql gatsbyjs src/components`. It sets the config and runs
the `create-graphql` command added by
[wheelroom-plugin-graphql](https://www.npmjs.com/package/@jacco-meijer//wheelroom-plugin-graphql).
The `gatsbyjs` template set is written to `src/components`.


#### Create React boilerplate code

Generate boilerplate for the new component:

```bash
npm run wr:cb -- --filter newComponent
```


This runs: `WHEELROOM_CONFIG=compiled-config/wheelroom-config.js wheelroom create-boilerplate react src/components`.
It sets the config and runs the `create-boilerplate` command added by
[wheelroom-plugin-boilerplate](https://www.npmjs.com/package/@jacco-meijer/wheelroom-plugin-boilerplate).
The `react` template set is written to `src/components`.


#### Update the section list

When you're adding a section you need to add it to the section list: [src/sections/sections.tsx](./src/sections/sections.tsx).


#### Restart Gatsby

Kill the development server with `^C` and start it again:

```bash
npm run develop
```

### Fix linting errors

Fix boilerplate imports not ordered properly:

```bash
npm run lint-fix
```

> **_NOTE:_** This runs: `eslint 'src/**/*.{js,ts,tsx}' --fix`.


## How it works

The commands above read the compiled version of
[src/config/wheelroom-config.ts](./src/config/wheelroom-config.ts). The
components defined here are used to:

- create content models at Contentful
- create demo content entries at Contentful
- create Graphql fragments
- create Graphql queries
- create React boilerplate code

When the Gatsby development server starts, this is what happens:

- Gatsby plugin `gatsby-source-contentful` within
  [gatsby-theme-wheelroom](https://www.npmjs.com/package/gatsby-theme-wheelroom)
  creates Graphql nodes of the Contentful content. 
- Graphql queries defined in [gatsby-config.js](gatsby-config.js) are fetched by
  `gatsby-theme-wheelroom`:
  ```javascript
  const globalsQuery = require('./src/components/globals/query')
  const pageQuery = require('./src/components/page/query')
  ```
- `gatsby-theme-wheelroom` plugin uses the
  [src/page-template.tsx](src/page-template.tsx) to create page templates for
  each path.
- Page queries have `type: 'page'` defined. These entries have a `path`
  attribute.
- Page queries return a `pathName` attribute to build named paths for easy site
  localization.
- Graphql `ids` for page content are added to the page context of each page
  template. Eg `pageId`, `globalsId` or `articleId`.
- Once all page templates are ready, Gatsby scans the `src` folder to build a
  Graphql node. It uses the generated Graphql in the `src/components` folder.
  Like this file:
  [src/components/opener-section/fragment.js](./src/components/opener-section/fragment.js)
- The page template builds each page from sections. Sections are taken from the
  section list defined in
  [src/sections/sections.tsx](./src/sections/sections.tsx).
- All generated page templates are rendered by applying the generated Graphql.

### Styled system

The templates use a style system: [@jacco-meijer/styled-system](https://www.npmjs.com/package/@jacco-meijer/styled-system). It's a simple typescript rewrite of [styled-system.com](https://styled-system.com) and makes it fully configurable. Styled system itself is based on [System UI Theme Specification](https://system-ui.com/theme/).

The config file can be found here: [./src/styled-system/styled-system-config.ts](./src/styled-system/styled-system-config.ts). To configure the theme, look here: [./src/styled-system/styled-system-theme.ts](./src/styled-system/styled-system-theme.ts)

