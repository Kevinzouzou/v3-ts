// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   // __VUE_OPTIONS_API__: 'true',
//   // __VUE_PROD_DEVTOOLS__: 'false',
//   __VUE_PROD_HYDRATION_MISMATCH_DETAILS_: 'false'
// })

module.exports = {
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      Object.assign(definitions[0], {
        transpileDependencies: 'true',
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
        webSocketServer: 'false'
      })
      return definitions
    })
  }
}
