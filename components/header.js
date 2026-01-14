function headerComponents() {
  const header = document.querySelector(".header");

  header.innerHTML = `
    <div class="nav-conteiner">
      <a href="./index.html" class="logo-link">
        <img src="./img/logoipsum-384.png" alt="Logo" class="logo" />
      </a>

      <button class="nav-button" aria-label="Abrir menú">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav">
        <ul class="nav-list">
          <li><a href="./index.html">Home</a></li>
          <li><a href="./portofolio.html">Portfolio</a></li>
          <li><a href="./servicios.html">Servicios</a></li>
          <li><a href="./contacto.html">Contacto</a></li>
        </ul>
      </nav>
    </div>
  `;

  const navButton = header.querySelector(".nav-button");
  const nav = header.querySelector(".nav");

  navButton.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

headerComponents();
