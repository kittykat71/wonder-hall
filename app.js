const galleryGrid = document.getElementById("galleryGrid");
const resourceGrid = document.getElementById("resourceGrid");
const homeView = document.getElementById("homeView");
const galleryView = document.getElementById("galleryView");
const favoritesView = document.getElementById("favoritesView");
const passportView = document.getElementById("passportView");
const parentWingView = document.getElementById("parentWingView");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const resourceEmptyState = document.getElementById("resourceEmptyState");
const backButton = document.getElementById("backButton");
const brandHome = document.getElementById("brandHome");
const featuredButton = document.getElementById("featuredButton");
const favoritesButton = document.getElementById("favoritesButton");
const passportButton = document.getElementById("passportButton");
const parentWingButton = document.getElementById("parentWingButton");
const lockParentWingButton = document.getElementById("lockParentWingButton");
const stampButton = document.getElementById("stampButton");
const galleryRoom = document.getElementById("galleryRoom");
const favoritesGrid = document.getElementById("favoritesGrid");
const favoritesEmpty = document.getElementById("favoritesEmpty");
const passportGrid = document.getElementById("passportGrid");
const passportEmpty = document.getElementById("passportEmpty");
const searchResultsSection = document.getElementById("searchResultsSection");
const searchResultsGrid = document.getElementById("searchResultsGrid");
const searchResultCount = document.getElementById("searchResultCount");
const searchEmptyState = document.getElementById("searchEmptyState");
const entranceQuoteText = document.getElementById("entranceQuoteText");
const galleryQuoteText = document.getElementById("galleryQuoteText");

const parentPasswordModal = document.getElementById("parentPasswordModal");
const parentPasswordForm = document.getElementById("parentPasswordForm");
const parentPasswordInput = document.getElementById("parentPasswordInput");
const parentPasswordConfirm = document.getElementById("parentPasswordConfirm");
const confirmPasswordLabel = document.getElementById("confirmPasswordLabel");
const passwordModalTitle = document.getElementById("passwordModalTitle");
const passwordModalHelp = document.getElementById("passwordModalHelp");
const passwordError = document.getElementById("passwordError");
const cancelPasswordButton = document.getElementById("cancelPasswordButton");

const resourceEditorForm = document.getElementById("resourceEditorForm");
const resourceEditIndex = document.getElementById("resourceEditIndex");
const resourceNameInput = document.getElementById("resourceNameInput");
const resourceUrlInput = document.getElementById("resourceUrlInput");
const resourceCategoryInput = document.getElementById("resourceCategoryInput");
const resourceDescriptionInput = document.getElementById("resourceDescriptionInput");
const resourceImageInput = document.getElementById("resourceImageInput");
const resourceImagePreviewWrap = document.getElementById("resourceImagePreviewWrap");
const resourceImagePreview = document.getElementById("resourceImagePreview");
const removeResourceImageButton = document.getElementById("removeResourceImageButton");
const cancelResourceEdit = document.getElementById("cancelResourceEdit");
const parentResourceList = document.getElementById("parentResourceList");

const galleryEditorForm = document.getElementById("galleryEditorForm");
const galleryEditIndex = document.getElementById("galleryEditIndex");
const galleryEditorHeading = document.getElementById("galleryEditorHeading");
const saveGalleryButton = document.getElementById("saveGalleryButton");
const galleryNameInput = document.getElementById("galleryNameInput");
const galleryIconInput = document.getElementById("galleryIconInput");
const galleryDescriptionInput = document.getElementById("galleryDescriptionInput");
const galleryRoomNameInput = document.getElementById("galleryRoomNameInput");
const galleryImageInput = document.getElementById("galleryImageInput");
const galleryImagePreviewWrap = document.getElementById("galleryImagePreviewWrap");
const galleryImagePreview = document.getElementById("galleryImagePreview");
const removeGalleryImageButton = document.getElementById("removeGalleryImageButton");
const cancelGalleryEdit = document.getElementById("cancelGalleryEdit");
const parentGalleryList = document.getElementById("parentGalleryList");

const parentBookmarksList = document.getElementById("parentBookmarksList");
const parentBookmarksEmpty = document.getElementById("parentBookmarksEmpty");
const exportResourcesButton = document.getElementById("exportResourcesButton");
const exportBackupButton = document.getElementById("exportBackupButton");
const importResourcesInput = document.getElementById("importResourcesInput");
const validateDataButton = document.getElementById("validateDataButton");
const maintenanceStatus = document.getElementById("maintenanceStatus");
const resetDeviceDataButton = document.getElementById("resetDeviceDataButton");

const imageOverviewGrid = document.getElementById("imageOverviewGrid");
const quoteEditorForm = document.getElementById("quoteEditorForm");
const quoteGallerySelect = document.getElementById("quoteGallerySelect");
const quoteOneInput = document.getElementById("quoteOneInput");
const quoteTwoInput = document.getElementById("quoteTwoInput");
const quoteThreeInput = document.getElementById("quoteThreeInput");
const featuredEditorForm = document.getElementById("featuredEditorForm");
const featuredGallerySelect = document.getElementById("featuredGallerySelect");
const featuredTitleInput = document.getElementById("featuredTitleInput");
const featuredDescriptionInput = document.getElementById("featuredDescriptionInput");
const homepageEditorForm = document.getElementById("homepageEditorForm");
const homepageWelcomeInput = document.getElementById("homepageWelcomeInput");
const homepageTitleInput = document.getElementById("homepageTitleInput");
const homepageTaglineInput = document.getElementById("homepageTaglineInput");
const publishSummary = document.getElementById("publishSummary");
const publishWonderHallButton = document.getElementById("publishWonderHallButton");
const publishSuccessMessage = document.getElementById("publishSuccessMessage");

const githubConnectionForm = document.getElementById("githubConnectionForm");
const githubOwnerInput = document.getElementById("githubOwnerInput");
const githubRepoInput = document.getElementById("githubRepoInput");
const githubBranchInput = document.getElementById("githubBranchInput");
const githubPathInput = document.getElementById("githubPathInput");
const githubTokenInput = document.getElementById("githubTokenInput");
const disconnectGithubButton = document.getElementById("disconnectGithubButton");
const githubConnectionStatus = document.getElementById("githubConnectionStatus");
const githubStatusHeading = document.getElementById("githubStatusHeading");
const githubStatusMessage = document.getElementById("githubStatusMessage");
const githubSetupDetails = document.getElementById("githubSetupDetails");
const githubCommitMessageInput = document.getElementById("githubCommitMessageInput");
const publishDirectlyButton = document.getElementById("publishDirectlyButton");
const directPublishProgress = document.getElementById("directPublishProgress");
const directPublishProgressText = document.getElementById("directPublishProgressText");
const directPublishSuccess = document.getElementById("directPublishSuccess");
const directPublishSuccessText = document.getElementById("directPublishSuccessText");
const directPublishError = document.getElementById("directPublishError");
const directPublishErrorText = document.getElementById("directPublishErrorText");
const publishedCommitLink = document.getElementById("publishedCommitLink");
const downloadPublishSafetyCopyButton = document.getElementById("downloadPublishSafetyCopyButton");
const externalMediaStatusText = document.getElementById("externalMediaStatusText");
const externalMediaPublishStatusText = document.getElementById("externalMediaPublishStatusText");

const createDeviceBackupButton = document.getElementById("createDeviceBackupButton");
const downloadCurrentDataButton = document.getElementById("downloadCurrentDataButton");
const backupStatusMessage = document.getElementById("backupStatusMessage");
const deviceBackupList = document.getElementById("deviceBackupList");

const visualGalleryBuilder = document.getElementById("visualGalleryBuilder");
const saveGalleryOrderButton = document.getElementById("saveGalleryOrderButton");
const uploadGallerySelect = document.getElementById("uploadGallerySelect");
const resourceDropZone = document.getElementById("resourceDropZone");
const resourceFilesInput = document.getElementById("resourceFilesInput");
const addResourceLinkButton = document.getElementById("addResourceLinkButton");
const pendingUploadsPanel = document.getElementById("pendingUploadsPanel");
const pendingUploadsCount = document.getElementById("pendingUploadsCount");
const pendingUploadsList = document.getElementById("pendingUploadsList");
const resourceLinkDialog = document.getElementById("resourceLinkDialog");
const resourceLinkForm = document.getElementById("resourceLinkForm");
const resourceLinkNameInput = document.getElementById("resourceLinkNameInput");
const resourceLinkUrlInput = document.getElementById("resourceLinkUrlInput");
const resourceLinkDescriptionInput = document.getElementById("resourceLinkDescriptionInput");
const cancelResourceLinkButton = document.getElementById("cancelResourceLinkButton");

let data = { galleries: [], resources: [] };
let currentGalleryId = null;
let parentUnlocked = false;
let pendingGalleryImage = null;
let removeCurrentGalleryImage = false;
let pendingResourceImage = null;
let removeCurrentResourceImage = false;
let githubConnected = false;
let githubConnectionFileSha = null;
let handlingBrowserHistory = false;
let currentViewName = "home";
let galleryBuilderSortable = null;
let pendingUploads = [];
const mediaObjectUrls = new Map();

const FAVORITES_KEY = "wonderHallFavorites";
const PASSPORT_KEY = "wonderHallPassport";
const CUSTOM_DATA_KEY = "wonderHallCustomData";
const DEVICE_BACKUPS_KEY = "wonderHallDeviceBackups";
const LAST_PUBLISHED_SNAPSHOT_KEY = "wonderHallLastPublishedSnapshot";
const MAX_DEVICE_BACKUPS = 12;
const PARENT_HASH_KEY = "wonderHallParentHash";
const GITHUB_SETTINGS_KEY = "wonderHallGithubSettings";
const GITHUB_TOKEN_SESSION_KEY = "wonderHallGithubToken";
const MEDIA_DB_NAME = "wonderHallExternalMedia";
const MEDIA_DB_VERSION = 1;
const MEDIA_STORE_NAME = "media";


function openMediaDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(MEDIA_DB_NAME, MEDIA_DB_VERSION);

    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(MEDIA_STORE_NAME)) {
        database.createObjectStore(MEDIA_STORE_NAME, { keyPath: "path" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("The media library could not be opened."));
  });
}

async function mediaStoreRequest(mode, operation) {
  const database = await openMediaDatabase();
  try {
    return await new Promise((resolve, reject) => {
      const transaction = database.transaction(MEDIA_STORE_NAME, mode);
      const store = transaction.objectStore(MEDIA_STORE_NAME);
      const request = operation(store);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("The media library operation failed."));
      transaction.onerror = () => reject(transaction.error || new Error("The media library transaction failed."));
    });
  } finally {
    database.close();
  }
}

function getAllMediaRecords() {
  return mediaStoreRequest("readonly", store => store.getAll());
}

