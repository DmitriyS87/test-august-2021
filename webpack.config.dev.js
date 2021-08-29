require('dotenv').config();

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== 'production';


module.exports = {
    entry: path.join(__dirname, "src", "index.jsx"),
    output: { path: path.join(__dirname, "build"), clean: true },
    mode: isDevelopment ? "development" : "production",
    target: "web",
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        extensions: [".js", ".json", ".jsx"],
    },
    devServer: {
        hot: true,
        https: false,
        compress: true,
        port: 9000,
        noInfo: true,
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [
                                require.resolve('react-refresh/babel'),
                            ]
                        },
                    },
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ],
    stats: "detailed"
};