[toc]

# with create-react-app, Redux, React Router & Redux Thunk

## 安装yarn create-react-app
 ```
 npm install -g create-react-app yarn
 ```

## create a new React app

 ```
create-react-app react-redux-example
cd react-redux-example

 ```

## install dependencies

当前 `yarn -v` 1.5.1
`create-react-app --version` 1.5.2

 ```
 yarn add packagenameA // 安装packagenameA，安装 运行环境的依赖

 yarn install //根据package.json安装全部的依赖

 yarn add --dev packagenameB //安装开发环境的依赖

 yarn remove packagenameC //卸载指定包packagenameC
 ```

yarn 常用命令如上

 ```
 yarn add redux react-redux redux-thunk superagent react-router-dom react-router-redux@next history redux-devtools-extension

 ```

>
 redux: 状态管理
 react-redux:
 redux-thunk:
 superagent:
 react-router-dom:
 react-router-redux@next:
 history:
 redux-devtools-extension:

## 其他依赖

 运行环境的依赖安装
 ```
 yarn add lodash moment moment-timezone antd
 ```
 开发环境的依赖安装
 ```
 yarn add babel-plugin-import less less-loader --dev
 yarn add redux-logger redux-devtools-extension --dev
 ```

[reduxDevTools](https://github.com/yellowfrogCN/reduxDevTools/blob/master/README.md)

用到 less 的变量覆盖功能，同时还需要less-loader加载less样式

### 通过`yarn run eject`命令把create-react-app所有内建的配置暴露出来

 ```
 yarn run eject //暴露出配置信息
 ```
 运行之后
 ```bash
Copying files into /Users/reactAdmin/react-redux-example
  Adding /config/env.js to the project
  Adding /config/paths.js to the project
  Adding /config/polyfills.js to the project
  Adding /config/webpack.config.dev.js to the project
  Adding /config/webpack.config.prod.js to the project
  Adding /config/webpackDevServer.config.js to the project
  Adding /config/jest/cssTransform.js to the project
  Adding /config/jest/fileTransform.js to the project
  Adding /scripts/build.js to the project
  Adding /scripts/start.js to the project
  Adding /scripts/test.js to the project

Updating the dependencies
  Removing react-scripts from dependencies
  Adding autoprefixer to dependencies
  Adding babel-core to dependencies
  Adding babel-eslint to dependencies
  Adding babel-jest to dependencies
  Adding babel-loader to dependencies
  Adding babel-preset-react-app to dependencies
  Adding babel-runtime to dependencies
  Adding case-sensitive-paths-webpack-plugin to dependencies
  Adding chalk to dependencies
  Adding css-loader to dependencies
  Adding dotenv to dependencies
  Adding dotenv-expand to dependencies
  Adding eslint to dependencies
  Adding eslint-config-react-app to dependencies
  Adding eslint-loader to dependencies
  Adding eslint-plugin-flowtype to dependencies
  Adding eslint-plugin-import to dependencies
  Adding eslint-plugin-jsx-a11y to dependencies
  Adding eslint-plugin-react to dependencies
  Adding extract-text-webpack-plugin to dependencies
  Adding file-loader to dependencies
  Adding fs-extra to dependencies
  Adding html-webpack-plugin to dependencies
  Adding jest to dependencies
  Adding object-assign to dependencies
  Adding postcss-flexbugs-fixes to dependencies
  Adding postcss-loader to dependencies
  Adding promise to dependencies
  Adding raf to dependencies
  Adding react-dev-utils to dependencies
  Adding resolve to dependencies
  Adding style-loader to dependencies
  Adding sw-precache-webpack-plugin to dependencies
  Adding url-loader to dependencies
  Adding webpack to dependencies
  Adding webpack-dev-server to dependencies
  Adding webpack-manifest-plugin to dependencies
  Adding whatwg-fetch to dependencies

Updating the scripts
  Replacing "react-scripts start" with "node scripts/start.js"
  Replacing "react-scripts build" with "node scripts/build.js"
  Replacing "react-scripts test" with "node scripts/test.js"

Configuring package.json
  Adding Jest configuration
  Adding Babel preset
  Adding ESLint configuration

Ejected successfully!

 ```

#### 配置babel-plugin-import和less、less-loader
添加antd之后，装babel-plugin-import插件，实现按需加载提高性能，但是需要对webpack.config.dev.js做修改：
`["import", { "libraryName": "antd", "style": true }]`

 ```
 //package.json 文件
 "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      ["import", { "libraryName": "antd", "style": true }]
    ]
  },

 ```


添加less,less-loader之后，同样需要做修改
使用create-react-app 创建的项目默认不支持less，以下增加less配置的步骤

修改`webpack`配置
修改 `webpack.config.dev.js` 和 `webpack.config-prod.js` 配置文件

改动1：

/\.css$/ 改为 /\.(css|less)$/,, 修改后如下：
```
exclude: [
  /\.html$/,
  /\.(js|jsx)$/,
  /\.(css|less)$/,
  /\.json$/,
  /\.bmp$/,
  /\.gif$/,
  /\.jpe?g$/,
  /\.png$/,
],

 ```

改动2：

test: /\.css$/ 改为 /\.(css|less)$/
test: /\.css$/ 的 use 数组配置增加 less-loader

 ```
{
  test: /\.(css|less)$/,
  use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
      },
    },
    {},
    {
      loader: require.resolve('less-loader'), // compiles Less to CSS
      options: { javascriptEnabled: true }
    }
  ],
},

 ```






#### 设置代理--解决跨越问题
在开发中往往是跨域请求的，配置一下请求代理可以解决这个问题

 ```
 // package.json 文件
 proxy: "http://xxx.xxx",
 ```

#### 自动格式化代码
[formatting-code-automatically](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#formatting-code-automatically)

 ```
 yarn add husky lint-staged prettier --dev
 ```

* husky makes it easy to use githooks as if they are npm scripts.
* lint-staged allows us to run scripts on staged files in git. See this blog post about lint-staged to learn more about it.
* prettier is the JavaScript formatter we will run before commits.
添加完之后，package.json做如下配置

 ```

 "scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js --env=jsdom",
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,json,css}": [
      "prettier --write",
      "git add"
    ]
  },

 ```

### 对 create-react-app 进行自定义配置without ejecting

 ```
 yarn add react-app-rewired --dev
 ```

Override create-react-app webpack configs without ejecting
https://github.com/timarney/react-app-rewired

## 目录结构组织
使用ducks方式组织redux目录结构
https://www.jianshu.com/p/324fd1c124ad
https://segmentfault.com/a/1190000010915166
src下
redux: redux相关的内容，包括store.js,以及ducks模式下的模块Modules
 + store.js: 初始化全局唯一store
 + modules: 一种模组化Redux的代码组识方法，它是把reducers, constants, action types与actions打包成模组来用。
   - 各模组文件包含actionTypes, actions, reducers
   - index.js: 合并模组文件（也相当于是合并reducers）
 把相关的reducers，action creators和Actions，Types（action的type属性集合，常量）都放在一个单独的文件中，而不是分开放在多个文件中，这样修改一个功能时候直接在一个文件中修改就可以。文件命名时根据容器组件来命名



common: 应用公用配置，如导航信息，菜单项，面包屑，路由配置等，也可以考虑把整个common当成一个组件放到components里边
 + menu.js/aside_menu.js: 菜单项
 + menu_items.js: 菜单配置信息（如果菜单比较多，可考虑把需要配置的信息拆出来，在menu.js/aside_menu.js进行引用，然后遍历）
 + router.js: 路由配置（一般与菜单项对应）
 + breadcrumb.js: 面包屑
components: 业务通用组件
pages: 业务页面，存放被 connect 后的 React 容器组件，最典型的就是 App，即应用组件。
services: 后台接口服务
 + request.js 请求
 + api.js api接口地址配置

