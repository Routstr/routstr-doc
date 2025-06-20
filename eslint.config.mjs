import reactPlugin from 'eslint-plugin-react';
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import stylistic from '@stylistic/eslint-plugin';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default tseslint.config({
  files: ['src/**/*.ts', 'src/**/*.tsx'],

  ignores: ['**/node_modules/**', '**/build/**', '**/.vscode/**', '**/static/**'],

  extends: [reactPlugin.configs.flat.recommended, eslint.configs.recommended],

  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      store: true,
      browser: true,
      node: true,
    },

    parser: tseslint.parser,

    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  settings: {
    react: {
      pragma: 'React',
      version: '18.0',
    },
  },

  plugins: {
    react: reactPlugin,
    prettier: prettierPlugin,
    '@stylistic': stylistic,
    '@typescript-eslint': tsPlugin,
  },

  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/jsx-indent-props': ['error', 'first'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-unknown-property': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-no-comment-textnodes': 'off',

    'prettier/prettier': ['error'],

    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    '@stylistic/linebreak-style': ['error', 'unix'],
    '@stylistic/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/quotes': ['error', 'single', {allowTemplateLiterals: true}],
    '@stylistic/object-curly-spacing': ['error', 'never'],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'multiline-ternary': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-new': 'error',
    'no-undef': 'off',
  },
});
