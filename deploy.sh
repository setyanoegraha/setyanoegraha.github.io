#!/usr/bin/env bash
set -euo pipefail

SRC="$(cd "$(dirname "$0")" && pwd)"
cd "$SRC"

TOKEN="${GITHUB_TOKEN:-}"
if [ -z "$TOKEN" ] && [ -f "$SRC/.env" ]; then
  TOKEN="$(grep -E '^GITHUB_TOKEN=' "$SRC/.env" | cut -d= -f2- | tr -d '"'\''')"
fi
if [ -z "$TOKEN" ]; then
  TOKEN="$(gh auth token 2>/dev/null || true)"
fi

if [ -n "$TOKEN" ]; then
  GITHUB_TOKEN="$TOKEN" npm run build
else
  npm run build
fi

TMP_WORK="$(mktemp -d)"

cleanup() {
  git worktree remove --force "$TMP_WORK" 2>/dev/null || true
  rm -rf "$TMP_WORK"
}
trap cleanup EXIT

git fetch origin gh-pages
git worktree add -B gh-pages "$TMP_WORK" origin/gh-pages

find "$TMP_WORK" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -r "$SRC/dist"/. "$TMP_WORK/"
touch "$TMP_WORK/.nojekyll"

(
  cd "$TMP_WORK"
  git add -A
  git commit -m "deploy: $(date '+%Y-%m-%d %H:%M WIB')" --allow-empty
  git push origin gh-pages
)

echo "deployed → https://setyanoegraha.com (gh-pages branch)"
