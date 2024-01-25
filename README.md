# Code Quality Configs

A selection of code quality configs:

- [eslint-config-react] An `eslint` config package.
- [prettier-config-react] A `prettier` config package.
- [ruff.toml] A `ruff` config template.
- [pyrightconfig.json] A `pyright` config template.

## Release

[eslint-config-react] and [prettier-config-react] are published packages.

A GitHub workflow publishes the packages when a tag is pushed. To do this:

- Bump the version in the package's `package.json`.
- Run `make tag-release-eslint` or `make tag-release-prettier` to create and push the tag.

[eslint-config-react]: ./packages/eslint-config-react/
[prettier-config-react]: ./packages/prettier-config-react/
[ruff.toml]: ./templates/ruff/
[pyrightconfig.json]: ./templates/pyright/
