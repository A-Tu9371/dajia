let ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractLESS = new ExtractTextPlugin('css/[name].css');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: {
    'main': './main.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'js/[name].js',
    publicPath: 'https://a-tu9371.github.io/dajia' //上线的地址
  },
  module: {
    loaders: [{
        test: /\.(less|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css!less')
      },
      // {
      // 	test: /\.css$/,
      // 	loader: 'style!css!autoprefixer?{browsers:["last 2 version", "> 1%"]}',
      // },
      // {
      // 	test: /\.less$/,
      //             use: [{
      //                 loader: "style-loader" // creates style nodes from JS strings
      //             }, {
      //                 loader: "css-loader" // translates CSS into CommonJS
      //             }, {
      //                 loader: "less-loader" // compiles Less to CSS
      //             }]
      // },
      // {
      // 	test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
      // 	loader: 'file?name=./fonts/[name].[ext]',
      // },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'babel?presets[]=react,presets[]=es2015,presets[]=stage-1'
        ]
      }, {
        test: /\.json$/,
        loader: "json"
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: 'https://a-tu9371.github.io/dajia'
          }
        }]
      }

    ]
  },
  plugins: [
    // new ExtractTextPlugin("css/[name].less"),
    // extractCSS,
    extractLESS,
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      // inject: 'head' // 打包后script标签放在了head标签里，false为不插入打包后文件
      minify: { //压缩配置
        removeComments: true, //删除注释
        collapseWhitespace: true //删除空行
      }
    })
  ],
  // externals: {
  // 'react': 'React' ,
  // 'react-dom': 'ReactDOM' ,
  // 'jquery': 'jQuery'
  // }
}
