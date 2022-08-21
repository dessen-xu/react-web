const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // webpack入口文件，webpack从这里开始构建依赖图
    entry: {
        main: './src/index.tsx',
    },
    // 输出文件./dist/bundle.js
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // webpack只能处理js和json文件。加载别的文件需要loader处理，module就是配置loader的地方。
    module: {
        rules: [
            {
                // /\.js$/ 改成 /\.tsx?$/
                test: /\.j|tsx$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // 增加扩展选项，让webpack可以识别.ts/tsx文件
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    // webpack加载html文件需要html-webpack-plugin插件处理。
    // 启动webpack-dev-server的时候，会把打包好的js文件、css文件、html文件放在内存里。
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        proxy: {
            '/api': 'http://localhost:8080',
        },
        client: {
            progress: true
        }
    }
}