# Wonder Hall 4.4.2 — Media Publishing Compatibility Repair

## Fixed

Direct publishing could fail with:

`record.blob.arrayBuffer is not a function`

Some browsers return valid IndexedDB Blob objects without exposing the modern
`Blob.arrayBuffer()` method.

Wonder Hall now:

- uses `Blob.arrayBuffer()` when available
- falls back to `FileReader.readAsArrayBuffer()` for compatibility
- identifies the exact staged media path if an individual file cannot be read
- preserves all staged images until a publish succeeds
- does not include or replace resources.json

## Test after installation

1. Open Parent Wing → Publish Wonder Hall.
2. Confirm External Media Library still reports the staged images.
3. Click Publish Directly to GitHub.
4. Wait for all images to upload.
5. Confirm the success message appears.
6. Refresh Wonder Hall and verify the images remain visible.
