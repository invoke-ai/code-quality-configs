#!/bin/bash

# Parse version from package.json
version=$(grep -oP '"version": "\K(.*?)(?=")' packages/eslint-config-react/package.json)
tag="eslint-config-react@v$version"
git tag $tag
git push origin $tag
