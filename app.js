const galleryGrid = document.getElementById("galleryGrid");
const resourceGrid = document.getElementById("resourceGrid");
const homeView = document.getElementById("homeView");
const galleryView = document.getElementById("galleryView");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const resourceEmptyState = document.getElementById("resourceEmptyState");
const backButton = document.getElementById("backButton");
const homeButton = document.getElementById("homeButton");
const brandHome = document.getElementById("brandHome");
const featuredButton = document.getElementById("featuredButton");
const searchResultsSection = document.getElementById("searchResultsSection");
const searchResultsGrid = document.getElementById("searchResultsGrid");
const searchResultCount = document.getElementById("searchResultCount");
const searchEmptyState = document.getElementById("searchEmptyState");

let data = { galleries: [], resources: [] };

async function loadData() {
  try {
    const response = await fetch("resources.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Could not load resources.json (${response.status})`);
    data = await response.json();
    renderGalleries(data.galleries);
  } catch (error) {
    console.error(error);
    galleryGrid.innerHTML = `<p class="empty-state">Wonder Hall could not load its resource list.</p>`;
  }
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
      card.style.setProperty("--gallery-art", `url("${gallery.artwork}?v=25")`);
      card.classList.add("has-artwork");
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

function renderSearchResults(term) {
  const q = term.trim().toLowerCase();
  renderGalleries(data.galleries);

  if (!q) {
    searchResultsSection.hidden = true;
    searchResultsGrid.innerHTML = "";
    return;
  }

  const galleries = data.galleries.filter((g) =>
    `${g.name} ${g.description}`.toLowerCase().includes(q)
  );

  const resources = data.resources.filter((r) => {
    const gallery = data.galleries.find((g) => g.id === r.category);
    return `${r.name} ${r.description} ${gallery?.name || ""}`.toLowerCase().includes(q);
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
    const gallery = data.galleries.find((g) => g.id === resource.category);
    const card = document.createElement("a");
    card.className = "resource-card search-result-card";
    card.href = resource.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.innerHTML = `
      <span class="search-result-type">${gallery?.name || "Resource"}</span>
      <h3>${resource.name}</h3>
      <p>${resource.description}</p>
      <span>Visit resource ↗</span>
    `;
    searchResultsGrid.appendChild(card);
  });
}

function openGallery(id) {
  const gallery = data.galleries.find((g) => g.id === id);
  if (!gallery) return;

  const resources = data.resources.filter((r) => r.category === id);
  document.getElementById("galleryTitle").textContent = gallery.name;
  document.getElementById("galleryDescription").textContent = gallery.description;
  document.getElementById("galleryIcon").textContent = gallery.icon;

  resourceGrid.innerHTML = "";
  resourceEmptyState.hidden = resources.length !== 0;

  resources.forEach((resource) => {
    const card = document.createElement("a");
    card.className = "resource-card";
    card.href = resource.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.innerHTML = `
      <h3>${resource.name}</h3>
      <p>${resource.description}</p>
      <span>Visit resource ↗</span>
    `;
    resourceGrid.appendChild(card);
  });

  homeView.hidden = true;
  galleryView.hidden = false;
  searchInput.value = "";
  searchResultsSection.hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  galleryView.hidden = true;
  homeView.hidden = false;
  searchInput.value = "";
  searchResultsSection.hidden = true;
  renderGalleries(data.galleries);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

searchInput.addEventListener("input", (event) => {
  if (homeView.hidden) {
    galleryView.hidden = true;
    homeView.hidden = false;
  }
  renderSearchResults(event.target.value);
});

backButton.addEventListener("click", showHome);
homeButton.addEventListener("click", showHome);
brandHome.addEventListener("click", (event) => {
  event.preventDefault();
  showHome();
});
featuredButton.addEventListener("click", () => openGallery("space"));

loadData();
