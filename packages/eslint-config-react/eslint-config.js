module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'eslint-plugin-react-hooks',
    'eslint-plugin-import',
    'unused-imports',
    'simple-import-sort',
    'react-refresh',
  ],
  root: true,
  rules: {
    /**
     * React
     */

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    // Allow bind as more explicit way to pass arguments to callbacks in JSX - you should have to work for it.
    'react/jsx-no-bind': ['error', { allowBind: true }],
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    // 🎵 The Rules of Hooks 🎵 https://legacy.reactjs.org/docs/hooks-rules.html
    'react-hooks/exhaustive-deps': 'error',
    // https://github.com/ArnaudBarre/eslint-plugin-react-refresh
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    /**
     * JavaScript
     */

    // https://eslint.org/docs/latest/rules/curly
    curly: 'error',
    // https://eslint.org/docs/latest/rules/no-var
    'no-var': 'error',
    // https://eslint.org/docs/latest/rules/brace-style
    'brace-style': 'error',
    // https://eslint.org/docs/latest/rules/prefer-template
    'prefer-template': 'error',
    // https://eslint.org/docs/latest/rules/radix
    radix: 'error',
    // https://eslint.org/docs/latest/rules/space-before-blocks
    'space-before-blocks': 'error',
    // https://eslint.org/docs/latest/rules/eqeqeq
    eqeqeq: 'error',
    // https://eslint.org/docs/latest/rules/one-var
    'one-var': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/no-eval
    'no-eval': 'error',
    // https://eslint.org/docs/latest/rules/no-extend-native
    'no-extend-native': 'error',
    // https://eslint.org/docs/latest/rules/no-implied-eval
    'no-implied-eval': 'error',
    // https://eslint.org/docs/latest/rules/no-label-var
    'no-label-var': 'error',
    // https://eslint.org/docs/latest/rules/no-return-assign
    'no-return-assign': 'error',
    // https://eslint.org/docs/latest/rules/no-sequences
    'no-sequences': 'error',
    // https://eslint.org/docs/latest/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',
    // https://eslint.org/docs/latest/rules/no-throw-literal
    'no-throw-literal': 'error',
    // https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'error',

    /**
     * Imports
     */

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
    // Disabled to allow `unused-imports` to control this behaviour.
    'import/prefer-default-export': 'off',
    // https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md
    'unused-imports/no-unused-imports': 'error',
    // https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-vars.md
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/exports': 'error',

    /**
     * TypeScript
     */

    // https://typescript-eslint.io/rules/no-unused-vars/
    // Disabled to allow `unused-imports` to control this behaviour.
    '@typescript-eslint/no-unused-vars': 'off',
    // https://typescript-eslint.io/rules/ban-ts-comment/
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 10,
      },
    ],
    // https://typescript-eslint.io/rules/no-empty-interface/
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    // https://typescript-eslint.io/rules/consistent-type-imports/
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
        disallowTypeAnnotations: true,
      },
    ],
    // https://typescript-eslint.io/rules/no-import-type-side-effects/
    '@typescript-eslint/no-import-type-side-effects': 'error',

    // https://typescript-eslint.io/rules/consistent-type-assertions/
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      {
        assertionStyle: 'never',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
