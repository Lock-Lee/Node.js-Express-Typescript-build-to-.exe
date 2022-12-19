import TerserPlugin from 'terser-webpack-plugin';
import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';
import common from './webpack.common';

const prodConfig: Configuration = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    },
    plugins: [
        new WebpackShellPluginNext({
            onBuildEnd: {
                scripts: ['pkg dist/index.js --output dist/app'],
                blocking: true,
                parallel: false
            }
        })
    ]
});

export default prodConfig;
