# Wonder Hall 4.0 — Connected Curator

## Automatic GitHub publishing
Wonder Hall can now update resources.json directly through GitHub's repository contents API.

## Connection design
- Repository owner, repository, branch, and file path are remembered locally.
- The GitHub token is kept only in sessionStorage.
- Closing the browser removes the token.
- The token should be fine-grained, repository-specific, and limited to Contents: Read and write.

## Publishing flow
1. Edit Wonder Hall in Parent Wing.
2. Open Publish Wonder Hall.
3. Connect GitHub.
4. Click Publish Directly to GitHub.
5. GitHub creates a new commit on the selected branch.
6. GitHub Pages refreshes from that branch.

## Manual fallback
The Curator Studio publish package remains available as a backup.

## Existing features preserved
- Responsive phone, tablet, laptop, and desktop layouts
- Gallery manager
- Resource image manager
- Quotes editor
- Featured Exhibit editor
- Homepage editor
- Favorites
- Explorer's Passport
- Search
