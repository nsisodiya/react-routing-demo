module.exports = {
	entry: "./client/index.jsx",
	output: {
		path: "./client/dist",
		filename: "app.js"
	},
	module: {
		loaders: [
			{ test: /.jsx?$/, loader: "babel-loader" }
		]
	}
};