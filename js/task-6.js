function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Elementleri oluştur
const controls = document.createElement("div");
controls.id = "controls";

const input = document.createElement("input");
input.type = "number";
input.min = "1";
input.max = "100";
input.step = "1";

const createBtn = document.createElement("button");
createBtn.textContent = "Create";
createBtn.setAttribute("data-create", "");

const destroyBtn = document.createElement("button");
destroyBtn.textContent = "Destroy";
destroyBtn.setAttribute("data-destroy", "");

const boxes = document.createElement("div");
boxes.id = "boxes";

// DOM'a ekle
controls.append(input, createBtn, destroyBtn);
document.body.append(controls, boxes);

// Fonksiyonlar
function createBoxes(amount) {
  destroyBoxes(); // öncekileri temizle

  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    size += 10;
  }

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

// Olaylar
createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  input.value = "";
});
