# Wheelroom boilerplate

# **NOTICE**

July 2020 all boilerplate functionality was moved into separate node modules.
This documentation needs to be updated accordingly.

- @wheelroom/core
- @wheelroom/wheel-blog
- @wheelroom/wheel-navigation
- @wheelroom/wheel-table
- @wheelroom/wheel-text
- @wheelroom/wheel-topic

## About

Example repo on how to use
[@wheelroom/wheelroom](https://www.npmjs.com/package/@wheelroom/wheelroom) and
[gatsby-theme-wheelroom](https://www.npmjs.com/package/gatsby-theme-wheelroom)

## Required

This has been developed and tested on macOS. Ubuntu should not give any
problems. Windows has never been tried, there's possibly some unresolved path
issues there. I'd be happy to know.

The boilerplate depends on [nodeJS](https://nodejs.org) and uses
[Typescript](https://www.typescriptlang.org).

After every update we built and test a [Wheelroom demo
site](https://boilerplate.wheelroom.io/) on Netlify.

[![Netlify
Status](https://api.netlify.com/api/v1/badges/a6a09e15-6435-415f-90cb-de81a6b75f5d/deploy-status)](https://app.netlify.com/sites/wheelroom-boilerplate/deploys)

## Services

Currently Wheelroom supports services like:

- [Contentful](https://www.contentful.com/),
- [Netlify](https://www.netlify.com/)

## Getting started

[Get started](./docs/getting-started.md) with the Wheelroom boilerplate.

## Wheelroom admin plugins

[Wheelroom admin plugins](./docs/admin-plugins.md) allow for adding
admin functionality like theme switchers, CMS preview and detailed analytics.

## How Wheelroom works

Read [here](./docs/how-wheelroom-works.md)

## Deploy your Wheelroom project

Are you ready to deploy your first project? [Read here how you
deploy a Wheelroom project](./docs/deploy-wheelroom-project.md) to a Netlify build 
server with built‑in CI. More information about Netlify visit: 
[Netlify.com](https://www.netlify.com/)

Or if you cannot wait and want to test-run our Wheelroom Boilerplate, click on
the Netlify deploy button. We still recommend you to make a copy and not to use
our code base. Also don't forget to use the following Netlify Build settings.

Base directory:
```
packages/boilerplate/
```

Build command: 
```
npm run netlify
```

Publish directory: 
```
packages/boilerplate/public
```

Production branch:

```
master
```

Add Netlify environment variables from [Contentful](https://contentful.com/):
```
CONTENTFUL_SPACE_ID
CONTENTFUL_DELIVERY_TOKEN
CONTENTFUL_PREVIEW_TOKEN
CONTENTFUL_ENVIRONMENT
```

[![Deploy Wheelroom Boilerplate on
Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wheelroom/wheelroom/)

## Project roadmap

[Read about our project roadmap](./docs/roadmap.md)
