#!/bin/bash

#
# This script prepares the packages in the repo so that the boilerplate package
# can be started with:
#
# npm run develop
#
# Note: you might want to run 'lerna clean' before using the script
#

# Make sure base folders for npm modules that are linked are present in these packages
prepare_module_folder() {

    echo "Preparing folder: $1"
    if [ -z "$1" ]; then
        echo "No argument supplied"
        return
    fi
    mkdir -p packages/admin-core/node_modules/$1
    mkdir -p packages/admin-events/node_modules/$1
    mkdir -p packages/admin-panel/node_modules/$1
    mkdir -p packages/admin-page-preview/node_modules/$1
    mkdir -p packages/admin-theme-switcher/node_modules/$1
    mkdir -p packages/core/node_modules/$1
    mkdir -p packages/wheel-blog/node_modules/$1
    mkdir -p packages/wheel-navigation/node_modules/$1
    mkdir -p packages/wheel-table/node_modules/$1
    mkdir -p packages/wheel-text/node_modules/$1
    mkdir -p packages/wheel-topic/node_modules/$1
}

# Remove npm module folders that will be linked for these packages 
remove_module_folder() {

    echo "Removing folder: $1"
    if [ -z "$1" ]; then
        echo "No argument supplied"
        return
    fi

    rm -rf packages/admin-core/node_modules/$1
    rm -rf packages/admin-events/node_modules/$1
    rm -rf packages/admin-panel/node_modules/$1
    rm -rf packages/admin-page-preview/node_modules/$1
    rm -rf packages/admin-theme-switcher/node_modules/$1
    rm -rf packages/core/node_modules/$1
    rm -rf packages/wheel-blog/node_modules/$1
    rm -rf packages/wheel-navigation/node_modules/$1
    rm -rf packages/wheel-table/node_modules/$1
    rm -rf packages/wheel-text/node_modules/$1
    rm -rf packages/wheel-topic/node_modules/$1

}

# Symlink npm packages to use npm module from boilerplate for these packages
link_module_folder() {

    if [ -d "packages/boilerplate/node_modules/$1" ]; then

        echo "Linking folder: $1"
        if [ -z "$1" ]; then
            echo "No argument supplied"
            return
        fi

        ln -s $2 packages/admin-core/node_modules/$1
        ln -s $2 packages/admin-events/node_modules/$1
        ln -s $2 packages/admin-panel/node_modules/$1
        ln -s $2 packages/admin-page-preview/node_modules/$1
        ln -s $2 packages/admin-theme-switcher/node_modules/$1
        ln -s $2 packages/core/node_modules/$1
        ln -s $2 packages/wheel-blog/node_modules/$1
        ln -s $2 packages/wheel-navigation/node_modules/$1
        ln -s $2 packages/wheel-table/node_modules/$1
        ln -s $2 packages/wheel-text/node_modules/$1
        ln -s $2 packages/wheel-topic/node_modules/$1

    else
        echo "Warning: could not find packages/boilerplate/node_modules/$1"
    fi

}

prepare_all_module_folders() {
    prepare_module_folder @types
    prepare_module_folder @emotion
    prepare_module_folder @wheelroom
    prepare_module_folder @reach
}

remove_all_module_folders() {
    remove_module_folder @types/react
    remove_module_folder @emotion/core
    remove_module_folder @wheelroom/admin-core
    remove_module_folder @reach/router
    remove_module_folder react
    remove_module_folder react-dom
    remove_module_folder query-string
}

link_all_module_folders() {
    link_module_folder @types/react ../../../boilerplate/node_modules/@types/react
    link_module_folder @emotion/core ../../../boilerplate/node_modules/@emotion/core
    link_module_folder @wheelroom/admin-core ../../../boilerplate/node_modules/@wheelroom/admin-core
    link_module_folder @reach/router ../../../boilerplate/node_modules/@reach/router

    link_module_folder react ../../boilerplate/node_modules/react
    link_module_folder react-dom ../../boilerplate/node_modules/react-dom
    link_module_folder query-string ../../boilerplate/node_modules/query-string
}

echo "Preparing packages"
lerna list

remove_all_module_folders

echo "Bootstrapping all packages (npm install)"
lerna bootstrap

remove_all_module_folders
prepare_all_module_folders
link_all_module_folders

echo "Restoring sym links to npm packages"
lerna link

echo "Running build for all packages"
lerna run build
