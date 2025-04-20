const path = require('path');
const nodeExternals = require('webpack-node-externals');
//const WebpackShellPlugin = require('webpack-shell-plugin');


const {
  NODE_ENV = 'production',
} = process.env;
module.exports = {
  entry: './src/index.ts',
  mode: NODE_ENV,
  externals: [nodeExternals],
  watch: NODE_ENV === 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ]
      }
    ]
  },
  target: 'node',
    // plugins: [
    //   new WebpackShellPlugin({onBuildStart:['echo "Webpack Start"'], onBuildEnd: ['npm run run:dev']})
    // ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  }
}