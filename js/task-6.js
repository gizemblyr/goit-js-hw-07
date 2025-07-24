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

// Hepsini body'ye ekle
controls.append(input, createBtn, destroyBtn);
document.body.append(controls, boxes);

