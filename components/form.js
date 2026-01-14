function formContact() {
  const form = document.querySelector(".form");

  form.innerHTML = ` <div class="form-layout">
          <!-- BLOQUE IZQUIERDO -->
          <div class="form-text">
            <h2 class="form__title">Escribime</h2>
          </div>

          <!-- BLOQUE DERECHO -->
          <form class="form-fields">
            <div class="input-conteiner">
              <label for="name" class="form__label">Nombre</label>
              <input
                type="text"
                id="name"
                class="form__input"
                placeholder="Tu nombre"
              />
            </div>

            <div class="input-conteiner">
              <label for="email" class="form__label">Email</label>
              <input
                type="email"
                id="email"
                class="form__input"
                placeholder="tu@email.com"
              />
            </div>

            <div class="input-conteiner">
              <label for="message" class="form__label">Mensaje</label>
              <textarea id="message" class="form__textarea"></textarea>
            </div>

            <div class="form__button-conteiner">
              <button type="submit" class="form__button">
                Enviar
                <img src="./img/send.png" alt="send" />
              </button>
            </div>
          </form>
        </div>`;

  const formFields = document.querySelector(".form-fields");
  formFields.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = document.querySelector("#message").value;

    fetch("https://apx.school/api/utils/email-to-student", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        to: "yamil8787@gmail.com",
        message: message,
      }),
    });
  });
}
formContact();
