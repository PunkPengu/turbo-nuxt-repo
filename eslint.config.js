import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-config/flat'

export default await antfu(
  {
    typescript: true,
    vue: true,
  },
  {
    name: 'base config',
    rules: {
      'antfu/top-level-function': 'off',
      'curly': ['error', 'all'],
      'node/prefer-global/process': ['error', 'always'],
      'style/brace-style': ['error', '1tbs', {
        allowSingleLine: true,
      }],
      'style/max-statements-per-line': ['error', { max: 2 }],
      'style/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        multilineDetection: 'brackets',
        singleline: {
          delimiter: 'comma',
        },
      }],
      'style/quotes': ['error', 'single', { avoidEscape: true }],
      'style/space-before-function-paren': ['error', 'always'],
      'ts/array-type': ['error', { default: 'generic' }],
      'vue/max-attributes-per-line': [
        'error',
        {
          multiline: {
            max: 1,
          },
          singleline: {
            max: 1,
          },
        },
      ],
    },
  },
  {
    name: 'additional base rules',
  },
  unocss,
  {
    files: ['**/*.{ts,js,vue}'],
    name: 'sort',
    rules: {
      'import/order': 'off', // disable import/order because perfectionist/sort-imports is used
      'perfectionist/sort-array-includes': 'error',
      'perfectionist/sort-exports': 'error',
      'perfectionist/sort-imports': ['error', {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'internal-pattern': [
          '{~,~~,@,@@,assets,public,@ui,@rollercoaster}/**',
        ],
        'newlines-between': 'always',
      }],
      'perfectionist/sort-interfaces': 'error',
      'perfectionist/sort-named-exports': 'error',
      'perfectionist/sort-named-imports': 'error',
      'perfectionist/sort-object-types': 'error',
      'perfectionist/sort-objects': [
        'error',
        {
          order: 'asc',
          type: 'natural',
        },
      ],
      'perfectionist/sort-union-types': 'error',
      'sort-imports': 'off',
    },
  },
  {
    files: [
      'packages/store/**/*', // problems with Pinia "Options" Store Getter if type is a interface
      '**/*.vue', // emits can't be typed using interfaces
    ],
    rules: {
      'ts/consistent-type-definitions': 'off',
    },
  },
  {
    files: ['**/*.stories.ts'],
    rules: {
      'ts/ban-ts-comment': 'off',
    },
  },
  {
    files: [
      'packages/occapi/api/routes/__generated__/**/*',
      'apps/web/public/nuxt-static/webApplicationInjector.js',
    ],
    name: 'Disable no-unlimited-disable',
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
    },
  },
  {
    files: [
      'packages/**/*.{js,ts,vue}',
      'apps/web/components/**/*.{js,ts,vue}',
      'apps/web/pages/**/*.{js,ts,vue}',
      'apps/web/layouts/**/*.{js,ts,vue}',
    ],
    name: 'Custom vue rules for all packages',
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
)
