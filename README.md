# Wonder Hall 4.31 — Safe Merge and Recovery

## Critical repair
This release never blindly replaces local Parent Wing work with published data.

At startup it:
1. Saves a backup of the device's existing Parent Wing data
2. Loads the published GitHub data
3. Merges both copies
4. Preserves locally added galleries and resources
5. Preserves embedded custom gallery and resource images

## Device Backups
Parent Wing now includes Device Backups.

Backups are automatically created:
- Before startup merging
- Before edits overwrite the previous state
- Before direct GitHub publishing
- Before restoring another backup

Backups can be restored, downloaded, or deleted.

## Important recovery note
If Wonder Hall 4.3 already overwrote the only local copy and the changes were
never published, that exact data may no longer exist in browser storage.
Check GitHub commit history for an earlier published resources.json.
