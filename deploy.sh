#!/usr/bin/env bash
set -euo pipefail

PAGES_REPO="${PAGES_REPO:-$HOME/projects/portfolio/pages}"
SRC="$(cd "$(dirname "$0")" && pwd)"

cd "$SRC"

if [ -f "$SRC/.env" ]; then
  set -a
  # shellcheck source=/dev/null
  . "$SRC/.env"
  set +a
fi

TOKEN="${GITHUB_TOKEN:-$(gh auth token 2>/dev/null || true)}"
if [ -n "$TOKEN" ]; then
  GITHUB_TOKEN="$TOKEN" npm run build
else
  npm run build
fi

TMP_DIST="$(mktemp -d)"
TMP_ENV="$(mktemp -d)"
cp -r "$SRC/dist"/. "$TMP_DIST/"

if compgen -G "$SRC/.env*" > /dev/null; then
  cp "$SRC"/.env* "$TMP_ENV/"
  rm -f "$SRC"/.env*
fi

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

if compgen -G "$TMP_ENV/.env*" > /dev/null; then
  cp "$TMP_ENV"/.env* "$SRC/"
fi
rm -rf "$TMP_ENV"

echo "deployed → https://setyanoegraha.com (gh-pages branch)"
