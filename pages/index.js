const SPACE_ID = "bgehjjcnmul6";
const ACCESS_TOKEN = "yCRZSokrr72QGjmZZkoxejUg5lSobpSfjgM3ZpfgwVU";
const API_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}`;

// ----------------- Welcome -----------------
function loadWelcome(data) {
  const welcome = data.items.find(
    (item) => item.sys.contentType.sys.id === "welcome"
  );

  if (!welcome) return;

  document.querySelector(".welcome__hello").textContent = welcome.fields.hello;
  document.querySelector(".welcome__text").textContent =
    welcome.fields.subtitle;
  document.querySelector(".welcome__name").textContent = welcome.fields.name;
}

// --------------- Presentation ----------------
function loadPresentation(data) {
  const presentation = data.items.find(
    (item) => item.sys.contentType.sys.id === "presentation"
  );

  if (!presentation) return;

  document.querySelector(".presentation__title").textContent =
    presentation.fields.title;
  document.querySelector(".presentation__paragraph").textContent =
    presentation.fields.parragraph;

  const imgUrl = presentation.fields.image
    ? presentation.fields.image.fields.file.url
    : "img/avatar-person.jpg";

  document.querySelector(".presentation__img").src = imgUrl;
}

// ---------------- Services / Cards ----------------
function loadServices(data) {
  const cardsData = data.items.filter(
    (item) => item.sys.contentType.sys.id === "services"
  );

  const cardElements = document.querySelectorAll(".cards .card");

  cardElements.forEach((cardEl) => {
    const cardData = cardsData.shift();
    if (!cardData) return;

    cardEl.querySelector(".card__title").textContent = cardData.fields.title;
    cardEl.querySelector(".card__paragraph").textContent =
      cardData.fields.parragraph;
  });
  document.querySelector(".cards").classList.add("loaded");
}

// ---------------- Main ----------------
function main() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      loadWelcome(data);
      loadPresentation(data);
      loadServices(data);
    })
    .catch((error) => {
      console.error("Error cargando datos:", error);
    });
}

main();
