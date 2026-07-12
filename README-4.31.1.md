# Wonder Hall 4.31.1 — Favorites Panel Repair

This repair restores three HTML elements expected by Wonder Hall 4.31:

- parentBookmarksPanel
- parentBookmarksEmpty
- parentBookmarksList

Without them, Parent Wing stopped with:
`parentBookmarksList is null`

That prevented the GitHub Test and Connect code from running.

No gallery, resource, image, publishing, or backup behavior was intentionally changed.