function getMediaRecord(path) {
  return mediaStoreRequest("readonly", store => store.get(path));
}

function putMediaRecord(record) {
  return mediaStoreRequest("readwrite", store => store.put(record));
}

function deleteMediaRecord(path) {
  return mediaStoreRequest("readwrite", store => store.delete(path));
}

function dataUrlToBlob(dataUrl) {
  const [header, encoded] = dataUrl.split(",");
  const mime = header.match(/data:([^;]+)/)?.[1] || "image/jpeg";
  const binary = atob(encoded || "");
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index);
  return new Blob([bytes], { type: mime });
}

function makeMediaPath(kind, name, extension = ".jpg") {
  const safeName = slugify(name || kind);
  return `assets/uploads/${kind}-${safeName}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}${extension}`;
}

function extensionForMime(mime) {
  if (mime === "image/webp") return ".webp";
  if (mime === "image/png") return ".png";
  if (mime === "image/gif") return ".gif";
  return ".jpg";
}

async function stageMediaBlob(path, blob, metadata = {}) {
  if (!(blob instanceof Blob)) {
    throw new Error(
      "The selected image could not be converted into a media file. " +
      "Please choose the image again."
    );
  }

  await putMediaRecord({
    path,
    blob,
    mime: blob.type || metadata.mime || "application/octet-stream",
    createdAt: new Date().toISOString(),
    status: "pending",
    ...metadata
  });

  const previous = mediaObjectUrls.get(path);
  if (previous) URL.revokeObjectURL(previous);
  mediaObjectUrls.set(path, URL.createObjectURL(blob));
  await updateExternalMediaStatus();
  return path;
}

async function hydrateMediaObjectUrls() {
  const records = await getAllMediaRecords();
  for (const record of records) {
    if (!record?.blob || !record.path) continue;
    const previous = mediaObjectUrls.get(record.path);
    if (previous) URL.revokeObjectURL(previous);
    mediaObjectUrls.set(record.path, URL.createObjectURL(record.blob));
  }
  await updateExternalMediaStatus(records);
}

async function updateExternalMediaStatus(existingRecords = null) {
  let records = existingRecords;
  try {
    if (!records) records = await getAllMediaRecords();
  } catch (error) {
    console.warn("The external media status could not be read.", error);
    records = [];
  }

  const count = records.length;
  const message = count
    ? `${count} image ${count === 1 ? "file is" : "files are"} staged safely outside browser localStorage and will upload with the next publish.`
    : "No image files are waiting to upload.";

  if (externalMediaStatusText) externalMediaStatusText.textContent = message;
  if (externalMediaPublishStatusText) externalMediaPublishStatusText.textContent = message;
}

function isManagedMediaPath(value) {
  return typeof value === "string" && value.startsWith("assets/uploads/");
}

async function migrateEmbeddedImagesToExternalMedia(sourceData) {
  let changed = false;

  for (const gallery of sourceData.galleries || []) {
    if (!isDataImage(gallery.artwork)) continue;
    const blob = dataUrlToBlob(gallery.artwork);
    const path = makeMediaPath("gallery", gallery.id || gallery.name, extensionForMime(blob.type));
    await stageMediaBlob(path, blob, { kind: "gallery-image", ownerId: gallery.id });
    gallery.artwork = path;
    changed = true;
  }

  for (let index = 0; index < (sourceData.resources || []).length; index++) {
    const resource = sourceData.resources[index];
    if (!isDataImage(resource.image)) continue;
    const blob = dataUrlToBlob(resource.image);
    const path = makeMediaPath("resource", resource.name || `resource-${index + 1}`, extensionForMime(blob.type));
    await stageMediaBlob(path, blob, { kind: "resource-image", ownerId: resource.url || resource.name });
    resource.image = path;
    changed = true;
  }

  if (changed) {
    localStorage.removeItem(DEVICE_BACKUPS_KEY);
    localStorage.setItem(CUSTOM_DATA_KEY, JSON.stringify(sourceData));
  }

  return changed;
}

async function resizeImageToBlob(file, maxWidth = 900, maxHeight = 650) {
  if (!file || !file.type.startsWith("image/")) {
    throw new Error("Choose a PNG, JPEG, or WebP image.");
  }

  const sourceUrl = URL.createObjectURL(file);
  try {
    const image = await new Promise((resolve, reject) => {
      const element = new Image();
      element.onload = () => resolve(element);
      element.onerror = () => reject(new Error("The image could not be opened."));
      element.src = sourceUrl;
    });

    const scale = Math.min(1, maxWidth / image.width, maxHeight / image.height);
    const width = Math.max(1, Math.round(image.width * scale));
    const height = Math.max(1, Math.round(image.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(image, 0, 0, width, height);

    return await new Promise((resolve, reject) => {
      canvas.toBlob(
        blob => blob ? resolve(blob) : reject(new Error("The optimized image could not be created.")),
        "image/jpeg",
        0.84
      );
    });
  } finally {
    URL.revokeObjectURL(sourceUrl);
  }
}

async function githubFileSha(settings, path) {
  const owner = encodeURIComponent(settings.owner);
  const repo = encodeURIComponent(settings.repo);
  const encodedPath = path.split("/").map(encodeURIComponent).join("/");
  const branch = encodeURIComponent(settings.branch);
  try {
    const result = await githubRequest(
      `https://api.github.com/repos/${owner}/${repo}/contents/${encodedPath}?ref=${branch}`
    );
    return result.sha || null;
  } catch (error) {
    if (error.status === 404) return null;
    throw error;
  }
}

function mediaBlobToArrayBuffer(blob) {
  if (!blob) {
    return Promise.reject(new Error("A staged media file is missing its image data."));
  }

  if (typeof blob.arrayBuffer === "function") {
    return blob.arrayBuffer();
  }

  // Compatibility path for browsers whose IndexedDB Blob objects do not
  // expose Blob.arrayBuffer(), even though they remain valid Blob objects.
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () =>
      reject(reader.error || new Error("A staged image could not be read."));

    try {
      reader.readAsArrayBuffer(blob);
    } catch (error) {
      reject(
        new Error(
          "A staged image is in an unsupported browser format. " +
          "Please remove and reselect that image."
        )
      );
    }
  });
}

