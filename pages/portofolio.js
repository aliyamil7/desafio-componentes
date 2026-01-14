const SPACE_ID = "bgehjjcnmul6";
const ACCESS_TOKEN = "yCRZSokrr72QGjmZZkoxejUg5lSobpSfjgM3ZpfgwVU";
const API_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}`;

function loadCards(data) {
  // 1. Traemos TODOS los works
  const works = data.items
    .filter((item) => item.sys.contentType.sys.id === "worksPortfolio")
    .sort((a, b) => {
      return new Date(a.sys.createdAt) - new Date(b.sys.createdAt);
    });

  // 2. Traemos TODAS las cards del HTML
  const cards = document.querySelectorAll(".card");

  // 3. Recorremos las cards y asignamos contenido
  cards.forEach((card, index) => {
    const work = works[index];
    if (!work) return;

    const title = card.querySelector(".work__title");
    const paragraph = card.querySelector(".work__paragraph");

    title.textContent = work.fields.title;
    paragraph.textContent = work.fields.paragraph;
  });
}

function main() {
  fetch(API_URL).then((res) => {
    res.json().then((data) => {
      loadCards(data);
    });
  });
}

main();
