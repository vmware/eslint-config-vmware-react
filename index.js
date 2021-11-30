/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

const OFF = 0;
const WARN = 1;
const ERROR = 2;

/* eslint-disable sort-keys */
module.exports = {
  extends: [
    './cra/index',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier', // prettier (eslint-config-prettier) must be the last one
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'prettier',
    'sort-destructure-keys',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts', '.jsx', '.tsx'],
  },
  overrides: [
    {
      // Jest unit tests rules
      files: ['*.test.*'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      plugins: ['jest'],
      env: {
        'jest/globals': true,
      },
      rules: {
        'max-lines': [
          WARN,
          { max: 600, skipBlankLines: true, skipComments: true },
        ],
        'jest/consistent-test-it': [ERROR, { fn: 'it', withinDescribe: 'it' }],
      },
    },
    {
      files: ['**/*.ts?(x)'],
      extends: [
        './cra/index',
        'plugin:import/warnings',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier', // prettier (eslint-config-prettier) must be the last one
      ],
      plugins: ['@typescript-eslint', 'typescript-sort-keys'],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          // use <root>/tsconfig.json
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        '@typescript-eslint/naming-convention': [
          ERROR,
          { selector: 'typeLike', format: ['PascalCase'] },
        ],
        // typescript-sort-keys
        'typescript-sort-keys/interface': WARN,
        'typescript-sort-keys/string-enum': WARN,
      },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'import/max-dependencies': [WARN, { max: 20 }],
      },
    },
  ],
  rules: {
    // general
    curly: WARN,
    'max-lines': [WARN, { max: 300, skipBlankLines: true, skipComments: true }],

    'no-alert': WARN,
    'no-console': [WARN, { allow: ['warn', 'error'] }],
    'no-implicit-globals': WARN,
    'no-inner-declarations': WARN,
    'no-lonely-if': WARN,
    'no-nested-ternary': WARN,
    'no-restricted-imports': [
      WARN,
      {
        paths: [
          {
            name: '@material-ui/core',
            message:
              'Do not import components from library root. Import from component folder. ex. @material-ui/core/Button.',
          },
          {
            name: '@material-ui/icons',
            message:
              'Do not import components from library root. Import from component folder. ex. @material-ui/icons/Close.',
          },
        ],
      },
    ],
    'no-unneeded-ternary': WARN,
    'no-var': WARN,
    'one-var': [WARN, 'never'],
    'prefer-const': WARN,
    'prefer-rest-params': WARN,
    'prefer-spread': WARN,
    'prefer-template': WARN,

    'sort-keys': WARN,

    // import
    'import/dynamic-import-chunkname': WARN,
    'import/export': WARN,
    'import/extensions': [
      ERROR,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/first': ERROR,
    'import/imports-first': WARN,
    'import/max-dependencies': WARN,
    'import/named': WARN,
    'import/namespace': WARN,
    'import/newline-after-import': WARN,
    'import/no-amd': ERROR,
    'import/no-absolute-path': WARN,
    'import/no-cycle': OFF, // too slow
    'import/no-default-export': WARN,
    'import/no-deprecated': WARN,
    'import/no-duplicates': WARN,
    'import/no-dynamic-require': WARN,
    'import/no-extraneous-dependencies': WARN,
    'import/no-mutable-exports': WARN,
    'import/no-named-as-default': WARN,
    'import/no-named-as-default-member': WARN,
    'import/no-named-default': WARN,
    'import/no-namespace': WARN,
    'import/no-nodejs-modules': WARN,
    'import/no-self-import': WARN,
    'import/no-unassigned-import': [
      WARN,
      { allow: ['**/*.{css,less,sass,scss}'] },
    ],
    'import/no-unresolved': WARN,
    'import/no-unused-modules': WARN,
    'import/no-useless-path-segments': WARN,
    'import/no-webpack-loader-syntax': ERROR,
    'import/prefer-default-export': OFF,

    // jsx-a11y
    'jsx-a11y/mouse-events-have-key-events': WARN,

    // prettier
    'prettier/prettier': ERROR,

    // react
    // only .tsx files may have JSX
    'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx'] }],
    'react/jsx-sort-props': WARN,

    // react-hooks
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,

    // sort-destructure-keys
    'sort-destructure-keys/sort-destructure-keys': WARN,
  },
};
