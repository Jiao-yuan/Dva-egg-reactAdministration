import path from "path";
module.exports= {
  alias: {
    "@": path.resolve(__dirname, "./", "src")
},
extraBabelPlugins: [
   ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ],
proxy: {
      "/api": {
        "target": "http://127.0.0.1:7001",
        "changeOrigin": true,
        "pathRewrite": { "^/api" : "" }
      }
    },
  env: {
      development: {
          publicPath: '/'
      },
      production: {
          publicPath: '/public/dist/',
          chunkFilename: '[hash].[id].js'
      }
  },
  html: {
      template: './src/index.ejs'
  },
  define: {
      'process.env': {},
      'process.env.NODE_ENV': process.env.NODE_ENV,
      'process.env.API_ENV': process.env.API_ENV
  }
}