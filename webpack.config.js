const Manifest = require('./src/manifest.json');
const ZipPlugin = require('zip-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: '/src/main',
    target: ['web', 'es2020'],
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new ZipPlugin({
            filename: `${Manifest.id}-${Manifest.version}`,
            extension: 'plugin'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/manifest.json' },
                { from: 'src/assets/img/icon.svg', to: 'icon.svg' }
            ],
        })
    ],
    experiments: {
        topLevelAwait: true
    }
};