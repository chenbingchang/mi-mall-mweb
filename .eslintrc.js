module.exports = {
  root: true,
  env: {
    browser: true, // 自己加的
    node: true,
  },
  /**
   * todo: 没有加standard时，vue模板标签属性换行会警告，不知道是那个配置出问题
   */
  // 限制vue的风格
  extends: ['plugin:vue/essential', '@vue/prettier'],
  // 等级分为三级： 0-不显示；1-显示警告warning; 2-显示错误error
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // prettier要使用"singleQuote": true,来和eslint一致，否则两个不一致，会循环报错，即保存时自动修复eslint，但是修复完成后prettier还是会报错，导致保存自动修复看起来感觉没用
    quotes: ['error', 'single'], //强制使用单引号
    // prettier要使用"semi": false,
    semi: ['error', 'never'], //强制不使用分号结尾
    // prettier要使用"trailingComma": "es5"
    'comma-dangle': ['error', 'always-multiline'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
