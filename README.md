# Wonder Hall 3.54 — Gallery Manager

## Parent Wing gallery controls
- Edit an existing gallery
- Delete a gallery
- Create a new gallery
- Replace a gallery card image
- Remove a custom gallery image
- Gallery edits are saved locally on the current browser/device
- Export the updated resources.json from Maintenance to publish changes

## Image handling
Uploaded gallery images are resized in the browser and stored as compressed data URLs inside resources.json. This keeps the gallery image attached to the gallery when the JSON file is exported.

## Deleting galleries
Deleting a gallery also deletes resources assigned to that gallery from the local Parent Wing data. Export and publish resources.json only after reviewing the change.
