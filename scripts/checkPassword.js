const password1 = document.querySelector("#password");
const password2 = document.querySelector("#confirmPassword");
const message = document.querySelector("#formMessage");

password2.addEventListener("focusout", checkSame);

function checkSame() {
  if (password1.value !== password2.value) {
    message.textContent = "Password does not match. Please retry.";
    message.style.visibility = "show";
    password1.style.backgroundColor = "#fff0f3";
    password2.style.backgroundColor = "#fff0f3";
    password2.value = "";
    password1.value = "";
    password1.focus();
  } else {
    message.textContent = "";
    password2.style.backgroundColor = "#fff";
    password2.style.color = "#000";
    password1.style.backgroundColor = "#fff";
    password1.style.color = "#000";
  }
}
