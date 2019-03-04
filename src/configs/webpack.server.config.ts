import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

import { resolve, backendRules } from './common';

const config: webpack.Configuration = {
  mode: 'development',
  target: 'node',
  entry: {
    server: './src/server/index.ts',
  },
  module: {
    rules: backendRules,
  },
  resolve,
  externals: [
    nodeExternals({}),
  ],
  output: {
    path: path.resolve(process.cwd(), 'server'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  node: {
    __dirname: true,
    __filename: true,
  },
};

export default config;
