const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      assert: require.resolve('assert'),
      crypto: require.resolve('crypto-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify'),
      stream: require.resolve('stream-browserify'),
      url: require.resolve('url'),
      ws: require.resolve('xrpl/dist/npm/client/WSWrapper'),
      path: require.resolve('path-browserify')
    }
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build/main')
  }
};
