# webpack-dev-server启动报错Error: Cannot find module ‘webpack-cli/bin/config-yargs‘
- 原因
  - 由于webpack-cli版本4，删除了webpack-cli/bin/config-yargs文件，看图bin目录下没有config-yargs.js
- 解决办法
  - npm uninstall webpack-cli
  - npm i webpack-cli webpack-cli@3.3 -S