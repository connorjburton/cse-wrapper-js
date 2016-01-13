module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist/',
		filename: 'cse-wrapper.js'
	},
	module: {
	  loaders: [
	    {
	      test: /\.js?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel' // 'babel-loader' is also a legal name to reference
	    }
	  ]
	}
}