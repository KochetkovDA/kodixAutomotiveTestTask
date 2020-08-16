// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },

  plugins: [
    'eslint-comments',
    'vue',
    'strict-vue',
    'prettier',
    'jsdoc',
  ],
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
    'prettier/vue',
  ],

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        tabWidth: 2,
        printWidth: 100,
        trailingComma: 'all',
      }
    ],
    
    'dot-notation': 'off',
    'generator-star-spacing': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    
    // Правила для валидации JSdoc
    'jsdoc/check-alignment': 1,
    'jsdoc/check-indentation': 1,
    'jsdoc/check-param-names': 1,
    'jsdoc/check-syntax': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types':1,
    'jsdoc/require-description':1, 
    'jsdoc/require-jsdoc': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-returns-check': 1,
    'jsdoc/require-returns': 1, 
  },
}
