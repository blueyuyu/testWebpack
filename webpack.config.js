const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 打包入口文件，全部使用绝对路径表示
    entry: () => path.resolve(__dirname, 'src/main.js'),
    resolve: {  // 配置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    // 打包出口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js', // 输出的文件名
        clean: true  // 先清空，再输出
    },
    // 下面是自动生成html-loader
    plugins: [new HtmlWebpackPlugin({
        //以此为模板生成新的html文件
        template: path.resolve(__dirname, 'public/index.html'),
    })],
    // module是与加载器相关的，主要用来打包css样式代码
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            //打包图片资源，
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset', // 根据图片的大小(8kb),< 8kb就打包成base64,大于就复制输出到目录下
                generator: {
                    filename: 'assets/[hash][ext]'
                }
            },
            // 使用babel命令把es6代码降级，以兼容低级的浏览器
            // 推测webpack 5之后的版本，用babel进行降级就不会再把箭头函数转化了，因为现在的浏览器已经全部支持
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'inline-source-map'
};