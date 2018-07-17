const path = require("path");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: [
		"babel-polyfill",
		"./test/build/views/index.jsx"
	],
	output: {
		path: path.join(__dirname, "dist"),
		filename: "main.js"
	},
	resolve: {
		alias: {
			react: path.resolve(__dirname, "node_modules/react")
		},
		extensions: [".js", ".jsx", ".json"]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules\/(?!(@randy\.tarampi\/\w+)\/)/,
				loader: "babel-loader",
				options: {
					forceEnv: "client"
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					filename: "vendor.js",
					chunks: "all"
				}
			}
		}
	}
};
