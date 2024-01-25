# Release

`eslint-config-react` and `prettier-config-react` are published packages.

A GitHub workflow publishes the packages when a tag is pushed. To do this:

- Bump the version in the package's `package.json`.
- Run `make tag-release-eslint` or `make tag-release-prettier` to create and push the tags. These create the appropriate tag by parsing `package.json`.
