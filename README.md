# React from scratch

With utilities such as [create-react-app](https://npmjs.org/package/create-react-app) and [create-react-library](https://npmjs.org/package/create-react-library), setting up a react project skeleton becomes a childs play.
But, these utilities hide a lot of nitty gritty under the hood. Of which, a developer must always be aware of.

#### Why this repository

This is a sample project for those who want to start with react and want to understand how to setup a react prject from scratch.

#### The project setup, from scratch

To setup the react project, following are the steps

- Create a directory with the name of the project,  _mkdir react-from-scratch_
- Move inside the directory - cd _react-from-scratch_
- Initialize the project with npm - _npm init_
This will ask few questions, which already have sensible default values. If you want to skip the questions and directly use the default values, then use the command _npm init --yes_
- Now we need [react](https://npmjs.org/package/react) and [react-dom](https://npmjs.org/package/react-dom) - _npm install --save react react-dom_
- Next we need some development dependencies which will help us convert our react code into browser understandable code - _npm install --save-dev [@babel/core](https://npmjs.org/package/@babel/core) [@babel/preset-env](https://npmjs.org/package/@babel/preset-env) [@babel/preset-react](https://npmjs.org/package/@babel/preset-react) [babel-loader](https://npmjs.org/package/babel-loader) [webpack](https://npmjs.org/package/webpack) [webpack-cli](https://npmjs.org/package/webpack-cli)_
Lets understand in brief about the packages that we just installed.
[@babel/core](https://babeljs.io/docs/en/next/babel-core.html) is basically a transpiler. It takes the modern ES5/6/7 style javascript code and coverts it into simple broswer understandable code.
[@babel/preset-env](https://babeljs.io/docs/en/next/babel-preset-env) is a smart preset which allows us to use the latest javascript features without having to worry about cross-browser compability and polyfills.
[@babel/preset-react](https://babeljs.io/docs/en/next/babel-preset-react) allows us to use JSX style code for the components.
[webpack](https://npmjs.org/package/webpack) is module bundler. In simple terms, it can combine multiple javascript files to produce one or more output files. There are numerous plugins available which greatly enhance the functionality of webpack.
[webpack-cli](https://npmjs.org/package/webpack-cli) provides set of tools to generate custom webpack configuration file.
- Create the configuration file to be used by webpack - _./node_modules/bin/webpack-cli init_
This will ask certain set of questions and based on the choices will create the file _webpack.config.js_ and update the file _package.json_. Additonally it also create directory _src_ and puts a sample code in _src/index.js_
- Test if the webpack is working fine the generated _webpack.config.js_ - _./node_modules/.bin/webpack_
- 