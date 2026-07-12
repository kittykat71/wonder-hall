# Wonder Hall 4.31.2 — Safe Publishing Repair

## Publishing protections

1. Publishing is blocked if the local copy has zero galleries or zero resources.
2. Before publishing, Wonder Hall downloads a dated JSON safety copy.
3. Wonder Hall compares the draft counts with the current live GitHub file.
4. A substantial deletion requires explicit confirmation.
5. Cancelling the warning leaves GitHub unchanged.

## Browser-storage protections

- Startup no longer creates a large backup on every refresh.
- Old backups are automatically pruned when storage is full.
- If necessary, one compact backup is retained without embedded image data.
- Current working data is retried after expendable backups are cleared.
- A quota failure never intentionally replaces the current data with an empty object.

## Important

This release should be installed while the restored galleries and resources are
still present in the live resources.json.
