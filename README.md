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
 ```
用到 less 的变量覆盖功能，同时还需要less-loader加载less样式

### 通过`yarn run eject`命令把create-react-app所有内建的配置暴露出来

 ```
 yarn run eject //暴露出配置信息
 ```


添加antd之后，装babel-plugin-import插件，实现按需加载提高性能，但是需要对webpack.config.dev.js做修改：


添加less,less-loader之后，同样需要做修改：


### 对 create-react-app 进行自定义配置without ejecting

 ```
 yarn add react-app-rewired --dev
 ```

Override create-react-app webpack configs without ejecting
https://github.com/timarney/react-app-rewired

