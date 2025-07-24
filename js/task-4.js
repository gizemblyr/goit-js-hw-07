const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Sayfa yeniden yüklenmesin

  const {
    email,
    password
  } = event.currentTarget.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formObject = {
    email: emailValue,
    password: passwordValue
  };

  console.log(formObject);
  form.reset(); // Formu temizle
});
