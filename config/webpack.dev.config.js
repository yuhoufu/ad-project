const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack4-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');

const smp = new SpeedMeasurePlugin();

const PORT = 9000;
const webpackConfigDev = {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 热更新插件
        new HtmlWebpackPlugin({
            inject: 'body',
            title: 'React APP',
            filename: 'index.html',
            template: path.join(__dirname, '../src/index.html'),
        }),
        new OpenBrowserPlugin({
            url: `http://localhost:${PORT}/#/`
        })
    ],
    devtool: 'eval-source-map'
};

// module.exports = smp.wrap(merge(webpackConfigBase, webpackConfigDev));
module.exports = merge(webpackConfigBase, webpackConfigDev);
