const os_theme = window.matchMedia("(prefers-color-scheme: light)");

handleColorTheme(os_theme.matches);

function handleColorTheme(condition) {
  body.classList.toggle("change", condition);
}

os_theme.addEventListener("change", () => handleColorTheme(os_theme.matches));

let form = document.getElementById("form");

form.onsubmit = (e) => {
  const formBtn = document.getElementById("formBtn");
  const loader = document.getElementById("loader");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  e.preventDefault();
  if (username.value === "") {
    username.focus();
  } else if (password.value === "") {
    password.focus();
  } else {
    formBtn.textContent = "";
    loader.style.display = "block";

    setTimeout(() => {
      form.submit();
    }, 2000);
  }
};

let error = document.getElementById("error");
let errorBtn = document.getElementById("errorBtn");

errorBtn.onclick = () => {
  error.style.display = "none";
};
