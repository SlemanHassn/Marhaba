let placeUser = document.querySelector("[name = 'username']");
let placePass = document.querySelector("[name = 'password']");

placeUser.addEventListener("focus", function () {
  placeUser.setAttribute("placeholder", "");
});

placeUser.addEventListener("blur", function () {
  placeUser.setAttribute("placeholder", "Enter your username/email");
});

placePass.addEventListener("focus", function () {
  placePass.setAttribute("placeholder", "");
});

placePass.addEventListener("blur", function () {
  placePass.setAttribute("placeholder", "Enter your password");
});

// active navbar
let navlink = document.querySelectorAll(".collapse ul .act a");
navlink.forEach((a) => {
  a.addEventListener("click", (e) => {
    navlink.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

let notif = document.querySelectorAll(".dropdown-menu .notif");
notif.forEach((a) => {
  a.addEventListener("click", (e) => {
 a.classList.add("active-field");  });
});



 