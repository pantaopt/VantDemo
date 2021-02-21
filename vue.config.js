module.exports = {
  devServer: {
    proxy: {
     '/api': {
       // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
          target: 'https://pantao.ink',
          // 允许跨域
          changeOrigin: true,
          pathRewrite: {
            '^/HHH': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
        `
      }
    }
  }
};