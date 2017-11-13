let ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractLESS = new ExtractTextPlugin('./public/css/[name].css');
module.exports = {
      entry: {
				'main':'./main.js',
				// 'news':'./js/news.js',
				// 'news_content':'./js/newscontent.js'
			},
      output: {
          path: __dirname, // 输出文件的保存路径
          filename: './public/js/[name].js' // 输出文件的名称
      },
  module: {
      loaders: [
	      {
	          test : /\.(less|css)$/,
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
		}
		,
		{
		    test: /\.json$/,
		    loader: "json"
		}

	]
	}
	,
	plugins: [
	// new ExtractTextPlugin("./public/css/[name].css")
	// extractCSS,
	extractLESS
	]
	,
	// externals: {
	// 'react': 'React' ,
	// 'react-dom': 'ReactDOM' ,
	// 'jquery': 'jQuery' 
	// }
}
  
