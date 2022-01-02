const path = require('path')

const NODE_ENV = process.env.NODE_ENV;
// const HTMLWebpackPlugin = require('html-webpack-plugin');
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool() {
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;

}

module.exports = {
    // по умолчанию вебпак работает с файлами js и  json
    // чтобы научить его для работы с другими файлами надо
    // правила
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] // расширения всех файлах которые вебпак должен резолвить
        // массив extensions переписывает правила по умолчанию, поэтому js json тоже надо указать
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/client/index.jsx'),// путь до файла, с которого начинается работа
    output: { // куда складывать все файлы, которые странспелирует и тд.
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'index.js'
    },
    module: {// for loaders
        rules: [{
            test: /\.[tj]sx?$/, // все файлы с расш tsx/jsx
            use: ['ts-loader'] // будут обрабатываться с помощью ts-loader
        }]
    },
    // plugins: [
    //     new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
    // ],
    // devServer: {
    //     port: 3000,
    //     open: true, // авто открываться страница
    //     hot: IS_DEV, // reload страницу при сохранении

    // },
    devtool: setupDevtool(),
}

// loader спец пакеты кот преобраз файлы одного типа в файлы другого типа


// в client лежит который будет отображаться на клиент
// в server серверный код
// в shared и клиенский и сервесный код