const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "development";
// Temporary workaround for 'browserslist' bug that is being patched in the near future
const target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

module.exports = {
    mode: mode,

    plugins: [new MiniCssExtractPlugin()],

    // entry: './src/JS/app.js',
    // output: {
    //     filename: 'app.js',
    //     path: path.resolve(__dirname, 'dist'),
    //     // publicPath: 'dist/'
    // },

    module: {
        rules:[ {
            test: /\.(s[ac]|c)ss$/i,
            use: [
              // could replace the next line with "style-loader" here for inline css
              MiniCssExtractPlugin.loader,
              "css-loader",
              "postcss-loader",
              // according to the docs, sass-loader should be at the bottom, which
              // loads it first to avoid prefixes in your sourcemaps and other issues.
              "sass-loader",
            ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  // without additional settings, this will reference .babelrc
                  loader: "babel-loader",
                },
              },
        ]
    },
   
    target: target,

    devtool: 'source-map',

    devServer: {
        contentBase: './dist'
    }
}