[![Build Status](https://travis-ci.com/spewil/bonsai-rx-docs.svg?branch=main)](https://travis-ci.com/spewil/bonsai-rx-docs)

# bonsai-rx-docs

(Homepage)[https://www.spewil.com/bonsai-rx-docs/]

**unofficial documentation for [bonsai-rx](https://github.com/bonsai-rx/bonsai)**

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator. Check the [documentation tutorial pages](https://v2.docusaurus.io/docs/docs-introduction) if you are a new developer.

If you'd like to contribute docs but aren't interested in developing the documentation site, just use the **edit** buttons and submit pull requests, or submit an issue to request a new page.

# Contributing

See instructions [here](https://www.spewil.com/bonsai-rx-docs/docs/meta/writing_docs/) for how to contribute.

# How to build the site locally

Make sure you have the `yarn` Node package by installing with the package manager of your choice (brew, chocolatey, etc).

## Installation

If it's your first time cloning and developing in the repo, install the requisite Node packages.

```console
yarn install
```

## Local Development for Testing

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service. Once your changes build, submit a pull request for your changes to be reviewed.

## Deployment

Once you have the site building locally and all looks good, you *can* manually deploy the site to GitHub Pages by running `yarn deploy` from the `main` branch. This will build the site and move the relevant files to the `gh-pages` branch.

`Note`: this is not necessary with Travis CI as this automatically triggers deployment on `push` and PR `merge` to the `main` branch. All you need to do is test your build locally and then `commit` and `push` or submit a pull request for review and `merge`.

# TODO

- move to bonsai repo
- test versioning for old/new bonsai versions
- add Install link which reflects newest version
- get search working!
- fix all the general config links
- tweak styling everywhere
- document style guide for writing new pages
- edit `Fundamentals` for style
- figure out underscore-ignore for markdown files
- add a check for `sidebar.js` based on `docs` files

# Yarn Resources

[Preparing the Docusaurus site.](https://docusaurus.io/docs/en/site-preparation#key-files)

[Example Node `gitignore`.](https://github.com/github/gitignore/blob/master/Node.gitignore)


[Using Yarn with version control.](https://classic.yarnpkg.com/en/docs/version-control)
