# Wonder Hall 4.4.1 — Resource Image Repair

## Fixed

Resource images failed with:

`URL.createObjectURL: Argument 1 could not be converted to Blob or MediaSource`

The gallery-image code returned a Blob, but the older resource-image function
still returned a text data URL. The External Media Library requires a Blob.

This release:

- makes resource images use the Blob-based image optimizer
- keeps images outside localStorage
- retains staged media across refreshes
- adds a clear validation error if non-Blob media reaches the staging system
- does not include or replace resources.json

## Test after installation

1. Create a resource without an image.
2. Edit the resource.
3. Choose an image.
4. Save the resource.
5. Publish Wonder Hall.
6. Refresh and confirm the resource image remains visible.
