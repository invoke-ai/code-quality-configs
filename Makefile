# simple Makefile with scripts that are otherwise hard to remember
# to use, run from the repo root `make <command>`

default: help

help:
	@echo "tag-release-eslint    Tags with the version from eslint-config-react's package.json."
	@echo "tag-release-prettier  Tags with the version from prettier-config-react's package.json."

tag-release-eslint:
	./scripts/tag_release_eslint-config-react.sh

tag-release-prettier:
	./scripts/tag_release_prettier-config-react.sh