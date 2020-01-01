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

vscode 保存自动格式化
1、安装 eslint/prettier/vetur 插件
2、eslint 和 prettier 的规则统一，特别是单引号和行尾分号
3、设置保存时自动修复
4、eslint 识别的语言类型，一般用默认的即可
5、各种语言指定 formatter 的选项，有多种格式化工具的情况下

vscode 配置
/_ 代码保存自动格式化--------------------------------------开始 _/
//保存自动格式化
"editor.formatOnSave": true,
// 保存时的 task
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true,
"source.organizeImports": true
},
//.vue 文件 template 格式化支持，并使用 js-beautify-html 插件
"vetur.format.defaultFormatter.html": "js-beautify-html",
"vetur.format.defaultFormatterOptions": {
//js-beautify-html 格式化配置
"js-beautify-html": {
"wrap*attributes": "force-expand-multiline"
// "wrap_attributes": "force-aligned"
},
},
"[javascript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[vue]": {
"editor.defaultFormatter": "octref.vetur"
},
"[jsonc]": {
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.quickSuggestions": {
"strings": true
},
"editor.suggest.insertMode": "replace"
},
"[json]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
/* 代码保存自动格式化--------------------------------------结束 \_/

项目 VSCODE 配置：在项目根目录下面创建.vscode 文件夹，下面新增 settings.json 文件，
