module.exports = {
  root: true,
  env: {
    browser: true, // 自己加的
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: ["error", "single"], //强制使用单引号
    semi: ["error", "never"], //强制不使用分号结尾
    "comma-dangle": ["error", "always-multiline"],
    // vue规则
    // 多个属性，每个属性一行
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    // 多行属性对齐、缩进方式
    "vue/html-indent": ["error", 2],
    // 标签闭合括号
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always"
      }
    ]
  }
};
