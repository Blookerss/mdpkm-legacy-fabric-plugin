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
    plugins: [new CopyPlugin({
        patterns: [
            { from: 'src/manifest.json' },
            { from: 'src/assets/img/icon.svg', to: 'icon.svg' }
        ],
    })],
    experiments: {
        topLevelAwait: true
    }
};