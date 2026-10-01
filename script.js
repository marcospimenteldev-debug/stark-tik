/*
  CONFIGURAÇÃO:
  1. Abre a página da tua empresa no Facebook.
  2. Copia o endereço da página e substitui FACEBOOK_PAGE_URL abaixo.
  3. Para usar um link direto do Messenger, podes definir, por exemplo:
     https://m.me/nomedeutilizador
  O utilizador deve ser o nome de utilizador real da página, não o nome de exibição.
*/

const FACEBOOK_PAGE_URL = "https://www.facebook.com/profile.php?id=61594869575438";
const MESSENGER_URL = "https://www.facebook.com/messages/t/61594869575438";


document.querySelectorAll(".messenger-link").forEach((link) => {
  link.href = MESSENGER_URL !== "https://m.me/" ? MESSENGER_URL : FACEBOOK_PAGE_URL;
  link.addEventListener("click", (event) => {
    if (link.href.endsWith("facebook.com/") || link.href.endsWith("m.me/")) {
      event.preventDefault();
      alert("Configura o link da tua página Facebook ou o nome de utilizador do Messenger no ficheiro script.js.");
    }
  });
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  menuButton.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
