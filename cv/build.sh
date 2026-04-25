#!/usr/bin/env bash
# Regenerate CV PDF from Markdown source.
#
# Edit cv/cv-source.md, then run this script from the project root:
#   bash cv/build.sh
#
# Output: public/CV_Takahiro_Suzuki.pdf

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_ROOT"

PANDOC="${PANDOC:-$HOME/.local/bin/pandoc}"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

if [ ! -x "$PANDOC" ]; then
  echo "pandoc not found at $PANDOC" >&2
  echo "Install pandoc (e.g. download from https://github.com/jgm/pandoc/releases) and set PANDOC=path/to/pandoc" >&2
  exit 1
fi

if [ ! -x "$CHROME" ]; then
  echo "Google Chrome not found at $CHROME" >&2
  echo "Set CHROME=path/to/chromium-binary if it lives elsewhere" >&2
  exit 1
fi

echo "→ Markdown → HTML"
"$PANDOC" cv/cv-source.md \
  --standalone \
  --css=cv-style.css \
  --metadata title="Curriculum Vitae — Takahiro Suzuki" \
  -o cv/cv.html

echo "→ HTML → PDF (Chrome headless)"
"$CHROME" \
  --headless=new \
  --no-sandbox \
  --disable-gpu \
  --print-to-pdf-no-header \
  --no-pdf-header-footer \
  --virtual-time-budget=10000 \
  --print-to-pdf="cv/cv.pdf" \
  "file://$PROJECT_ROOT/cv/cv.html" 2>/dev/null

echo "→ Install into public/"
cp cv/cv.pdf public/CV_Takahiro_Suzuki.pdf

echo "✓ Updated public/CV_Takahiro_Suzuki.pdf ($(wc -c < public/CV_Takahiro_Suzuki.pdf) bytes)"
echo
echo "Next:"
echo "  git add cv/cv-source.md public/CV_Takahiro_Suzuki.pdf"
echo "  git commit -m \"Update CV\""
echo "  git push"
