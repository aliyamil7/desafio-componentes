function footerComponents() {
  const footer = document.querySelector(".footer");

  footer.innerHTML = `
    <div class="footer-conteiner">
      <img src="./img/logoipsum-384.png" alt="Logo" class="logo" />

      <div class="footer__items-conteiner">
        <div class="footer__home-conteiner">
          <img src="./img/home.png" alt="Home" class="home-img" />
          <span class="home">Home</span>
        </div>

        <div class="footer__service-conteiner">
          <img src="./img/user.png" alt="Service" class="service-img" />
          <span class="service">Servicios</span>
        </div>

        <div class="footer__contact-conteiner">
          <img src="./img/phone.png" alt="Contact" class="contact-img" />
          <span class="contact">Contacto</span>
        </div>
      </div>

      <div class="footer__social-conteiner">
        <img src="./img/linkedin.png" alt="Linkedin" class="linkedin" />
        <img src="./img/github.png" alt="Github" class="github" />
        <img src="./img/twitter.png" alt="Twitter" class="twitter" />
      </div>

      <div class="footer__link-conteiner">
        <a href="https://apx.school" class="apx-link">
          ©2022 - https://apx.school
        </a>
      </div>
    </div>
  `;
}

footerComponents();
