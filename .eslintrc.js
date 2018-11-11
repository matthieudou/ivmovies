module.exports = {
  root: true,
  // parser: 'babel-eslint',
  parserOptions: {
    "parser": "babel-eslint"
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'html',
    'promise',
    'standard',
    'vue'
  ],
  // add your custom rules here
  rules: {
    'camelcase': [0, {properties: 'never'}],
    'eqeqeq': ['error', 'smart']
  },
  globals: {
    '$nuxt': false
  }
}
