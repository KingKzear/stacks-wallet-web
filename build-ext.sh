#!/bin/sh
echo "🛠  Installing dependencies."
yarn
echo "🛠  Compiling extension."
yarn build
echo "🛠  Packaging Browser Extension"
cd dist
TS=$(date +%Y)$(date +%m)010000
find -print | while read file; do
    touch -t $TS "$file"
done
DEFAULT_DEST="../stacks-wallet-chromium.zip"
DEST=${1:-$DEFAULT_DEST}
zip -Xro $DEST *
echo "✅  Extension packaged as $(basename $DEST)"
