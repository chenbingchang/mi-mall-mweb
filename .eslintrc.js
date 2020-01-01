module.exports = {
  root: true,
  env: {
    browser: true, // 自己加的
    node: true
  },
  /**
   * todo: 没有加standard时，vue模板标签属性换行会警告，不知道是那个配置出问题
   */
  // 限制vue的风格
  extends: ['plugin:vue/essential', '@vue/prettier', 'standard'],
  // 等级分为三级： 0-不显示；1-显示警告warning; 2-显示错误error
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['error', 'single'], //强制使用单引号
    semi: ['error', 'never'], //强制不使用分号结尾
    'comma-dangle': ['error', 'always-multiline']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
