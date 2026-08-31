#!/usr/bin/env bash
set -euo pipefail

PAGES_REPO="${PAGES_REPO:-$HOME/projects/portfolio/pages}"
SRC="$(cd "$(dirname "$0")" && pwd)"

cd "$SRC"
npm run build

if [ ! -d "$PAGES_REPO/.git" ]; then
  echo "pages repo not found at $PAGES_REPO — cloning…"
  git clone https://github.com/setyanoegraha/setyanoegraha.github.io "$PAGES_REPO"
fi

cd "$PAGES_REPO"
git fetch origin
git checkout -B gh-pages origin/main
git rm -rf --quiet . 2>/dev/null || true
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -r "$SRC/dist"/. .
git add -A
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M')" --allow-empty
git push -f origin gh-pages
echo "deployed → https://setyanoegraha.github.io (gh-pages branch)"
