const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  // no user saved
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onclickLogIn);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  displayGreeting(savedUserName);
}

function displayGreeting(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onclickLogIn(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  displayGreeting(username);
}
