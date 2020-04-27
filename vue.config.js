module.exports = {
  chainWebpack: config => {
    //发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      //配置打包入口文件
      config.entry('app').clear().add('./src/main-prod.js')
      //配置不需要打包进来的js文件，从cdn外链中获取
      // config.set('externals', {
      //   'font_1773782_9yalwv4xwxi': "Icon"
      // })
    })
    //开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      //配置打包入口文件
      config.entry('app').clear().add('./src/main-dev.js')
    })
  },
  devServer: {
    disableHostCheck: true
  }
}