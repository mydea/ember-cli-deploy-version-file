'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'script',
  },
  plugins: ['node'],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: false,
    node: true,
  },
  rules: {},
};
