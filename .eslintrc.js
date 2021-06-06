module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  plugins: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-new-wrappers': 'error',
    'default-param-last': 'error',
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'no-use-before-define': ['error', { functions: false, classes: false }],
  },
};
