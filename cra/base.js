/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

/** This file is from eslint-config-react-app. */

'use strict';

// This file contains the minimum ESLint configuration required for Create
// React App support, and is used as the `baseConfig` for `eslint-loader`
// to ensure that user-provided configs don't need this boilerplate.

module.exports = {
  root: true,

  parser: 'babel-eslint',

  plugins: ['react'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'react/jsx-uses-vars': 'warn',
    'react/jsx-uses-react': 'warn',
  },
};
