module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended'],
  plugins: ['react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  },
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error'
  }
};