async function uploadMediaRecordToGithub(record, settings, position, total) {
  directPublishProgressText.textContent =
    `Uploading image ${position} of ${total}: ${record.path.split("/").pop()}`;

  const owner = encodeURIComponent(settings.owner);
  const repo = encodeURIComponent(settings.repo);
  const encodedPath = record.path.split("/").map(encodeURIComponent).join("/");
  const arrayBuffer = await mediaBlobToArrayBuffer(record.blob);
  const bytes = new Uint8Array(arrayBuffer);
  let binary = "";
  for (let index = 0; index < bytes.length; index += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
  }

  const sha = await githubFileSha(settings, record.path);
  const body = {
    message: `Upload ${record.path.split("/").pop()} from Wonder Hall`,
    content: btoa(binary),
    branch: settings.branch
  };
  if (sha) body.sha = sha;

  await githubRequest(
    `https://api.github.com/repos/${owner}/${repo}/contents/${encodedPath}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }
  );
}

async function publishExternalMediaToGithub(settings) {
  const records = await getAllMediaRecords();
  for (let index = 0; index < records.length; index++) {
    try {
      await uploadMediaRecordToGithub(
        records[index],
        settings,
        index + 1,
        records.length
      );
    } catch (error) {
      throw new Error(
        `${records[index]?.path || "Unknown media file"}: ${error.message}`
      );
    }
  }
  return records;
}

async function clearPublishedMediaRecords(records) {
  for (const record of records || []) {
    await deleteMediaRecord(record.path);
    const objectUrl = mediaObjectUrls.get(record.path);
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    mediaObjectUrls.delete(record.path);
  }
  await updateExternalMediaStatus();
}

function getStoredSet(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key) || "[]")); }
  catch { return new Set(); }
}
function saveStoredSet(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]));
}
function saveCustomData() {
  const previousRaw = localStorage.getItem(CUSTOM_DATA_KEY);

  if (previousRaw) {
    try {
      createDeviceBackup("Automatic backup before edit", JSON.parse(previousRaw));
    } catch (error) {
      console.warn("The automatic edit backup could not be created.", error);
    }
  }

  const serialized = JSON.stringify(data);

  try {
    localStorage.setItem(CUSTOM_DATA_KEY, serialized);
    return true;
  } catch (error) {
    if (error?.name !== "QuotaExceededError") throw error;

    // Backups are expendable; the current working copy is not.
    localStorage.removeItem(DEVICE_BACKUPS_KEY);

    try {
      localStorage.setItem(CUSTOM_DATA_KEY, serialized);
      return true;
    } catch (retryError) {
      alert(
        "Wonder Hall could not save this edit because browser storage is full. " +
        "Download Current Data before making more changes. Your existing saved copy was not intentionally erased."
      );
      throw retryError;
    }
  }
}
function slugify(value) {
  return value.toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || `gallery-${Date.now()}`;
}
async function hashPassword(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2,"0")).join("");
}


function isDataImage(value) {
  return typeof value === "string" && value.startsWith("data:image/");
}

function getGalleryArtwork(gallery) {
  return gallery?.artwork || "assets/gallery-art-v353/futurescape.jpg";
}

function clearGalleryEditor() {
  galleryEditorForm.reset();
  galleryEditIndex.value = "";
  galleryIconInput.value = "✨";
  pendingGalleryImage = null;
  removeCurrentGalleryImage = false;
  galleryImageInput.value = "";
  galleryImagePreview.removeAttribute("src");
  galleryImagePreviewWrap.hidden = true;
  galleryEditorHeading.textContent = "Create a Gallery";
  saveGalleryButton.textContent = "Create Gallery";
}

function showGalleryImagePreview(source) {
  if (!source) {
    galleryImagePreview.removeAttribute("src");
    galleryImagePreviewWrap.hidden = true;
    return;
  }
  galleryImagePreview.src = source;
  galleryImagePreviewWrap.hidden = false;
}

function readAndResizeGalleryImage(file) {
  return resizeImageToBlob(file);
}


function getResourceImage(resource) {
  return resource?.image || "";
}

function clearResourceEditor() {
  resourceEditorForm.reset();
  resourceEditIndex.value = "";
  pendingResourceImage = null;
  removeCurrentResourceImage = false;
  resourceImageInput.value = "";
  resourceImagePreview.removeAttribute("src");
  resourceImagePreviewWrap.hidden = true;
}

function showResourceImagePreview(source) {
  if (!source) {
    resourceImagePreview.removeAttribute("src");
    resourceImagePreviewWrap.hidden = true;
    return;
  }

  resourceImagePreview.src = source;
  resourceImagePreviewWrap.hidden = false;
}

function readAndResizeResourceImage(file) {
  return resizeImageToBlob(file);
}


const ENTRANCE_QUOTES = [
  "Curiosity is the beginning of every great journey.",
  "There is always another room of knowledge waiting to be entered.",
  "The world becomes more interesting when we learn to ask better questions.",
  "A few minutes of wonder can open an entirely new path.",
  "Learning is not a race; it is a lifelong act of discovery.",
  "Today’s small question may become tomorrow’s great adventure.",
  "Every subject becomes fascinating when we look closely enough.",
  "A curious mind can find a doorway almost anywhere."
];

function chooseDifferentQuote(quotes, storageKey) {
  if (!Array.isArray(quotes) || quotes.length === 0) {
    return "Curiosity turns an ordinary moment into a discovery.";
  }

  const previous = sessionStorage.getItem(storageKey);
  let choices = quotes.filter(quote => quote !== previous);

  if (choices.length === 0) choices = quotes;

  const selected = choices[Math.floor(Math.random() * choices.length)];
  sessionStorage.setItem(storageKey, selected);
  return selected;
}

function showEntranceQuote() {
  entranceQuoteText.textContent = chooseDifferentQuote(
    ENTRANCE_QUOTES,
    "wonderHallEntranceQuote"
  );
}

function showGalleryQuote(gallery) {
  galleryQuoteText.textContent = chooseDifferentQuote(
    gallery?.quotes || [],
    `wonderHallQuote-${gallery?.id || "gallery"}`
  );
}


function safeAssetUrl(value, version = "358") {
  if (!value) return "";

  const trimmed = String(value).trim();

  if (mediaObjectUrls.has(trimmed)) return mediaObjectUrls.get(trimmed);

  // Legacy embedded images and temporary object URLs must not receive query strings.
  // Adding a query string would corrupt them.
  if (
    trimmed.startsWith("data:") ||
    trimmed.startsWith("blob:") ||
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://")
  ) {
    return trimmed;
  }

  const separator = trimmed.includes("?") ? "&" : "?";
  return `${trimmed}${separator}v=${version}`;
}


function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function getDeviceBackups() {
  try {
    return JSON.parse(localStorage.getItem(DEVICE_BACKUPS_KEY) || "[]");
  } catch {
    return [];
  }
}

function stripEmbeddedImagesForCompactBackup(sourceData) {
  const compact = cloneData(sourceData);

  compact.galleries = (compact.galleries || []).map(gallery => ({
    ...gallery,
    artwork: typeof gallery.artwork === "string" && gallery.artwork.startsWith("data:")
      ? ""
      : gallery.artwork
  }));

  compact.resources = (compact.resources || []).map(resource => ({
    ...resource,
    image: typeof resource.image === "string" && resource.image.startsWith("data:")
      ? ""
      : resource.image
  }));

  compact.backupNotice =
    "Embedded custom images were omitted because browser storage was full.";

  return compact;
}

function saveDeviceBackups(backups) {
  let candidates = backups.slice(0, MAX_DEVICE_BACKUPS);

  while (candidates.length) {
    try {
      localStorage.setItem(DEVICE_BACKUPS_KEY, JSON.stringify(candidates));
      return true;
    } catch (error) {
      if (error?.name !== "QuotaExceededError") throw error;
      candidates.pop();
    }
  }

  const newest = backups[0];
  if (!newest) return false;

  try {
    const compactBackup = {
      ...newest,
      reason: `${newest.reason} (compact — images omitted)`,
      data: stripEmbeddedImagesForCompactBackup(newest.data)
    };

    localStorage.setItem(
      DEVICE_BACKUPS_KEY,
      JSON.stringify([compactBackup])
    );
    return true;
  } catch (error) {
    console.warn("Wonder Hall could not store a device backup.", error);
    return false;
  }
}

function createDeviceBackup(reason = "Manual backup", sourceData = data) {
  if (!sourceData || !Array.isArray(sourceData.galleries)) return null;

  const backups = getDeviceBackups();
  const backup = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    createdAt: new Date().toISOString(),
    reason,
    galleryCount: sourceData.galleries?.length || 0,
    resourceCount: sourceData.resources?.length || 0,
    data: cloneData(sourceData)
  };

  backups.unshift(backup);
  const stored = saveDeviceBackups(backups);
  return stored ? backup : null;
}

function identifyGallery(gallery) {
  return gallery?.id || gallery?.name?.trim().toLowerCase();
}

function identifyResource(resource) {
  return resource?.url?.trim() ||
    `${resource?.category || ""}::${resource?.name?.trim().toLowerCase() || ""}`;
}

function hasCustomGalleryImage(gallery) {
  return isDataImage(gallery?.artwork) || isManagedMediaPath(gallery?.artwork);
}

function hasCustomResourceImage(resource) {
  return isDataImage(resource?.image) || isManagedMediaPath(resource?.image);
}

function mergeWonderHallData(publishedData, localData) {
  if (!publishedData) return cloneData(localData);
  if (!localData) return cloneData(publishedData);

  const merged = cloneData(publishedData);

  const localGalleryMap = new Map(
    (localData.galleries || []).map(gallery => [identifyGallery(gallery), gallery])
  );
  const publishedGalleryKeys = new Set(
    (publishedData.galleries || []).map(identifyGallery)
  );

  merged.galleries = (publishedData.galleries || []).map(publishedGallery => {
    const key = identifyGallery(publishedGallery);
    const localGallery = localGalleryMap.get(key);
    if (!localGallery) return publishedGallery;

    return {
      ...publishedGallery,
      ...localGallery,
      artwork: hasCustomGalleryImage(localGallery)
        ? localGallery.artwork
        : (publishedGallery.artwork || localGallery.artwork),
      quotes: localGallery.quotes?.length
        ? localGallery.quotes
        : publishedGallery.quotes
    };
  });

  for (const localGallery of localData.galleries || []) {
    if (!publishedGalleryKeys.has(identifyGallery(localGallery))) {
      merged.galleries.push(cloneData(localGallery));
    }
  }

  const localResourceMap = new Map(
    (localData.resources || []).map(resource => [identifyResource(resource), resource])
  );
  const publishedResourceKeys = new Set(
    (publishedData.resources || []).map(identifyResource)
  );

  merged.resources = (publishedData.resources || []).map(publishedResource => {
    const key = identifyResource(publishedResource);
    const localResource = localResourceMap.get(key);
    if (!localResource) return publishedResource;

    return {
      ...publishedResource,
      ...localResource,
      image: hasCustomResourceImage(localResource)
        ? localResource.image
        : (publishedResource.image || localResource.image)
    };
  });

  for (const localResource of localData.resources || []) {
    if (!publishedResourceKeys.has(identifyResource(localResource))) {
      merged.resources.push(cloneData(localResource));
    }
  }

  merged.siteSettings = {
    ...(publishedData.siteSettings || {}),
    ...(localData.siteSettings || {})
  };

  return merged;
}

function renderDeviceBackups() {
  if (!deviceBackupList) return;

  const backups = getDeviceBackups();
  deviceBackupList.innerHTML = "";

  if (!backups.length) {
    deviceBackupList.innerHTML =
      '<p class="empty-state">No device backups have been created yet.</p>';
    return;
  }

  backups.forEach(backup => {
    const item = document.createElement("article");
    item.className = "device-backup-item";

    const date = new Date(backup.createdAt);
    item.innerHTML = `
      <div>
        <h4>${backup.reason}</h4>
        <p>${date.toLocaleString()} · ${backup.galleryCount} galleries · ${backup.resourceCount} resources</p>
      </div>
      <div class="device-backup-actions">
        <button type="button" data-restore-backup="${backup.id}">Restore</button>
        <button type="button" data-download-backup="${backup.id}">Download</button>
        <button type="button" data-delete-backup="${backup.id}">Delete</button>
      </div>
    `;

    deviceBackupList.appendChild(item);
  });
}

function downloadJsonFile(filename, value) {
  const blob = new Blob([JSON.stringify(value, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function loadData() {
  try {
    let publishedData = null;
    let localData = null;

    try {
      const response = await fetch(`resources.json?v=442&t=${Date.now()}`, {
        cache: "no-store"
      });
      if (response.ok) publishedData = await response.json();
    } catch (error) {
      console.warn("Published data could not be loaded.", error);
    }

    try {
      const localRaw = localStorage.getItem(CUSTOM_DATA_KEY);
      if (localRaw) localData = JSON.parse(localRaw);
    } catch (error) {
      console.warn("Local data could not be read.", error);
    }

    const localLooksEmpty =
      localData &&
      (!Array.isArray(localData.galleries) || localData.galleries.length === 0) &&
      (!Array.isArray(localData.resources) || localData.resources.length === 0);

    const publishedHasContent =
      publishedData &&
      Array.isArray(publishedData.galleries) &&
      publishedData.galleries.length > 0 &&
      Array.isArray(publishedData.resources) &&
      publishedData.resources.length > 0;

    data = localLooksEmpty && publishedHasContent
      ? cloneData(publishedData)
      : mergeWonderHallData(publishedData, localData);

    if (!data) {
      throw new Error("No Wonder Hall data could be loaded.");
    }

    // Move legacy embedded images out of localStorage before saving the working copy.
    await migrateEmbeddedImagesToExternalMedia(data);

    try {
      localStorage.setItem(CUSTOM_DATA_KEY, JSON.stringify(data));
    } catch (error) {
      if (error?.name === "QuotaExceededError") {
        localStorage.removeItem(DEVICE_BACKUPS_KEY);
        localStorage.setItem(CUSTOM_DATA_KEY, JSON.stringify(data));
      } else {
        throw error;
      }
    }

    await hydrateMediaObjectUrls();

    ensureSiteSettings();
    applySiteSettingsToPage();
    renderGalleries(data.galleries);
    showEntranceQuote();
  } catch (error) {
    console.error(error);
    galleryGrid.innerHTML =
      `<p class="empty-state">Wonder Hall could not load its resource list.</p>`;
  }
}


function setBrowserView(view, details = {}, { replace = false } = {}) {
  currentViewName = view;

  if (handlingBrowserHistory) return;

  const state = { wonderHallView: view, ...details };

  if (replace) {
    history.replaceState(state, "", window.location.href);
  } else {
    history.pushState(state, "", window.location.href);
  }
}

function returnHomeFromBrowserHistory() {
  handlingBrowserHistory = true;
  showHome({ updateHistory: false });
  handlingBrowserHistory = false;
}

function hideAllViews() {
  homeView.hidden = true;
  galleryView.hidden = true;
  favoritesView.hidden = true;
  passportView.hidden = true;
  parentWingView.hidden = true;
}

function renderGalleries(galleries) {
  galleryGrid.innerHTML = "";
  emptyState.hidden = galleries.length !== 0;
  resultCount.textContent = `${galleries.length} ${galleries.length === 1 ? "gallery" : "galleries"}`;

  galleries.forEach((gallery) => {
    const card = document.createElement("button");
    card.className = "gallery-card";
    card.type = "button";
    if (gallery.artwork) {
      card.style.setProperty("--gallery-art", `url("${safeAssetUrl(gallery.artwork)}")`);
    }
    card.innerHTML = `
      <span class="gallery-card-icon" aria-hidden="true">${gallery.icon}</span>
      <h3>${gallery.name}</h3>
      <p>${gallery.description}</p>
      <span class="enter-label">Enter Gallery →</span>`;
    card.addEventListener("click", () => openGallery(gallery.id));
    galleryGrid.appendChild(card);
  });
}

function createResourceCard(resource) {
  const favorites = getStoredSet(FAVORITES_KEY);
  const wrapper = document.createElement("article");
  wrapper.className = "resource-card";

  const link = document.createElement("a");
  link.href = safeAssetUrl(resource.url);
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  if (resource.downloadable) {
    link.setAttribute("download", "");
  }
  link.style.color = "inherit";
  link.style.textDecoration = "none";

  if (resource.image) {
    const image = document.createElement("img");
    image.className = "resource-card-image";
    image.src = safeAssetUrl(resource.image);
    image.alt = "";
    link.appendChild(image);
  }

  const content = document.createElement("div");
  content.className = "resource-card-content";
  content.innerHTML = `
    <h3>${resource.name}</h3>
    <p>${resource.description}</p>
    <span>Visit resource ↗</span>
  `;

  link.appendChild(content);

  const favorite = document.createElement("button");
  favorite.type = "button";
  favorite.className = "favorite-toggle";

  const key = resource.url;

  const update = () => {
    const active = favorites.has(key);
    favorite.classList.toggle("is-favorite", active);
    favorite.textContent = active ? "★ Saved to Favorites" : "☆ Add to Favorites";
  };

  update();

  favorite.addEventListener("click", () => {
    if (favorites.has(key)) favorites.delete(key);
    else favorites.add(key);

    saveStoredSet(FAVORITES_KEY, favorites);
    update();
  });

  wrapper.append(link, favorite);
  return wrapper;
}

function renderSearchResults(term) {
  const q = term.trim().toLowerCase();
  renderGalleries(data.galleries);
  if (!q) {
    searchResultsSection.hidden = true;
    searchResultsGrid.innerHTML = "";
    return;
  }

  const galleries = data.galleries.filter(g =>
    `${g.name} ${g.description} ${g.roomName || ""}`.toLowerCase().includes(q));
  const resources = data.resources.filter(r => {
    const gallery = data.galleries.find(g => g.id === r.category);
    return `${r.name} ${r.description} ${gallery?.name || ""}`.toLowerCase().includes(q);
  });

  const total = galleries.length + resources.length;
  searchResultsSection.hidden = false;
  searchResultsGrid.innerHTML = "";
  searchEmptyState.hidden = total !== 0;
  searchResultCount.textContent = `${total} ${total === 1 ? "result" : "results"}`;

  galleries.forEach(gallery => {
    const card = document.createElement("article");
    card.className = "resource-card search-result-card";
    card.innerHTML = `<span class="search-result-type">Gallery</span>
      <button type="button"><h3>${gallery.icon} ${gallery.name}</h3>
      <p>${gallery.description}</p><span>Enter gallery →</span></button>`;
    card.querySelector("button").addEventListener("click", () => openGallery(gallery.id));
    searchResultsGrid.appendChild(card);
  });
  resources.forEach(resource => searchResultsGrid.appendChild(createResourceCard(resource)));
}

function openGallery(id, { updateHistory = true } = {}) {
  const gallery = data.galleries.find(g => g.id === id);
  if (!gallery) return;
  currentGalleryId = id;
  const resources = data.resources.filter(r => r.category === id);

  hideAllViews();
  galleryView.hidden = false;
  document.getElementById("galleryTitle").textContent = gallery.name;
  document.getElementById("galleryDescription").textContent = gallery.description;
  document.getElementById("galleryRoomName").textContent = gallery.roomName || "Gallery Room";
  document.getElementById("galleryIcon").textContent = gallery.icon;
  showGalleryQuote(gallery);
  galleryRoom.style.setProperty("--room-art", `url("${safeAssetUrl(gallery.artwork)}")`);

  const passport = getStoredSet(PASSPORT_KEY);
  stampButton.textContent = passport.has(id) ? "✓ Passport Stamp Added" : "Add Passport Stamp";

  resourceGrid.innerHTML = "";
  resourceEmptyState.hidden = resources.length !== 0;
  resources.forEach(resource => resourceGrid.appendChild(createResourceCard(resource)));

  searchInput.value = "";
  searchResultsSection.hidden = true;
  if (updateHistory) {
    setBrowserView("gallery", { galleryId: id });
  } else {
    currentViewName = "gallery";
  }

  window.scrollTo({top:0,behavior:"auto"});
}

function showHome({ updateHistory = true, replaceHistory = false } = {}) {
  hideAllViews();
  homeView.hidden = false;
  searchInput.value = "";
  searchResultsSection.hidden = true;
  renderGalleries(data.galleries);
  showEntranceQuote();

  if (updateHistory) {
    setBrowserView("home", {}, { replace: replaceHistory });
  } else {
    currentViewName = "home";
  }

  window.scrollTo({top:0,behavior:"auto"});
}
function showFavorites({ updateHistory = true } = {}) {
  hideAllViews();
  favoritesView.hidden = false;
  const favorites = getStoredSet(FAVORITES_KEY);
  const saved = data.resources.filter(r => favorites.has(r.url));
  favoritesGrid.innerHTML = "";
  favoritesEmpty.hidden = saved.length !== 0;
  saved.forEach(resource => favoritesGrid.appendChild(createResourceCard(resource)));

  if (updateHistory) {
    setBrowserView("favorites");
  } else {
    currentViewName = "favorites";
  }

  window.scrollTo({top:0,behavior:"auto"});
}
function showPassport({ updateHistory = true } = {}) {
  hideAllViews();
  passportView.hidden = false;
  const passport = getStoredSet(PASSPORT_KEY);
  const visited = data.galleries.filter(g => passport.has(g.id));
  passportGrid.innerHTML = "";
  passportEmpty.hidden = visited.length !== 0;
  visited.forEach(gallery => {
    const stamp = document.createElement("article");
    stamp.className = "passport-stamp";
    stamp.innerHTML = `<div class="stamp-icon">${gallery.icon}</div>
      <h3>${gallery.name}</h3><p>${gallery.roomName || "Wonder Hall gallery"}</p>`;
    passportGrid.appendChild(stamp);
  });
  if (updateHistory) {
    setBrowserView("passport");
  } else {
    currentViewName = "passport";
  }

  window.scrollTo({top:0,behavior:"auto"});
}

function openPasswordModal() {
  const hasPassword = Boolean(localStorage.getItem(PARENT_HASH_KEY));
  passwordModalTitle.textContent = hasPassword ? "Unlock Parent Wing" : "Create Parent Wing Password";
  passwordModalHelp.textContent = hasPassword
    ? "Enter the password created on this device."
    : "Create a password for this browser. The password protects local curator tools on this device.";
  confirmPasswordLabel.hidden = hasPassword;
  parentPasswordConfirm.required = !hasPassword;
  parentPasswordInput.value = "";
  parentPasswordConfirm.value = "";
  passwordError.hidden = true;
  parentPasswordModal.hidden = false;
  parentPasswordInput.focus();
}

function showParentWing({ updateHistory = true } = {}) {
  hideAllViews();
  parentWingView.hidden = false;
  populateParentWing();

  if (updateHistory) {
    setBrowserView("parent");
  } else {
    currentViewName = "parent";
  }

  window.scrollTo({top:0,behavior:"auto"});
}



function getGithubSettings() {
  try {
    return JSON.parse(localStorage.getItem(GITHUB_SETTINGS_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveGithubSettings() {
  const settings = {
    owner: githubOwnerInput.value.trim(),
    repo: githubRepoInput.value.trim(),
    branch: githubBranchInput.value.trim() || "main",
    path: githubPathInput.value.trim() || "resources.json"
  };
  localStorage.setItem(GITHUB_SETTINGS_KEY, JSON.stringify(settings));
  return settings;
}

function getGithubToken() {
  return sessionStorage.getItem(GITHUB_TOKEN_SESSION_KEY) || "";
}

function setGithubToken(token) {
  if (token) sessionStorage.setItem(GITHUB_TOKEN_SESSION_KEY, token);
  else sessionStorage.removeItem(GITHUB_TOKEN_SESSION_KEY);
}

function loadGithubSettingsIntoForm() {
  const settings = getGithubSettings();
  githubOwnerInput.value = settings.owner || "kittykat71";
  githubRepoInput.value = settings.repo || "wonder-hall";
  githubBranchInput.value = settings.branch || "main";
  githubPathInput.value = settings.path || "resources.json";

  const token = getGithubToken();
  githubTokenInput.value = token;

  if (token && settings.owner && settings.repo) {
    setGithubStatus("disconnected", "GitHub connection can be restored", "Click Test and Connect to verify the saved repository and current-session token.");
  }
}

function setGithubStatus(kind, heading, message) {
  githubConnectionStatus.classList.remove("connected", "disconnected", "error");
  githubConnectionStatus.classList.add(kind);
  githubStatusHeading.textContent = heading;
  githubStatusMessage.textContent = message;
}

function setDirectPublishState({ loading = false, success = false, error = "" } = {}) {
  publishDirectlyButton.disabled = loading || !githubConnected;
  directPublishProgress.hidden = !loading;
  directPublishSuccess.hidden = !success;
  directPublishError.hidden = !error;

  if (error) directPublishErrorText.textContent = error;
}

function encodeUtf8ToBase64(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  const chunkSize = 0x8000;

  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }

  return btoa(binary);
}

async function githubRequest(url, options = {}) {
  const token = getGithubToken();

  if (!token) {
    throw new Error("The GitHub token is missing. Enter it again and reconnect.");
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      "Accept": "application/vnd.github+json",
      "Authorization": `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {})
    }
  });

  let body = null;
  const text = await response.text();

  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      body = { message: text };
    }
  }

  if (!response.ok) {
    const message = body?.message || `GitHub returned ${response.status}.`;
    const error = new Error(message);
    error.status = response.status;
    error.body = body;
    throw error;
  }

  return body;
}

