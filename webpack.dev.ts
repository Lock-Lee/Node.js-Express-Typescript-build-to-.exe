import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';
import common from './webpack.common';

const prodConfig: Configuration = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true,
    plugins: [
        new WebpackShellPluginNext({
            onBuildEnd: {
                scripts: ["nodemon --watch 'dist/**/*.js' --exec 'node dist/index.js'"],
                blocking: false,
                parallel: true
            }
        })
    ]
});

export default prodConfig;
