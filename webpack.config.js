const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

let api = ['/myaccount'];

let proxyObj = {}
api.map(item =>{
    proxyObj[item] = {
        target:'http://webapi.soydai.cn:3499',
        pathRewrite: {[item] : `/apitest${item}`},
        secure: false
    };
})
console.log(process.env.NODE_ENV);
module.exports = {
    entry:{
        index:'./src/index.js' //入口文件,
        // vendors:[  //公共库 生成vendors.js
        //     'react',
        //     'react-dom',
        //     'react-router'
        // ]
    },
    output:{
        path:path.resolve(__dirname,'dist'), //压缩路径
        filename:'[name]-[hash].js', //生成的文件名字
        chunkFilename:'[name].chunk.js' //所有按逻辑生成的chunk文件，按需加载
    },
    devtool:'source-map',
    module:{ //loader 
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                    // options:{
                    //     presets: [['es2015', {option: value}]]
                    // }
                }
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
              }
            // {
            //     test:/\.css$/,
            //     use:[
            //         {loader:'style-loader'},
            //         {
            //             loader: 'css-loader'
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          title:'test',
          template: "./src/template/index.ejs",
          filename: "./index.html",
          inject:false
        })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'main',
        //     filename:'main.js'
        // }),
      ],
    devServer:{
        //代理
        port:9000,
        open: true,
        proxy:proxyObj
    }
}

