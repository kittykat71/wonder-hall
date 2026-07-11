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

let data = { galleries: [], resources: [] };
let currentGalleryId = null;
let parentUnlocked = false;
let pendingGalleryImage = null;
let removeCurrentGalleryImage = false;
let pendingResourceImage = null;
let removeCurrentResourceImage = false;
let githubConnected = false;
let githubConnectionFileSha = null;

const FAVORITES_KEY = "wonderHallFavorites";
const PASSPORT_KEY = "wonderHallPassport";
const CUSTOM_DATA_KEY = "wonderHallCustomData";
const PARENT_HASH_KEY = "wonderHallParentHash";
const GITHUB_SETTINGS_KEY = "wonderHallGithubSettings";
const GITHUB_TOKEN_SESSION_KEY = "wonderHallGithubToken";

function getStoredSet(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key) || "[]")); }
  catch { return new Set(); }
}
function saveStoredSet(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]));
}
function saveCustomData() {
  localStorage.setItem(CUSTOM_DATA_KEY, JSON.stringify(data));
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
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith("image/")) {
      reject(new Error("Choose a PNG, JPEG, or WebP image."));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error("The image could not be read."));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("The image could not be opened."));
      image.onload = () => {
        const maxWidth = 900;
        const maxHeight = 650;
        const scale = Math.min(1, maxWidth / image.width, maxHeight / image.height);
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);

        resolve(canvas.toDataURL("image/jpeg", 0.84));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
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
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith("image/")) {
      reject(new Error("Choose a PNG, JPEG, or WebP image."));
      return;
    }

    const reader = new FileReader();

    reader.onerror = () => reject(new Error("The image could not be read."));

    reader.onload = () => {
      const image = new Image();

      image.onerror = () => reject(new Error("The image could not be opened."));

      image.onload = () => {
        const maxWidth = 900;
        const maxHeight = 650;
        const scale = Math.min(1, maxWidth / image.width, maxHeight / image.height);
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);

        resolve(canvas.toDataURL("image/jpeg", 0.84));
      };

      image.src = reader.result;
    };

    reader.readAsDataURL(file);
  });
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

  // Uploaded Parent Wing images are stored as data URLs.
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

async function loadData() {
  try {
    const custom = localStorage.getItem(CUSTOM_DATA_KEY);
    if (custom) {
      data = JSON.parse(custom);
    } else {
      const response = await fetch("resources.json?v=400", { cache:"no-store" });
      if (!response.ok) throw new Error(`Could not load resources.json (${response.status})`);
      data = await response.json();
    }
    ensureSiteSettings();
    applySiteSettingsToPage();
    renderGalleries(data.galleries);
    showEntranceQuote();
  } catch (error) {
    console.error(error);
    galleryGrid.innerHTML = `<p class="empty-state">Wonder Hall could not load its resource list.</p>`;
  }
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
  link.href = resource.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
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

function openGallery(id) {
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
  window.scrollTo({top:0,behavior:"auto"});
}

function showHome() {
  hideAllViews();
  homeView.hidden = false;
  searchInput.value = "";
  searchResultsSection.hidden = true;
  renderGalleries(data.galleries);
  showEntranceQuote();
  window.scrollTo({top:0,behavior:"auto"});
}
function showFavorites() {
  hideAllViews();
  favoritesView.hidden = false;
  const favorites = getStoredSet(FAVORITES_KEY);
  const saved = data.resources.filter(r => favorites.has(r.url));
  favoritesGrid.innerHTML = "";
  favoritesEmpty.hidden = saved.length !== 0;
  saved.forEach(resource => favoritesGrid.appendChild(createResourceCard(resource)));
  window.scrollTo({top:0,behavior:"auto"});
}
function showPassport() {
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

function showParentWing() {
  hideAllViews();
  parentWingView.hidden = false;
  populateParentWing();
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

async function publishDataDirectlyToGithub() {
  if (!githubConnected) {
    throw new Error("Connect GitHub before publishing.");
  }

  const settings = saveGithubSettings();
  const contentUrl = buildGithubContentsUrl(settings);

  directPublishProgressText.textContent = "Checking the latest GitHub version…";
  const currentFile = await githubRequest(contentUrl);
  githubConnectionFileSha = currentFile.sha;

  directPublishProgressText.textContent = "Uploading the Wonder Hall changes…";

  const message = githubCommitMessageInput.value.trim() || "Update Wonder Hall from Parent Wing";
  const content = encodeUtf8ToBase64(JSON.stringify(data, null, 2));

  const owner = encodeURIComponent(settings.owner);
  const repo = encodeURIComponent(settings.repo);
  const path = settings.path.split("/").map(encodeURIComponent).join("/");
  const putUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

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
  loadGithubSettingsIntoForm();
  updateMaintenanceStatus();
}

function renderParentBookmarks() {
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
document.querySelector(".parent-back").addEventListener("click", showHome);

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
      maintenance: document.getElementById("parentMaintenancePanel"),
      publish: document.getElementById("parentPublishPanel")
    };

    Object.entries(panels).forEach(([name, panel]) => {
      if (panel) panel.hidden = name !== target;
    });

    if (target === "bookmarks") renderParentBookmarks();
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
  zip.file("resources.json", JSON.stringify(data, null, 2));
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
    pendingResourceImage = await readAndResizeResourceImage(file);
    removeCurrentResourceImage = false;
    showResourceImagePreview(pendingResourceImage);
  } catch (error) {
    alert(error.message);
    event.target.value = "";
  }
});

removeResourceImageButton.addEventListener("click", () => {
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
    pendingGalleryImage = await readAndResizeGalleryImage(file);
    removeCurrentGalleryImage = false;
    showGalleryImagePreview(pendingGalleryImage);
  } catch (error) {
    alert(error.message);
    event.target.value = "";
  }
});

removeGalleryImageButton.addEventListener("click", () => {
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
backButton.addEventListener("click", showHome);
document.querySelectorAll(".collection-back").forEach(button => button.addEventListener("click", showHome));
brandHome.addEventListener("click", event => { event.preventDefault(); showHome(); });
featuredButton.addEventListener("click", () => { ensureSiteSettings(); openGallery(data.siteSettings.featuredGallery || "space"); });
favoritesButton.addEventListener("click", showFavorites);
passportButton.addEventListener("click", showPassport);
stampButton.addEventListener("click", () => {
  if (!currentGalleryId) return;
  const passport = getStoredSet(PASSPORT_KEY);
  passport.add(currentGalleryId);
  saveStoredSet(PASSPORT_KEY, passport);
  stampButton.textContent = "✓ Passport Stamp Added";
});

loadData();