function buildGithubContentsUrl(settings) {
  const owner = encodeURIComponent(settings.owner);
  const repo = encodeURIComponent(settings.repo);
  const path = settings.path.split("/").map(encodeURIComponent).join("/");
  const branch = encodeURIComponent(settings.branch);
  return `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
}

async function testGithubConnection() {
  const settings = saveGithubSettings();
  const token = githubTokenInput.value.trim();

  if (!token) throw new Error("Enter a GitHub access token.");
  setGithubToken(token);

  const file = await githubRequest(buildGithubContentsUrl(settings));
  githubConnectionFileSha = file.sha;
  githubConnected = true;

  setGithubStatus(
    "connected",
    "GitHub is connected",
    `${settings.owner}/${settings.repo} · ${settings.branch} · ${settings.path}`
  );

  publishDirectlyButton.disabled = false;
  githubSetupDetails.open = false;
}


function downloadPublishSafetyCopy() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  downloadJsonFile(
    `wonder-hall-safety-copy-${timestamp}.json`,
    data
  );
}

function decodeGithubBase64Json(content) {
  const binary = atob((content || "").replace(/\n/g, ""));
  const bytes = Uint8Array.from(binary, character => character.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function validatePublishData(candidate) {
  if (!candidate || !Array.isArray(candidate.galleries) || !Array.isArray(candidate.resources)) {
    throw new Error(
      "Publishing was blocked because the Wonder Hall data is incomplete."
    );
  }

  if (candidate.galleries.length === 0 || candidate.resources.length === 0) {
    throw new Error(
      "Publishing was blocked because Wonder Hall contains zero galleries or zero resources. " +
      "Restore the published data before trying again."
    );
  }
}

function requiresDestructivePublishConfirmation(liveData, candidate) {
  if (!liveData) return false;

  const liveGalleries = liveData.galleries?.length || 0;
  const liveResources = liveData.resources?.length || 0;
  const newGalleries = candidate.galleries?.length || 0;
  const newResources = candidate.resources?.length || 0;

  const largeGalleryDrop =
    liveGalleries > 0 &&
    (liveGalleries - newGalleries >= 3 || newGalleries < liveGalleries * 0.75);

  const largeResourceDrop =
    liveResources > 0 &&
    (liveResources - newResources >= 5 || newResources < liveResources * 0.75);

  return largeGalleryDrop || largeResourceDrop;
}

async function publishDataDirectlyToGithub() {
  if (!githubConnected) {
    throw new Error("Connect GitHub before publishing.");
  }

  validatePublishData(data);

  // This is a real file download and does not consume browser storage.
  downloadPublishSafetyCopy();

  const settings = saveGithubSettings();
  const contentUrl = buildGithubContentsUrl(settings);

  directPublishProgressText.textContent =
    "Comparing this copy with the live Wonder Hall website…";

  const currentFile = await githubRequest(contentUrl);
  githubConnectionFileSha = currentFile.sha;

  let liveData = null;
  try {
    liveData = decodeGithubBase64Json(currentFile.content);
  } catch (error) {
    console.warn("The live resources.json could not be compared.", error);
  }

  if (requiresDestructivePublishConfirmation(liveData, data)) {
    const liveGalleryCount = liveData?.galleries?.length || 0;
    const liveResourceCount = liveData?.resources?.length || 0;
    const message =
      `Safety warning:

` +
      `Live website: ${liveGalleryCount} galleries and ${liveResourceCount} resources
` +
      `This publish: ${data.galleries.length} galleries and ${data.resources.length} resources

` +
      `This would remove a substantial amount of content. Click OK only if those deletions are intentional.`;

    if (!confirm(message)) {
      throw new Error(
        "Publishing was cancelled. No GitHub files were changed."
      );
    }
  }

  createDeviceBackup("Automatic backup before GitHub publish");

  const publishedMediaRecords = await publishExternalMediaToGithub(settings);

  if (pendingUploads.length) {
    await publishPendingUploadsToGithub(settings);
    validatePublishData(data);
  }

  directPublishProgressText.textContent =
    "Uploading the Wonder Hall changes…";

  const message =
    githubCommitMessageInput.value.trim() ||
    "Update Wonder Hall from Parent Wing";

  const content = encodeUtf8ToBase64(JSON.stringify(data, null, 2));
  const owner = encodeURIComponent(settings.owner);
  const repo = encodeURIComponent(settings.repo);
  const path = settings.path.split("/").map(encodeURIComponent).join("/");
  const putUrl =
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  const result = await githubRequest(putUrl, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      content,
      sha: githubConnectionFileSha,
      branch: settings.branch
    })
  });

  githubConnectionFileSha = result.content?.sha || null;
  result.publishedMediaRecords = publishedMediaRecords;
  return result;
}

function disconnectGithub() {
  githubConnected = false;
  githubConnectionFileSha = null;
  setGithubToken("");
  githubTokenInput.value = "";
  publishDirectlyButton.disabled = true;

  setGithubStatus(
    "disconnected",
    "GitHub is disconnected",
    "Repository settings are remembered, but the access token was removed from this browser session."
  );
}

function ensureSiteSettings() {
  if (!data.siteSettings) {
    data.siteSettings = {
      welcome: "Welcome to",
      title: "Wonder Hall",
      tagline: "Step inside. Your next adventure is waiting.",
      featuredGallery: "space",
      featuredTitle: "Journey Through the Solar System",
      featuredDescription: "Explore NASA resources, watch planets in motion, visit the ISS, and discover the wonders beyond Earth."
    };
  }
}

function populateImageOverview() {
  if (!imageOverviewGrid) return;
  imageOverviewGrid.innerHTML = "";

  data.galleries.forEach(gallery => {
    const card = document.createElement("article");
    card.className = "image-overview-card";
    const art = safeAssetUrl(getGalleryArtwork(gallery));

    card.innerHTML = `
      <img src="${art}" alt="">
      <div>
        <h4>${gallery.icon || "✨"} ${gallery.name}</h4>
        <p>${gallery.artwork?.startsWith("data:") ? "Custom uploaded image" : "Built-in image"}</p>
      </div>
    `;
    imageOverviewGrid.appendChild(card);
  });
}

function populateQuoteEditor() {
  if (!quoteGallerySelect) return;
  quoteGallerySelect.innerHTML = data.galleries
    .map(g => `<option value="${g.id}">${g.name}</option>`)
    .join("");

  loadSelectedQuotes();
}

function loadSelectedQuotes() {
  const gallery = data.galleries.find(g => g.id === quoteGallerySelect.value) || data.galleries[0];
  const quotes = gallery?.quotes || [];
  quoteOneInput.value = quotes[0] || "";
  quoteTwoInput.value = quotes[1] || "";
  quoteThreeInput.value = quotes[2] || "";
}

function populateFeaturedEditor() {
  ensureSiteSettings();
  featuredGallerySelect.innerHTML = data.galleries
    .map(g => `<option value="${g.id}">${g.name}</option>`)
    .join("");
  featuredGallerySelect.value = data.siteSettings.featuredGallery || data.galleries[0]?.id || "";
  featuredTitleInput.value = data.siteSettings.featuredTitle || "";
  featuredDescriptionInput.value = data.siteSettings.featuredDescription || "";
}

function populateHomepageEditor() {
  ensureSiteSettings();
  homepageWelcomeInput.value = data.siteSettings.welcome || "Welcome to";
  homepageTitleInput.value = data.siteSettings.title || "Wonder Hall";
  homepageTaglineInput.value = data.siteSettings.tagline || "";
}

function populatePublishSummary() {
  if (!publishSummary) return;
  const customGalleryImages = data.galleries.filter(g => g.artwork?.startsWith("data:")).length;
  const resourceImages = data.resources.filter(r => r.image).length;

  publishSummary.innerHTML = `
    <div class="publish-summary-item"><strong>${data.galleries.length}</strong><span>Galleries</span></div>
    <div class="publish-summary-item"><strong>${data.resources.length}</strong><span>Resources</span></div>
    <div class="publish-summary-item"><strong>${customGalleryImages}</strong><span>Custom Gallery Images</span></div>
    <div class="publish-summary-item"><strong>${resourceImages}</strong><span>Resource Images</span></div>
  `;
}

function applySiteSettingsToPage() {
  ensureSiteSettings();

  const welcome = document.querySelector(".welcome");
  const title = document.querySelector(".hero h1");
  const tagline = document.querySelector(".hero-tagline");
  const featuredHeading = document.querySelector(".featured-copy h2");
  const featuredDescription = document.querySelector(".featured-copy p");

  if (welcome) welcome.textContent = data.siteSettings.welcome;
  if (title) title.textContent = data.siteSettings.title;
  if (tagline) tagline.textContent = data.siteSettings.tagline;
  if (featuredHeading) featuredHeading.textContent = data.siteSettings.featuredTitle;
  if (featuredDescription) featuredDescription.textContent = data.siteSettings.featuredDescription;
}


function populateVisualGalleryBuilder() {
  if (!visualGalleryBuilder) return;

  visualGalleryBuilder.innerHTML = "";

  data.galleries.forEach((gallery, index) => {
    const item = document.createElement("article");
    item.className = "visual-gallery-item";
    item.dataset.galleryId = gallery.id;
    item.draggable = true;
    item.setAttribute("aria-grabbed", "false");

    item.innerHTML = `
      <img class="visual-gallery-art" src="${safeAssetUrl(getGalleryArtwork(gallery))}" alt="">
      <div class="visual-gallery-body">
        <div class="visual-gallery-drag-label" aria-hidden="true">☰ Drag to move</div>
        <h4>${gallery.icon || "✨"} ${gallery.name}</h4>
        <div class="visual-gallery-order">Position ${index + 1}</div>
      </div>
      <div class="visual-gallery-controls">
        <button type="button" data-move-gallery-up="${gallery.id}" aria-label="Move ${gallery.name} earlier">↑ Earlier</button>
        <button type="button" data-move-gallery-down="${gallery.id}" aria-label="Move ${gallery.name} later">↓ Later</button>
      </div>
    `;

    visualGalleryBuilder.appendChild(item);
  });

  installNativeGalleryDragging();
  updateGalleryOrderLabels();
}

function updateGalleryOrderLabels() {
  [...visualGalleryBuilder.children].forEach((item, index) => {
    const label = item.querySelector(".visual-gallery-order");
    if (label) label.textContent = `Position ${index + 1}`;
  });
}

function installNativeGalleryDragging() {
  if (!visualGalleryBuilder) return;

  let draggedItem = null;

  visualGalleryBuilder.querySelectorAll(".visual-gallery-item").forEach(item => {
    item.addEventListener("dragstart", event => {
      draggedItem = item;
      item.classList.add("is-dragging");
      item.setAttribute("aria-grabbed", "true");

      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", item.dataset.galleryId);
      }
    });

    item.addEventListener("dragend", () => {
      item.classList.remove("is-dragging");
      item.setAttribute("aria-grabbed", "false");
      visualGalleryBuilder
        .querySelectorAll(".visual-gallery-item")
        .forEach(card => card.classList.remove("drag-over"));

      draggedItem = null;
      updateGalleryOrderLabels();
    });

    item.addEventListener("dragover", event => {
      event.preventDefault();
      if (!draggedItem || draggedItem === item) return;

      item.classList.add("drag-over");

      const rect = item.getBoundingClientRect();
      const insertAfter = event.clientY > rect.top + rect.height / 2;

      if (insertAfter) {
        item.after(draggedItem);
      } else {
        item.before(draggedItem);
      }

      updateGalleryOrderLabels();
    });

    item.addEventListener("dragleave", () => {
      item.classList.remove("drag-over");
    });

    item.addEventListener("drop", event => {
      event.preventDefault();
      item.classList.remove("drag-over");
      updateGalleryOrderLabels();
    });
  });
}

function saveVisualGalleryOrder() {
  const ids = [...visualGalleryBuilder.children].map(item => item.dataset.galleryId);
  const ordered = ids.map(id => data.galleries.find(gallery => gallery.id === id)).filter(Boolean);

  if (ordered.length !== data.galleries.length) {
    alert("The gallery order could not be saved.");
    return;
  }

  data.galleries = ordered;
  saveCustomData();
  renderGalleries(data.galleries);
  populateParentWing();
  alert("Gallery order saved.");
}

function moveGalleryByButton(id, direction) {
  const index = data.galleries.findIndex(gallery => gallery.id === id);
  if (index < 0) return;

  const target = index + direction;
  if (target < 0 || target >= data.galleries.length) return;

  const [gallery] = data.galleries.splice(index, 1);
  data.galleries.splice(target, 0, gallery);

  saveCustomData();
  populateVisualGalleryBuilder();
  renderGalleries(data.galleries);
}

function populateUploadGallerySelect() {
  if (!uploadGallerySelect) return;

  const previous = uploadGallerySelect.value;
  uploadGallerySelect.innerHTML = data.galleries
    .map(gallery => `<option value="${gallery.id}">${gallery.name}</option>`)
    .join("");

  if (data.galleries.some(gallery => gallery.id === previous)) {
    uploadGallerySelect.value = previous;
  }
}

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} bytes`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function fileKind(file) {
  if (file.type.startsWith("image/")) return "image";
  if (file.type === "application/pdf") return "pdf";
  if (file.type.startsWith("video/")) return "video";
  return "file";
}

function sanitizeUploadName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function addPendingFiles(files) {
  const galleryId = uploadGallerySelect.value;
  if (!galleryId) {
    alert("Choose a destination gallery first.");
    return;
  }

  [...files].forEach(file => {
    const kind = fileKind(file);
    const maxSize = kind === "video" ? 20 * 1024 * 1024 : 10 * 1024 * 1024;

    if (file.size > maxSize) {
      alert(`${file.name} is too large. Use a link for large videos. Smaller files can be uploaded directly.`);
      return;
    }

    pendingUploads.push({
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      file,
      galleryId,
      kind,
      name: file.name.replace(/\.[^.]+$/, ""),
      description: `${kind === "pdf" ? "PDF document" : kind === "video" ? "Video resource" : "Image resource"}`
    });
  });

  renderPendingUploads();
}

function renderPendingUploads() {
  pendingUploadsList.innerHTML = "";
  pendingUploadsPanel.hidden = pendingUploads.length === 0;
  pendingUploadsCount.textContent = `${pendingUploads.length} ${pendingUploads.length === 1 ? "item" : "items"}`;

  pendingUploads.forEach(upload => {
    const gallery = data.galleries.find(g => g.id === upload.galleryId);
    const item = document.createElement("article");
    item.className = "pending-upload-item";

    const preview = document.createElement("div");
    preview.className = "pending-upload-preview";

    if (upload.kind === "image") {
      const image = document.createElement("img");
      image.src = URL.createObjectURL(upload.file);
      image.onload = () => URL.revokeObjectURL(image.src);
      preview.appendChild(image);
    } else if (upload.kind === "video") {
      preview.textContent = "🎬";
    } else if (upload.kind === "pdf") {
      preview.textContent = "📄";
    } else {
      preview.textContent = "📎";
    }

    const information = document.createElement("div");
    information.className = "pending-upload-info";
    information.innerHTML = `
      <h5>${upload.file.name}</h5>
      <p>${gallery?.name || upload.galleryId} · ${formatFileSize(upload.file.size)}</p>
    `;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      pendingUploads = pendingUploads.filter(item => item.id !== upload.id);
      renderPendingUploads();
    });

    item.append(preview, information, remove);
    pendingUploadsList.appendChild(item);
  });
}

