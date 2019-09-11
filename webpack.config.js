var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackPwaManifest = require('webpack-pwa-manifest');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/html/index.html',
    favicon: 'favicon.ico',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './react.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|svg|png|jpe?g)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },{
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        HTMLWebpackPluginConfig,
        new WebpackPwaManifest({
            name: 'Paradigma CrossCheck',
            short_name: 'Paradigma',
            description: 'Try our decentralized application',
            crossorigin: 'anonymous', //can be null, use-credentials or anonymous
            display: 'fullscreen',
            orientation: 'landscape'
        }),
    ],
    devServer: {
        contentBase: './dist',
        host: '0.0.0.0',//your ip address
        port: 8080,
        hot: true,
        historyApiFallback: true,
        disableHostCheck: true,
    },
};