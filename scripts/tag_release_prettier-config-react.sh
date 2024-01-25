#!/bin/bash

# Parse version from package.json
version=$(grep -oP '"version": "\K(.*?)(?=")' packages/prettier-config-react/package.json)
tag="prettier-config-react@v$version"
git tag $tag
git push origin $tag
