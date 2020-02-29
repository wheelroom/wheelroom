#!/bin/bash

# This script prepares the packages in the repo so that the boilerplate package
# can be started with:
#
# npm run develop
#

REACT_PATH="../../../boilerplate/node_modules/react"

remove_redundant_react_packages() {
    echo "Cleaning symlinks"
    rm -rf packages/@jacco-meijer/admin-core/node_modules/react
    rm -rf packages/@jacco-meijer/admin-panel/node_modules/react
    rm -rf packages/@jacco-meijer/admin-page-preview/node_modules/react
    rm -rf packages/gatsby-theme-wheelroom/node_modules/react
}

link_react_packages_to_boilerplate() {
    echo "Create symlinks for react packages"
    ln -s $REACT_PATH packages/@jacco-meijer/admin-core/node_modules/react
    ln -s $REACT_PATH packages/@jacco-meijer/admin-panel/node_modules/react
    ln -s $REACT_PATH packages/@jacco-meijer/admin-page-preview/node_modules/react
    ln -s $REACT_PATH packages/gatsby-theme-wheelroom/node_modules/react
}

echo "Preparing packages"
lerna list

remove_redundant_react_packages

echo "Bootstrapping all packages (npm install)"
lerna bootstrap

echo "Installing peers for all packages"
lerna run install-peers

if [ -d "packages/boilerplate/node_modules/react" ]; then
    remove_redundant_react_packages
    link_react_packages_to_boilerplate
else
    echo "Warning: could not find packages/boilerplate/node_modules/react"
fi

echo "Restoring sym links to npm packages"
lerna link

echo "Running typescript compiler for all packages"
lerna run build:compile
