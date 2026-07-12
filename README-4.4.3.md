# Wonder Hall 4.4.3 — Staged Media Recovery Repair

## Fixed

Some images staged by earlier 4.4 builds were stored in IndexedDB as wrappers
rather than directly as Blob objects. Publishing then reported:

`A staged image is in an unsupported browser format.`

Wonder Hall now recovers media from:

- Blob and File objects
- nested `blob` or `file` properties
- ArrayBuffer values
- typed arrays
- `data:` image URLs
- older `data`, `bytes`, `buffer`, `value`, or `payload` wrappers

Recovered records are normalized back into Blob form in IndexedDB.

## Important

This is a code-only repair. It does not contain resources.json and will not
replace galleries, resources, or staged images.
