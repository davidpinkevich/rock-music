// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");


const config = {
    entry: {
      index: './src/js/index.js', // какие js файлы будут в итоговом бандле, можно перечислить нужное кол-во
      quiz: './src/js/quiz.js',
      result: './src/js/result.js',
    }, 
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/html/index.html',
          chunks: ['index'], // какие скрипты подключать к странице
          inject: 'body', // вставить скрипт в конец тега body
          // minify: false,  отменить минификацию
        }),
        
        new HtmlWebpackPlugin({
          filename: 'quiz.html',
          template: './src/html/quiz.html',
          chunks: ['quiz'], // какие скрипты подключать к странице
          inject: 'body', // вставить скрипт в конец тега body
          // minify: false,  отменить минификацию
        }),

        new HtmlWebpackPlugin({
          filename: 'result.html',
          template: './src/html/result.html',
          chunks: ['result'], // какие скрипты подключать к странице
          inject: 'body', // вставить скрипт в конец тега body
          // minify: false,  отменить минификацию
        }),

        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, 'src/img/guitar.ico'),
              to: path.resolve(__dirname, 'dist')
            }
          ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
              test: /\.(mp3|ogg)$/,
              type: "asset",
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
