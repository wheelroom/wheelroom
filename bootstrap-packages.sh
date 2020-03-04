#!/bin/bash

#
# This script prepares the packages in the repo so that the boilerplate package
# can be started with:
#
# npm run develop
#
# Note: you might want to run 'lerna clean' before using the script
#

remove_redundant_react_packages() {
    echo "Cleaning symlinks for: $1"
    if [ -z "$1" ]; then
        echo "No argument supplied"
        return
    fi
    rm -rf packages/@jacco-meijer/admin-core/node_modules/$1
    rm -rf packages/@jacco-meijer/admin-panel/node_modules/$1
    rm -rf packages/@jacco-meijer/admin-page-preview/node_modules/$1
    rm -rf packages/@jacco-meijer/admin-theme-switcher/node_modules/$1
    rm -rf packages/gatsby-theme-wheelroom/node_modules/$1
}

link_react_packages_to_boilerplate() {
    echo "Create symlinks for: $1"
    if [ -z "$1" ]; then
        echo "No argument supplied"
        return
    fi

    REACT_PATH="../../../boilerplate/node_modules/$1"

    ln -s $REACT_PATH packages/@jacco-meijer/admin-core/node_modules/$1
    ln -s $REACT_PATH packages/@jacco-meijer/admin-panel/node_modules/$1
    ln -s $REACT_PATH packages/@jacco-meijer/admin-page-preview/node_modules/$1
    ln -s $REACT_PATH packages/@jacco-meijer/admin-theme-switcher/node_modules/$1
    ln -s $REACT_PATH packages/gatsby-theme-wheelroom/node_modules/$1
}

echo "Preparing packages"
lerna list

remove_redundant_react_packages react
remove_redundant_react_packages @types/react

echo "Bootstrapping all packages (npm install)"
lerna bootstrap

echo "Installing peers for all packages"
lerna run install-peers

if [ -d "packages/boilerplate/node_modules/react" ]; then
    remove_redundant_react_packages react
    link_react_packages_to_boilerplate react

    remove_redundant_react_packages @types/react
    link_react_packages_to_boilerplate @types/react

else
    echo "Warning: could not find packages/boilerplate/node_modules/react"
fi

echo "Restoring sym links to npm packages"
lerna link

echo "Running typescript compiler for all packages"
lerna run build:compile
