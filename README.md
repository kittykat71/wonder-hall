# Wonder Hall 3.56 — Resource Image Manager

## New Parent Wing resource controls
- Add an image to a resource
- Replace an existing resource image
- Remove a resource image
- Preview images before saving
- See image thumbnails in the Parent Wing resource list

## Where resource images appear
- Gallery resource cards
- Search results
- Favorites
- Any other view using Wonder Hall resource cards

## Image handling
Uploaded images are resized in the browser and saved as compressed data URLs inside the exported resources.json file.

## Publishing
After editing resources:
1. Open Parent Wing → Maintenance
2. Download resources.json
3. Replace the existing resources.json in your Wonder Hall repository folder
4. Commit and push with GitHub Desktop
