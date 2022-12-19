import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';

const TSCONFIG_PATH = path.join(__dirname, './tsconfig.json');

const common: webpack.Configuration = {
    target: 'node',
    externals: [nodeExternals()],
    entry: './src/index.ts',
    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [__filename]
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        clean: true
    },
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({
                configFile: TSCONFIG_PATH
            })
        ],
        extensions: ['.ts', '.js'],
        alias: {
            src: path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-typescript']
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin({
            optimizationBailout: true
        }),
        new WebpackShellPluginNext({
            onBeforeBuild: {
                scripts: ['rimraf dist && npm run format'],
                blocking: true,
                parallel: false
            }
        })
    ]
};

export default common;
