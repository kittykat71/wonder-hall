# Wonder Hall 4.3 — Gallery Builder & Device Sync Repair

## Gallery Builder repair
- Gallery cards are rendered before the other Parent Wing tools
- Reordering uses a built-in pointer-based drag handle
- Works with a mouse, touchscreen, and stylus
- Earlier and Later buttons remain available
- Click Save Gallery Order after moving cards

## Device sync repair
Wonder Hall now distinguishes between:

1. Unpublished edits on the current desktop
2. Successfully published GitHub data

Phones, tablets, and clean desktop sessions automatically load the newest
published resources.json instead of retaining an old browser copy.

Unpublished desktop edits are protected until Publish Directly to GitHub
succeeds.

## Updating devices
After publishing:
- Refresh the phone or tablet page
- If it was already open for a long time, close and reopen the tab
- The newest galleries and resources should load automatically
