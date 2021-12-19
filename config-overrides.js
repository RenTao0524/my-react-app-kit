const {
  override,
  addPostcssPlugins,
  //addLessLoader
} = require ('customize-cra')

module.exports = override(
//  addLessLoader({
//    lessOptions: {
//       javascriptEnabled: true,
//       localIdentName: '[local]--[hash:base64:5]'
//    }
//}),
  addPostcssPlugins([
    require('postcss-px2rem')({ remUnit: 37.5 })
  ])
)
