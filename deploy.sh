#!/usr/bin/env bash
set -euo pipefail

PAGES_REPO="${PAGES_REPO:-$HOME/projects/portfolio/pages}"
SRC="$(cd "$(dirname "$0")" && pwd)"

cd "$SRC"
TOKEN="${GITHUB_TOKEN:-$(gh auth token 2>/dev/null || true)}"
if [ -n "$TOKEN" ]; then
  GITHUB_TOKEN="$TOKEN" npm run build
else
  npm run build
fi

TMP_DIST="$(mktemp -d)"
cp -r "$SRC/dist"/. "$TMP_DIST/"

git fetch origin gh-pages
git checkout -B gh-pages origin/gh-pages
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -r "$TMP_DIST"/. .
rm -rf "$TMP_DIST"
touch .nojekyll
git add -A
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M WIB')" --allow-empty
git push origin gh-pages
git checkout source
echo "deployed → https://setyanoegraha.github.io (gh-pages branch)"
