var px2rem=require('postcss-px2rem');
const postcss=px2rem({
    remUnit:75
})
module.exports={
    lintOnSave:false,
    css:{
        loaderOptions:{
            postcss:{
                plugins:[
                    postcss
                ]
                
            }
        }
    },
    devServer: {
        open:true,
        proxy: {
            '/api': {
              target: 'http://localhost:3000',
              ws: true,
              changeOrigin: true,
              pathRewrite:{
                  '^/api':''
              }
            },
            '/wy': {
              target: 'http://m.you.163.com',
              ws: true,
              changeOrigin: true,
              pathRewrite:{
                '^/wy':''
              }
            }
          }
    },
    publicPath:process.env.NODE_ENV === 'production'?'/wyy-project':'/'
}