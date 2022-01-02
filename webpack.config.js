const clientConfig = require('./cfg/webpack.client.config')
const serverConfig = require('./cfg/webpack.server.config')

module.exports = [
    clientConfig,
    serverConfig
];

//webpack-node-externals . исключить лишнее из итогового бандла