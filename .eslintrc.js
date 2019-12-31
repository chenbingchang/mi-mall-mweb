module.exports = {
  root: true,
  env: {
    browser: true, // 自己加的
    node: true
  },
  // 限制vue的风格
  extends: ["plugin:vue/essential", "@vue/prettier", "standard"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: ['error', "single"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
