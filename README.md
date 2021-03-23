# webview-html5-vue
基于vue2的多页面web项目，使用vant库，构建工具使用webpack5  

### 实现的功能
1. vue多页面开发;
2. 构建自动化;
3. 页面热更新；

### 安装，运行和构建
1. 安装第三方库  
``` 
yarn
```  
2. 本地运行 
``` 
yarn dev
```
3. 构建
``` 
yarn build
```  

### 页面开发
1. 在src目录下新增一个html文件（如index.html）
2. 在src目录下新增一个与html文件同名的目录（如index） 
3. 在新增的这个目录（如index）下，新增一个main.js文件

### 第三方库
* [vue2](https://cn.vuejs.org/v2/guide/)
* [vant](https://youzan.github.io/vant/#/zh-CN/): 有赞移动端vue框架  
* [webpack5](https://webpack.docschina.org/concepts/)  
* [yarn](https://yarnpkg.com/getting-started)

### todo
1. 优化构建流程，分全局构建和局部构建; 
2. 优化构建性能;
3. 构建预览

