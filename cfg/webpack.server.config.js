const path = require('path')
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV;
// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const IS_DEV = NODE_ENV === 'development';
// const IS_PROD = NODE_ENV === 'production';

module.exports = {
    target: "node", // исключительно для node js
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] // расширения всех файлах которые вебпак должен резолвить
    },
    externals: [nodeExternals()],
    module: {// for loaders
        rules: [{
            test: /\.[tj]sx?$/, // все файлы с расш tsx/jsx
            use: ['ts-loader'] // будут обрабатываться с помощью ts-loader
        }]
    },
    optimization: {
        minimize: false,
    }
}