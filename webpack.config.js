const path = require('path'); 
const HtmlWebPackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require('webpack');

module.exports = { 
    mode: 'development', 
    entry: './src/index.js', 
    output: { 
        filename: 'main.js', path: path.resolve(__dirname, 'dist')
     },
    module: { 
        rules: [ 
            { 
                test: /\.js$/, exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader', 
                } 
            }, 
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ] 
    },
    resolve: {
        alias: {
          "vue$": "vue/dist/vue.esm.js"
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        // host: 'lwww.brandi.co.kr',
        // port: '8080'
    },
    
    plugins: [
        new HtmlWebPackPlugin({ 
            template: './src/index.html', 
            filename: './index.html' 
        }),
        new VueLoaderPlugin(),
    ] 
};
