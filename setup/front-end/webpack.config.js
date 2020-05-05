const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: false,
    mode: 'development',
    entry: './src/main.js',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },



    devtool: 'cheap-module-eval-source-map',

    module: {
        rules: [
            {

                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [

                    {
                        loader: 'file-loader',
                        // bug to load image from src path
                        // since file-loader@5.0.2 and html-loader compatibility
                        // https://github.com/webpack/webpack/issues/10053
                        // we must set esModule to false
                        options: {
                           //outputPath: 'images/'
                          },
                    }
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                  attributes: {
                    list: [
                      {
                        tag: 'img',
                        attribute: 'src',
                        type: 'src',
                      },
                    ]
                }
            }    
            }
           
        ]
    }        // ...
}


