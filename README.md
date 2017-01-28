# An Angular 1.x and ES6 bookmark manager

[![Greenkeeper badge](https://badges.greenkeeper.io/sethbergman/es6-angular-webpack.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/sethbergman/angular2-webpack-starter.svg?branch=master)](https://travis-ci.org/sethbergman/angular2-webpack-starter)

This is a simple bookmark manager built with AngularJS, ES6 and Webpack.
## Getting Started
You will need [node.js](https://nodejs.org/en/) and npm (which ships with node).

## Installing
```sh
git clone https://github.com/sethbergman/es6-angular-webpack.git && cd es6-angular-webpack
npm i
npm start
```

## @TODO - Generating Components
There is a convenient Gulp task called `component` to generate components. To do so, simply run `gulp component --name componentName`.

The parameter following the `--name` flag is the name of the component to be created. Ensure that it is unique or it will overwrite the preexisting identically-named component.

The component will be created, by default, inside `app/components`. To change this, apply the `--parent` flag, followed by a path relative to `app/components/`.

Because the argument to `--name` applies to the folder name **and** the actual component name, make sure to [camelCase](https://www.quora.com/What-is-the-difference-between-Pascal-Case-and-Camel-Case) the component names.
