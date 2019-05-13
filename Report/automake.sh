while inotifywait -e close_write paper.md; do make; done
