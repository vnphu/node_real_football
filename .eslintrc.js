module.exports = {
  env: {
    commonjs: true,
    es6: true,
    mocha: true,
    browser: true
  },
  globals: {
    process: true,
    __dirname: true,
    __filename: true
  },
  extends: ['eslint:recommended', 'google', 'prettier'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },
  rules: {
    strict: [2, 'global'],
    'linebreak-style': ['error', 'unix'],
    'arrow-spacing': ['error', { before: true, after: true }],
    indent: ['error', 2],
    'no-console': 'off',
    quotes: ['error', 'single', 'avoid-escape'],
    semi: [2, 'never'],
    'padded-blocks': ['error', 'never'],
    'no-trailing-spaces': ['error', { skipBlankLines: false }],
    'new-cap': [
      2,
      {
        capIsNewExceptions: ['Router', 'Routes', 'Server', 'ENUM', 'STRING', 'ARRAY']
      }
    ],
    'brace-style': [2, '1tbs'],
    'space-before-function-paren': 'off',
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', { int32Hint: false }],
    'space-before-blocks': [1, 'always'],
    'no-unused-vars': 'warn',
    'max-len': [
      'error',
      {
        code: 140,
        tabWidth: 8,
        comments: 160,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
        mode: 'minimum'
      }
    ],
    'comma-dangle': ['error', 'only-multiline'],
    'object-curly-spacing': ['error', 'always', { arraysInObjects: true, objectsInObjects: true }],
    'require-jsdoc': 'off',
    'guard-for-in': 'off',
    'prefer-const': 'warn',
    'no-useless-escape': 'off',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true
      }
    ],
    'no-return-await': 1
  }
}
