# webpack-dev-server 启动报错 Error: Cannot find module ‘webpack-cli/bin/config-yargs‘

- 原因
  - 由于 webpack-cli 版本 4，删除了 webpack-cli/bin/config-yargs 文件，看图 bin 目录下没有 config-yargs.js
- 解决办法
  - npm uninstall webpack-cli
  - npm i webpack-cli webpack-cli@3.3 -S
- 文件指纹
  - js :chunkhash (入口文件)
  - css 添加文件指纹(contenthash)：因为默认情况下打包好的 css 是通过 style-loader 添加到 head 中，想要给 css 添加文件指纹，先通过 mini-css-extract-plugin 将 css 提取出单独的文件
- 文件压缩
  - js 内置 ugliftjs-webpack-plugin
  - css optimize-css-assets-webpack-plugin + csscano
  - html html-webpack-plugin
- css 增强
  - 删除 打包文件
  - 添加前缀 postcss-loader autoprefixer
- devtool
  - eval :打包后的代码包裹在 eval 中，并且用 sourceURL 连接到源码文件中 不好 debugger
  - cheap-source-map : 源代码 没有包裹在 eval 中，可以调试
- import 懒加载 文件，用到的时候才去加载（babel 转换）
  - npm install @babel/plugin-syntax-dynamic-import --save-dev
  - babelrc 文件 配置 plugins:["@babel/plugin-syntax-dynamic-import"]
- 打包 ssr
  - vue + webpack + ssr
  - vue-server-renderer 方法 createRenderer() 加载模板
  - render.renderToString 将页面渲染 返回浏览器
  - <!--vue-ssr-outlet--> 占位符
- 扩展 单元测试 mocha + chai 
  - npm i mocha -D
  - mocha file1 file2
  - /node_modules/bin/mocha file1 file2
  - mocha
  - mocha --watch 监听测试文件变化
  - [图片]<img src="./mocha-test/img/watch.png" alt="监听测试文件变化"   />
  - [Mocha和单元测试](https://segmentfault.com/a/1190000020346118)
  - [译 快速，完整的 Mocha 测试指南](https://learnku.com/articles/35165#1-%E4%BD%BF%E7%94%A8%E5%9B%9E%E8%B0%83%E6%96%B9%E6%B3%95)

- 编写loader 

- webpack构建速度分析
  1. stats （webpack 内置） 颗粒度粗，看不出问题所在
  ```
   package.json
      build:stats:webpack --config webpack.prod.js --json>stats.json
  ```
  2. speed-measure-webpack-plugin 可以看出每个loader和插件的耗时时间 
     ![打包输出](/imgs/smp.png)
  ```
  npm install --save-dev speed-measure-webpack-plugin
  const smp = new SpeedMeasurePlugin();

   const webpackConfig = smp.wrap({
    plugins: [new MyPlugin(), new MyOtherPlugin()],
  });
  ```
- webpack 构建体积分析
  1. webpack-bundle-analyzer 可视化包分析大小 可以分析第三方模块或者自己编写的业务模块的大小，在8888端口展示大小 
  ```
    npm install --save-dev webpack-bundle-analyzer
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

    module.exports = {
       plugins: [
          new BundleAnalyzerPlugin()
       ]
    }
  ```