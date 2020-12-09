const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackbaseconfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 独立打包css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css
const ProgressBarPlugin = require('progress-bar-webpack-plugin');// 显示进程的完成进度
const chalk = require('chalk');// 设置进程进度字体颜色
const WebpackCdnPlugin = require('webpack-cdn-plugin');// 打包cdn
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清空dist文件夹
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');// 以树图的方式展示打包后的文件

module.exports = merge(webpackbaseconfig, {
    mode: 'production',
    devtool: 'none',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                        }
                    },
                    // { loader: 'postcss-loader' }
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                // postcss的插件
                                require('postcss-preset-env')(),
                            ]
                        }
                    },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                        }
                    },
                    // { loader: 'postcss-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                // postcss的插件
                                require('postcss-preset-env')(),
                            ]
                        }
                    },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: 'images/[name].[ext]?[hash:7]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wmv|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: 'media/[name].[ext]?[hash:7]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: 'font/[name].[ext]?[hash:7]'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/[name]-[hash].css',
            chunkFilename: 'css/[id]-[hash].css'
        }),
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                ENV: '"production"'
            }
        }),
        new ProgressBarPlugin({
            format: chalk.green('Progressing') + '[:bar]' + chalk.green(':percent') + '(:elapsed seconds)',
            clear: false
        }),
        // 公用库cdn加载
        new WebpackCdnPlugin({
            modules: {
                'react': [
                    { name: 'react', var: 'React', path: `umd/react.production.min.js` },
                    { name: 'react-dom', var: 'ReactDOM', path: `umd/react-dom.production.min.js` },
                    // { name: 'react-router-dom', var: 'ReactRouterDOM', path: `react-router-dom.min.js` },
                    { name: 'react-router', var: 'ReactRouter', path: `react-router.min.js` },
                    { name: 'redux', var: 'Redux', path: `redux.min.js` },
                    { name: 'react-redux', var: 'ReactRedux', path: `react-redux.min.js` },
                    { name: 'redux-thunk', var: 'ReduxThunk', path: `redux-thunk.min.js` },
                    // { name: 'antd', var: 'antd', path: `antd.min.js`, style: `antd.min.css` },
                    { name: 'axios', var: 'axios', path: `axios.min.js` },
                    { cssOnly: true, name: 'minireset.css', style: `minireset.min.css` },
                ],
            },
            prodUrl: 'https://cdn.bootcss.com/:name/:version/:path',
            publicPath: '/node_modules'
        }),
        // new BundleAnalyzerPlugin()
    ]
});
