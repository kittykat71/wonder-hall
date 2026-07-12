# Wonder Hall 4.41 — Smart Cache Refresh

## Problem repaired

Some phones retained old gallery names and descriptions in localStorage while
loading newly published image files. This created mixed cards: a current image
with stale text.

## New synchronization rules

- Phones, tablets, and clean desktop sessions always prefer the newest
  published `resources.json`.
- Browser local data is used only when that device has deliberate unpublished
  Parent Wing edits.
- Successful GitHub publishing marks the desktop copy as synchronized.
- Wonder Hall checks for updates when:
  - the page loads
  - the tab becomes visible
  - the browser window regains focus
  - the page has remained open for one minute
- A small notice appears when a newer published copy is applied.
- Unpublished Parent Wing edits are protected and are never auto-replaced.

## Installation safety

This is a code-only release. It does not contain `resources.json` and will not
replace galleries, resources, or media.
