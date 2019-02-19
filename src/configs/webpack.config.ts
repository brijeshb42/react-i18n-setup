import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const DEV_PORT = 8081;

const config: webpack.Configuration = {
  mode: 'development',
  entry: {
    main: './src/client/index.ts',
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js',
    publicPath: `//localhost:${DEV_PORT}/dist/`,
  },
  devServer: {
    port: DEV_PORT,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

export default config;
