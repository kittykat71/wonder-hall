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
const cancelResourceEdit = document.getElementById("cancelResourceEdit");
const parentResourceList = document.getElementById("parentResourceList");

const galleryEditorForm = document.getElementById("galleryEditorForm");
const galleryNameInput = document.getElementById("galleryNameInput");
const galleryIconInput = document.getElementById("galleryIconInput");
const galleryDescriptionInput = document.getElementById("galleryDescriptionInput");
const galleryRoomNameInput = document.getElementById("galleryRoomNameInput");
const parentGalleryList = document.getElementById("parentGalleryList");

const parentBookmarksList = document.getElementById("parentBookmarksList");
const parentBookmarksEmpty = document.getElementById("parentBookmarksEmpty");
const exportResourcesButton = document.getElementById("exportResourcesButton");
const exportBackupButton = document.getElementById("exportBackupButton");
const importResourcesInput = document.getElementById("importResourcesInput");
const validateDataButton = document.getElementById("validateDataButton");
const maintenanceStatus = document.getElementById("maintenanceStatus");
const resetDeviceDataButton = document.getElementById("resetDeviceDataButton");

let data = { galleries: [], resources: [] };
let currentGalleryId = null;
let parentUnlocked = false;

const FAVORITES_KEY = "wonderHallFavorites";
const PASSPORT_KEY = "wonderHallPassport";
const CUSTOM_DATA_KEY = "wonderHallCustomData";
const PARENT_HASH_KEY = "wonderHallParentHash";

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

async function loadData() {
  try {
    const custom = localStorage.getItem(CUSTOM_DATA_KEY);
    if (custom) {
      data = JSON.parse(custom);
    } else {
      const response = await fetch("resources.json?v=353", { cache:"no-store" });
      if (!response.ok) throw new Error(`Could not load resources.json (${response.status})`);
      data = await response.json();
    }
    renderGalleries(data.galleries);
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
      card.style.setProperty("--gallery-art", `url("${gallery.artwork}?v=353")`);
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
  link.innerHTML = `<h3>${resource.name}</h3><p>${resource.description}</p><span>Visit resource ↗</span>`;
  link.style.color = "inherit";
  link.style.textDecoration = "none";

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
    if (favorites.has(key)) favorites.delete(key); else favorites.add(key);
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
  galleryRoom.style.setProperty("--room-art", `url("${gallery.artwork}?v=353")`);

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

function populateParentWing() {
  resourceCategoryInput.innerHTML = data.galleries
    .map(g => `<option value="${g.id}">${g.name}</option>`).join("");

  parentResourceList.innerHTML = "";
  data.resources.forEach((resource,index) => {
    const gallery = data.galleries.find(g => g.id === resource.category);
    const row = document.createElement("article");
    row.className = "parent-list-item";
    row.innerHTML = `<div><h4>${resource.name}</h4>
      <p>${gallery?.name || resource.category} · ${resource.url}</p></div>
      <div class="parent-list-actions">
        <button type="button" data-edit-resource="${index}">Edit</button>
        <button type="button" data-delete-resource="${index}">Delete</button>
      </div>`;
    parentResourceList.appendChild(row);
  });

  parentGalleryList.innerHTML = "";
  data.galleries.forEach(gallery => {
    const count = data.resources.filter(r => r.category === gallery.id).length;
    const row = document.createElement("article");
    row.className = "parent-list-item";
    row.innerHTML = `<div><h4>${gallery.icon} ${gallery.name}</h4>
      <p>${count} resources · ID: ${gallery.id}</p></div>`;
    parentGalleryList.appendChild(row);
  });

  renderParentBookmarks();
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
    document.getElementById("parentResourcesPanel").hidden = target !== "resources";
    document.getElementById("parentGalleriesPanel").hidden = target !== "galleries";
    document.getElementById("parentBookmarksPanel").hidden = target !== "bookmarks";
    document.getElementById("parentMaintenancePanel").hidden = target !== "maintenance";
    if (target === "bookmarks") renderParentBookmarks();
    if (target === "maintenance") updateMaintenanceStatus();
  });
});

resourceEditorForm.addEventListener("submit", event => {
  event.preventDefault();
  const resource = {
    name: resourceNameInput.value.trim(),
    url: resourceUrlInput.value.trim(),
    category: resourceCategoryInput.value,
    description: resourceDescriptionInput.value.trim()
  };
  const index = resourceEditIndex.value;
  if (index === "") data.resources.push(resource);
  else data.resources[Number(index)] = resource;
  saveCustomData();
  resourceEditorForm.reset();
  resourceEditIndex.value = "";
  populateParentWing();
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
    window.scrollTo({top:0,behavior:"auto"});
  }
  if (del !== undefined && confirm("Delete this resource from the local Parent Wing data?")) {
    data.resources.splice(Number(del),1);
    saveCustomData();
    populateParentWing();
  }
});
cancelResourceEdit.addEventListener("click", () => {
  resourceEditorForm.reset();
  resourceEditIndex.value = "";
});

galleryEditorForm.addEventListener("submit", event => {
  event.preventDefault();
  let id = slugify(galleryNameInput.value);
  let suffix = 2;
  const original = id;
  while (data.galleries.some(g => g.id === id)) id = `${original}-${suffix++}`;

  data.galleries.push({
    id,
    name: galleryNameInput.value.trim(),
    icon: galleryIconInput.value.trim() || "✨",
    description: galleryDescriptionInput.value.trim(),
    roomName: galleryRoomNameInput.value.trim() || "Discovery Room",
    artwork: "assets/gallery-art-v353/futurescape.jpg"
  });
  saveCustomData();
  galleryEditorForm.reset();
  galleryIconInput.value = "✨";
  populateParentWing();
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
featuredButton.addEventListener("click", () => openGallery("space"));
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
