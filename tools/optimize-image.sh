#!/usr/bin/env bash
# Export a web-ready copy of an image into assets/img/.
#
# Usage:  tools/optimize-image.sh <source-image> <category/new-name.ext> [max-px]
# Example: tools/optimize-image.sh ~/Photos/IMG_123.jpg hardware/nucleus-v3-front.jpg
#
# - Auto-rotates using EXIF orientation, then strips all metadata (incl. GPS)
# - Shrinks so the long edge is at most max-px (default 1600). Never enlarges.
# - .jpg output: progressive, quality 80. .png output: max compression.
#   Transparent sources should be exported as .png, everything else as .jpg.
# - Prints the width/height attributes to paste into the <img> tag.
#
# Originals stay outside the repo (~/Storage/natak-media/). Only the output
# of this script should be committed.
set -euo pipefail

if [[ $# -lt 2 ]]; then
    sed -n '2,13p' "$0" | sed 's/^# \{0,1\}//'
    exit 1
fi

src="$1"
dest="$(dirname "$0")/../assets/img/$2"
max="${3:-1600}"

[[ -f "$src" ]] || { echo "Source not found: $src" >&2; exit 1; }
mkdir -p "$(dirname "$dest")"

case "${dest,,}" in
    *.jpg|*.jpeg)
        # Flatten onto white in case the source has an alpha channel.
        convert "$src[0]" -auto-orient -strip -resize "${max}x${max}>" \
            -background white -alpha remove -alpha off \
            -sampling-factor 4:2:0 -interlace JPEG -quality 80 "$dest"
        ;;
    *.png)
        convert "$src[0]" -auto-orient -strip -resize "${max}x${max}>" \
            -define png:compression-level=9 "$dest"
        ;;
    *)
        echo "Output must end in .jpg or .png" >&2
        exit 1
        ;;
esac

read -r w h < <(identify -format '%w %h\n' "$dest")
kb=$(( $(stat -c %s "$dest") / 1024 ))
echo "assets/img/$2  ${kb} KB  width=\"$w\" height=\"$h\""
