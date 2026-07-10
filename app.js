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

let data = { galleries: [], resources: [] };

async function loadData() {
  try {
    const response = await fetch("resources.json");
    if (!response.ok) throw new Error(`Could not load resources.json (${response.status})`);
    data = await response.json();
    renderGalleries(data.galleries);
  } catch (error) {
    console.error(error);
    galleryGrid.innerHTML = `
      <p class="empty-state">
        Wonder Hall could not load its resource list. Please confirm that
        <strong>resources.json</strong> is in the same folder as index.html.
      </p>`;
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
    card.innerHTML = `
      <span class="gallery-card-icon" aria-hidden="true">${gallery.icon}</span>
      <h3>${gallery.name}</h3>
      <p>${gallery.description}</p>
      <span class="enter-label">Enter gallery →</span>
    `;
    card.addEventListener("click", () => openGallery(gallery.id));
    galleryGrid.appendChild(card);
  });
}

function openGallery(galleryId) {
  const gallery = data.galleries.find((item) => item.id === galleryId);
  if (!gallery) return;

  const matchingResources = data.resources.filter(
    (resource) => resource.category === galleryId
  );

  document.getElementById("galleryTitle").textContent = gallery.name;
  document.getElementById("galleryDescription").textContent = gallery.description;
  document.getElementById("galleryIcon").textContent = gallery.icon;

  resourceGrid.innerHTML = "";
  resourceEmptyState.hidden = matchingResources.length !== 0;

  matchingResources.forEach((resource) => {
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
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  galleryView.hidden = true;
  homeView.hidden = false;
  searchInput.value = "";
  renderGalleries(data.galleries);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

searchInput.addEventListener("input", (event) => {
  const term = event.target.value.trim().toLowerCase();

  if (!homeView.hidden) {
    const filtered = data.galleries.filter((gallery) =>
      `${gallery.name} ${gallery.description}`.toLowerCase().includes(term)
    );
    renderGalleries(filtered);
  }
});

backButton.addEventListener("click", showHome);
homeButton.addEventListener("click", showHome);

loadData();
