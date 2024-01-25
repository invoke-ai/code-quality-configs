#!/bin/bash

# Parse version from package.json
version=$(grep -oP '"version": "\K(.*?)(?=")' packages/prettier-config-react/package.json)
tag="prettier-config-react@v$version"

if git rev-parse "$tag" >/dev/null 2>&1; then
    echo "Tag ${tag} already exists. Exiting..."
    exit 1
fi

git tag $tag
git push origin $tag
