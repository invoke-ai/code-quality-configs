#!/bin/bash

if [[ ! $1 =~ ^(eslint-config-react|prettier-config-react)@v[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Tag must match eslint-config-react@v1.2.3 or prettier-config-react@v1.2.3"
  exit 1
fi

git tag $1
git push origin $1
