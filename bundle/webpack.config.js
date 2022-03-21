const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const rulesJS = {
    test: /\.js$/,
    loader: "babel-loader",
    options: {
        presets: ["@babel/preset-env"]
    }
}

const rulesCSS = {
    test: /\.s[ac]ss$/i,
    use: [
        MiniCssExtractPlugin.loader, 
        "css-loader",
        "sass-loader"
    ],
}

const rules = [rulesJS, rulesCSS];

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        output: {
            filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.js',  
            clean: true,
        },

        mode: 'development',
    
        devServer: {
            static: {
                directory: path.resolve(__dirname, "dist"),
                staticOptions: {},
                publicPath: "/",
                serveIndex: true,
                watch: true,
            }
        },

        plugins: [
            new HtmlWebpackPlugin(
                { 
                    templateParameters: { page: 'home' },
                    template: './src/index.html'
                }
            ),
            new MiniCssExtractPlugin({filename: isProduction ? 'bundle.[contenthash].css': 'bundle.css'})
        ],
    
        module: { rules }
    }
};