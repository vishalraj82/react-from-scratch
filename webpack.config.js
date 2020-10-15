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
                    { loader: "css-loader",}
                ]
            }
        ]
    }
}
