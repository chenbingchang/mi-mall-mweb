# mi-mall-mweb

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

vscode 配置
/_ 代码保存自动格式化--------------------------------------开始 _/
// 保存时格式化
"editor.formatOnSave": true,
// 保存时自动修复
"editor.codeActionsOnSave": {
// "source.fixAll.eslint": true,
"source.fixAll": true,
"source.organizeImports": true
},
// 启动 eslint
"eslint.enable": true,
// eslint 可以用来格式化
"eslint.format.enable": true,
// eslint 可以检测单类型
"eslint.validate": [
"javascript",
"javascriptreact",
"vue",
"html",
],
"prettier.semi": false, // 结尾无分号
"prettier.singleQuote": false, // 单引号
/_ 代码保存自动格式化--------------------------------------结束 _/

技术栈：vue 全家桶 + axios + sass

node:12.10.0
npm:6.10.3

待探讨：手机 touch 事件、自己的滚动条(已完成)
小米官网手机端正常分辨率的 360\*640，而该项目也一样
