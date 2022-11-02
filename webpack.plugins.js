const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const webpack = require('webpack');

module.exports = [
    new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
    }),
    new MonacoWebpackPlugin({
        languages: ['html', 'twig', 'javascript', 'yaml', 'json', 'markdown', 'ini', 'css', 'scss']
    })
];