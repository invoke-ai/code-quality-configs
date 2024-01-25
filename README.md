# Code Quality Configs

A selection of code quality configs intended for use in Invoke's applications.

- [eslint-config-react] An `eslint` config package.
- [prettier-config-react] A `prettier` config package.
- [ruff.toml] A `ruff` config template.
- [pyrightconfig.json] A `pyright` config template.

## Usage - Templates

The templates must be copied and pasted.

## Usage - NPM Packages

Be sure to install the peer dependencies.

You may need to add `auto-install-peers=true` to your `.npmrc` for this to happen automatically.

### `eslint-config-react`

1. Install the package.

   ```sh
   pnpm i -D @invoke-ai/eslint-config-react
   ```

2. Extend the config in your `eslint` config. You can then override any rules per usual.

   ```js
   // .eslintrc.cjs
   module.exports = {
     extends: ['@invoke-ai/eslint-config-react'],
     rules: {
       'i18next/no-literal-string': 'off', // no i18n here
     },
   };
   ```

### `prettier-config-react`

1. Install the package.

   ```sh
   pnpm i -D @invoke-ai/prettier-config-react
   ```

2. Spread the config in your `prettier` config. You can then override any individual rules by specifying them after the spread.

   ```js
   // .prettierrc.cjs
   module.exports = {
     ...require('@invoke-ai/prettier-config-react'),
     printWidth: 9001, // slightly increase printWidth
   };
   ```

[eslint-config-react]: ./packages/eslint-config-react/
[prettier-config-react]: ./packages/prettier-config-react/
[ruff.toml]: ./templates/ruff/
[pyrightconfig.json]: ./templates/pyright/
