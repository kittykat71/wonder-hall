const galleryGrid = document.getElementById("galleryGrid");
const resourceGrid = document.getElementById("resourceGrid");
const homeView = document.getElementById("homeView");
const galleryView = document.getElementById("galleryView");
const favoritesView = document.getElementById("favoritesView");
const passportView = document.getElementById("passportView");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const resourceEmptyState = document.getElementById("resourceEmptyState");
const backButton = document.getElementById("backButton");
const brandHome = document.getElementById("brandHome");
const featuredButton = document.getElementById("featuredButton");
const favoritesButton = document.getElementById("favoritesButton");
const passportButton = document.getElementById("passportButton");
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

let data = { galleries: [], resources: [] };
let currentGalleryId = null;

const FAVORITES_KEY = "wonderHallFavorites";
const PASSPORT_KEY = "wonderHallPassport";

function getStoredSet(key) {
  try {
    return new Set(JSON.parse(localStorage.getItem(key) || "[]"));
  } catch {
    return new Set();
  }
}

function saveStoredSet(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]));
}

async function loadData() {
  try {
    const response = await fetch("resources.json?v=35", { cache: "no-store" });
    if (!response.ok) throw new Error(`Could not load resources.json (${response.status})`);
    data = await response.json();
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
      card.style.setProperty("--gallery-art", `url("${gallery.artwork}?v=35")`);
    }
    card.innerHTML = `
      <span class="gallery-card-icon" aria-hidden="true">${gallery.icon}</span>
      <h3>${gallery.name}</h3>
      <p>${gallery.description}</p>
      <span class="enter-label">Enter Gallery →</span>
    `;
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
  link.innerHTML = `
    <h3>${resource.name}</h3>
    <p>${resource.description}</p>
    <span>Visit resource ↗</span>
  `;
  link.style.color = "inherit";
  link.style.textDecoration = "none";

  const favorite = document.createElement("button");
  favorite.type = "button";
  favorite.className = "favorite-toggle";
  const key = resource.url;
  const updateLabel = () => {
    const active = favorites.has(key);
    favorite.classList.toggle("is-favorite", active);
    favorite.textContent = active ? "★ Saved to Favorites" : "☆ Add to Favorites";
  };
  updateLabel();

  favorite.addEventListener("click", () => {
    if (favorites.has(key)) favorites.delete(key);
    else favorites.add(key);
    saveStoredSet(FAVORITES_KEY, favorites);
    updateLabel();
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

  const galleries = data.galleries.filter((g) =>
    `${g.name} ${g.description} ${g.roomName || ""}`.toLowerCase().includes(q)
  );

  const resources = data.resources.filter((r) => {
    const gallery = data.galleries.find((g) => g.id === r.category);
    return `${r.name} ${r.description} ${gallery?.name || ""} ${gallery?.roomName || ""}`.toLowerCase().includes(q);
  });

  const total = galleries.length + resources.length;
  searchResultsSection.hidden = false;
  searchResultsGrid.innerHTML = "";
  searchEmptyState.hidden = total !== 0;
  searchResultCount.textContent = `${total} ${total === 1 ? "result" : "results"}`;

  galleries.forEach((gallery) => {
    const card = document.createElement("article");
    card.className = "resource-card search-result-card";
    card.innerHTML = `
      <span class="search-result-type">Gallery</span>
      <button type="button">
        <h3>${gallery.icon} ${gallery.name}</h3>
        <p>${gallery.description}</p>
        <span>Enter gallery →</span>
      </button>
    `;
    card.querySelector("button").addEventListener("click", () => openGallery(gallery.id));
    searchResultsGrid.appendChild(card);
  });

  resources.forEach((resource) => {
    searchResultsGrid.appendChild(createResourceCard(resource));
  });
}

function openGallery(id) {
  const gallery = data.galleries.find((g) => g.id === id);
  if (!gallery) return;

  currentGalleryId = id;
  const resources = data.resources.filter((r) => r.category === id);

  hideAllViews();
  galleryView.hidden = false;

  document.getElementById("galleryTitle").textContent = gallery.name;
  document.getElementById("galleryDescription").textContent = gallery.description;
  document.getElementById("galleryRoomName").textContent = gallery.roomName || "Gallery Room";
  document.getElementById("galleryIcon").textContent = gallery.icon;
  galleryRoom.style.setProperty("--room-art", `url("${gallery.artwork}?v=35")`);

  const passport = getStoredSet(PASSPORT_KEY);
  stampButton.textContent = passport.has(id) ? "✓ Passport Stamp Added" : "Add Passport Stamp";

  resourceGrid.innerHTML = "";
  resourceEmptyState.hidden = resources.length !== 0;
  resources.forEach((resource) => resourceGrid.appendChild(createResourceCard(resource)));

  searchInput.value = "";
  searchResultsSection.hidden = true;
  window.scrollTo({ top: 0, behavior: "auto" });
}

function showHome() {
  hideAllViews();
  homeView.hidden = false;
  searchInput.value = "";
  searchResultsSection.hidden = true;
  renderGalleries(data.galleries);
  window.scrollTo({ top: 0, behavior: "auto" });
}

function showFavorites() {
  hideAllViews();
  favoritesView.hidden = false;
  const favorites = getStoredSet(FAVORITES_KEY);
  const saved = data.resources.filter((resource) => favorites.has(resource.url));
  favoritesGrid.innerHTML = "";
  favoritesEmpty.hidden = saved.length !== 0;
  saved.forEach((resource) => favoritesGrid.appendChild(createResourceCard(resource)));
  window.scrollTo({ top: 0, behavior: "auto" });
}

function showPassport() {
  hideAllViews();
  passportView.hidden = false;
  const passport = getStoredSet(PASSPORT_KEY);
  const visited = data.galleries.filter((gallery) => passport.has(gallery.id));
  passportGrid.innerHTML = "";
  passportEmpty.hidden = visited.length !== 0;

  visited.forEach((gallery) => {
    const stamp = document.createElement("article");
    stamp.className = "passport-stamp";
    stamp.innerHTML = `
      <div class="stamp-icon">${gallery.icon}</div>
      <h3>${gallery.name}</h3>
      <p>${gallery.roomName || "Wonder Hall gallery"}</p>
    `;
    passportGrid.appendChild(stamp);
  });
  window.scrollTo({ top: 0, behavior: "auto" });
}

searchInput.addEventListener("input", (event) => {
  if (homeView.hidden) showHome();
  renderSearchResults(event.target.value);
});

backButton.addEventListener("click", showHome);
document.querySelectorAll(".collection-back").forEach((button) => button.addEventListener("click", showHome));
brandHome.addEventListener("click", (event) => {
  event.preventDefault();
  showHome();
});
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
