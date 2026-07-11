# Wonder Hall 5.0 — Museum Studio

This is a clean rebuild of the Wonder Hall application and editor.

## Safety model

- `resources.json` is the published website.
- Museum Studio edits a separate local draft.
- Opening Wonder Hall never merges or overwrites the draft automatically.
- The public museum continues showing published data until publishing succeeds.
- A backup is created before each saved edit, reset, or restore.
- Successful GitHub publishing makes the draft the new published baseline.

## Included tools

- Responsive museum for phones, tablets, and desktops
- Browser Back-button navigation
- Search, Favorites, and Explorer's Passport
- Visual gallery ordering with drag handles and Earlier/Later buttons
- Gallery creation, editing, deletion, and card images
- Resource creation, editing, deletion, and card images
- Link entry and drag-and-drop file staging
- Homepage and Featured Exhibit editor
- Draft preview
- Automatic and manual draft backups
- Direct GitHub publishing
- Manual `resources.json` download

## Installing

1. Fetch and pull current GitHub changes in GitHub Desktop.
2. Replace the repository files with this release.
3. Commit as `Wonder Hall 5.0 - Museum Studio`.
4. Push origin.
5. Hard-refresh Wonder Hall.

## Recreating content

Recreate missing galleries and resources in Museum Studio. They remain in the draft
until you deliberately publish them.
