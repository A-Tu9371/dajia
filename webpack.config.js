let ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractLESS = new ExtractTextPlugin('css/[name].css');
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
      }

    ]
  },
  plugins: [
    // new ExtractTextPlugin("css/[name].less"),
    // extractCSS,
    extractLESS
  ],
  // externals: {
  // 'react': 'React' ,
  // 'react-dom': 'ReactDOM' ,
  // 'jquery': 'jQuery'
  // }
}
