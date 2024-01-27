# Release

`eslint-config-react` and `prettier-config-react` are published packages.

## Prerelease

_Before manually bumping the package version in `package.json`_, run the "Publish package" workflow on GitHub. You'll need to select the package you want to publish.

This will publish as a prepatch release.

## Full Release

A GitHub workflow publishes the packages when a tag is pushed. To do this:

- Bump the version in the package's `package.json`.
- Run `make tag-release-eslint` or `make tag-release-prettier` to create and push the tags. These create the appropriate tag by parsing `package.json`.
