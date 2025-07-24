const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", (event) => {
  const trimmedValue = event.target.value.trim();

  if (trimmedValue === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = trimmedValue;
  }
});
