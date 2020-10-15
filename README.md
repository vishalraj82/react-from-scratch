# React from scratch

With utilities such as [create-react-app](https://npmjs.org/package/create-react-app) and [create-react-library](https://npmjs.org/package/create-react-library), setting up a react project skeleton becomes a childs play. But, these utilities hide a lot of nitty gritty under the hood. Of which, a developer must always be aware of. Hence I created this project, a skeleton for react application, from scratch.

#### Why this repository

This is a sample project for those who want to start development with react and want to understand how to setup a react project from scratch. This creates a barebones structure from where it can then be taken ahead for development.

#### The project setup, from scratch

##### To setup the react project, following are the steps


- `mkdir react-from-scratch`
- `cd react-from-scratch`
- `mkdir src dist`
- `npm init`
- `npm install --save react react-dom express`
- `npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react babel-plugin-syntax-dynamic-import css-loader style-loader webpack webpack-cli`
- `vim webpack.config.js`
> Add the following snippet
```javascript
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    plugins: [new webpack.ProgressPlugin()],
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader"}
                ]
            }
        ]
    }
}
```
- `vim .babelrc`
> Add the following snippet
```javascript
{
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```
- `vim dist/index.html`
> Add the following snippet
```javascript
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <div id="root"></div>
        <script src="main.js"></script>
    </body>
</html>
```
- `vim src/index.js`
```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
    return (
        <h1>React from scratch</h1>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));
```
- `vim src/index.css`
> Add the following snippet
```javascript
h1 {
    background-color: #B2BABB;
    color: #76D7C4;
    font-weight: bold;
    text-decoration: underline;
    font-family: "Lucida Console", Courier, monospace;
}
```
- `vim src/server.js`
> Add the following snippet
```javascript
const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html");
    res.status(20).sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

const port = process.env.PORT || 4000;

app.listen(port);
```
- `vim package.json`
> Add the following snippet, under __"scripts"__
```javascript
"server:start":  "node src/server.js",
"build": "webpack"
```
- Open a terminal and run command - `npm run build`
- Open a terminal and run command - `npm run server:start`
- Open a browser tab and visit - _http://localhost:4000_


#### What have we done

So if you were able to follow the steps to finally get a working page in browser, then you successfully created your react application from scratch. Lets understand about all the steps that we followed.

`mkdir react-from-scratch`
We created a directory which will be root of the application development.

`cd react-from-scratch`
Of course, we have to move inside the project directory to proceed with the applcation setup.

`mkdir src dist`
We created two directories where the source code and final builds will be stored.

`npm install --save react react-dom express`
We add the packages which are absolute essential and are required to be part of the final build. Lets understand about the packages.
`react` - React is a JavaScript library for creating user interfaces. The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.
`react-dom` - This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.
`express` - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.

`npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react babel-plugin-syntax-dynamic-import css-loader style-loader webpack webpack-cli`
We add the packages which are required only during the development process. Lets understand about the packages.
`babel-loader` - This package allows transpiling JavaScript files using Babel and webpack.
`@babel/core` - Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. 
`@babel/preset-env` - It is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller.
`@babel/preset-react` - Allows us to use JSX syntax in our code
`babel-plugin-syntax-dynamic-import` - Allow parsing of import()
`css-loader` - The css-loader interprets @import and url() like import/require() and will resolve them.
`style-loader` - Inject CSS into the DOM. It's recommended to combine style-loader with the css-loader. Then add the loader to your webpack config.
`webpack` - webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
`webpack-cli` - webpack CLI provides a flexible set of commands for developers to increase speed when setting up a custom webpack project. As of webpack v4, webpack is not expecting a configuration file, but often developers want to create a more custom webpack configuration based on their use-cases and needs. webpack CLI addresses these needs by providing a set of tools to improve the setup of custom webpack configuration.

`vim webpack.config.js`
Next we created a very mininal configuration file for webpack to create final build from source. Here we are specifying that webpack should start scanning the `src/index.js` file and the follow the chain of imports / requires to get the full source code. Additionally, since we are using modern javascript features and JSX syntax so we instructed webpack on how to treat files with `js` and `css` extensions.

`vim .babelrc`
Next we created a very mininal configuration file for babel to parse the source code and produce browser understandable code. Here  we specify that babel should use preset-env for modern browser features and preset-react for parsing of JSX

`vim dist/index.html`
Next we created a very minimal HTML file. This is our base HTML file which will be served to users browsing our application.

`vim src/index.js`
Next we created a very simple react component, which is injected into HTML DOM by ReactDOM

`vim src/server.js`
Next we created a very basic application server using express. We instrcuted express to handle static resource (javscript, css, images etc) from the folder `dist`. The default route "/" will respond with the HTML file.

`vim package.json`
Next we added some command for starting server and created build from source code into `package.json` file.

`npm run build`
Next we used webpack to read the source code from `src` folder, parse it and dump the output in `dist` folder.

`npm run server:start`
Next we started the server, which is listening for incoming connections on port 4000.

Finally we browsed the page in browser at [`http://localhost:4000`](http://localhost:3000).
