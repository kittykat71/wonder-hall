WONDER HALL 4.4 — EXTERNAL MEDIA LIBRARY, PHASE 1

CODE-ONLY REPAIR

This package intentionally does not contain resources.json. Installing it will not replace your current galleries or resources.

What changes:
- New gallery and resource images are resized into Blob files.
- Blobs are staged in IndexedDB, not localStorage.
- Wonder Hall data stores short assets/uploads paths.
- Staged images survive refreshes.
- Direct Publish uploads media before resources.json.
- Manual packages include staged media files.
- Existing embedded data-image URLs migrate automatically.

Important:
- Keep the browser tab open during the first migration and publish.
- After publishing succeeds, refresh the public site.
- The downloaded safety JSON remains part of Safe Publishing.
