const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    plugins: [new webpack.ProgressPlugin()],
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
                    { loader: "css-loader", options: { sourceMap: true }}]
            }
        ]
    }
}