async function uploadPendingFileToGithub(upload, settings) {
  const owner = encodeURIComponent(settings.owner);
  const repo = encodeURIComponent(settings.repo);
  const extension = upload.file.name.includes(".")
    ? upload.file.name.slice(upload.file.name.lastIndexOf("."))
    : "";

  const baseName = sanitizeUploadName(upload.file.name.replace(extension, "")) || "resource";
  const remotePath = `assets/uploads/${Date.now()}-${baseName}${extension}`;
  const encodedPath = remotePath.split("/").map(encodeURIComponent).join("/");

  const arrayBuffer = await upload.file.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);
  let binary = "";
  const chunkSize = 0x8000;

  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }

  const content = btoa(binary);

  await githubRequest(`https://api.github.com/repos/${owner}/${repo}/contents/${encodedPath}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: `Upload ${upload.file.name} from Wonder Hall`,
      content,
      branch: settings.branch
    })
  });

  return remotePath;
}

async function publishPendingUploadsToGithub(settings) {
  const createdResources = [];

  for (let index = 0; index < pendingUploads.length; index++) {
    const upload = pendingUploads[index];
    directPublishProgressText.textContent = `Uploading ${index + 1} of ${pendingUploads.length}: ${upload.file.name}`;

    const remotePath = await uploadPendingFileToGithub(upload, settings);

    createdResources.push({
      name: upload.name,
      url: remotePath,
      category: upload.galleryId,
      description: upload.description,
      type: upload.kind,
      downloadable: true,
      image: upload.kind === "image" ? remotePath : ""
    });
  }

  data.resources.push(...createdResources);
  pendingUploads = [];
  renderPendingUploads();
  saveCustomData();
}

function populateParentWing() {
  resourceCategoryInput.innerHTML = data.galleries
    .map(g => `<option value="${g.id}">${g.name}</option>`).join("");

  parentResourceList.innerHTML = "";
  parentResourceList.classList.add("parent-resource-list");

  data.resources.forEach((resource,index) => {
    const gallery = data.galleries.find(g => g.id === resource.category);
    const row = document.createElement("article");
    row.className = "parent-list-item";

    let preview;

    if (resource.image) {
      preview = document.createElement("img");
      preview.className = "parent-resource-thumbnail";
      preview.src = safeAssetUrl(resource.image);
      preview.alt = "";
    } else {
      preview = document.createElement("div");
      preview.className = "parent-resource-placeholder";
      preview.textContent = "No image";
    }

    const information = document.createElement("div");
    information.innerHTML = `<h4>${resource.name}</h4>
      <p>${gallery?.name || resource.category} · ${resource.url}</p>`;

    const actions = document.createElement("div");
    actions.className = "parent-list-actions";
    actions.innerHTML = `
      <button type="button" data-edit-resource="${index}">Edit</button>
      <button type="button" data-delete-resource="${index}">Delete</button>
    `;

    row.append(preview, information, actions);
    parentResourceList.appendChild(row);
  });

  parentGalleryList.innerHTML = "";
  data.galleries.forEach((gallery, index) => {
    const count = data.resources.filter(r => r.category === gallery.id).length;
    const row = document.createElement("article");
    row.className = "parent-list-item";

    const image = document.createElement("img");
    image.className = "parent-gallery-thumbnail";
    image.src = safeAssetUrl(getGalleryArtwork(gallery));
    image.alt = "";

    const information = document.createElement("div");
    information.innerHTML = `<h4>${gallery.icon} ${gallery.name}</h4>
      <p>${count} resources · ID: ${gallery.id}</p>`;

    const actions = document.createElement("div");
    actions.className = "parent-list-actions";
    actions.innerHTML = `
      <button type="button" data-edit-gallery="${index}">Edit</button>
      <button class="danger-action" type="button" data-delete-gallery="${index}">Delete</button>`;

    row.append(image, information, actions);
    parentGalleryList.appendChild(row);
  });

  renderParentBookmarks();
  populateImageOverview();
  populateQuoteEditor();
  populateFeaturedEditor();
  populateHomepageEditor();
  populatePublishSummary();
  populateVisualGalleryBuilder();
  populateUploadGallerySelect();
  renderPendingUploads();
  loadGithubSettingsIntoForm();
  updateMaintenanceStatus();
}

function renderParentBookmarks() {
  if (!parentBookmarksList || !parentBookmarksEmpty) return;

  const favorites = getStoredSet(FAVORITES_KEY);
  const saved = data.resources.filter(r => favorites.has(r.url));

  parentBookmarksList.innerHTML = "";
  parentBookmarksEmpty.hidden = saved.length !== 0;

  saved.forEach(resource => {
    const row = document.createElement("article");
    row.className = "parent-list-item";
    row.innerHTML = `<div><h4>${resource.name}</h4><p>${resource.url}</p></div>`;
    parentBookmarksList.appendChild(row);
  });
}
function updateMaintenanceStatus(message="") {
  maintenanceStatus.textContent = message ||
    `${data.galleries.length} galleries · ${data.resources.length} resources · ` +
    `${getStoredSet(FAVORITES_KEY).size} bookmarks · ${getStoredSet(PASSPORT_KEY).size} passport stamps`;
}
function downloadJson(filename,obj) {
  const blob = new Blob([JSON.stringify(obj,null,2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  setTimeout(() => URL.revokeObjectURL(url),1000);
}

parentPasswordForm.addEventListener("submit", async event => {
  event.preventDefault();
  const password = parentPasswordInput.value;
  const existing = localStorage.getItem(PARENT_HASH_KEY);

  if (!existing) {
    if (password.length < 6) {
      passwordError.textContent = "Use at least 6 characters.";
      passwordError.hidden = false;
      return;
    }
    if (password !== parentPasswordConfirm.value) {
      passwordError.textContent = "The passwords do not match.";
      passwordError.hidden = false;
      return;
    }
    localStorage.setItem(PARENT_HASH_KEY, await hashPassword(password));
    parentUnlocked = true;
  } else {
    if (await hashPassword(password) !== existing) {
      passwordError.textContent = "Incorrect password.";
      passwordError.hidden = false;
      return;
    }
    parentUnlocked = true;
  }

  parentPasswordModal.hidden = true;
  showParentWing();
});

parentWingButton.addEventListener("click", () => {
  if (parentUnlocked) showParentWing(); else openPasswordModal();
});
cancelPasswordButton.addEventListener("click", () => parentPasswordModal.hidden = true);
lockParentWingButton.addEventListener("click", () => {
  parentUnlocked = false;
  showHome();
});
document.querySelector(".parent-back").addEventListener("click", () => showHome());

document.querySelectorAll(".parent-tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".parent-tab").forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const target = button.dataset.parentTab;
    const panels = {
      resources: document.getElementById("parentResourcesPanel"),
      galleries: document.getElementById("parentGalleriesPanel"),
      images: document.getElementById("parentImagesPanel"),
      quotes: document.getElementById("parentQuotesPanel"),
      featured: document.getElementById("parentFeaturedPanel"),
      homepage: document.getElementById("parentHomepagePanel"),
      bookmarks: document.getElementById("parentBookmarksPanel"),
      backups: document.getElementById("parentBackupsPanel"),
      maintenance: document.getElementById("parentMaintenancePanel"),
      publish: document.getElementById("parentPublishPanel")
    };

    Object.entries(panels).forEach(([name, panel]) => {
      if (panel) panel.hidden = name !== target;
    });

    if (target === "bookmarks") renderParentBookmarks();
    if (target === "backups") renderDeviceBackups();
    if (target === "galleries") populateVisualGalleryBuilder();
    if (target === "images") populateImageOverview();
    if (target === "quotes") populateQuoteEditor();
    if (target === "featured") populateFeaturedEditor();
    if (target === "homepage") populateHomepageEditor();
    if (target === "publish") populatePublishSummary();
  });
});

quoteGallerySelect?.addEventListener("change", loadSelectedQuotes);

quoteEditorForm?.addEventListener("submit", event => {
  event.preventDefault();
  const gallery = data.galleries.find(g => g.id === quoteGallerySelect.value);
  if (!gallery) return;

  gallery.quotes = [
    quoteOneInput.value.trim(),
    quoteTwoInput.value.trim(),
    quoteThreeInput.value.trim()
  ].filter(Boolean);

  saveCustomData();
  alert("Quotes saved.");
});

featuredEditorForm?.addEventListener("submit", event => {
  event.preventDefault();
  ensureSiteSettings();

  data.siteSettings.featuredGallery = featuredGallerySelect.value;
  data.siteSettings.featuredTitle = featuredTitleInput.value.trim();
  data.siteSettings.featuredDescription = featuredDescriptionInput.value.trim();

  saveCustomData();
  applySiteSettingsToPage();
  alert("Featured Exhibit saved.");
});

homepageEditorForm?.addEventListener("submit", event => {
  event.preventDefault();
  ensureSiteSettings();

  data.siteSettings.welcome = homepageWelcomeInput.value.trim();
  data.siteSettings.title = homepageTitleInput.value.trim();
  data.siteSettings.tagline = homepageTaglineInput.value.trim();

  saveCustomData();
  applySiteSettingsToPage();
  alert("Homepage saved.");
});


githubConnectionForm?.addEventListener("submit", async event => {
  event.preventDefault();

  setDirectPublishState();
  setGithubStatus("disconnected", "Testing GitHub connection…", "Wonder Hall is checking the repository and token.");

  try {
    await testGithubConnection();
  } catch (error) {
    githubConnected = false;
    publishDirectlyButton.disabled = true;

    let message = error.message;

    if (error?.name === "QuotaExceededError") {
      message =
        "Browser storage became full. Publishing was stopped before GitHub was changed. " +
        "A downloaded safety copy should be in your Downloads folder.";
    }
    if (error.status === 401) message = "GitHub rejected the token. Check that it was copied correctly and has not expired.";
    if (error.status === 403) message = "The token does not have permission to update this repository. Grant Contents: Read and write.";
    if (error.status === 404) message = "The repository, branch, or resources.json path could not be found.";

    setGithubStatus("error", "GitHub connection failed", message);
  }
});

disconnectGithubButton?.addEventListener("click", disconnectGithub);

publishDirectlyButton?.addEventListener("click", async () => {
  setDirectPublishState({ loading: true });

  try {
    const result = await publishDataDirectlyToGithub();
    await clearPublishedMediaRecords(result.publishedMediaRecords);
    const commitUrl = result.commit?.html_url || "";

    directPublishProgressText.textContent = "GitHub accepted the update.";
    setDirectPublishState({ success: true });

    directPublishSuccessText.textContent =
      "GitHub accepted the new Wonder Hall data. GitHub Pages normally refreshes after the new commit is processed.";

    if (commitUrl) {
      publishedCommitLink.href = commitUrl;
      publishedCommitLink.hidden = false;
    } else {
      publishedCommitLink.hidden = true;
    }

    setGithubStatus(
      "connected",
      "Wonder Hall was published",
      "The latest Parent Wing changes were committed directly to GitHub."
    );
  } catch (error) {
    let message = error.message;

    if (error.status === 401) {
      message = "The GitHub token is invalid or expired. Enter a new token and reconnect.";
    } else if (error.status === 403) {
      message = "GitHub refused the update. Confirm the token has Contents: Read and write for this repository.";
    } else if (error.status === 404) {
      message = "GitHub could not find the repository, branch, or resources.json file.";
    } else if (error.status === 409) {
      message = "GitHub detected a conflict. Reconnect and try publishing again.";
    } else if (error.status === 422) {
      message = "GitHub could not accept the update. Check the branch and repository settings.";
    }

    setDirectPublishState({ error: message });
    setGithubStatus("error", "Publishing failed", message);
  } finally {
    directPublishProgress.hidden = true;
    publishDirectlyButton.disabled = !githubConnected;
  }
});

publishWonderHallButton?.addEventListener("click", async () => {
  ensureSiteSettings();

  const instructions = `WONDER HALL PUBLISH INSTRUCTIONS

1. Extract this ZIP file.
2. Copy resources.json.
3. Open Documents\\GitHub\\wonder-hall.
4. Paste resources.json into that folder.
5. Choose Replace the file in the destination.
6. Open GitHub Desktop.
7. Enter: Publish Wonder Hall updates
8. Click Commit to main.
9. Click Push origin.
10. Wait about one minute, then refresh Wonder Hall on your devices.

You do not need to open resources.json.
`;

  const zip = new JSZip();
  const manualData = JSON.parse(JSON.stringify(data));

  const externalMediaRecords = await getAllMediaRecords();
  for (const media of externalMediaRecords) {
    zip.file(media.path, media.blob);
  }

  for (const upload of pendingUploads) {
    const extension = upload.file.name.includes(".")
      ? upload.file.name.slice(upload.file.name.lastIndexOf("."))
      : "";
    const baseName = sanitizeUploadName(upload.file.name.replace(extension, "")) || "resource";
    const remotePath = `assets/uploads/${Date.now()}-${baseName}${extension}`;

    zip.file(remotePath, upload.file);

    manualData.resources.push({
      name: upload.name,
      url: remotePath,
      category: upload.galleryId,
      description: upload.description,
      type: upload.kind,
      downloadable: true,
      image: upload.kind === "image" ? remotePath : ""
    });
  }

  zip.file("resources.json", JSON.stringify(manualData, null, 2));
  zip.file("PUBLISH-INSTRUCTIONS.txt", instructions);

  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "wonder-hall-publish-package.zip";
  link.click();

  setTimeout(() => URL.revokeObjectURL(url), 1000);
  publishSuccessMessage.hidden = false;
});



saveGalleryOrderButton?.addEventListener("click", saveVisualGalleryOrder);

visualGalleryBuilder?.addEventListener("click", event => {
  const upId = event.target.dataset.moveGalleryUp;
  const downId = event.target.dataset.moveGalleryDown;

  if (upId) moveGalleryByButton(upId, -1);
  if (downId) moveGalleryByButton(downId, 1);
});

resourceFilesInput?.addEventListener("change", event => {
  addPendingFiles(event.target.files);
  event.target.value = "";
});

["dragenter", "dragover"].forEach(type => {
  resourceDropZone?.addEventListener(type, event => {
    event.preventDefault();
    resourceDropZone.classList.add("is-dragging");
  });
});

["dragleave", "drop"].forEach(type => {
  resourceDropZone?.addEventListener(type, event => {
    event.preventDefault();
    resourceDropZone.classList.remove("is-dragging");
  });
});

resourceDropZone?.addEventListener("drop", event => {
  const files = event.dataTransfer?.files;
  if (files?.length) addPendingFiles(files);
});

addResourceLinkButton?.addEventListener("click", () => {
  resourceLinkNameInput.value = "";
  resourceLinkUrlInput.value = "";
  resourceLinkDescriptionInput.value = "";
  resourceLinkDialog.hidden = false;
  resourceLinkNameInput.focus();
});

cancelResourceLinkButton?.addEventListener("click", () => {
  resourceLinkDialog.hidden = true;
});

resourceLinkForm?.addEventListener("submit", event => {
  event.preventDefault();

  const galleryId = uploadGallerySelect.value;
  if (!galleryId) return;

  data.resources.push({
    name: resourceLinkNameInput.value.trim(),
    url: resourceLinkUrlInput.value.trim(),
    category: galleryId,
    description: resourceLinkDescriptionInput.value.trim() || "Website resource",
    type: "link",
    downloadable: false,
    image: ""
  });

  saveCustomData();
  resourceLinkDialog.hidden = true;
  populateParentWing();
});

resourceEditorForm.addEventListener("submit", event => {
  event.preventDefault();

  const index = resourceEditIndex.value === "" ? null : Number(resourceEditIndex.value);
  const existingResource = index === null ? null : data.resources[index];

  let image = existingResource?.image || "";

  if (removeCurrentResourceImage) {
    image = "";
  }

  if (pendingResourceImage) {
    image = pendingResourceImage;
  }

  const resource = {
    ...existingResource,
    name: resourceNameInput.value.trim(),
    url: resourceUrlInput.value.trim(),
    category: resourceCategoryInput.value,
    description: resourceDescriptionInput.value.trim(),
    image
  };

  if (index === null) data.resources.push(resource);
  else data.resources[index] = resource;

  saveCustomData();
  clearResourceEditor();
  populateParentWing();

  if (!homeView.hidden) {
    renderGalleries(data.galleries);
  }
});

parentResourceList.addEventListener("click", event => {
  const edit = event.target.dataset.editResource;
  const del = event.target.dataset.deleteResource;
  if (edit !== undefined) {
    const resource = data.resources[Number(edit)];
    resourceEditIndex.value = edit;
    resourceNameInput.value = resource.name;
    resourceUrlInput.value = resource.url;
    resourceCategoryInput.value = resource.category;
    resourceDescriptionInput.value = resource.description;

    pendingResourceImage = null;
    removeCurrentResourceImage = false;
    resourceImageInput.value = "";
    showResourceImagePreview(safeAssetUrl(getResourceImage(resource)));

    window.scrollTo({top:0,behavior:"auto"});
  }
  if (del !== undefined && confirm("Delete this resource from the local Parent Wing data?")) {
    data.resources.splice(Number(del),1);
    saveCustomData();
    populateParentWing();
  }
});
resourceImageInput.addEventListener("change", async event => {
  const file = event.target.files[0];
  if (!file) return;

  try {
    const blob = await readAndResizeResourceImage(file);
    const path = makeMediaPath(
      "resource",
      resourceNameInput.value.trim() || "resource-image",
      extensionForMime(blob.type)
    );
    await stageMediaBlob(path, blob, { kind: "resource-image" });
    pendingResourceImage = path;
    removeCurrentResourceImage = false;
    showResourceImagePreview(safeAssetUrl(path));
  } catch (error) {
    alert(error.message);
    event.target.value = "";
  }
});

removeResourceImageButton.addEventListener("click", async () => {
  if (pendingResourceImage && isManagedMediaPath(pendingResourceImage)) {
    await deleteMediaRecord(pendingResourceImage);
    const objectUrl = mediaObjectUrls.get(pendingResourceImage);
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    mediaObjectUrls.delete(pendingResourceImage);
    await updateExternalMediaStatus();
  }
  pendingResourceImage = null;
  removeCurrentResourceImage = true;
  resourceImageInput.value = "";
  showResourceImagePreview(null);
});

cancelResourceEdit.addEventListener("click", clearResourceEditor);

galleryEditorForm.addEventListener("submit", event => {
  event.preventDefault();

  const editIndex = galleryEditIndex.value === "" ? null : Number(galleryEditIndex.value);
  const existingGallery = editIndex === null ? null : data.galleries[editIndex];

  let id = existingGallery?.id || slugify(galleryNameInput.value);
  if (!existingGallery) {
    let suffix = 2;
    const original = id;
    while (data.galleries.some(g => g.id === id)) id = `${original}-${suffix++}`;
  }

  let artwork = existingGallery?.artwork || "assets/gallery-art-v353/futurescape.jpg";
  if (removeCurrentGalleryImage) {
    artwork = "assets/gallery-art-v353/futurescape.jpg";
  }
  if (pendingGalleryImage) {
    artwork = pendingGalleryImage;
  }

  const gallery = {
    ...existingGallery,
    id,
    name: galleryNameInput.value.trim(),
    icon: galleryIconInput.value.trim() || "✨",
    description: galleryDescriptionInput.value.trim(),
    roomName: galleryRoomNameInput.value.trim() || "Discovery Room",
    artwork
  };

  if (editIndex === null) data.galleries.push(gallery);
  else data.galleries[editIndex] = gallery;

  saveCustomData();
  clearGalleryEditor();
  populateParentWing();
  renderGalleries(data.galleries);
});


galleryImageInput.addEventListener("change", async event => {
  const file = event.target.files[0];
  if (!file) return;

  try {
    const blob = await readAndResizeGalleryImage(file);
    const path = makeMediaPath(
      "gallery",
      galleryNameInput.value.trim() || "gallery-image",
      extensionForMime(blob.type)
    );
    await stageMediaBlob(path, blob, { kind: "gallery-image" });
    pendingGalleryImage = path;
    removeCurrentGalleryImage = false;
    showGalleryImagePreview(safeAssetUrl(path));
  } catch (error) {
    alert(error.message);
    event.target.value = "";
  }
});

removeGalleryImageButton.addEventListener("click", async () => {
  if (pendingGalleryImage && isManagedMediaPath(pendingGalleryImage)) {
    await deleteMediaRecord(pendingGalleryImage);
    const objectUrl = mediaObjectUrls.get(pendingGalleryImage);
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    mediaObjectUrls.delete(pendingGalleryImage);
    await updateExternalMediaStatus();
  }
  pendingGalleryImage = null;
  removeCurrentGalleryImage = true;
  galleryImageInput.value = "";
  showGalleryImagePreview(null);
});

cancelGalleryEdit.addEventListener("click", clearGalleryEditor);

parentGalleryList.addEventListener("click", event => {
  const editValue = event.target.dataset.editGallery;
  const deleteValue = event.target.dataset.deleteGallery;

  if (editValue !== undefined) {
    const index = Number(editValue);
    const gallery = data.galleries[index];
    if (!gallery) return;

    galleryEditIndex.value = String(index);
    galleryNameInput.value = gallery.name;
    galleryIconInput.value = gallery.icon || "✨";
    galleryDescriptionInput.value = gallery.description || "";
    galleryRoomNameInput.value = gallery.roomName || "";

    pendingGalleryImage = null;
    removeCurrentGalleryImage = false;
    galleryImageInput.value = "";
    showGalleryImagePreview(safeAssetUrl(getGalleryArtwork(gallery)));

    galleryEditorHeading.textContent = "Edit Gallery";
    saveGalleryButton.textContent = "Save Gallery Changes";
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  if (deleteValue !== undefined) {
    const index = Number(deleteValue);
    const gallery = data.galleries[index];
    if (!gallery) return;

    const resourceCount = data.resources.filter(resource => resource.category === gallery.id).length;
    const message = resourceCount
      ? `Delete "${gallery.name}" and its ${resourceCount} linked resources from the local Parent Wing data?`
      : `Delete "${gallery.name}" from the local Parent Wing data?`;

    if (!confirm(message)) return;

    data.galleries.splice(index, 1);
    data.resources = data.resources.filter(resource => resource.category !== gallery.id);
    saveCustomData();
    clearGalleryEditor();
    populateParentWing();
    renderGalleries(data.galleries);
  }
});

exportResourcesButton.addEventListener("click", () => downloadJson("resources.json", data));
exportBackupButton.addEventListener("click", () => downloadJson("wonder-hall-backup.json", {
  data,
  favorites:[...getStoredSet(FAVORITES_KEY)],
  passport:[...getStoredSet(PASSPORT_KEY)],
  exportedAt:new Date().toISOString()
}));
importResourcesInput.addEventListener("change", async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!Array.isArray(imported.galleries) || !Array.isArray(imported.resources)) throw new Error();
    data = imported;
    saveCustomData();
    populateParentWing();
    updateMaintenanceStatus("Import successful.");
  } catch {
    updateMaintenanceStatus("Import failed: the file is not a valid Wonder Hall resources file.");
  }
  event.target.value = "";
});
validateDataButton.addEventListener("click", () => {
  const missingGallery = data.resources.filter(r => !data.galleries.some(g => g.id === r.category));
  const missingFields = data.resources.filter(r => !r.name || !r.url || !r.category || !r.description);
  updateMaintenanceStatus(
    missingGallery.length || missingFields.length
      ? `Check needed: ${missingGallery.length} resources use a missing gallery; ${missingFields.length} resources have missing fields.`
      : `Data looks good: ${data.galleries.length} galleries and ${data.resources.length} resources.`
  );
});
resetDeviceDataButton.addEventListener("click", () => {
  if (!confirm("Reset local Parent Wing edits, favorites, passport stamps, and the Parent Wing password on this device?")) return;
  [CUSTOM_DATA_KEY,FAVORITES_KEY,PASSPORT_KEY,PARENT_HASH_KEY].forEach(key => localStorage.removeItem(key));
  parentUnlocked = false;
  location.reload();
});

searchInput.addEventListener("input", event => {
  if (homeView.hidden) showHome();
  renderSearchResults(event.target.value);
});
backButton.addEventListener("click", () => showHome());
document.querySelectorAll(".collection-back").forEach(button => button.addEventListener("click", () => showHome()));
brandHome.addEventListener("click", event => { event.preventDefault(); showHome(); });
featuredButton.addEventListener("click", () => { ensureSiteSettings(); openGallery(data.siteSettings.featuredGallery || "space"); });
favoritesButton.addEventListener("click", () => showFavorites());
passportButton.addEventListener("click", () => showPassport());
stampButton.addEventListener("click", () => {
  if (!currentGalleryId) return;
  const passport = getStoredSet(PASSPORT_KEY);
  passport.add(currentGalleryId);
  saveStoredSet(PASSPORT_KEY, passport);
  stampButton.textContent = "✓ Passport Stamp Added";
});


window.addEventListener("popstate", event => {
  const state = event.state;

  handlingBrowserHistory = true;

  if (!state || state.wonderHallView === "home") {
    showHome({ updateHistory: false });
  } else if (state.wonderHallView === "gallery" && state.galleryId) {
    openGallery(state.galleryId, { updateHistory: false });
  } else if (state.wonderHallView === "favorites") {
    showFavorites({ updateHistory: false });
  } else if (state.wonderHallView === "passport") {
    showPassport({ updateHistory: false });
  } else if (state.wonderHallView === "parent") {
    if (parentUnlocked) {
      showParentWing({ updateHistory: false });
    } else {
      showHome({ updateHistory: false });
    }
  } else {
    showHome({ updateHistory: false });
  }

  handlingBrowserHistory = false;
});

history.replaceState(
  { wonderHallView: "home" },
  "",
  window.location.href
);


downloadPublishSafetyCopyButton?.addEventListener(
  "click",
  downloadPublishSafetyCopy
);

createDeviceBackupButton?.addEventListener("click", () => {
  createDeviceBackup("Manual backup");
  backupStatusMessage.textContent = "Backup created.";
  renderDeviceBackups();
});

downloadCurrentDataButton?.addEventListener("click", () => {
  downloadJsonFile("wonder-hall-current-data.json", data);
});

deviceBackupList?.addEventListener("click", event => {
  const restoreId = event.target.dataset.restoreBackup;
  const downloadId = event.target.dataset.downloadBackup;
  const deleteId = event.target.dataset.deleteBackup;
  const backups = getDeviceBackups();

  if (restoreId) {
    const backup = backups.find(item => item.id === restoreId);
    if (!backup) return;

    if (!confirm("Restore this backup? A new safety backup of the current data will be created first.")) {
      return;
    }

    createDeviceBackup("Safety backup before restore");
    data = cloneData(backup.data);
    localStorage.setItem(CUSTOM_DATA_KEY, JSON.stringify(data));
    populateParentWing();
    renderGalleries(data.galleries);
    backupStatusMessage.textContent = "Backup restored. Publish when you are ready.";
  }

  if (downloadId) {
    const backup = backups.find(item => item.id === downloadId);
    if (backup) {
      downloadJsonFile(
        `wonder-hall-backup-${backup.createdAt.slice(0, 10)}.json`,
        backup.data
      );
    }
  }

  if (deleteId) {
    saveDeviceBackups(backups.filter(item => item.id !== deleteId));
    renderDeviceBackups();
  }
});

loadData();
