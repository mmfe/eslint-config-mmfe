module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true
  },
  rules: {
    "default-case": 2, //switch语句中有default分支
    "prettier/prettier":["never",{semi: true}],//分号不报错，由于prettier存在，分号为自动化，解决vue template的报错
    complexity: 2, //所有代码的独立现行路径条数
    "no-undef": 0, //禁用未声明的变量
    "no-unused-vars": 2,
    "no-empty-function": 2, //禁止出现空函数
    "no-eq-null": 2, //禁止在没有类型检查操作符的情况下与 null 进行比较
    "no-unmodified-loop-condition": 2, //禁用一成不变的循环条件
    "guard-for-in": 2, //要求 for-in 循环中有一个 if 语句
    "no-alert": 2, //用 alert、confirm 和 prompt
    "no-else-return": 2 //禁止 if 语句中 return 语句之后有 else 块
  },
  parserOptions: {
    sourceType: "module" //类型为module，因为代码使用了使用了ECMAScript模块
  },
  extends: ["plugin:vue-libs/recommended", "plugin:prettier/recommended"]
};
