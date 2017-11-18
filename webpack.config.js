const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/app.js"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
      new CleanWebpackPlugin(["dist"]),
      new HtmlWebpackPlugin({
        template: "src/index.html"
      })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
