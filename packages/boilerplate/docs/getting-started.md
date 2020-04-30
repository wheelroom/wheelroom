# Getting started with Wheelroom boilerplate

## Clone boilerplate

Copy the boilerplate code into a new folder and open a terminal in that folder.

You can use the commands below. Create an empty repository at Github and replace
`YOUR_GIT_URL_HERE` below with the url of this empty repository.

```bash
git clone --depth 1 git@github.com:wheelroom/wheelroom.git your-site
cd your-site
git filter-branch --prune-empty --subdirectory-filter packages/boilerplate master
git remote set-url origin YOUR_GIT_URL_HERE
git push -u origin master
```

## Install node modules

```bash
npm install
```

## Setup Contentful tokens

Sign up for a free account at Contentful.

Create a new `.env` by copying the template:

```bash
cp .env-template .env
```

Open `.env` in an editor and replace `paste_here` with the correct values. The
`CONTENTFUL_SPACE_ID`, `CONTENTFUL_CMA_TOKEN` and `CONTENTFUL_DELIVERY_TOKEN`
are found within the Contentful web ui at `Settings -> API keys`. Note that the
Content management tokens (CMA) are in a separate tab.

## Compile wheelroom config

Compile the config from typescript to javascript:

```bash
npm run compile-config
```

## Test config by listing all models

Wheelroom can now list the available models configured in
[config-models.ts](../src/config/wheelroom/config-models.ts):

```bash
npm run wr:ls
```

## Create Contentul models

Create the configured models in your Contentful space and check the Contentful
web ui.

```bash
npm run wr:cm
```

> **_NOTE:_** All fields have a `name` attribute that contains the Dutch
> translation. Removing this attribute makes it fall back to the default value
> which is the English '%Field name%'. Future versions should have this properly
> localized.

## Create Contentful content set

Wheelroom includes two different Contentful content-sets:

- `starterSet` 
- `exampleSet`.

The content-sets contains media (image) placeholder and page-sections with 
example topics. You can create your own content-set by editing the 
[content-sets.ts](../src/config/plugin-contentful/content-sets.ts) file and run
the following script.

```bash
npm run wr:cc -- starterSet
```

> **_NOTE:_** All content is written in English. Future versions should have 
> this properly localized.

## Delete Contentful content set

Deleting your content is as easy as creating a content-set by running:

```bash
npm run wr:dc -- starterSet
```

> **_NOTE:_** Always check which content-set you used! Otherwise the script won't 
> delete your content, or the wrong content-set.

## Start development server

Start Gatsby and browse to: http://localhost:8000

```bash
npm run develop
```

## Next steps

- [Edit page template](./next-steps/page-template.md)
- [Change default locale](./next-steps/default-locale.md)
- [Add a new component](./next-steps/add-new-component.md)
- [Auto fix with linter](./next-steps/linter.md)

## TOC

- [Wheelroom Boilerplate Index](../README.md)
- [Getting started](./getting-started.md)
- [Deploy](./deploy-wheelroom-project.md)
- [Admin plugins](./admin-plugins.md)
- [How it works](./how-wheelroom-works.md)
- [Roadmap](./roadmap.md)
