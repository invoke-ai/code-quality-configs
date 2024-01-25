#!/bin/bash

# Parse version from package.json
version=$(grep -oP '"version": "\K(.*?)(?=")' packages/prettier-config-react/package.json)
tag="v$version"

git tag $tag
git push origin $tag
