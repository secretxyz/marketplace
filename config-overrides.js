/**
 * Project's customized Webpack Configuration Extension
 * ----------------------------------------------------
 *
 * this file is heavily inspired by `react-app-rewired` mechanism.
 *
 * it simply gives you the chance to hook into the default Webpack
 * configuration as it is provided by `create-react-app`, and to
 * change it so to match your project's needs.
 *
 * If you want to check out the default values look into:
 * `./node_modules/marcopeg-react-scripts/config/webpack.config.${env}.js`
 *
 */

const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const rtlcssLoader = path.resolve(__dirname, 'rtlcss-loader.js');

module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function (webpackConfig, env) {

        // Fix for flot resize
        webpackConfig.module.rules[1].oneOf.splice(0, 0, {
            test: /jquery\.flot\.resize\.js$/,
            use: ['imports-loader?this=>window']
        });

        // Support for use custom .eslintrc
        webpackConfig.module.rules.some(rule => {
            if (Array.isArray(rule.use)) {
                const eslintUse = rule.use.find(item =>
                    Object.keys(item.options).find(key => key === 'useEslintrc')
                );
                eslintOptions = eslintUse && eslintUse.options;
                if (eslintOptions) {
                    eslintOptions.useEslintrc = true;
                    return true;
                }
            }
        });

        webpackConfig.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: "javascript/auto"
        });

        // Set globals for external plugins
        webpackConfig.plugins = (webpackConfig.plugins || []).concat([
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'window.moment': 'moment',
                moment: 'moment',
                process: 'process/browser',
                Raphael: 'raphael' // required by morris.js
            })
        ]);

        // Allow cofiguration of router base href
        webpackConfig.plugins = (webpackConfig.plugins || []).concat([
            new webpack.DefinePlugin({
                PUBLIC_URL: JSON.stringify(process.env.PUBLIC_URL),
            })
        ]);

        // Enable BundleAnalyzerPlugin
        // webpackConfig.plugins = (webpackConfig.plugins || []).concat([
        //     new BundleAnalyzerPlugin()
        // ]);

        // here you can extend your webpackConfig at will
        return webpackConfig;
    }
}

