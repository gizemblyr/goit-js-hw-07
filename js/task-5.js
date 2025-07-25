function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");


button.addEventListener("click", () => {
  const newColor = getRandomHexColor(); // Yeni renk oluştur
  body.style.backgroundColor = newColor; // Bodynin arka planını değiştir
  span.textContent = newColor; // Renk kodunu span içine yaz
});