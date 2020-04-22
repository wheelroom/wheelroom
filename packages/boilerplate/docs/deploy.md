# Deploy

## Introduction

Wheelroom Boilerplate is compatible with Netlify. Netlify lets you link a GitHub,
GitLab, or Bitbucket repository to a site for continuous deployment. The
following readme will explain how to setup a Netlify build server.

### Step 1 - Create a Netlify account

[Sign up](https://app.netlify.com/signup) and register yourself. Note! Don't
forget to verify your email.

### Step 2 - Add a new site from git

Click on the button: "New site from Git", choose your Git provider and link your
repository to Netlify.

When you won't find your Git provider or repository in Netlify, check the
permissions in your Personal Git provider settings. For example you can find the
[Applications
permissions](https://help.github.com/en/github/getting-started-with-github/access-permissions-on-github)
settings in your "Personal Github settings". Check if Netlify is configured and
added to your Personal or Organization account.

### Step 3 - Set build commands

Build command: 
```
npm run netlify
```

Publish directory: 
```
public
```

### Step 4 - Environment variables

Like your local environment Netlify need to connect with Contentful. Make sure
you add the following variables:
```
CONTENTFUL_SPACE_ID
CONTENTFUL_DELIVERY_TOKEN
CONTENTFUL_PREVIEW_TOKEN
CONTENTFUL_ENVIRONMENT
```
After applying the variables you are ready to Deploy the site!

## Netlify support and docs
- [Netlify Community](https://community.netlify.com/)
- [Netlify Docs](https://docs.netlify.com/)
- [Free HTTPS (SSL)](https://docs.netlify.com/domains-https/https-ssl/)
- [Configure external DNS for a custom
  domain](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns//)

## Next steps

- [Edit page template](./next-steps/page-template.md)
- [Change default locale](./next-steps/default-locale.md)
- [Add a new component](./next-steps/add-new-component.md)
- [Auto fix with linter](./next-steps/linter.md)

## TOC

- [Wheelroom Boilerplate Index](./README.md)
- [Getting started](./getting-started.md)
- [How it works](./how-it-works.md)
- [Roadmap](./roadmap.md)
