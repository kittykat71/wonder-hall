# Wonder Hall 3.58 — Uploaded Image Repair

## Fixed
- Gallery images uploaded through Parent Wing now display on the main museum page
- Uploaded gallery images now display inside gallery rooms
- Uploaded resource images continue to display in resources, search, and favorites
- Cache version parameters are added only to ordinary local image files
- Data URLs, web URLs, and blob URLs are left unchanged

## Cause
Parent Wing stores uploaded images as data URLs. Earlier releases appended a query string such as ?v=357 to every image path. That corrupted uploaded data URLs and produced blank gallery cards.

## Existing features preserved
- Grand Rotunda header
- Words of Wonder quotes
- Parent Wing
- Gallery Manager
- Resource Image Manager
- Search
- Favorites
- Explorer's Passport
