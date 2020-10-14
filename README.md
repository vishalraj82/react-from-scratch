# React from scratch

With utilities such as [create-react-app](https://npmjs.org/package/create-react-app) and [create-react-library](https://npmjs.org/package/create-react-library), setting up a react project skeleton becomes a childs play. But, these utilities hide a lot of nitty gritty under the hood. Of which, a developer must always be aware of. Hence I created this project, a skeleton for react application, from scratch.

### Why this repository

This is a sample project for those who want to start development with react and want to understand how to setup a react project from scratch. This creates a barebones structure from where it can then be taken ahead for development.

### The project setup, from scratch

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
const path  = require("path");
const webpack = require("webpack)'

module.exports = {
    mode: "development",
    plugins: [
        new webpack.ProgressPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};
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
        <script src="dist.js"></script>
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

app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("..", "dist", "index.html"));
});

app.listen(3000, () => console.log("Server started on port 3000"));
```
- `vim package.json`
> Add the following snippet, under __"scripts"__
```javascript
"server:start":  "node src/server.js",
"build": "webpack"
```
- Open a terminal and run command - `npm run build`
- Open a terminal and run command - `npm run server:start`
- Open a browser tab and visit - _http://localhost:3000_


### What have we done

So if you were able to follow the steps to finally get a working page in browser, then you successfully created your react application from scratch. Lets understand about all the steps that we followed.

`mkdir react-from-scratch`
We created a directory which will be root of the application development

`cd react-from-scratch`
Of course, we have to move inside the project directory to proceed with the applcation setup

`mkdir src dist`
We created two directories where the source code and final builds will be stored

`npm install --save react react-dom express`
We add the packages which are absolute essential and are required to be part of the final build

`npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react babel-plugin-syntax-dynamic-import css-loader style-loader webpack webpack-cli`
We add the packages which are required only during the development process.

`vim webpack.config.js`
Next we created a very mininal configuration file for webpack to create final build from source

`vim .babelrc`
Next we created a very mininal configuration file for babel to parse the source code and produce browser understandable code

`vim dist/index.html`
Next we created a very minimal HTML file

`vim src/index.js`
Next we created a very simple react component, which is injected into HTML DOM by ReactDOM

`vim src/server.js`
Next we created a very basic server using express. We instrcuted express to handle static resource (javscript, css, images etc) from the folder `dist`.

`vim package.json`
Next we added some command for starting server and created build from source code into `package.json` file

`npm run build`
Next we used webpack to read the source code from `src` folder, parse it and dump the output in `dist` folder

`npm run server:start`
Next we started the server, which is listening for incoming connections on port 3000

Finally we browsed the page in browser at [`http://localhost:3000`](http://localhost:3000)
