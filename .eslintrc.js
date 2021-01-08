module.exports = {
  extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    //自己写一些想配置的规则
    // 禁用 tab
    'no-tabs': 'off',
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 'warn',
    // 要求使用 === 和 !==
    eqeqeq: ['error', 'always'],
    '@typescript-eslint/class-name-casing': 'off',
    // 禁止使用 var
    'no-var': 'error',
    // 没用到的变量warn
    'no-unused-vars': 'off',
    // 禁止直接调用 Object.prototypes 的内置属性
    'no-prototype-builtins': 'error',
    // 要求回调函数使用箭头函数
    'prefer-arrow-callback': 'error',
    // 要求使用模板字面量而非字符串连接
    'prefer-template': 'error',
    // 禁止修改 const 声明的变量
    'no-const-assign': 'error',
    // 在定义变量前不允许使用变量
    'no-use-before-define': 'error',
    // 不允许无用的return
    'no-useless-return': 'error',
    // 禁止类成员中出现重复的名称
    'no-dupe-class-members': 'error',
    // 禁止重复模块导入
    // 'no-duplicate-imports': 'error',
    // 禁止console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow async-await 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': 'off',
    // none return for function
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // no empty return function
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        //这里写覆盖vue文件的规则
      },
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['/@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
      },
    },
  },
};
