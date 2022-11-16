const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   // setupMiddlewares: require('./mock/index.js')
  //   // 前端启动端口号
  //   port: 8080,
  //   // If you want to turn on the proxy, please remove the mockjs / src / main.jsL11
  //   proxy: {
  //     //这里监听一个别名，下面替换掉,随便定义一个代理转发开头
  //     '/api': {
  //       target: 'https://4a8179z637.uicp.fun',//后端接口域名,凡是以api开头的都请求这个域名
  //       pathRewrite: {
  //         '^/api': '',//替换成
  //       },
  //       ws: false,//如果代理websocket则需要配置这个参数
  //       secure: true,//如果是https接口，需要配置这个参数
  //       changeOrigin: true,//是否跨域
  //     },
  //   },
  //   hot: true,//热加载
  //   open: true,
  // },
  lintOnSave: false,//关闭语法检查
})