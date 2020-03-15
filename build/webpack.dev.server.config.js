const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackdevconfig = require('./webpack.dev.config');
module.exports = merge(webpackdevconfig, {
    devServer: {
        contentBase: './status',
        host: 'localhost',
        openPage: 'frontend',
        hot: true,
        historyApiFallback: true, // 解决f5刷新界面报404问题
        open: true,
        proxy: {
            "/frontend-api": {
                target: "http://localhost:8079",
                secure: false,
                changeOrigin: true,
                // pathRewrite: {"^/api" : ""}
            }
        }
    }
});