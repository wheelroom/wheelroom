# Add a new component

## Steps

New models are added in a few steps:

- Add the component and compile the new config
- Create the new model at Contentful
- Create content for the new model
- Generate Graphql fragments and queries
- Create React boilerplate code
- Update the section list
- Restart Gatsby

## Add the component and compile the new config

Add a new component to
[models.ts](../../src/config/wheelroom/models.ts).

Compile config:

```bash
npm run compile-config
```

> **_NOTE:_** This runs: `tsc --project src/config/tsconfig.json`. It runs the
> typescript compiler with the settings in `src/config/tsconfig.ts`.

## Create the new model at Contentful

Add a single model to Contentful:

```bash
npm run wr:cm -- --filter newComponent
```

> **_NOTE:_** This runs: `WHEELROOM_CONFIG=compiled-config/wheelroom-config.js wheelroom create-models`. It sets the config and runs the `create-models`
> command added by
> [wheelroom-plugin-contentful](https://www.npmjs.com/package/@wheelroom/wheelroom-plugin-contentful).

## Create content for the new model

Because of the way `gatsby-source-contentful` works ([see
here](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-contentful#notes-on-contentful-content-models)),
at least one entry of the model must exist - and - all fields of this entry must
have a value.

There's three way's of doing this.

### 1. Manually

Open the web ui and create an entry. Fill all fields with `n/a`.

### 2. Use initialContent property

Add the property `initialContent` to each field of your model. An entry with the
initial content for each field will be created when you run:

```bash
npm run wr -- create-content --filter newComponent
```

### 3. Create a content set

Add demo content to
[content-sets.ts](../../src/config/plugin-contentful/content-sets.ts).

## Create Graphql fragments and queries

Generate graphql for this new component:

```bash
npm run wr:cg -- --filter newComponent
```

> **_NOTE:_** This runs: `WHEELROOM_CONFIG=compiled-config/wheelroom-config.js wheelroom create-graphql gatsbyjs src/models`. It sets the config and runs the
> `create-graphql` command added by
> [wheelroom-plugin-graphql](https://www.npmjs.com/package/@wheelroom//wheelroom-plugin-graphql).
> The `gatsbyjs` template set is written to `src/models`.

## Create React boilerplate code

Generate boilerplate for the new component:

```bash
npm run wr:cb -- --filter newComponent
```

This runs: `WHEELROOM_CONFIG=compiled-config/wheelroom-config.js wheelroom create-boilerplate react src/models`. It sets the config and runs the
`create-boilerplate` command added by
[wheelroom-plugin-boilerplate](https://www.npmjs.com/package/@wheelroom/wheelroom-plugin-boilerplate).
The `react` template set is written to `src/models`.

## Update the section list

When you're adding a section you need to add it to the section list:
[sections.tsx](../../src/wheelroom/sections/sections.tsx).

## Update schema

This is a complex topic that - for now - is covered only briefly.

The boilerplate uses
[gatsby-plugin-snapshot](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-schema-snapshot)
to make sure that empty fields in Contentful models are properly handled.

When adding a new model, the schema snapshot needs to be updated.

- The schema is here: [schema](./../../schema.gql).
- The plugin is configured here: [gatsby-config.js](../../gatsby-config.js)

## Restart Gatsby

Kill the development server with `^C` and start it again:

```bash
npm run develop
```

## Next steps

- [Edit page template](./page-template.md)
- [Change default locale](./default-locale.md)
- [Add a new component](./add-new-component.md)
- [Auto fix with linter](./linter.md)

## TOC

- [Wheelroom Boilerplate Index](../../README.md)
- [Getting started](../getting-started.md)
- [Deploy](../deploy-wheelroom-project.md)
- [Admin plugins](../admin-plugins.md)
- [How it works](../how-wheelroom-works.md)
- [Roadmap](../roadmap.md)
