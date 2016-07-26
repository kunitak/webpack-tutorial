module.exports = {
  entry: {
    index: './client/js/index.js'
  },
  output: {
    path: __dirname + '/client/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
      	test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: "babel",
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};