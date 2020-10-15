#! /usr/bin/env node
const path = require("path");
const fs = require("fs");

const pkgJsonKey = "__PACKAGE_JSON_SCRIPTS__";

const packageJsonScriptsReplacement = {
    [pkgJsonKey]: [
        '"server:start": "node src/server.js"',
        '"build": "webpack"'
    ]
};

const replacements = {
    __WEBPACK_CONFIG_JS__: 'webpack.config.js',
    // __BABELRC__: '.babelrc',
    // __DIST_INDEX_HTML__: 'dist/index.html',
    // __SRC_INDEX_JS__: 'src/index.js',
    // __SRC_INDEX_CSS__: 'src/index.css',
    // __SRC_SERVER_JS__: 'src/server.js'
};

const pathToReadmeMd = path.join(__dirname, "README.md");
const pathToReadmeMdTpl = path.join(__dirname, ".README.md.tpl");

let readme = fs.readFileSync(pathToReadmeMdTpl, "utf8");

readme = Object.keys(replacements).reduce((readmeMd, replacement) => {
    const fileContent = fs.readFileSync(path.resolve(__dirname, replacements[replacement]), "utf8");
    return readmeMd.replace(replacement, fileContent);
}, readme);

readme = readme.replace(pkgJsonKey, packageJsonScriptsReplacement[pkgJsonKey]);

fs.writeFileSync(pathToReadmeMd, readme, { encoding: "utf8" });
