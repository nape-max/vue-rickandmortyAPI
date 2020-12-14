const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerPort: 4000,
            })
        ]
    }
}